import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from '../Modal';

import ProjectsActions from '../../store/ducks/projects';
import Button from '../../styles/components/Button';
import { Container, Project } from './styles';

class Projects extends Component {
  static propTypes = {
    openProjectModal: PropTypes.func.isRequired,
    closeProjectModal: PropTypes.func.isRequired,
    createProjectRequest: PropTypes.func.isRequired,
    getProjectsRequest: PropTypes.func.isRequired,
    activeTeam: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    projects: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string,
        }),
      ),
      projectModalOpen: PropTypes.bool,
    }).isRequired,
  };

  state = {
    newProject: '',
  };

  componentDidMount() {
    const { getProjectsRequest, activeTeam } = this.props;
    if (activeTeam) {
      getProjectsRequest();
    }
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateProject = (e) => {
    e.preventDefault();

    const { createProjectRequest } = this.props;
    const { newProject } = this.state;

    createProjectRequest(newProject);
  };

  render() {
    const {
      activeTeam, openProjectModal, closeProjectModal, projects,
    } = this.props;
    const { newProject } = this.state;
    if (!activeTeam) return null;
    return (
      <Container>
        <header>
          <h1>{activeTeam.name}</h1>
          <div>
            <Button onClick={openProjectModal}>+ Novo</Button>
            <Button onClick={() => {}}>Membros</Button>
          </div>
        </header>
        {projects.data.map(project => (
          <Project key={project.id}>
            <p>{project.title}</p>
          </Project>
        ))}
        {projects.projectModalOpen && (
          <Modal>
            <h1>Criar Projeto</h1>
            <form onSubmit={this.handleCreateProject}>
              <span>NOME</span>
              <input name="newProject" value={newProject} onChange={this.handleInputChange} />

              <Button size="big" type="submit">
                Salvar
              </Button>
              <Button onClick={closeProjectModal} size="small" color="gray">
                Canelar
              </Button>
            </form>
          </Modal>
        )}
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  activeTeam: state.teams.active,
  projects: state.projects,
});
const mapDispatchToProps = dispatch => bindActionCreators(ProjectsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Projects);

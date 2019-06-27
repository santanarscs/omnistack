import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MembersActions from '../../store/ducks/members';

import Modal from '../Modal';
import Button from '../../styles/components/Button';
import { MembersList } from './styles';

function Members({ closeMembersModal }) {
  return (
    <Modal size="big">
      <h1>Membros</h1>

      <form onSubmit={() => {}}>
        <MembersList>
          <li>
            <strong>Raphael Santana</strong>
          </li>
        </MembersList>
        <Button onClick={closeMembersModal} filled={false} color="gray">
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}

const mapDispatchToProps = dispatch => bindActionCreators(MembersActions, dispatch);
export default connect(
  null,
  mapDispatchToProps,
)(Members);

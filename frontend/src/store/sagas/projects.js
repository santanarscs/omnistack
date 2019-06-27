import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';
import ProjectsActions from '../ducks/projects';

export function* getProjects() {
  try {
    const response = yield call(api.get, '/projects');
    yield put(ProjectsActions.getProjectsSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
}

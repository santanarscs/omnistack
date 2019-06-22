import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import Routes from './routes';
import store from './store';

import GlobalSytles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <GlobalSytles />
        <Routes />
      </Fragment>
    </Provider>
  );
}

export default App;

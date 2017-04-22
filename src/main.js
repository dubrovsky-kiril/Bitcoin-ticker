import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Table from './components/Table/Table.react';

ReactDOM.render(
  <AppContainer>
    <Table feedName='BTC China' />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot)
  module.hot.accept()

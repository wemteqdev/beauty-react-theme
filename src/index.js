import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import * as serviceWorker from './serviceWorker';

import 'bootstrap/scss/bootstrap.scss';
import './styles/index.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();

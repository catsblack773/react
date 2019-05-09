import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import NotFound from './app/pages/NotFound';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={Layout}>
    <IndexRoute component={MainPage}/>
    
    <Route path="*" component={NotFound}/>
  </Route>
</Router>, document.getElementById('root'));
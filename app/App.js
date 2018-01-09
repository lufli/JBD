import React from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import SB from './core_component/sb';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={SB} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

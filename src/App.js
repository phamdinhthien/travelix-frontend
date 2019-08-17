import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Menu from './view/Menu/Menu';


class App extends Component {

  showMenu = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((r, index) => {
        return <Route
          path={r.path}
          exact={r.exact}
          component={r.component}
          key={index}
        />
      })
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <Switch>
            {this.showMenu(routes)};
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
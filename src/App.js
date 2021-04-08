import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './App.css';

import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';

class App extends Component {
  render() {
    return (
      <Router basename="/react-auth-ui/">

        <div className="App">

          <div className="App__Aside">
            

          </div>
          
          <div className="App__Form">
            <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Iniciar seccion</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Registrarse</NavLink>
              </div>

              <div className="titulo">
                Employment Information System (EIS)
              </div>

              <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Iniciar seccion</NavLink> o <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Registrarse</NavLink>
              </div>

              <Route exact path="/" component={SignUpForm}>
              </Route>

              <Route path="/sign-in" component={SignInForm}>
              </Route>

              <div className="texto">
                Employment Information System (EIS) es un sistema de informacion diseñado para brindar soporte a empleadores y aspirantes en el proceso de contratacion
                de personal calificado para realizar determinada labor.
              </div>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;

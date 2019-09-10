// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import { About } from './components/About';
import { Compare } from './components/Compare';
import MoviesList from './components/MoviesList';
import TvShows  from './components/TvShows';
import People  from './components/People';
import './styles/style.css';
import configureStore from './Store/config.js';

export const store = configureStore();

class App extends Component {
  constructor() {
    super();
  };

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul className="nav">
              <li>
                <Link to="/">TOP Movies</Link>
              </li>
              <li>
                <Link to="/tvShows">TOP TV Shows</Link>
              </li>
              <li>
                <Link to="/people/">People</Link>
              </li>
              <li>
                <Link to="/compare/">Who is The best?</Link>
              </li>
              <li>
                <Link to="/about/">Call me</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={MoviesList} />
          <Route path="/tvShows/" component={TvShows} />
          <Route path="/people/" component={People} />
          <Route path="/compare/" component={Compare} />
          <Route path="/about/" component={About} />
        </div>
      </Router>
      </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));

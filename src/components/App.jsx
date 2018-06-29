import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import About from './About';
import Component from './Component';
import haystack from '../assets/images/haystack.jpg';
import { Link } from 'react-router-dom';

function App(){

  return (
    <div>
      <style global jsx>{`
        body, html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        img {
          width: 50%;
          display: block;
          margin: 20px auto 0 auto;
        }
        .nav-links {
          display: flex;
          width: 50%;
          list-style: none;
          justify-content: space-evenly;
          margin: 15px auto 0;
        }
      `}</style>
      <img src={haystack}/>
      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/component"><li>Component</li></Link>
        <Link to="/about"><li>About</li></Link>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/component' component={Component} />
        <Route path='/about' component={About} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;

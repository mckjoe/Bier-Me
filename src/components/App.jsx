import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Home from './Home';
import Admin from './Admin';
import OnTap from './OnTap';
import Bottles from './Bottles';
import Snacks from './Snacks';
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
        .nav-links {
          display: flex;
          width: 50%;
          list-style: none;
          justify-content: space-evenly;
          margin: 15px auto 0;
        }
      `}</style>
      <ul className="nav-links">
        <Link to="/"><li>Home</li></Link>
        <Link to="/OnTap"><li>OnTap</li></Link>
        <Link to="/bottles"><li>Bottles</li></Link>
        <Link to="/snacks"><li>Snacks</li></Link>
        <Link to="/admin"><li>Admin</li></Link>
      </ul>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/OnTap' component={OnTap} />
        <Route path='/bottles' component={Bottles} />
        <Route path='/snacks' component={Snacks} />
        <Route path='/admin' component={Admin} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
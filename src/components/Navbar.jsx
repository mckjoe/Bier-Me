import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/nav-logo.jpeg';

function Navbar() {
  return(
    <div>
      <style jsx>{`
        .flexed {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid gray;
        }
        .nav-bar {
          display: flex;
          width: 50%;
          list-style: none;
          justify-content: space-evenly;
          margin: 15px auto 0;
          padding-bottom: 10px;
          padding-left: 0;
        }
        .logo {
          height: 50px;
          margin-left: 50px;
        }
        @media (max-width:600px) {
          .flexed {
            flex-direction: column;
          }
          .logo {
            display: block;
            margin: 0 auto;
          }
        }
      `}</style>
      <div className="flexed">
        <div>
          <img className="logo" src={logo}/>
        </div>
        <ul className="nav-bar">
          <Link style={{color: 'black', textDecoration: 'none'}}to="/"><li>Home</li></Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/OnTap"><li>OnTap</li></Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/bottles"><li>Bottles</li></Link>
          <Link style={{color: 'black', textDecoration: 'none'}} to="/snacks"><li>Snacks</li></Link>
          <Link style={{color: 'black',textDecoration: 'none'}} to="/admin"><li>Admin</li></Link>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;

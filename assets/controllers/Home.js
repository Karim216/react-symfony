// ./assets/js/components/Home.js
    
import React, {Component} from 'react';
import {Routes, Route, Switch, Redirect, Link, withRouter} from 'react-router-dom';
import Users from './Users';
import Posts from './Posts';
    
class Home extends Component {
    
    render() {
        return (
           <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> Projet React Symfony </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/posts"}> Articles </Link>
                           </li>
    
                           <li className="nav-item">
                               <Link className={"nav-link"} to={"/users"}> Utilisateurs </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Routes>
                   <Route exact from="/" to="/users" />
                   <Route path="/users" element={<Users />} />
                   <Route path="/posts" element={<Posts />} />
               </Routes>
           </div>
        )
    }
}
    
export default Home;
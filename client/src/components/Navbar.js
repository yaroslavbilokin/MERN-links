import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const Navbar = () => {
    const history = useHistory();
    const auth = useContext(AuthContext);
    const logoutHandler = event => {
        event.preventDefault();
        auth.logout();
        history.push('/');
    }

    return (
        <nav>
            <div class="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><NavLink href="/create">Create</NavLink></li>
                    <li><NavLink href="/links">Create</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
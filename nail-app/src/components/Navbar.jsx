import React from 'react';
import { NavBar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <ul>
                <li><NavLink href="/">Home</NavLink></li>
                <NavLink href="/favorites">Favorites</NavLink>
                <NavLink href="/popular">Popular Items</NavLink>
                <NavLink href="/sale">Sale Items</NavLink>
            </ul>
        </nav>
    )

}

export default NavBar();
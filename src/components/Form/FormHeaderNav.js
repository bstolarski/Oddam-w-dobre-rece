import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";

export class FormHeaderNav extends Component {
    render () {
        return (
            <nav className='header-nav'>
                <div className='header-account'>
                    <span>Cześć! -------</span>
                    <span><Link to="/oddaj-rzeczy">Oddaj rzeczy</Link></span>
                    <span><Link to="/logout">Wyloguj</Link></span>
                </div>
            </nav>
        )
    }
}
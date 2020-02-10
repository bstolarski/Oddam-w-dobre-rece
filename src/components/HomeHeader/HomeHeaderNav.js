import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";
import {HomeHeaderMenu} from "./HomeHeaderMenu";

export class HomeHeaderNav extends Component {
    render () {
        return (
            <nav className='header-nav'>
                <div>
                    <span className='header-log'><Link to="/login">Zaloguj</Link></span>
                    <span className='header-register'><Link to="/Register">Załóż konto</Link></span>
                </div>
                <HomeHeaderMenu/>
            </nav>
        )
    }
}
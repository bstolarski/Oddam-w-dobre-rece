import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";
import {HomeHeaderMenu} from "./HomeHeaderMenu";

export class HomeHeaderNav extends Component {
    render () {
        return (
            <nav className='header-nav'>
                <div className='header-account'>
                    <span><Link to="/login">Zaloguj</Link></span>
                    <span><Link to="/Register">Załóż konto</Link></span>
                </div>
                <HomeHeaderMenu/>
            </nav>
        )
    }
}
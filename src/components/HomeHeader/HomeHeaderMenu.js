import {Component} from "react";
import React from "react";
import {Link} from "react-scroll";
import {NavLink} from "react-router-dom";

export class HomeHeaderMenu extends Component {
    render() {
        return (
            <ul className='header-menu'>
                <li><NavLink to="/">Start</NavLink></li>
                <li><Link
                    activeClass="active"
                    to="whats"
                    spy={true}
                    smooth={true}
                    duration={500}>O co chodzi?</Link></li>
                <li><Link
                    activeClass="active"
                    to="aboutUs"
                    spy={true}
                    smooth={true}
                    duration={500}>O nas</Link></li>
                <li><Link
                    activeClass="active"
                    to="fundation"
                    spy={true}
                    smooth={true}
                    offset={-50}
                    duration={500}>Fundacja i organizacje</Link></li>
                <li><Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}>Kontakt</Link></li>
            </ul>
        )
    }
}
import {Component} from "react";
import React from "react";
import {Link} from "react-scroll";

export class HomeHeaderMenu extends Component {
    render() {
        return (
            <ul className='header-menu'>
                <li><Link
                    activeClass="active"
                    to="start"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Start</Link></li>
                <li><Link
                    activeClass="active"
                    to="whats"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>O co chodzi?</Link></li>
                <li><Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>O nas</Link></li>
                <li><Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Fundacja i organizacje</Link></li>
                <li><Link
                    activeClass="active"
                    to=""
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>Kontakt</Link></li>
            </ul>
        )
    }
}
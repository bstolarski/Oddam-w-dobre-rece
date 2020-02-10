import {Component} from "react";
import React from "react";
import {Link} from "react-router-dom";
// import { animateScroll as scroll } from "react-scroll";

export class HomeHeaderMenu extends Component {
    render () {
        return (
            <ul className='header-menu'>
                <li><Link>Start</Link></li>
                <li><Link>O co chodzi?</Link></li>
                <li><Link>O nas</Link></li>
                <li><Link>Fundacja i organizacje</Link></li>
                <li><Link>Kontakt</Link></li>
            </ul>
        )
    }
}
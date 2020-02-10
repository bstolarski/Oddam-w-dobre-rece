import {Component} from "react";
import React from "react";
// import {Link} from "react-router-dom";
// import * as Scroll from 'react-scroll';
// import { animateScroll as scroll } from "react-scroll";

export class HomeHeaderMenu extends Component {
    render () {
        return (
            <ul className='header-menu'>
                <li>Start</li>
                <li>O co chodzi?</li>
                <li>O nas</li>
                <li>Fundacja i organizacje</li>
                <li>Kontakt</li>
            </ul>
        )
    }
}
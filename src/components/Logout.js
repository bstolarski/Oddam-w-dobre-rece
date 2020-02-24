import React, {Component} from 'react';
import {HomeHeaderNav} from "./HomeHeader/HomeHeaderNav";
import {Link} from "react-router-dom";

export default class Logout extends Component {

    render() {
        return (
                <div className='container'>
                    <HomeHeaderNav/>
                    <section className='logout-container'>
                        <h2>Wylogowanie nastąpiło <br/>pomyślnie!</h2>
                        <div className='header-decoration'/>
                        <Link to='/'>Strona Główna</Link>
                    </section>
                </div>
        )
    }
}
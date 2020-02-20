import {Component} from "react";
import React from 'react';
import {Link} from 'react-router-dom';

export class FormHeaderMain extends Component {
    render() {
        return (
            <div className='form-header-main-content'>
                <div className='form-header-title'>
                    <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                    <div className='header-decoration'/>
                    <h2>Wystarczą 4 proste kroki:</h2>
                </div>
                <div className='form-header-box'>
                    <div>1 <br/>Wybierz <br/>rzeczy</div>
                    <div>2 <br/>Spakuj je <br/>w worki</div>
                    <div>3 <br/>Wybierz <br/>fundację</div>
                    <div>4 <br/>Zamów <br/>kuriera</div>
                </div>
            </div>
        );
    }
}
import {Component} from "react";
import React from 'react';

export class FormHeaderMain extends Component {
    render() {
        return (
            <div className='form-header-main-content'>
                <div className='form-header-title'>
                    <h1>Oddaj rzeczy, których już nie chcesz <br/> POTRZEBUJĄCYM</h1>
                    <div className='header-decoration'/>
                    <h2>Wystarczą 4 proste kroki:</h2>
                </div>
                <div className='form-header-steps'>
                    <div className='form-header-steps-box'>
                        <div>
                            <h3>1</h3><p><br/>Wybierz <br/>rzeczy</p>
                        </div>
                    </div>
                    <div className='form-header-steps-box'>
                        <div>
                            <h3>2</h3><p><br/>Spakuj je <br/>w worki</p>
                        </div>
                    </div>
                    <div className='form-header-steps-box'>
                        <div>
                            <h3>3</h3><p><br/>Wybierz <br/>fundację</p>
                        </div>
                    </div>
                    <div className='form-header-steps-box'>
                        <div>
                            <h3>4</h3><p><br/>Zamów <br/>kuriera</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
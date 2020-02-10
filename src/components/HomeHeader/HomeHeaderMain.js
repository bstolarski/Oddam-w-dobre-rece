import {Component} from "react";
import React from 'react';

// import { Link } from 'react-router-dom';

export class HomeHeaderMain extends Component {
    render() {
        return (
            <div className='header-main-content'>
                <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div className='header-decoration'> </div>
                <div className='header-nav-content'>
                    <p>ODDAJ <br/> RZECZY</p>
                    <p>ZORGANIZUJ <br/> ZBIÓRKĘ</p>
                </div>
            </div>
        );
    }
}
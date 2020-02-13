import {Component} from "react";
import React from 'react';
import {Link} from 'react-router-dom';

export class HomeHeaderMain extends Component {
    render() {
        return (
            <div className='header-main-content'>
                <div className='header-title'>
                    <h1>Zacznij pomagać! <br/> Oddaj niechciane rzeczy w zaufane ręce</h1>
                    <div className='header-decoration'/>
                </div>
                <div className='header-nav-content'>
                    <div><Link to='login'>ODDAJ RZECZY</Link></div>
                    <div><Link to='login'>ZORGANIZUJ ZBIÓRKĘ</Link></div>
                </div>
            </div>
        );
    }
}
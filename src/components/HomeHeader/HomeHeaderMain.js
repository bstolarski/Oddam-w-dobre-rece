import { Component } from "react";
import React from 'react';
import { Link } from 'react-router-dom';

export class HomeHeaderMain extends Component {
    render() {
        return (
            <div className={'header-main-content'}>
                <h1>Zacznij pomagać! <br /> Oddaj niechciane rzeczy w zaufane ręce</h1>
                <div> </div>
                <div>
                    <Link>ODDAJ <br /> RZECZY</Link>
                    <Link>ZORGANIZUJ ZBIÓRKĘ</Link>
                </div>
            </div>
        );
    }
}
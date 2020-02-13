import {Component} from "react";
import React from 'react';

export class HomeThreeColumns extends Component {
    render() {
        return (
            <section className='three-columns-container'>
                <div className='three-columns-box'>
                    <h2>10</h2>
                    <h3>ODDANYCH WORKÓW</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='three-columns-box'>
                    <h2>5</h2>
                    <h3>WSPARTYCH ORGANIZACJI</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
                <div className='three-columns-box'>
                    <h2>7</h2>
                    <h3>ZORGANIZOWANYCH ZBIÓREK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</p>
                </div>
            </section>
        );
    }
}
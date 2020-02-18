import React, {Component} from 'react';
import {HomeHeaderNav} from "./HomeHeaderNav";
import {HomeHeaderMain} from "./HomeHeaderMain";

export default class HomeHeader extends Component {
    render() {
        return (
            <header name='start' className='header-container' id={'start-page'}>
                <div className='header-img'/>
                <div className='header-nav-and-heading'>
                    <HomeHeaderNav/>
                    <HomeHeaderMain/>
                </div>
            </header>
        )
    }
}
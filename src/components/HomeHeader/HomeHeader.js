import React, {Component} from 'react';
import {HomeHeaderNav} from "./HomeHeaderNav";
import {HomeHeaderMain} from "./HomeHeaderMain";

export default class HomeHeader extends Component {
    render() {
        return (
            <header className='container' id={'start-page'}>
                <section className={'header-main'} >
                    <div className={'header-img'}> </div>
                    <div className={'header-nav-and-heading'}>
                        <HomeHeaderNav/>
                        <HomeHeaderMain/>
                    </div>
                </section>
            </header>
        )
    }
}
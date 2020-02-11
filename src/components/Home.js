import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeader/>
                    <HomeThreeColumns/>
                </div>
            </>
        )
    }
}
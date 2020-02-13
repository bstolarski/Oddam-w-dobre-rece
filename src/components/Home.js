import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps/HomeSimpleSteps";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeader/>
                    <HomeThreeColumns id='start' name='start'/>
                    <HomeSimpleSteps id='whats' name='whats'/>
                </div>
            </>
        )
    }
}
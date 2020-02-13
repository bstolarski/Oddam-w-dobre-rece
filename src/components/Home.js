import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps/HomeSimpleSteps";
import {HomeAboutUs} from "./HomeAboutUs/HomeAboutUs";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeader/>
                    <HomeThreeColumns id='start' name='start'/>
                    <HomeSimpleSteps id='whats' name='whats'/>
                    <HomeAboutUs id='about' name='about'/>
                </div>
            </>
        )
    }
}
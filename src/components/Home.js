import React, {Component} from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import {HomeThreeColumns} from "./HomeThreeColumns/HomeThreeColumns";
import {HomeSimpleSteps} from "./HomeSimpleSteps/HomeSimpleSteps";
import {HomeAboutUs} from "./HomeAboutUs/HomeAboutUs";
import {HomeWhoWeHelp} from "./HomeWhoWeHelp/HomeWhoWeHelp";
import {HomeContact} from "./HomeContact/HomeContact";
import {HomeFooter} from "./HomeFooter/HomeFooter";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeader/>
                    <HomeThreeColumns id='start' name='start'/>
                    <HomeSimpleSteps id='whats' name='whats'/>
                    <HomeAboutUs/>
                    <HomeWhoWeHelp id='whowehelp' name='whowehelp'/>
                    <HomeContact/>
                    <HomeFooter/>
                </div>
            </>
        )
    }
}
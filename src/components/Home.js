import React, {Component} from 'react';
// import {NavLink} from "react-router-dom";
import HomeHeader from "./HomeHeader/HomeHeader";

export default class Home extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeader/>
                </div>
            </>
        )
    }
}
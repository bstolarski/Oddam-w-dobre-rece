import React, {Component} from 'react';
import {HomeHeaderMenu} from "../HomeHeader/HomeHeaderMenu";
import {FormHeaderNav} from "./FormHeaderNav";
import {FormHeaderMain} from "./FormHeaderMain";

export default class FormHeader extends Component {
    render() {
        return (
            <header name='start' className='form-header-container' id={'start-page'}>
                <div className='form-header-img'/>
                <div className='form-header-nav'>
                    <FormHeaderNav/>
                    <HomeHeaderMenu/>
                    <FormHeaderMain/>
                </div>
            </header>
        )
    }
}
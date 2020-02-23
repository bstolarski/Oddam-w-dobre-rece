import React, {Component} from 'react';
import {HomeHeaderMenu} from "../HomeHeader/HomeHeaderMenu";
import {FormHeaderNav} from "./FormHeaderNav";
import {FormHeaderMain} from "./FormHeaderMain";
import FormHeaderImportant from "./FormHeaderImportant";

export default class FormHeader extends Component {
    render() {
        return (
            <header className="form-header">
                <div name='start' className='form-header-container' id='start-page'>
                    <div className='form-header-img'/>
                    <div className='form-header-nav'>
                        <FormHeaderNav/>
                        <HomeHeaderMenu/>
                        <FormHeaderMain/>
                    </div>
                </div>
                <FormHeaderImportant/>
            </header>
        )
    }
}
import React, {Component} from 'react';
import {WhoWeHelpChoose} from "./WhoWeHelpChoose";

export class HomeWhoWeHelp extends Component {
    state = {
        currentChooseMain: "Fundation",
    };
    handleChangeMain = (choose) => {
        this.setState({
            currentChooseMain: choose
        })
    };
    render() {
        return (
            <>
                <section className='who-we-help-container'>
                    <h2>Komu pomagamy?</h2>
                    <div className='header-decoration'/>
                    <WhoWeHelpChoose eventClick={this.handleChangeMain}/>
                </section>
            </>
        )
    }
}
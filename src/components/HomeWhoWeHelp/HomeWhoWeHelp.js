import React, {Component} from 'react';
import {WhoWeHelpChoose} from "./WhoWeHelpChoose";
import {WhoWeHelpMain} from "./WhoWeHelpMain";

export class HomeWhoWeHelp extends Component {
    state = {
        currentChooseMain: "Fundation"
    };


    handleChangeMain = (choose, pages) => {
        this.setState({
            currentChooseMain: choose,
            pages: pages
        })
    };

    render() {
        return (
            <section className='who-we-help-container'>
                <h2>Komu pomagamy?</h2>
                <div className='header-decoration'/>
                <WhoWeHelpChoose eventClick={this.handleChangeMain}/>
                <WhoWeHelpMain currentMain={this.state.currentChooseMain}/>
            </section>
        )
    }
}
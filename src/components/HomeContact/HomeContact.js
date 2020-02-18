import React, {Component} from 'react';
import {HomeFooter} from "../HomeFooter/HomeFooter";
import SendFormRestApiServices from "../services/SendFormRestApiServices";

export class HomeContact extends Component {
    state = {
        name: "",
        email: '',
        message: ''
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();

    };

    render() {
        return (
            <section className='contact-container'>
                <div className='contact-container-bg'>
                    <div className="contact-form-content">
                        <h2 className="contact-form-title">Skontaktuj się z nami</h2>
                        <div className="header-decoration"/>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-inputs">
                                <label className='form-inputs-label'>Wpisz swoje imię:
                                    <input onInput={this.handleInput} placeholder='Krzysztof' type="text" id="name"
                                           name="name" value={this.state.name}/>
                                </label>
                                <label className='form-inputs-label'>Wpisz swój email:
                                    <input onInput={this.handleInput} placeholder='abc@xyz.pl'
                                           type="email" id="email" name="email"
                                           value={this.state.email}/>
                                </label>
                            </div>
                            <label className='form-text-area-label'>Wpisz swoją wiadomość:
                                <textarea onInput={this.handleInput} id="message"
                                          name="message" rows="4" cols="50"
                                          value={this.state.message}
                                          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.'
                                />
                            </label>
                            <button className='form-submit' type="submit" value="Wyślij">Wyślij</button>
                        </form>
                    </div>
                    <HomeFooter/>
                </div>
            </section>
        )
    }
}
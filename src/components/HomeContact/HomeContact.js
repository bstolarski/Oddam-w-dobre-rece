import React, {Component} from 'react';
import {HomeFooter} from "../HomeFooter/HomeFooter";
import SendFormRestApiServices from "../services/SendFormRestApiServices";

export class HomeContact extends Component {
    state = {
        name: "",
        email: '',
        message: '',
        nameError: false,
        emailError: false,
        messageError: false,
        correctData: false
    };

    handleInput = e => {
        if (e.target.name === 'name') {
            this.setState({
                name: e.target.value
            })
        } else if (e.target.name === 'email') {
            this.setState({
                email: e.target.value
            })
        } else if (e.target.name === 'message') {
            this.setState({
                message: e.target.value
            });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const inputValidation = {
            name: /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]*$/,
            email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,}))$/,
        };
        if (!inputValidation.name.test(this.state.name)) {
            this.setState({
                nameError: true
            })
        } else {
            this.setState({
                nameError: false
            })
        }
        if (!inputValidation.email.test(this.state.email)) {
            this.setState({
                emailError: true
            })
        } else {
            this.setState({
                emailError: false
            })
        }
        if (this.state.message.length < 120) {
            this.setState({
                messageError: true
            })
        } else {
            this.setState({
                messageError: false
            })
        }
        const data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        };
        if (!this.state.nameError || !this.state.emailError || !this.state.messageError) {
            SendFormRestApiServices(data);
        }
    };

    render() {
        return (
            <section name='contact' className='contact-container'>
                <div className='contact-container-bg'>
                    <div className="contact-form-content">
                        <h2 className="contact-form-title">Skontaktuj się z nami</h2>
                        <div className="header-decoration"/>
                        {this.state.correctData ?
                            <p className='contact-correct-form'>Formularz został wysłany!</p> : ''}
                        <form className="contact-form" onSubmit={this.handleSubmit}>
                            <div className="form-inputs">
                                <label className='form-inputs-label'>Wpisz swoje imię:
                                    <input onInput={this.handleInput} placeholder='Krzysztof' type="text" id="name"
                                           name="name" value={this.state.name}/>
                                    {this.state.nameError ?
                                        <span className='contact-error'>Imię powinno być jednym wyrazem!</span> : ''}
                                </label>
                                <label className='form-inputs-label'>Wpisz swój email:
                                    <input onInput={this.handleInput} placeholder='abc@xyz.pl'
                                           type="text" id="email" name="email"
                                           value={this.state.email}/>
                                    {this.state.emailError ?
                                        <span className='contact-error'>Podany email jest nieprawidłowy!</span> : ''}
                                </label>
                            </div>
                            <label className='form-inputs-label'>Wpisz swoją wiadomość:
                                <textarea onInput={this.handleInput} id="message"
                                          name="message" rows="4" cols="50"
                                          value={this.state.message}
                                          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                           sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                                            ut aliquip ex ea commodo consequat.'
                                />
                                {this.state.messageError ?
                                    <span
                                        className='contact-error'>Wiadomość powinna mieć conajmniej 120 znaków!</span> : ''}
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
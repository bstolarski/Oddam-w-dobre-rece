import React, {Component} from 'react';


export class HomeContact extends Component {

    render() {
        return (
            <section className='contact-container'>
                    <div className="contact-form-content">
                        <h2 className="contact-form-title">Skontaktuj się z nami</h2>
                        <div className="header-decoration"/>
                        <form className="form" onSubmit={this.handleSubmit}>
                            <div className="form-inputs">
                                <label className='form-inputs-label'>Wpisz swoje imię:
                                    <input onInput={this.handleInput} placeholder='Krzysztof' type="text" id="name"
                                           name="name"/>
                                </label>
                                <label className='form-inputs-label'>Wpisz swój email:
                                    <input onInput={this.handleInput} placeholder='abc@xyz.pl'
                                           type="email"
                                           id="email" name="email"/>
                                </label>
                            </div>
                            <label className='form-text-area-label'>Wpisz swoją wiadomość:
                                <textarea onInput={this.handleInput}
                                          id="message"
                                          rows="4"
                                          cols="50"
                                          placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                                />
                            </label>
                            <button className='form-submit' type="submit" value="Wyślij">Wyślij</button>
                        </form>
                    </div>
            </section>
        )
    }
}
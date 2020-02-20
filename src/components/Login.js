import React, {Component} from 'react';
import {HomeHeaderNav} from "./HomeHeader/HomeHeaderNav";
import {Link} from "react-router-dom";

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: '',
        emailError: false,
        passwordError: false,
        passwordRepeatError: false
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        const inputValidation = {
            email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            password: /^(?=.{6,})$/
        };
        if (!inputValidation.email.test(this.state.email)) {
            this.setState({
                emailError: true
            })
        } else {
            this.setState({
                emailError: false
            })
        }
        if (this.state.password.length < 6) {
            this.setState({
                passwordError: true
            })
        } else {
            this.setState({
                passwordError: false
            })
        }
        if (this.state.passwordRepeat.length < 6 || this.state.passwordRepeat !== this.state.password) {
            this.setState({
                passwordRepeatError: true
            })
        } else {
            this.setState({
                passwordRepeatError: false
            })
        }
    };

    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeaderNav/>
                    <section className='login-container'>
                        <h2 className='login-title'>{this.props.title}</h2>
                        <div className='header-decoration'/>
                        <form className='login-form' onSubmit={this.handleSubmit}>
                            <div className='login-form-content'>
                                <label className='login-input-label'>
                                    Email
                                    <input type="text" name="email" value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                    {this.state.emailError ?
                                        <span className='contact-error'>Podany email jest nieprawidłowy</span> : ''}
                                </label>
                                <label className='login-input-label'>
                                    Hasło
                                    <input type="password" name="password" value={this.state.password}
                                           onChange={this.handleInputChange}/>
                                    {this.state.passwordError ?
                                        <span className='contact-error'>Podane hasło jest za krótkie</span> : ''}
                                </label>
                                {this.props.repeatPassword ?
                                    <label className='login-input-label'>
                                        Powtórz hasło
                                        <input type="password" name="passwordRepeat" value={this.state.passwordRepeat}
                                               onChange={this.handleInputChange}/>
                                        {this.state.passwordRepeatError ?
                                            <span className='contact-error'>Podane hasło jest niezgodne</span> : ''}
                                    </label> : ''}
                            </div>
                            <div className='login-btn-content'>
                                {this.props.repeatPassword ?
                                    <>
                                        <Link exact to='/login'>Zaloguj się</Link>
                                        <button type='submit'>Załóż konto</button>
                                    </>
                                    :
                                    <>
                                        <button type='submit'>Zaloguj się</button>
                                        <Link exact to='/Register'>Załóż konto</Link>
                                    </>}
                            </div>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}
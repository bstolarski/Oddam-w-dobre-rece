import React, {Component} from 'react';
import {HomeHeaderNav} from "./HomeHeader/HomeHeaderNav";
import {Link} from "react-router-dom";

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        passwordRepeat: ''
    };

    handleInputChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render() {
        return (
            <>
                <div className='container'>
                    <HomeHeaderNav/>
                    <section className='login-container'>
                        <h2 className='login-title'>{this.props.title}</h2>
                        <div className='header-decoration'/>
                        <form className='login-form'>
                            <div className='login-form-content'>
                                <label className='login-input-label'>
                                    Email
                                    <input type="text" name="email" value={this.state.email}
                                           onChange={this.handleInputChange}/>
                                </label>
                                <label className='login-input-label'>
                                    Hasło
                                    <input type="password" name="password" value={this.state.password}
                                           onChange={this.handleInputChange}/>
                                </label>
                                {this.props.repeatPassword ?
                                    <label className='login-input-label'>
                                        Powtórz hasło
                                        <input type="password" name="passwordRepeat" value={this.state.passwordRepeat}
                                               onChange={this.handleInputChange}/>
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
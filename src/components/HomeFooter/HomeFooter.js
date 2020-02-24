import React, {Component} from 'react';
import instagram from '../../assets/Instagram.svg'
import facebook from '../../assets/Facebook.svg'
import {Link} from "react-router-dom";

export class HomeFooter extends Component {

    render() {
        return (
            <footer className='home-footer'>
                <p className='footer-copyright'>Copyright by Coders Lab</p>
                <div className="footer-socials">
                    <Link to=''><img className='footer-socials-fb' src={facebook} alt='facebook'/></Link>
                    <Link to=''><img className='footer-socials-ig' src={instagram} alt='instagram'/></Link>
                </div>
            </footer>
        )
    }
}
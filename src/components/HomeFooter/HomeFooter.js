import React, {Component} from 'react';
import instagram from '../../assets/Instagram.svg'
import facebook from '../../assets/Facebook.svg'

export class HomeFooter extends Component {

    render() {
        return (
            <footer className='home-footer'>
                <p className='footer-copyright'>Copyright by Coders Lab</p>
                <div className="footer-socials">
                    <a href='#'><img className='footer-socials-fb' src={facebook} alt='facebook'/></a>
                    <a href='#'><img className='footer-socials-ig' src={instagram} alt='instagram'/></a>
                </div>
            </footer>
        )
    }
}
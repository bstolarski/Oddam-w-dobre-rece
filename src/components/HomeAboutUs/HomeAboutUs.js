import React, {Component} from 'react';
import Signature from '../../assets/Signature.svg';

export class HomeAboutUs extends Component {
    render() {
        return (
            <section name='aboutUs' className='about-us-container'>
                <div className='about-us-content'>
                    <div className='about-us-box'>
                        <h2>O nas</h2>
                        <div className='header-decoration'/>
                        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                            Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                        <img src={Signature} alt='signature'/>
                    </div>
                </div>
                <div className='about-us-img'/>
            </section>
        )
    }
}
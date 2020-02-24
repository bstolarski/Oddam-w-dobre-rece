import {Component} from "react";
import React from 'react';
import {Link} from 'react-router-dom';
import IconTShirt from '../../assets/Icon-1.svg'
import IconBag from '../../assets/Icon-2.svg'
import IconMagnifier from '../../assets/Icon-3.svg'
import IconRecycling from '../../assets/Icon-4.svg'

export class HomeSimpleSteps extends Component {
    render() {
        return (
            <section className='simple-steps-container'>
                <h2>Wystarczą 4 proste kroki</h2>
                <div className='header-decoration'/>
                <div className='simple-steps-main-bg'>
                    <div className='simple-steps-main'>
                        <div className='simple-steps-main-box'>
                            <img src={IconTShirt} alt='T-shirt'/>
                            <h3>Wybierz rzeczy</h3>
                            <hr/>
                            <p>ubrania, zabawki,<br/> sprzęt i inne</p>
                        </div>
                        <div className='simple-steps-main-box'>
                            <img src={IconBag} alt='Bag'/>
                            <h3>Spakuj je</h3>
                            <hr/>
                            <p>skorzystaj z<br/> worków na śmieci</p>
                        </div>
                        <div className='simple-steps-main-box'>
                            <img src={IconMagnifier} alt='Magnifier'/>
                            <h3>Zdecyduj komu <br/>chcesz pomóc</h3>
                            <hr/>
                            <p>wybierz zaufane <br/> miejsce</p>
                        </div>
                        <div className='simple-steps-main-box'>
                            <img src={IconRecycling} alt='Recycling'/>
                            <h3>Zamów kuriera</h3>
                            <hr/>
                            <p>kurier przyjedzie<br/> w dogodnym terminie</p>
                        </div>
                    </div>
                </div>
                <button><Link to='login'>ODDAJ <br/>RZECZY</Link></button>
            </section>
        );
    }
}
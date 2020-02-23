import React, {Component} from 'react';

export default class GiveStuffStep1 extends Component {

    render() {
        return (
            <div className='give-stuff-step-container'>
                <div className='give-stuff-step-box'>
                    <p>Krok 1/4</p>
                    <div className='give-stuff-step-box-inputs'>
                        <h3>Zaznacz co chcesz oddać:</h3>
                        <div className='box-input-container'>


                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
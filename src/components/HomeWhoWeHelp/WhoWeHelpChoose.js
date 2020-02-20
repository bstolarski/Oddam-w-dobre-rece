import React from 'react';
import {useState} from 'react';

export function WhoWeHelpChoose(props) {

    const [select, setSelect] = useState("Fundation");

    const handleSelectChange = event => {
        const value = event.target.value;
        setSelect(value);
        if (typeof props.eventClick === 'function') {
            props.eventClick(value);
        }
    };
    return (
        <div className='who-we-help-main-choose'>
            <label className={select === 'Fundation' ? 'btn-choose-label checked' : 'btn-choose-label'}>
                Fundacjom
                <input className='btn-choose-input'
                       type="radio"
                       name="radio"
                       value="Fundation"
                       onClick={event => handleSelectChange(event)}
                />
            </label>
            <label className={select === 'Organization' ? 'btn-choose-label checked' : 'btn-choose-label'}>
                Organizacjom pozarządowym
                <input className='btn-choose-input'
                       type="radio"
                       name="radio"
                       value="Organization"
                       onClick={event => handleSelectChange(event)}
                />
            </label>
            <label className={select === 'Local' ? 'btn-choose-label checked' : 'btn-choose-label'}>
                Lokalnym zbiórkom
                <input className='btn-choose-input'
                       type="radio"
                       name="radio"
                       value="Local"
                       onClick={event => handleSelectChange(event)}
                />
            </label>
        </div>
    )
}
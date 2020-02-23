import React, {Component} from 'react';
import FormHeader from "./FormHeader";
import GiveStuff from "./GiveStuff/GiveStuff";

export default class Form extends Component {
    render() {
        return (
            <>
                <div className='container'>
                    <FormHeader/>
                    <GiveStuff/>
                </div>
            </>
        )
    }
}
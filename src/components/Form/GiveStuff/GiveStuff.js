import React, {Component} from 'react';
import GiveStuffStep1 from "./GiveStuffStep1";
import GiveStuffStep2 from "./GiveStuffStep2";
import GiveStuffStep3 from "./GiveStuffStep3";
import GiveStuffStep4 from "./GiveStuffStep4";

export default class GiveStuff extends Component {
    state = {
        currentStep: 1
    };

    render() {
        return (
            <section className='give-stuff-container'>
                <form>
                    {this.state.currentStep === 1 ? <GiveStuffStep1/> : ""}
                    {this.state.currentStep === 2 ? <GiveStuffStep2/> : ""}
                    {this.state.currentStep === 3 ? <GiveStuffStep3/> : ""}
                    {this.state.currentStep === 4 ? <GiveStuffStep4/> : ""}
                </form>
            </section>
        )
    }
}
import React, {Component} from 'react';
import Input from "../Input/Input";
import './RadioButtons.css'

class RadioButtons extends Component {
    render() {
        return (
            <div className='radio-wrapper'>
                <Input
                    name='gender'
                    title='Male'
                    handler={this.props.handler}
                    placeholder=''
                    value='Male'
                    type='radio'/>
                <Input
                    name='gender'
                    title='Female'
                    handler={this.props.handler}
                    placeholder=''
                    value='Female'
                    type='radio'/>
                <Input
                    name='gender'
                    title='Other'
                    handler={this.props.handler}
                    placeholder=''
                    value='Other'
                    type='radio'/>
            </div>
        );
    }
}

export default RadioButtons;
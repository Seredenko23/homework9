import React, {Component} from 'react';
import './Textarea.css'

class Textarea extends Component {
    render() {
        let {name ,handler, value, placeholder} = this.props
        return (
            <textarea
                className='text-area'
                name={name}
                onChange={handler}
                value={value}
                placeholder={placeholder}>
            </textarea>
        );
    }
}

export default Textarea;
import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    constructor (props) {
        super(props)
    }
    render() {
        const {name, title, handler, placeholder, value, type, error, errText} = this.props
        return (
            <div className='input-wrapper'>
                <label className='registration-label'
                       htmlFor={name}>{title}</label>
                <input className={error ? 'error registration-input' : 'registration-input'}
                       name={name}
                       value={value}
                       onChange={handler}
                       placeholder={placeholder}
                       type={type}/>
                {error && (
                    <p className='error-description'>{errText}</p>
                )}
            </div>
        );
    }
}

export default Input;
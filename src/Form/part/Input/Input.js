import React, {Component} from 'react';
import './Input.css'

class Input extends Component {
    constructor (props) {
        super(props)
        this.state = {
            touched: false,
        }
    }

    touch = (e) => {
        this.setState({
            touched: true,
        })
    };

    render() {
        const {name, title, handler, placeholder, value, type, error, errText} = this.props
        return (
            <div className={type === 'radio'? 'radio-wrapper' : 'input-wrapper'}>
                <label className='registration-label'
                       htmlFor={name}>{title}</label>
                <input className={error && this.state.touched ? 'error registration-input' : 'registration-input'}
                       name={name}
                       value={value}
                       onBlur={this.touch}
                       onChange={handler}
                       placeholder={placeholder}
                       type={type}/>
                {(error && this.state.touched) && (
                    <p className='error-description'>{errText}</p>
                )}
            </div>
        );
    }
}

export default Input;
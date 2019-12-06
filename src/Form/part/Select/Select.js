import React, {Component} from 'react';
import './Select.css'

class Select extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {name, title, handler, placeholder, options, value, error, errText} = this.props
        let arrayOptions = options.map(el => {
            return (
                <option
                    key={el}
                    value={el}>
                    {el}
                </option>
            )
        })
        return (
            <div className='select-wrapper'>
                <label htmlFor={name}>{title}</label>
                <select className={error ? 'error select' : 'select'} name={name}
                        id={name}
                        value={value}
                        onChange={handler}>
                    <option value="" disabled>{placeholder}</option>
                    {arrayOptions}
                </select>
                {error && (
                    <p className='error-description'>{errText}</p>
                )}
            </div>
        );
    }
}

export default Select;
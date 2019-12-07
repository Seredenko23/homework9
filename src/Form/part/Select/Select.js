import React, {Component} from 'react';
import './Select.css'

class Select extends Component {
    constructor(props) {
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
        let {name, handler, placeholder, options, value, error, errText} = this.props
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
                <label htmlFor={name}/>
                <select className={error && this.state.touched ? 'error select' : 'select'} name={name}
                        id={name}
                        value={value}
                        onBlur={this.touch}
                        onChange={handler}>
                    <option value="" disabled>{placeholder}</option>
                    {arrayOptions}
                </select>
                {(error && this.state.touched) && (
                    <p className='error-description'>{errText}</p>
                )}
            </div>
        );
    }
}

export default Select;
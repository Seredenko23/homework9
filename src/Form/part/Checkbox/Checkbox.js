import React, {Component} from 'react';
import "./Checkbox.css"

class Checkbox extends Component {
    render() {
        const {name, id, title, handler, check} = this.props
        return (
            <div className='checkbox'>
                <label htmlFor={name}>{title}</label>
                <input
                    onChange={handler}
                    checked={check}
                    id={id}
                    name={name}
                    type="checkbox"/>
            </div>
        );
    }
}

export default Checkbox;
import React, {Component} from 'react';
import './FileInput.css'

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
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
        const {name, title, handler, placeholder, error, errText} = this.props
        return (
            <div className='input-wrapper'>
                <label className='registration-label'
                       htmlFor={name}>{title}</label>
                <input className={error && this.state.touched ? 'error registration-input' : 'registration-input'}
                       ref={this.fileInput}
                       name={name}
                       onChange={handler}
                       placeholder={placeholder}
                       type='file'/>
                {(error && this.state.touched) && (
                    <p className='error-description'>{errText}</p>
                )}
            </div>
        );
    }
}

export default FileInput;
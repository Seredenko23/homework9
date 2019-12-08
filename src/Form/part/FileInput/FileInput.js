import React, {Component} from 'react';
import './FileInput.css'

class FileInput extends Component {
    constructor(props) {
        super(props);
        this.fileInput = React.createRef();
        this.state = {
            touched: false,
            title:'Choose file...'
        }
    }

    touch = (e) => {
        this.setState({
            touched: true,
        })
    };

    changeTitle = (e) => {
        const fileName = e.target.value.split( '\\' ).pop();
        this.setState({
            title: fileName,
        })
    }

    render() {
        const {name, id , handler, placeholder, error, errText} = this.props
        return (
            <div className='input-wrapper'>
                <label className='fileinput-label'
                       htmlFor={name}>{this.state.title}</label>
                <input className='file-input'
                       ref={this.fileInput}
                       id={id}
                       name={name}
                       onChange={(e) => {this.changeTitle(e); handler(e);}}
                       onBlur={this.touch}
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
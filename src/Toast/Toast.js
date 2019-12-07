import React, {Component} from 'react';
import './Toast.css'

class Toast extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        }
    }

    componentDidMount() {
        this.setState({
            visible: true
        });
        setTimeout(() => {
            this.setState({
                visible: false,
            });
            this.props.unmount();
        },5000)
    }

    render() {
        if (!this.state.visible) {
            return null;
        }
        return (
            <div className={`toast ${this.props.status}`}>
                <span>&#10003;</span>
                <span>{this.props.description}</span>
            </div>
        );
    }
}

export default Toast;
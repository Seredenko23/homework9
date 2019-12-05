import React, {Component} from 'react';
import './Form.css';
import Input from "./part/Input/Input";

class Form extends Component {
    constructor(props) {
        super(props);
        const genderOption = ['Male', 'Female', 'Other'];
        const regionOption = ['1', '2', '3'];

        this.state = {
            newUser: {
                firstName: '',
                secondName: '',
                userName: '',
                email: '',
                password: '',
                repeatPassword: '',
                region: '',
                gender: '',
                sendPromo: false,
                message: '',
                photo: null,
            },
        };
    }

    handler = (e) => {
        const {name, value} = e.target;

        this.setState({
            newUser: {
                [name]: value,
            }
        });

        console.log(this.state.newUser)
    };

    render() {
        return (
            <form className='registration-form'>
                <Input
                    name='firstName'
                    title='First name'
                    handler={this.handler}
                    placeholder='Enter your first name'
                    value={this.state.newUser.firstName}
                    type='text'/>
            </form>
        );
    }
}

export default Form;
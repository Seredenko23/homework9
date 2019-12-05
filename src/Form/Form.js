import React, {Component} from 'react';
import Input from "./part/Input/Input";
import update from 'immutability-helper';

import './Form.css';
import Select from "./part/Select/Select";


class Form extends Component {
    constructor(props) {
        super(props);

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

            genderOption: ['Male', 'Female', 'Other'],
            regionOption: ['1', '2', '3'],

        };
    }

    handler = (e) => {
        const {name, value} = e.target;
        const newState = update(this.state, {
            newUser: {
                [name] : {$set :value}
            }
        });
        this.setState(newState);
    };

    handleSubmit = (event) => {
        console.log(this.state.newUser)
        event.preventDefault();
    }


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
                <Input
                    name='secondName'
                    title='Second Name'
                    handler={this.handler}
                    placeholder='Enter your second name'
                    value={this.state.newUser.secondName}
                    type='text'/>
                <Input
                    name='userName'
                    title='User Name'
                    handler={this.handler}
                    placeholder='Enter your user name'
                    value={this.state.newUser.userName}
                    type='text'/>
                <Input
                    name='email'
                    title='Email'
                    handler={this.handler}
                    placeholder='Enter your email'
                    value={this.state.newUser.email}
                    type='text'/>
                <Input
                    name='password'
                    title='Password'
                    handler={this.handler}
                    placeholder='Enter your password'
                    value={this.state.newUser.password}
                    type='text'/>
                <Input
                    name='repeatPassword'
                    title='Repeat your Password'
                    handler={this.handler}
                    placeholder='Enter your password again'
                    value={this.state.newUser.repeatPassword}
                    type='text'/>
                <Select
                    name='region'
                    title='Choose your region'
                    handler={this.handler}
                    placeholder='Choose region'
                    value={this.state.newUser.region}
                    options={this.state.regionOption}/>
            </form>
        );
    }
}

export default Form;
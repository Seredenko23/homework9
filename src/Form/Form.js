import React, {Component} from 'react';
import Input from "./part/Input/Input";
import update from 'immutability-helper';

import './Form.css';
import Select from "./part/Select/Select";
import RadioButtons from "./part/RadioButtons/RadioButtons";
import Checkbox from "./part/Checkbox/Checkbox";
import Textarea from "./part/Textarea/Textarea";
import FileInput from "./part/FileInput/FileInput";


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
                photo: undefined,
            },

            genderOption: ['Male', 'Female', 'Other'],
            regionOption: ['1', '2', '3'],

        };
    }

    handler = (e) => {
        let newState;
        if(e.target.type === 'checkbox') {
            const {name, checked} = e.target;
            newState = update(this.state, {
                newUser: {
                    [name] : {$set :checked}
                }
            });
        } else if(e.target.type === 'file') {
            const {name, files} = e.target;
            newState = update(this.state, {
                newUser: {
                    [name] : {$set :files[0]}
                }
            });
        } else {
            const {name, value} = e.target;
            newState = update(this.state, {
                newUser: {
                    [name] : {$set :value}
                }
            });
        }
        this.setState(newState);
    };

    handleSubmit = (e) => {
        console.log(this.state.newUser);
        e.preventDefault();
    };


    render() {
        return (
            <form className='registration-form' onSubmit={this.handleSubmit}>
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
                <RadioButtons
                    handler={this.handler}/>
                <Checkbox
                    name='sendPromo'
                    handler={this.handler}
                    check={this.state.newUser.sendPromo}
                    title={'Do you want to subscribe on our promo?'}/>
                <Textarea
                    name='message'
                    handler={this.handler}
                    value={this.state.newUser.message}
                    placeholder='Enter your message here'/>
                <FileInput
                    name='photo'
                    title='Add your photo'
                    handler={this.handler}
                    placeholder='Choose photo'
                    value={this.state.newUser.photo}/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default Form;
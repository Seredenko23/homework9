import React, {Component} from 'react';
import update from 'immutability-helper';
import validate from "../services/validation";
import './Form.css';

import Input from "./part/Input/Input";
import Select from "./part/Select/Select";
import RadioButtons from "./part/RadioButtons/RadioButtons";
import Checkbox from "./part/Checkbox/Checkbox";
import Textarea from "./part/Textarea/Textarea";
import FileInput from "./part/FileInput/FileInput";
import Toast from "../Toast/Toast";

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

            submitSucceed: false,
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
        this.setState({
            submitSucceed: true
        })
        e.preventDefault();
    };

    unmount = () => {
        this.setState({
            submitSucceed: false,
        })
    };

    render() {
        const errors = validate(this.state.newUser);
        const isDisabled = Object.keys(errors).some(x => errors[x]);
        return (
            <form className='registration-form' onSubmit={this.handleSubmit}>
                {(this.state.submitSucceed &&
                    <Toast status='success'
                           unmount={this.unmount}
                           description='Registration succeed'/>
                )}
                <Input
                    name='firstName'
                    title='First name'
                    handler={this.handler}
                    placeholder='Enter your first name'
                    value={this.state.newUser.firstName}
                    type='text'
                    error={errors.firstName}
                    errText={`This field is required,you also need 
                    to use only number and letter`}/>
                <Input
                    name='secondName'
                    title='Second Name'
                    handler={this.handler}
                    placeholder='Enter your second name'
                    value={this.state.newUser.secondName}
                    type='text'
                    error={errors.secondName}
                    errText={`This field is required,you also need 
                    to use only number and letter`}/>
                <Input
                    name='userName'
                    title='User Name'
                    handler={this.handler}
                    placeholder='Enter your user name'
                    value={this.state.newUser.userName}
                    type='text'
                    error={errors.userName}
                    errText={`This field is required,you also need 
                    to use only number and letter`}/>
                <Input
                    name='email'
                    title='Email'
                    handler={this.handler}
                    placeholder='Enter your email'
                    value={this.state.newUser.email}
                    type='text'
                    error={errors.email}
                    errText={`Invalid email`}/>
                <Input
                    name='password'
                    title='Password'
                    handler={this.handler}
                    placeholder='Enter your password'
                    value={this.state.newUser.password}
                    type='password'
                    error={errors.password}
                    errText={`Password to short!`}/>
                <Input
                    name='repeatPassword'
                    title='Repeat your Password'
                    handler={this.handler}
                    placeholder='Enter your password again'
                    value={this.state.newUser.repeatPassword}
                    type='password'
                    error={errors.repeatPassword}
                    errText={`Passwords aren't same`}/>
                <Select
                    name='region'
                    title='Choose your region'
                    handler={this.handler}
                    placeholder='Choose region'
                    value={this.state.newUser.region}
                    options={this.state.regionOption}
                    error={errors.region}
                    errText={`You need to choose region`}/>
                <RadioButtons
                    handler={this.handler}/>
                <Checkbox
                    id='sendPromo'
                    name='sendPromo'
                    handler={this.handler}
                    check={this.state.newUser.sendPromo}
                    title={'Do you want to subscribe to our promo?'}/>
                <Textarea
                    name='message'
                    handler={this.handler}
                    value={this.state.newUser.message}
                    placeholder='Enter your message here'
                />
                <FileInput
                    name='photo'
                    id='photo'
                    title='Add your photo'
                    handler={this.handler}
                    placeholder='Choose photo'
                    value={this.state.newUser.photo}
                    error={errors.photo}
                    errText={`You need to choose file, also this must be jpg or png`}/>
                <button className='submit-btn'
                    disabled={isDisabled}
                    type='submit'>
                    Submit
                </button>
            </form>
        );
    }
}

export default Form;
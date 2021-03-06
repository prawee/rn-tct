import React from 'react';
import { 
    View, Text,
    TextInput, Button
} from 'react-native';
import Validator from 'validator';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: 'prawee@hotmail.com',
            password: 'test',
            errors: {
                email: '',
                password: ''
            },
            disabled: true
        };

        this.onSubmit = this.onSubmit.bind(this);
        //this.checkEmail = this.checkEmail.bind(this);
        //this.checkPassword = this.checkPassword.bind(this);
        this.validate = this.validate.bind(this);
    }

    // checkEmail() {
    //     if (!Validator.isEmail(this.state.email)) {
    //         this.setState({ errors: {...this.state.errors, email: 'not email format' } });
    //     } else {
    //         this.setState({ errors: {...this.state.errors, email: '' } });
    //     }
    // }

    // checkPassword() {
    //     if (this.state.password.length < 7 ) {
    //         this.setState({ errors: {...this.state.errors, password: 'more than 8' } });
    //         this.setState({ disabled: true });
    //     } else {
    //         this.setState({ errors: {...this.state.errors, password: '' } });
    //         this.setState({ disabled: false });
    //     }
    // }

    validate(type, value) {
        console.log(type, value);
        if (type == 'email') {
            this.setState({ email: value });
            if (!Validator.isEmail(this.state.email)) {
                console.log('isEmail=no');
                this.setState({ errors: {...this.state.errors, email: 'not email format' } });
            } else {
                console.log('isEmail=Yes');
                this.setState({ errors: {...this.state.errors, email: '' } });
            }
        }

        if (type == 'password') {
            this.setState({ password: value });
            if (this.state.password.length < 7 ) {
                this.setState({ errors: {...this.state.errors, password: 'more than 8' } });
                this.setState({ disabled: true });
            } else {
                this.setState({ errors: {...this.state.errors, password: '' } });
                this.setState({ disabled: false });
            }
        }
    }

    onSubmit() {
        //console.log('onSubmit', this.state);
        const { email, password, errors } = this.state;
        if (
            errors.email == '' && 
            errors.password == '' && 
            email !== '' &&
            password !== ''
        ) {
            this.props.submit(this.state);
        }
        //console.log('onSubmit', this.state);
    }
    
    render() {
        return (
            <View style={{ padding: 10 }} >
                <Text>Login</Text>
                <TextInput
                    style={{ padding: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    //onChangeText={(email) => this.setState({ email: email.toLowerCase() })}
                    onChangeText={(text) => this.validate('email',text)}
                    id="email"
                    name="email"
                    value={this.state.email}
                    placeholder="prawee@hotmail.com"
                    //onChange={this.validate}
                    //onBlur={this.checkEmail}
                />
                <Text>{this.state.errors.email}</Text>

                <TextInput 
                    style={{padding: 5, marginTop: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    placeholder="Password"
                    secureTextEntry
                    //onChangeText={(password) => this.setState({ password })}
                    //onChangeText={(password) => this.validate(passwrd)}
                    onChangeText={(text) => this.validate('password', text)}
                    value={this.state.password}
                    //onChange={this.validate}
                    //onKeyPress={this.checkPassword}
                />
                <Text>{this.state.errors.password}</Text>

                <Button 
                    disabled={this.state.disabled}
                    title="Login"
                    onPress={this.onSubmit}
                />
            </View>
        );
    }
}

export default LoginForm;

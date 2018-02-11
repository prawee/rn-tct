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
            }
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.checkEmail = this.checkEmail.bind(this);
    }

    checkEmail() {
        console.log('checkEmail', this.state.email);
        const { email } = this.state.errors;
        if (!Validator.isEmail(this.state.email)) 
            this.setState({ email: 'not email' });
        else 
            this.setState({ email: '' });
    }

    checkPassword() {
        // home work
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
                    onChangeText={(email) => this.setState({ email: email.toLowerCase() })}
                    value={this.state.email}
                    placeholder="prawee@hotmail.com"
                    onBlur={this.checkEmail}
                />
                <Text>{this.state.errors.email}</Text>

                <TextInput 
                    style={{padding: 5, marginTop: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    placeholder="Password"
                    secureTextEntry
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <Button 
                    title="Login"
                    onPress={this.onSubmit}
                />
            </View>
        );
    }
}

export default LoginForm;

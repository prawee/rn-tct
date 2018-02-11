import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;

class LoginPage extends Component {
    submit() {
        console.log('submit on LoginPage');
    }
    render() {
        return (
            <LoginForm submit={this.submit} />
        );
    }
}

export default LoginPage;

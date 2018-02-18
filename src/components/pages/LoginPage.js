import React, { Component } from 'react';
import { Text } from 'react-native';
import LoginForm from '../forms/LoginForm';

// const LoginPage = () => <Text>Login Page</Text>;

class LoginPage extends Component {
    submit(data) {
        console.log('submit on LoginPage', data);
        // call to api
    }
    render() {
        return (
            <LoginForm submit={this.submit} />
        );
    }
}

export default LoginPage;

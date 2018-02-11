import React from 'react';
import { 
    View, Text,
    TextInput, Button
} from 'react-native';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        console.log('onSubmit', this.state);
    }
    
    render() {
        return (
            <View style={{ padding: 10 }} >
                <Text>Login</Text>
                <TextInput
                    style={{ padding: 5, height: 40, borderColor: 'orange', borderWidth: 1}}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                    placeholder="prawee@hotmail.com"
                />

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

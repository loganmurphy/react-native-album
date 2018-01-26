import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardItem, Button, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { 
        email: '',
        password: '',
        error: '',
        loading: false
    }; 

    onButtonPress() {
        const { email, password } = this.state;
        
        this.setState({ 
            error: '', 
            loading: true 
        });
         
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    renderButton() {
        if (this.state.loading){
            return <Spinner size='small' />
        }

        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });

    }

    render() {
        return (
            <Card>
                <CardItem>
                    <Input 
                        placeholder='user@gmail.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardItem>
                <CardItem>
                    <Input
                        secureTextEntry
                        placeholder='1234'
                        label='Passwod'
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                </CardItem>
                <Text style={styles.errorTextStyle}>
                        {this.state.error}
                    </Text>
                <CardItem>
                    {this.renderButton()}
                </CardItem>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
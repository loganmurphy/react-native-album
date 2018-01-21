import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/loginForm';

class App extends Component {
    state = { loggedIn: null };

    componentWillMount() {
        var config = {
            apiKey: "AIzaSyCPr8jSJQgXQhgx7rfi8TgMVQ4JS6JMn0M",
            authDomain: "auth-21ad3.firebaseapp.com",
            databaseURL: "https://auth-21ad3.firebaseio.com",
            projectId: "auth-21ad3",
            storageBucket: "auth-21ad3.appspot.com",
            messagingSenderId: "833184263400"
          };

        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Button onPress={() => firebase.auth().signOut()}>
                         Log out
                    </Button>
                )
            case false:
                return <LoginForm />
            default:
                return (
                    <View style={styles.spinnerStyle}>
                        <Spinner size='large'/>
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    spinnerStyle: {
        height: 350,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    }
}

export default App;
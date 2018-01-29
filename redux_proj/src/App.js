import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/loginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBFk6GlBHS7pxVGpJgHcrx8uIGtaOCV9RM",
            authDomain: "manager-16d51.firebaseapp.com",
            databaseURL: "https://manager-16d51.firebaseio.com",
            projectId: "manager-16d51",
            storageBucket: "",
            messagingSenderId: "130716828695"
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
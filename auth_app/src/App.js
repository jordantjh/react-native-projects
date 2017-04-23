import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common/';
import LoginForm from './components/LoginForm';

class App extends Component {
  //class state
  state = { loggedIn: null };

  //connect to firebase before rendering the app
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxbOH7chdtz1z6o2rVSmzuARcdboA6p1A',
      authDomain: 'auth-a1338.firebaseapp.com',
      databaseURL: 'https://auth-a1338.firebaseio.com',
      projectId: 'auth-a1338',
      storageBucket: 'auth-a1338.appspot.com',
      messagingSenderId: '887893923732'
    });

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
            Logout
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
     <View>
        <Header headerText="Authentification" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;

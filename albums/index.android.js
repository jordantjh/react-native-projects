import React from 'react';
import { Text, AppRegistry } from 'react-native';

const App = () => {
  return(
    <Text>My First App!</Text>
  );
};

AppRegistry.registerComponent('albums', ()=>App);

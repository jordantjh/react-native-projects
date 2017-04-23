import React from 'react';
import { Text, View } from 'react-native';

const Header = (args) => {
  //destructure styles
  const { viewStyle, fontStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={fontStyle}>{args.headerText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#f8f8f8',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2
  },
  fontStyle: {
    fontSize: 20
  }
};

export default Header;

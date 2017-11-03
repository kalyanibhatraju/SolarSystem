import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component<{}> {
  render() {
    const {textStyle, container} = styles;
    return (
      <View style={container}>
        <Text style={textStyle}>{this.props.headerText}</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#F8F8F8',
    shadowColor: '#000',
    shadowOffset: { width:0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
});

// Export this Component to be available to the App.
//export default Header;

/**
 * Solar System sample app
 * https://github.com/kalyanibhatraju/SolarSystem/
 * @kalyanibhatraju
 */

import React, { Component } from 'react';
import Header from './src/components/Header';
import PlanetList from './src/components/PlanetList';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class App extends Component<{}> {
  render() {
    return (
      <View>
      <Header headerText={'Solar System'} />
      <PlanetList />
      </View>
    );
  }
}

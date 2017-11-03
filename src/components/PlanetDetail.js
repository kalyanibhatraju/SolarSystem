import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Linking
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default class PlanetDetail extends Component<{}> {
  render() {
    const {headerContentStyle, headerTextStyle, imageStyle} = styles;
    return (
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{this.props.planet.title}</Text>
          </View>
        </CardSection>
        <CardSection>
        <Image
        style={imageStyle}
        source={{ uri: this.props.planet.image }}
      />
        </CardSection>
        <CardSection>
        <Button onPress={() => Linking.openURL(this.props.planet.url)}>
          Know more about me
        </Button>
      </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
   fontSize: 18
 },
 imageStyle: {
  height: 300,
  flex: 1,
  width: null
}
});

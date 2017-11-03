import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import axios from 'axios';
import PlanetDetail from './PlanetDetail';

export default class PlanetList extends Component<{}> {
  state = { planets: [] };

  componentWillMount() {
    axios.get('https://api.myjson.com/bins/kuch7')
     .then(response => this.setState( { planets: response.data } ));
  }

  renderPlanets() {
    return this.state.planets.map(planet =>
      <PlanetDetail key={planet.title} planet={planet} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderPlanets()}
        </ScrollView>
    );
  }
}

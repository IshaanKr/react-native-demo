/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends Component {

  constructor() {
    super()
    console.log("constructor is called")
  }

  render() {
    console.log("Render is called")
    return (
      <View>
        <Text>Hello World</Text>
      </View>
    );
  }

  componentDidMount() {
    console.log("componentDidMount is called")
  }

  componentDidUpdate() {
    console.log("componentDidUpdate is called")

  }


  shouldComponentUpdate() {
    console.log("shouldComponentUpdate is called")
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate is called")
  }


  componentWillUnmount() {
    console.log("componentWillUnmount is called")

  }
}

export default App;

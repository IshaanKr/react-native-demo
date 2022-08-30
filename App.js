import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './common/src/screens/HomeScreen';
import LifecycleScreen from './common/src/screens/LifecycleScreen';
import NavigationScreen from './common/src/screens/NavigationScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Lifecycle" component={LifecycleScreen} />
        <Stack.Screen name="Navigation" component={NavigationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
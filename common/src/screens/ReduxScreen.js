import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { store } from '../store/store'
import { incrementCounter, decrementCounter } from '../store/action'
import Counter from '../components/Counter'

export default function ReduxScreen({ navigation }) {

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Provider store={store}>
                <Counter />
            </Provider>
        </View >
    );
}


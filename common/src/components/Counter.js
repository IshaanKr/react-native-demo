import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { decrementCounter, incrementCounter } from '../store/action';

export default function MyCounter() {
    const data = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
                padding: 50
            }}>Counter : {data} </Text>
            <Button
                title="Increment Counter"
                onPress={() => dispatch(incrementCounter())}
            />

            <Button
                title="Decrement Counter"
                onPress={() => dispatch(decrementCounter())}
            />

        </View>
    );
}

import * as React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <Button
                title="Lifecycle"
                onPress={() => navigation.navigate('Lifecycle')}
            />

            <Button
                title="Navigation"
                onPress={() => navigation.navigate('Navigation')}
            />

            <Button
                title="Fetch"
                onPress={() => navigation.navigate('Fetch')}
            />

            <Button
                title="Redux"
                onPress={() => navigation.navigate('Redux')}
            />

        </View>
    );
}
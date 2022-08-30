import * as React from 'react';
import { View, Button } from 'react-native';

export default function NavigationScreen({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center' }}>

            <Button
                title="Navigation"
                onPress={() => navigation.push('Navigation')}
            />

            <Button
                title="Back"
                onPress={() => navigation.goBack()}
            />

            <Button
                title="Back to First Screen"
                onPress={() => navigation.popToTop()}
            />

        </View>
    );
}
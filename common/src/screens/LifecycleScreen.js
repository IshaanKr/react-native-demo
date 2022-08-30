import * as React from 'react';
import { View, Button, Text } from 'react-native';

export default class LifecycleScreen extends React.Component {

    constructor({ navigation }) {
        super()
        console.log("called constructor")
    }

    componentDidMount(){
        console.log("called componentDidMount")
    }

    componentWillUnmount(){
        console.log("called componentWillUnmount")
    }

    shouldComponentUpdate(){
        console.log("called shouldComponentUpdate")
        return true
    }

    componentDidCatch(){
        console.log("called componentDidCatch")
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems:'center',justifyContent: 'center' }}>

                <Text style={{color: 'red'}}>Hello World</Text>

            </View>
        );
    }

}
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, View, Text, Button } from 'react-native';

export default function FetchScreen({ navigation }) {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);


    const fetchMoviesFromApi = async () => {
        try {
            const response = await fetch('https://reactnative.dev/movies.json')
            const json = await response.json()
            setData(json.movies)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fetchMoviesFromApi();
    }, []);


    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            padding: 24
        }}>

            {isLoading ? <ActivityIndicator /> : (
                < FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.title}, {item.releaseYear}</Text>

                    )}
                />
            )}



        </View>
    );
}
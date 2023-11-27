import React from "react";
import { TouchableOpacity, Text, View } from 'react-native';

const HomeView = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Presiona los bótones para moverte de pantalla</Text>
            <TouchableOpacity
                onPress={() => { navigation.navigate('ScreenScann') }}
            >
                <Text>Segunda Pantalla</Text>
            </TouchableOpacity>
        </View>
    )
};

export default HomeView;
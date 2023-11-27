import React from "react";
import { View, Text } from 'react-native';

const ScannedCodeView = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Código Escaneado con Éxito ;D</Text>
            <Text>Código:</Text>
        </View>
    );
};

export default ScannedCodeView;
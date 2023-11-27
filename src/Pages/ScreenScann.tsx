import React, { useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { QrScann } from "../Components";

const ScreenScann = ({ navigation }: any) => {
    const [scan, setScan] = useState<boolean>(false);

    const getScanInfo = (scanInfo: any): void => {
        console.log("🚀 ~ file: ScreenScann.tsx:9 ~ getScanInfo ~ scanInfo:", scanInfo)
        try {
            setScan(false);
            const value = scanInfo.data;
            if (value != undefined && value != '') {
                navigation.navigate('Scanned', value)
            }
        } catch (error) {
            console.log("🚀 ~ file: ScreenScann.tsx:12 ~ getScanInfo ~ error:", error);
        }
    };
    return (
        <View style={{ flex: 1 }}>
            {
                !scan ?
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text>Presiona el bóton para poder escanear códigos</Text>
                        <TouchableOpacity onPress={() => setScan(true)}>
                            <Text>Escanear</Text>
                        </TouchableOpacity>
                    </View>
                    : <QrScann action={(data: any) => getScanInfo(data)} />
            }
        </View>
    );
};

export default ScreenScann;
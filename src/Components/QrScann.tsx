import { ReactElement, useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCodeScanner, } from 'react-native-vision-camera';
import styles from '../estilo.style';

const QrScann = (props: { action: Function }): ReactElement => {
    const device = useCameraDevice('back');
    const [readCode, setReadCode] = useState<boolean>(false);
    const [flash, setFlash] = useState<boolean>(false);
    const [active, setActive] = useState<boolean>(true)

    useEffect(() => {
        checkPermisions();
    }, []);

    const checkPermisions = async () => {
        const newCameraPermission = await Camera.requestCameraPermission();
        console.log(newCameraPermission);
    };

    const sendData = (code: string | undefined): void => {
        try {
            if (code) {
                console.log("🚀 ~ file: QrScann.tsx:23 ~ sendData ~ code:", code);
                props.action({ success: true, data: code });
                setActive(false);
            };
        } catch (error) {
            console.log("🚀 ~ file: QrScann.tsx:24 ~ sendData ~ error:", error);
        };
    };

    const codeScanned = useCodeScanner({
        codeTypes: ['code-128', 'code-39', 'qr', 'ean-13'],
        onCodeScanned: (codes) => {
            try {
                if (!readCode && codes.length > 0) {
                    setReadCode(true);
                    const result = codes[0].value;
                    sendData(result);
                    console.log(`Código Leído: ${result}`);
                    Alert.alert('Código Leído', result);
                    setTimeout(() => {
                        setReadCode(false);
                    }, 10000);
                };
            } catch (error) {
                console.log("🚀 ~ file: QrScann.tsx:17 ~ QrScannView ~ error:", error);

            }
        },
    });

    const activateFlash = (): void => {
        setFlash(!flash)
    }

    if (device == null) return <ActivityIndicator />


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

            <Camera
                key={device.id}
                style={StyleSheet.absoluteFill}
                device={device}
                isActive={active}
                codeScanner={codeScanned}
                /* focusable={true} */
                torch={flash ? 'on' : 'off'} /><TouchableOpacity
                    style={styles.container}
                    onPress={activateFlash}
                >
                <Text style={{ color: 'white', fontSize: 30 }}>flash</Text>
            </TouchableOpacity>
            <View style={styles.areaScan} />



        </View>
    )


}

export default QrScann;
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, useCameraDevice, useCodeScanner, } from 'react-native-vision-camera';
import styles from './src/estilo.style';
type ActivateFlashType = 'off' | 'on'

const App = () => {
  const device = useCameraDevice('back');
  const [activate, setActivate] = useState<ActivateFlashType>('off')
  const [codeRead, setCodeRead] = useState<boolean>(false);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13', 'code-128'],
    onCodeScanned: (codes) => {
      if (!codeRead && codes.length > 0) {
        setCodeRead(true);
        console.log(`Código escaneado: ${codes[0].value}`);
        Alert.alert("Código leído", codes[0].value)
        // Restablecer codeRead después de 5 segundos
        setTimeout(() => {
          setCodeRead(false);
        }, 5000);
      }
    },
    regionOfInterest:{
      x: 0,
      y: 0,
      height: 500,
      width: 200,
    },
  });


  useEffect(() => {
    checkPermisions();
  }, [])

  const checkPermisions = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    console.log(newCameraPermission);
  }

  const activateFlash = () => {
    activate === 'on' ? setActivate('off') : setActivate('on')
  }

  if (device == null) return <ActivityIndicator />

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
        torch={activate}
        focusable={true}
      />

      <TouchableOpacity
        style={styles.container}
        onPress={activateFlash}
      >
        <Text style={{ color: 'white', fontSize: 30 }}>flash</Text>
      </TouchableOpacity>

      <View style={styles.areaScan}>

      </View>

    </View>
  )
}

export default App;

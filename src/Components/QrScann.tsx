import React from 'react';
import { Text, View} from 'react-native'
import {  Camera, useCameraDevice, useCodeScanner,  } from 'react-native-vision-camera';


const QRReader = () => {
    const device = useCameraDevice('back');
    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: (codes) => {
            console.log(`Códigos escaneados ${codes.length}`)
        }
    })
      
return(
    <>
        {
            device ? 
            <View>
                <Camera 
                    device={device}
                    isActive={true}
                    codeScanner={codeScanner} 
            />
            </View>: null
        }
        
    </>
)
}

export default QRReader
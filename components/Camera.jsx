import { useState, useEffect } from 'react';
import { StyleSheet, Text, Button, Image } from 'react-native';
import { Camera } from 'expo-camera';


const Camera = () => {
    const [hasCameraPermission, setCameraPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [image, setImage] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(()=> {
        (async ()=>{
            const cameraStatus = await Camera.requestCameraPermissionAsync();
            setHasCameraPermission(cameraStatus.status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if(camera){
            const data= await camera.takePictureAsync(null)
            setImage(data.url);
        }
    }

    if(hasCameraPermission === false){
        return <Text>No Camera Access</Text>;
    }

  return (
    <View>
        <camera ref={ref => setCamera(ref)}/>
        <Button title="Take Picure"
        onPress={() => takePicture()}/>
        {image && <Image source={{url: image}}/>}
    </View>
  )
}

export default Camera

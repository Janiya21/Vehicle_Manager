import { View, Platform, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, Box, Input, Center, Button, AddIcon, ScrollView } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import {Constants} from "expo-constants";

export default function AddVehicle() {
    const [photo, setPhoto] = useState(null);

    useEffect(async () => {
        if(Platform.OS !== 'web'){
            const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if(status !== 'granted'){
                alert('Permission Denied');
            }
        }
    },[]);

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing:true,
            aspect:[4,3],
            quality:1
        })
        console.log(result);
        if(!result.cancelled){
            setPhoto(result.uri)
        }
    }

    /*============*/

    const createFormData = (photo, body = {}) => {
        const data = new FormData();

        data.append('photo', {
            uri: Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", ""),
            type: 'image/jpeg',
            name: 'photo.jpeg'
        });

        Object.keys(body).forEach((key) => {
            data.append(key, body[key]);
        });

        return data;
    };

    const handleUploadPhoto = () => {
        fetch(`http://localhost:4000/api/images/upload`, {
            method: 'POST',
            body: createFormData(photo, { userId: '123' }),
            'Content-Type': 'multipart/form-data',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log('response', response);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {photo && (
                <>
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 300, height: 300 }}
                    />
                    <Button onPress={handleUploadPhoto}>Upload Photo</Button>
                </>
            )}
            <Button onPress={pickImage} >Choose Photo</Button>
        </View>
    )
}

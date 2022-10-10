import { View, Platform, Image } from 'react-native'
import React, {useEffect, useState} from 'react'
import { NativeBaseProvider, Box, Input, Center, Button, AddIcon, ScrollView } from "native-base";
import * as ImagePicker from 'expo-image-picker';
import { FontAwesome5 } from '@expo/vector-icons';
import axios from "axios";
import {EvilIcons,MaterialIcons} from "@expo/vector-icons";

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
        axios.post(`http://192.168.1.24:4000/api/images/upload`, {
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
            <MaterialIcons name="add-a-photo" size={100} color="black" />
            {photo && (
                <>
                    <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 100, height: 100 }}
                    />
                    {/*<FontAwesome5 name="car" size={100} color="black" />*/}
                    <Button onPress={handleUploadPhoto}>Upload Photo </Button>
                </>
            )}
            <Button marginTop={5} onPress={pickImage} >Choose Photo</Button>
        </View>
    )
}

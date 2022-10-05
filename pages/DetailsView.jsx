import {View, Text, Platform} from 'react-native'
import React, {useEffect, useState} from 'react'
import { Stack, Box, Input, Center, Button, NativeBaseProvider, Heading, Pressable, ScrollView } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

export default function AddVehicle() {

    const [vehicles, setVehicles] = useState([]);

    useEffect(async () => {
        let res = await getVehicles();
        setVehicles(res.data);
        console.log(vehicles);
    },[]);

    const getVehicles = async () => {
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/api/vehicles')
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

        return await promise;
    }

    const navigate = (props) => {
        props.navigation.navigate('ShowVehicle');
    }

    const allVehicles = () => {
        vehicles.map((element) =>{
                return(
                    <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
                        fontSize: 'md',
                        fontWeight: 'medium',
                        color: 'warmGray.50',
                        textAlign: 'center'
                    }}>
                        This is a Box with Linear Gradient {element}
                    </Box>
                );
            }
        );
    }

    return (
        <View style={
            {
                backgroundColor: "#004466",
            }
        } >

            <Box flex={"1"} top="10" >
                <Center flex={"1"} w="100%" >
                    <Box flex={"2"} w="100%" h="100%" >
                        <Center>
                            <Ionicons name="ios-car-sport-sharp" size={120} color="white" />
                        </Center>;
                    </Box>
                </Center>
            </Box>

            <ScrollView flex={"1"} style={
                {
                    backgroundColor: "#005580",
                    minHeight: "94vh",
                    width: "90vw",
                    marginTop:"-20vh",
                    marginLeft:"4vw"
                }
            }>

                <Box flex={"1"} top="10">
                    <Center flex={"3"} w="100%" >
                        <Box flex={"2"} w="100%" h="100%" >
                            <Center>
                                {allVehicles}
                                <Box mt="3" w="80%">
                                    <Button onPress={() =>{console.log(vehicles);}}>Load Vehicle</Button>
                                </Box>
                            </Center>;
                        </Box>
                    </Center>
                </Box>

            </ScrollView>
        </View>
    )
}
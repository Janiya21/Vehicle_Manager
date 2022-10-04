import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, Box, Input, Center, Button, NativeBaseProvider, Heading, Pressable, ScrollView } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function AddVehicle() {

    const [image, setImage] = new useState('https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png');
    const [vehicleNumber, setVehicleNumber] = new useState('');
    const [vehicleType, setVehicleType] = new useState('');
    const [Venue, setVenue] = new useState('');
    const [price, setPrice] = new useState('');
    const [mileage, setmileage] = new useState('');
    const [show, setShow] = React.useState(false);


    return (
        <ScrollView style={
            {
                backgroundColor: "#004466"
            }
        } >

            <Box flex={"1"} top="10" >
                <Center flex={"3"} w="100%" >
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
                    margin: "2.4vh"
                }
            }>

                <Box flex={"1"} top="10">
                    <Center flex={"3"} w="100%" >
                        <Box flex={"2"} w="100%" h="100%" >
                            <Center>
                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;

                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                            </Center>;
                        </Box>
                    </Center>
                </Box>

            </ScrollView>
        </ScrollView>
    )
}
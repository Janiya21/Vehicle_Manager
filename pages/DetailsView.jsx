import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, Box, Input, Center, Button, NativeBaseProvider, Heading, Pressable, ScrollView } from "native-base";
import { Ionicons } from '@expo/vector-icons';

export default function AddVehicle() {

    return (
        <View style={
            {
                backgroundColor: "#004466",
                // overflow:"hidden",
                // maxHeight:"100vh"
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
                                <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient XXX
                                </Box>;

                                <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
                                    fontSize: 'md',
                                    fontWeight: 'medium',
                                    color: 'warmGray.50',
                                    textAlign: 'center'
                                }}>
                                    This is a Box with Linear Gradient
                                </Box>;
                                <Box style={{backgroundColor:"#004466", width:"85vw", height:"20vh"}} p="12" rounded="xl" _text={{
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
        </View>
    )
}
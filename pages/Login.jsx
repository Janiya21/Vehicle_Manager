import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, Box, Input, Center, Button, Heading, Pressable, ScrollView } from "native-base";
import { EvilIcons } from '@expo/vector-icons';

export default function AddVehicle() {

    const [image, setImage] = new useState('https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png');
    const [vehicleNumber, setVehicleNumber] = new useState('');
    const [vehicleType, setVehicleType] = new useState('');
    const [Venue, setVenue] = new useState('');
    const [price, setPrice] = new useState('');
    const [mileage, setmileage] = new useState('');
    const [show, setShow] = React.useState(false);

    return (
        <ScrollView flex={"1"} style={
            {
                backgroundColor: "#004466",
            }
        } >
            <Box flex={"1"} top="20" >
                <Center flex={"3"} w="100%" >
                    <Box flex={"2"} w="100%" h="100%" >
                        <Center>
                            <EvilIcons name="user" size={120} color="white" />
                        </Center>;
                    </Box>
                </Center>
                <Center top="2">
                    <Heading color="white">LOG-IN</Heading>
                </Center>
            </Box>


            <Box flex={"1"} top="1/2">
                <Stack w="90%" marginLeft="5">
                    <Box alignItems="center">
                        <Input placeholder="Username" w="80%" />
                    </Box>
                    <Box mt="5" alignItems="center">
                        <Input placeholder="Password" w="80%" />
                    </Box>
                    <Box mt="3" alignItems="center">
                        <Button mt="5" w="40%" success>
                            <Text>Log In</Text>
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </ScrollView>
    )
}
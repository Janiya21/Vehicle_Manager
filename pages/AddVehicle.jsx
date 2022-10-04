import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { NativeBaseProvider, Box, Input, Center, Button, Image, AddIcon, ScrollView } from "native-base";


export default function AddVehicle() {

    const [image, setImage] = new useState('https://icon-library.com/images/add-on-icon/add-on-icon-1.jpg');
    const [vehicleNumber, setVehicleNumber] = new useState('');
    const [vehicleType, setVehicleType] = new useState('');
    const [Venue, setVenue] = new useState('');
    const [price, setPrice] = new useState('');
    const [mileage, setmileage] = new useState('');

    return (
        <ScrollView flex={"1"}  style={
            {
                backgroundColor: "#004466",
            }
        } >
            <Box flex={"1"} top="0.5" top="1/5" >
                <Center flex={"3"} w="100%" >
                    <Box flex={"2"} w="100%" h="100%" >
                    <Center>
                        <Image source={{
                        uri: "https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-512.png"
                        }} alt="Alternate Text" size="xl" />
                        </Center>;
                    </Box>

                    <Box flex={"2"} style={{}} w="80%" >
                        <Center flex={"1"} >
                            <Button style={{
                                width: 150,
                                mt: 5,
                                fontWeight: "bold",
                            }}
                            onPress={() => alert("hello world")}
                                leftIcon={<AddIcon style={{ color: "#bd8682"}} />}
                                size="sm"
                                mt={3}
                            >
                                Add Vehicle Image
                            </Button>
                        </Center>
                    </Box>
                </Center>
            </Box>


            <Box flex={"1"} style={{}} top="1/4">
                <Center flex={"1"} w="100%">
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Number" color={"black"} />
                    </Box>
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Vehicle Type" />
                    </Box>
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Location" />
                    </Box>
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Price" />
                    </Box>
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Seller No" />
                    </Box>
                    <Box mt="3" w="80%">
                        <Input variant="underlined" placeholder="Mileage" />
                    </Box>
                    <Box mt="3" w="80%">
                        <Button onPress={() => console.log("hello world")}>Register Vehicle</Button>
                    </Box>
                </Center>
            </Box>
        </ScrollView>
    )
}


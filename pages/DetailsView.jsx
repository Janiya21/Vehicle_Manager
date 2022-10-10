import {Image, View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Box, Button, Center, ScrollView} from "native-base";
import axios from "axios";
import { Heading, Text, Input } from 'native-base';
import { FontAwesome5, Entypo   } from '@expo/vector-icons';
import { Fontisto, Ionicons  } from '@expo/vector-icons';
import {VStack, Divider,NativeBaseProvider } from "native-base";

export default function AddVehicle() {

    const [vehicles, setVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        let res = await getVehicles();
        console.log(vehicles);
    },[]);

    const getVehicles = async () => {
        setIsLoading(true);
        const promise = new Promise((resolve, reject) => {
            axios.get('http://192.168.1.24:4000/api/vehicles')
                .then((res) => {
                    setVehicles(res.data);
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
            setIsLoading(false);
        });
        return await promise;
    }

    const AllVehicles = () => {
        console.log(vehicles);
        return vehicles.map((element, i) => {
                return (
                    <Box minHeight={"40"} key={i}>
                        <Center mt="6" mb="4">
                            <FontAwesome5 name="car" size={70} color="#e6f9ff" />
                        </Center>
                        <VStack flex="1" alignItems={"center"} mb={7}>
                            <Heading size={"sm"} color={"#d9d9d9"} mt={"-2"}>  {element.reg_No}    |    {element.type} </Heading>
                            <Text mt={"2"} color={"#d9d9d9"}> <Entypo name="location-pin" size={24} color="#ff9999" />  {element.location}    <Fontisto name="date" size={18} color="black" />   {element.date}    <Ionicons name="time" size={20} color="#f3ffcc" />  {element.time}  </Text>
                            <Heading size={"sm"} color={"#d9d9d9"} mt={"4"}>  Seller :  {element.seller_nic}   |   {element.seller_no}</Heading>
                        </VStack>
                        <Divider my={4} />
                    </Box>
                )
            }
        );
    }

    return (
        <Center flex={1} px="3" backgroundColor={"rgba(7,37,83,0.81)"}>
            <Box top={10} w="100%" style={{position:"relative"}}>
                <Box alignItems="center">
                    <Input w="100%" py={0} InputRightElement={<Button size="ms" rounded="none" w="1/6" h={8}>
                        Search
                    </Button>} placeholder="Reg No" />
                </Box>
            </Box>
            <ScrollView w={["380", "300"]} h="80" mt="12" backgroundColor={"rgba(54,96,129,0.93)"}>
                {isLoading ? 'Loading' : <AllVehicles/>}
            </ScrollView>
        </Center>
    )
}
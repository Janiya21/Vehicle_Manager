import {View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Box, Button, Center, ScrollView} from "native-base";
import {Ionicons} from '@expo/vector-icons';
import axios from "axios";
import { Heading, Text, Input,NativeBaseProvider } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

export default function AddVehicle() {

    const [vehicles, setVehicles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(async () => {
        let res = await getVehicles();
        console.log(res.data);
        console.log(vehicles);
    },[]);

    const getVehicles = async () => {
        setIsLoading(true);
        const promise = new Promise((resolve, reject) => {
            axios.get('http://localhost:4000/api/vehicles')
                .then((res) => {
                    setVehicles(res.data);
                    return resolve(res)
                })
                .finally(() => setIsLoading(false))
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }

    const allVehicles = () => {
        console.log(vehicles);
        return vehicles.map((element) => {
                return (
                    <Box style={{backgroundColor: "#004466", width: "85vw", height: "25vh"}} marginBottom={"10"} p="5" rounded="xl" _text={{
                        fontSize: 'md',
                        fontWeight: 'medium',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <Heading size={"sm"} color={"white"} opacity={"0.8"}>  <FontAwesome5 name="car" size={20} color="white" />   {element.reg_No}   {element.type} </Heading>
                        <Text marginTop={"5"} size="sz" color={"white"} opacity={"0.8"}>{element.location}  |  {element.createdAt}  </Text>
                        <Text marginTop={"3"} size="sz" color={"white"} opacity={"0.8"}>Seller NIC  : {element.seller_nic} </Text>
                        <Text marginTop={"3"} size="sz" color={"white"} opacity={"0.8"}>Seller Tel  : {element.seller_no} </Text>
                        <Text marginTop={"3"} size="sm" color={"white"} >Price  : {element.price} </Text>
                    </Box>
                )
            }
        );
    }

    return (
        <View style={
            {
                backgroundColor: "#004466",
                height:"100vh"
            }
        } >

            <ScrollView flex={"1"} style={
                {
                    backgroundColor: "#005580",
                    minHeight: "94vh",
                    width: "90vw",
                    marginTop:"10vh",
                    marginLeft:"4vw"
                }
            }>

                <Box flex={"1"} top="10">
                    <Center flex={"3"} w="100%" >
                        <Box flex={"2"} w="100%" h="100%" >
                            <Center>
                                {isLoading ? 'Jani' : allVehicles()}
                            </Center>;
                        </Box>
                    </Center>
                </Box>
            </ScrollView>
            <Box mt="3" w="80%"  style={{position:"absolute", marginLeft:"6vw"}}>
                <Box alignItems="center">
                    <Input  w="100%" py="0" InputRightElement={<Button size="ms" rounded="none" w="1/6" h="5vh">
                        Search
                    </Button>} placeholder="Password" />
                </Box>
            </Box>
        </View>
    )
}
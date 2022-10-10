import {View} from 'react-native'
import React, {useEffect, useState} from 'react'
import {Box, Button, Center, ScrollView} from "native-base";
import axios from "axios";
import { Heading, Text, Input } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';

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
                    <Box style={{backgroundColor: "#004466", width: "85%", height: "25%"}} marginBottom={10} p={5} rounded="xl" _text={{
                        fontSize: 'md',
                        fontWeight: 'medium',
                        color: 'white',
                        textAlign: 'center'
                    }}>
                        <Heading size={"sm"} color={"white"}>  <FontAwesome5 name="car" size={20} color="white" />   {element.reg_No}   {element.type} </Heading>
                        {/*<Text marginTop={5} size="sz" color={"white"} >{element.location}  |  {element.createdAt}  </Text>*/}
                        {/*<Text marginTop={5} size="sz" color={"white"}>Seller NIC  : {element.seller_nic} </Text>*/}
                        {/*<Text marginTop={5} size="sz" color={"white"}>Seller Tel  : {element.seller_no} </Text>*/}
                        {/*<Text marginTop={5} size="sm" color={"white"} >Price  : {element.price} </Text>*/}
                    </Box>
                )
            }
        );
    }

    return (
        <View style={
            {
                backgroundColor: "#004466",
                height:"100%"
            }
        } >

            <ScrollView flex={"1"} style={
                {
                    backgroundColor: "#005580",
                    minHeight: "94%",
                    width: "90%",
                    marginTop:"10%",
                    marginLeft:"4%"
                }
            }>
                <Box flex={"1"} top={10}>
                    <Center flex={"3"} w={300} >
                        <Box flex={"2"} w={200} h={300}>
                            <Center>
                                {isLoading ? 'Loading' : allVehicles()}
                            </Center>;
                        </Box>
                    </Center>
                </Box>
            </ScrollView>
            <Box mt={12} w="80%" style={{position:"absolute", marginLeft:"8%"}}>
                <Box alignItems="center">
                    <Input w="100%" py={0} InputRightElement={<Button size="ms" rounded="none" w="1/6" h={8}>
                        Search
                    </Button>} placeholder="Reg No" />
                </Box>
            </Box>
        </View>
    )
}
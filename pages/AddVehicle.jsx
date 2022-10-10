import React, { useState } from 'react'
import {Box, Input, Center,Stack, Icon, NativeBaseProvider, Button, Image, AddIcon, ScrollView, Heading, FormControl, VStack} from "native-base";
import axios from "axios";
import {EvilIcons,MaterialIcons} from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export default function AddVehicle(props) {

    const [vehicleNumber, setVehicleNumber] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [sellerNIC, setSellerNIC] = useState('');
    const [sellerNo, setSellerNo] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const navigate = (props) => {
        props.navigation.navigate('ImageUploader');
    }
    const navigate2 = (props) => {
        props.navigation.navigate('ShowVehicle');
    }

    const submitHandler = async (e) => {
        const obj = {
            "reg_No":vehicleNumber,
            "type":vehicleType,
            "location":location,
            "date":"2022-10-05",
            "time":"16:25",
            "price":price,
            "seller_nic":sellerNIC,
            "seller_no":sellerNo
        }
        let res = await postVehicle(obj);
        alert(res.message);
    }

    const postVehicle = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://192.168.1.24:4000/api/regVehicle', data)
                .then((res) => {
                    console.log(res.message);
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });
        return await promise;
    }

    return (
        <VStack
            style={{
                flex: 1,
                backgroundColor: '#004466',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Button onPress={ () => {navigate2(props)}} style={{top:40, right:20, position:"absolute", backgroundColor:"#004466"}} >View All ></Button>
            <Box flex={1} w="90%" h="100%" style={{marginTop:50}}>
                <MaterialIcons name="add-a-photo" size={100} color="white" style={{marginLeft:125, marginTop:15}}/>
                <Button style={{
                    width: 150,
                    fontWeight: "bold",
                    marginLeft:110,
                    marginTop:20,
                }}
                        onPress={() => {navigate(props)}}
                        leftIcon={<AddIcon style={{ color: "#bd8682"}} />}
                        size="sm"
                >
                    Add Vehicle Image
                </Button>
                <FormControl isRequired style={{marginTop:30}}>
                    <Input
                        value={vehicleNumber}
                        onChange={(event) =>{
                            setVehicleNumber(event.nativeEvent.text)
                        }}
                        mt={"5"}
                        size="sm"
                        placeholder="Reg Number" />
                    <Input
                         value={vehicleType}
                         onChange={(event) =>{
                             setVehicleType(event.nativeEvent.text)
                         }}
                        mt={"5"}
                        size="sm"
                        placeholder="Type" />
                    <Input
                         value={location}
                         onChange={(event) =>{
                             setLocation(event.nativeEvent.text)
                         }}
                        mt={"5"}
                        size="sm"
                        placeholder="Location" />
                    <Input
                         value={price}
                         onChange={(event) =>{
                             setPrice(event.nativeEvent.text)
                         }}
                        mt={"5"}
                        size="sm"
                        placeholder="Price" />
                    <Input
                         value={sellerNIC}
                         onChange={(event) =>{
                             setSellerNIC(event.nativeEvent.text)
                         }}
                        mt={"5"}
                        size="sm"
                        placeholder="Seller NIC" />
                    <Input
                         value={sellerNo}
                         onChange={(event) =>{
                             setSellerNo(event.nativeEvent.text)
                         }}
                        mt={"5"}
                        size="sm"
                        placeholder="Seller Telephone" />
                </FormControl>
                <Button onPress={submitHandler} mt="8" colorScheme="cyan">
                    Submit
                </Button>
            </Box>

        </VStack>
    )
}


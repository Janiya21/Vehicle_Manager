/*
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Stack, Box, Input, Center, Button, Heading, ScrollView, FormControl } from "native-base";
import { EvilIcons } from '@expo/vector-icons';
import axios from 'axios';

export default function AddVehicle(props) {

    const [email, setEmail] = new useState('');
    const [password, setPassword] = new useState('');

    const navigate = (props) => {
        props.navigation.navigate('AddVehicle');
    }

    const submitHandler = async (e) => {
        const obLog = {
            "email": email,
            "password": password
        }

        let res = await login(obLog);
        console.log(res.data.valid);
        if(res.data.valid === "OK"){
            navigate(props)
        }
    }

    const login = async (data) => {
        const promise = new Promise((resolve, reject) => {
            alert(data.email)
            axios.post('http://192.168.202.54:4000/api/login', data)
                .then((res) => {
                    alert(res.data.message);
                    return resolve(res)
                })
                .catch((err) => {
                    alert(err)
                    throw err;
                })
        });
        return await promise;
    }

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

            <Box flex={"1"} top="1/3">
                <Stack w="90%" marginLeft="5">
                    <Box alignItems="center">
                        <Input
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Username" w="80%" />
                    </Box>
                    <Box mt="5" alignItems="center">
                        <Input
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password" w="80%" />
                    </Box>
                    <Box mt="3" alignItems="center">
                        <Button
                            mt="5" w="40%" success
                            onPress={submitHandler}>
                            <Text>Log In</Text>
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </ScrollView>
    )
}*/

import React, { useState } from 'react'
import {VStack, Button, FormControl, Input, NativeBaseProvider, Center, Box, Heading} from 'native-base';
import {EvilIcons} from "@expo/vector-icons";
import axios from 'axios';
import {TextInput} from "react-native";

export default function BuildingAFormExample(props) {
    const [formData, setData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = (props) => {
        props.navigation.navigate('AddVehicle');
    }

    const submitHandler = async (e) => {
        const obLog = {
            "email": email,
            "password": password
        }

        let res = await login(obLog);
        if(res.data.valid === "OK"){
            navigate(props)
        }
    }

    const login = async (data) => {
        const promise = new Promise((resolve, reject) => {
            axios.post('http://192.168.1.24:4000/api/login', data)
                .then((res) => {
                    alert(res.data.message);
                    return resolve(res)
                })
                .catch((err) => {
                    alert(err)
                    throw err;
                })
        });
        return await promise;
    }

   /* const validate = () => {
        if (formData.name === undefined) {
            setErrors({ ...errors,
                name: 'Name is required'
            });
            return false;
        } else if (formData.name.length < 3) {
            setErrors({ ...errors,
                name: 'Name is too short'
            });
            return false;
        }
        return true;
    };

    const onSubmit = (e) => {
        validate() ? submitHandler(e) : console.log('Validation Failed');
    };*/

    return (
        <VStack
            style={{
                flex: 1,
                backgroundColor: '#004466',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
               <Box flex={1} w="90%" h="100%" style={{marginTop:130}} width={250}>
                   <EvilIcons name="user" size={120} color="white" style={{marginLeft:70}} />
                   <Center top="2">
                       <Heading color="white">LOG - IN</Heading>
                   </Center>
                   <FormControl isRequired mt="10">
                       <FormControl.Label _text={{
                           bold: true
                       }}>Name or Email</FormControl.Label>
                       <Input
                           value={email}
                           onChange={(event) =>{
                               // alert(event.nativeEvent.text)
                               setEmail(event.nativeEvent.text)
                           }}
                           size="sm"
                           placeholder="email address" />
                   </FormControl>

                   <FormControl isRequired mt="5">
                       <FormControl.Label _text={{
                           bold: true
                       }}>Password</FormControl.Label>
                       <Input
                           value={password}
                           onChange={(event) =>{
                               // alert(event.nativeEvent.text)
                               setPassword(event.nativeEvent.text)
                           }}
                           size="sm"
                           placeholder="enter password" />
                   </FormControl>
                   <Button onPress={submitHandler} mt="8" colorScheme="cyan">
                       Submit
                   </Button>
               </Box>

        </VStack>
    )
}

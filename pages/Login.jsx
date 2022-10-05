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
            axios.post('http://localhost:4000/api/login', data)
                .then((res) => {
                    alert(res.data.message);
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
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
}
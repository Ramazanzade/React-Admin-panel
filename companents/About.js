import { View, Text, Modal, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import theme from '../assets/styles/theme';
const About = ({ route }) => {
    const { data } = route.params;
   
      
      
      
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Name :</Text>
                <Text style={{ marginRight: 400 }}>{data.name}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Surname :</Text>
                <Text style={{ marginRight: 400 }}>{data.surname}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Age :</Text>
                <Text style={{ marginRight: 400 }}>{data.age}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Live :</Text>
                <Text style={{ marginRight: 400 }}>{data.live}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Work :</Text>
                <Text style={{ marginRight: 400 }}>{data.work}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Fin :</Text>
                <Text style={{ marginRight: 400 }}>{data.fin}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Digital :</Text>
                <Text style={{ marginRight: 400 }}>{data.digital}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Amount :</Text>
                <Text style={{ marginRight: 400 }}>{data.amount}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 50, marginHorizontal: 50 }} >
                <Text> Email :</Text>
                <Text style={{ marginRight: 400 }}>{data.email}</Text>
            </View>
        </View>
    )
}

export default About
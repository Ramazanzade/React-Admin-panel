import { View, Text, TextInput , TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import theme from '../assets/styles/theme'
import axios from 'axios';

const New = ({navigation}) => {
    const [title, settitle] = useState('')
    const [title1, settitle1] = useState('')
    const [title2, settitle2] = useState('')
    const [date, setdate] = useState('')
    const [date1, setdate1] = useState('')
    const [date2, setdate2] = useState('')
    const [text, settext] = useState('')
    const [text1, settext1] = useState('')
    const [text2, settext2] = useState('')

      const add = async()=>{
        try {
            const response = await axios.post(
              'https://bankapi-2puz.onrender.com/api/new/new',
              {
                title: title,
                date: date,
                text:text,
            

              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
      }

      const add1 = async()=>{
        try {
            const response = await axios.post(
              'https://bankapi-2puz.onrender.com/api/new1/new1',
              {
                title: title1,
                date: date1,
                text:text1,
            

              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
      }

      const add2 = async()=>{
        try {
            const response = await axios.post(
              'https://bankapi-2puz.onrender.com/api/new2/new2',
              {
                title: title2,
                date: date2,
                text:text2,
            

              },
              {
                headers: {
                  'Content-Type': 'application/json',
                },
              }
            );
            console.log(response.data);
          } catch (error) {
            console.error(error);
          }
      }
    return (
        <View style={theme.container}>
           <View>
           <View>
                <Text style={theme.text1}>Sənə özəl</Text>
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settext}
                    value={text}
                    placeholder='Text'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={setdate}
                    value={date}
                    placeholder='Tarix'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settitle}
                    value={title}
                    placeholder='Title'/>
            </View>
            <View style={{flexDirection:'row', marginLeft:'20%'}}>
                <TouchableOpacity style={[theme.TouchableOpacity, {backgroundColor:'green'}]} onPress={add}>
                    <Text style={[theme.buttonText]}> Creat </Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.TouchableOpacity} onPress={()=>navigation.navigate("New1")}>
                    <Text style={theme.buttonText}> Wiew</Text>
                </TouchableOpacity>
            </View>
           </View>
           <View>
           <View>
                <Text style={theme.text1}> Xəbərlər</Text>
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settext1}
                    value={text1}
                    placeholder='Text'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={setdate1}
                    value={date1}
                    placeholder='tarix'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settitle1}
                    value={title1}
                    placeholder='Title'/>
            </View>
            <View  style={{flexDirection:'row', marginLeft:'20%'}}>
                <TouchableOpacity style={theme.TouchableOpacity} onPress={add1}>
                    <Text style={theme.buttonText}> Creat </Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.TouchableOpacity} onPress={()=>navigation.navigate("New2")}>
                    <Text style={theme.buttonText}> Wiew</Text>
                </TouchableOpacity>
            </View>
           </View>
           <View>
           <View>
                <Text style={theme.text1}>Partnotlar</Text>
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settext2}
                    value={text2}
                    placeholder='Text'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={setdate2}
                    value={date2}
                    placeholder='Tarix'
                />
                <TextInput
                    style={[theme.input, theme.inputFocused]}
                    onChangeText={settitle2}
                    value={title2}
                    placeholder='Title'/>
            </View>
            <View style={{flexDirection:'row', marginLeft:'20%'}}>
                <TouchableOpacity style={theme.TouchableOpacity} onPress={add2}>
                    <Text style={theme.buttonText}> Creat </Text>
                </TouchableOpacity>
                <TouchableOpacity style={theme.TouchableOpacity} onPress={()=>navigation.navigate("New3")}>
                    <Text style={theme.buttonText}> Wiew</Text>
                </TouchableOpacity>
            </View>
           </View>
        </View>
    )
}

export default New
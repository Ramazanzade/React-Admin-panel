import { View, Text, TextInput,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import theme from '../assets/styles/theme';
import axios from 'axios';
export default function Home() {
    const [name, setname] = useState('');
    const [surname, setsurname] = useState('');
    const [age, setage] = useState('');
    const [fin, setfin] = useState('');
    const [live, setlive] = useState('');
    const [work, setwork] = useState('');
    const [error, seterror]=useState(false)
const Add = async()=>{
    // const userID=JSON.parse(localStorage.getItem('user'))._id;
    if(!name || !surname || !age || !fin || !live || !work ){
        seterror(true)
        return false
    }


    try {
        const response = await axios.post(
          'http://localhost:8082/api/product/product',
          {
            name: name,
            surname: surname,
            age: age,
            fin: fin,
            live: live,
            work: work,
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
    <Text style={theme.text1}>Müştəri məlumatları</Text>
     <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setname}
        value={name}
        placeholder='Name'
        />
   <Text style={theme.valdation}>
   {error && !name && 'Please enter your name'}
</Text>
         <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setsurname}
        value={surname}
        placeholder='Surname'
        />
        <Text style={theme.valdation}>
   {error && !surname && 'Please enter your surname'}
</Text>
         <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setage}
        value={age}      
          placeholder='Age'
/>     <Text style={theme.valdation}>
   {error && !age && 'Please enter your Age'}
</Text>
         <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setlive}
        value={live}
        placeholder='Live'
        />
     <Text style={theme.valdation}>
   {error && !live && 'Please enter your Live'}
</Text>
         <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setwork}
        value={work}
        placeholder='Work'
        />
        <Text style={theme.valdation}>
   {error && !work && 'Please enter your Work'}
</Text>
         <TextInput
        style={[theme.input, theme.inputFocused]}
        onChangeText={setfin}
        value={fin}
        placeholder='Fin'
        />
            <Text style={theme.valdation}>
   {error && !fin && 'Please enter your Fin'}
</Text>
    </View>
    <View>
<TouchableOpacity style={theme.TouchableOpacity} onPress={Add}>
        <Text style={theme.buttonText}> Creat User</Text>
      </TouchableOpacity>
</View>
  </View>
  )
}
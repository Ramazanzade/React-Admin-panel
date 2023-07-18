import { View, Text, TextInput, TouchableOpacity,Button } from 'react-native'
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
  const [digital, setdigital] = useState('');
  const [digital2, setdigital2] = useState('');
  const [digital3, setdigital3] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setamount] = useState('');

  const [error, seterror] = useState(false)
  const Add = async () => {
    if (!name || !surname || !age || !fin || !live || !work || !digital || !email || !amount || !digital2 || !digital3) {
      seterror(true)
      return false
    }


    try {
      const response = await axios.post(
        'https://fluffy-tarsier-c3f7df.netlify.app/api/user/create-user',
        {
          name: name,
          surname: surname,
          age: age,
          fin: fin,
          live: live,
          work: work,
          digital:digital,
          email:email,
          amount:amount,
          digital2:digital2,
          digital3:digital3
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
  const handleButtonPress = () => {
    const randomRoundNumber = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    const randomRoundNumber2 = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    const randomRoundNumber3 = Math.floor(Math.random() * 9000000000000000) + 1000000000000000;
    setdigital(randomRoundNumber.toString());
    setdigital2(randomRoundNumber2.toString());
    setdigital3(randomRoundNumber3.toString());

  };

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
        <TextInput
          style={[theme.input, theme.inputFocused]}
          onChangeText={setdigital}
          value={digital}
          placeholder='Digital number'
        />
        <Text style={theme.valdation}>
          {error && !digital && 'Please enter your digital number'}
        </Text>
        <TouchableOpacity onPress={handleButtonPress} style={{backgroundColor:'#D3D7E8' , width:100 ,height:50, borderRadius:20, margin:20}} >
          <Text style={{textAlign:'center', marginTop:15 ,fontSize:10}}>Random Number</Text>
        </TouchableOpacity>
      
        <TextInput
          style={[theme.input, theme.inputFocused]}
          onChangeText={setEmail}
          value={email}
          placeholder='Email'
        />
        <Text style={theme.valdation}>
          {error && !email && 'Please enter your Email'}
        </Text>
        <TextInput
          style={[theme.input, theme.inputFocused]}
          onChangeText={setamount}
          value={amount}
          placeholder='Məbləğ'
        />
        <Text style={theme.valdation}>
          {error && !amount && 'Please enter your Məbləğ'}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={theme.TouchableOpacity} onPress={Add}>
          <Text style={theme.buttonText}> Creat </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
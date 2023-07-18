import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import theme from '../assets/styles/theme';
import axios from 'axios';
import Delete from './Delete';



export default function ProductsList({ navigation }) {
  const [products, setProducts] = useState([]);
  const [editedData, setEditedData] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const getProducts = async () => {
    try {
      const response = await axios.get(`https://fluffy-tarsier-c3f7df.netlify.app/api/user/`);
      console.log('data');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      console.log('catch');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://bankapi-2puz.onrender.com/api/user/delete/${id}`);
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };
  // const renderItem = ({ item }) => {
  //   return (
  //     <View style={{ flexDirection: 'row' }}>
  //       <TouchableOpacity onPress={() => navigation.navigate("About", { data: item })} style={{ margin: 10, backgroundColor: '#C0D6EB', marginTop: 20, width: '80%' }}>
  //         <View style={theme.item}>
  //           <View style={theme.row}>
  //             <Text style={theme.text}>{item.name} {item.surname}</Text>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //       <TouchableOpacity onPress={() => handleEdit(item._id)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 30, backgroundColor: 'green' }]}>
  //       <Text style={[theme.buttonText, { fontSize: 15 , marginRight:5}]}>Edit</Text>
  //     </TouchableOpacity>
  //       <TouchableOpacity onPress={() => handleDelete(item._id)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 30, backgroundColor: 'green' }]}>
  //         <Text style={[theme.buttonText, { fontSize: 15 }]}>Delete</Text>
  //       </TouchableOpacity>
  //     </View>

  //   );
  // };
  const handleEdit = (id) => {
    const user = products.find(item => item._id === id);
    setEditedData(user);
    setIsModalVisible(true);
  };

  const handleSave = async (id, editedData) => {
    try {
    const response = await axios.put(`https://bankapi-2puz.onrender.com/api/user/users/${id}`, editedData);
    setProducts(products.map(item => {
    if (item._id === id) {
    return response.data;
    }
    return item;
    }));
    setIsModalVisible(false);
    } catch (error) {
    console.error('Error updating user:', error);
    }
    };
  return (
    <View style={theme.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 30 }}>
        {/* <TouchableOpacity onPress={() => navigation.navigate("Home")} style={{ backgroundColor: '#D1CAB9', width: 100, height: 50, borderRadius: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 12 }}> + Add user</Text>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={() => navigation.navigate("New")} style={{ backgroundColor: '#D1CAB9', width: 100, height: 50, borderRadius: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 12 }}> + Add News</Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("Chat")} style={{ backgroundColor: '#D1CAB9', width: 100, height: 50, borderRadius: 10 }}>
          <Text style={{ textAlign: 'center', marginTop: 12 }}> + Chat</Text>
        </TouchableOpacity>



      </View>
      {/* <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id} /> */}



{/* <Delete></Delete> */}






<Modal visible={isModalVisible} animationType="slide">
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <TextInput value={editedData?.name} onChangeText={(text) => setEditedData({ ...editedData, name: text })} placeholder="Name" style={{ borderBottomWidth: 1, padding: 10, width:'80%' , margin:5}} />
    <TextInput value={editedData?.surname} onChangeText={(text) => setEditedData({ ...editedData, surname: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.work} onChangeText={(text) => setEditedData({ ...editedData, work: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5 }} />
    <TextInput value={editedData?.live} onChangeText={(text) => setEditedData({ ...editedData, live: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.digital} onChangeText={(text) => setEditedData({ ...editedData, digital: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5 }} />
    <TextInput value={editedData?.amount} onChangeText={(text) => setEditedData({ ...editedData, amount: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.age} onChangeText={(text) => setEditedData({ ...editedData, age: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.fin} onChangeText={(text) => setEditedData({ ...editedData, fin: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.email} onChangeText={(text) => setEditedData({ ...editedData, email: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
    <TextInput value={editedData?.digital1} onChangeText={(text) => setEditedData({ ...editedData, digital1: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
   <View style={{flexDirection:'row', }}>
   <TouchableOpacity onPress={() => handleSave(editedData?._id, editedData)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 50, backgroundColor: 'green' }]}>
      <Text style={{color:'#FFFFFF',marginRight:5}}>Save</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => setIsModalVisible(false)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 50, backgroundColor: 'green' }]}>
      <Text style={{color:'#FFFFFF'}}>Cancel</Text>
    </TouchableOpacity>
   </View>
  </View>
</Modal>


    </View>
  );
}

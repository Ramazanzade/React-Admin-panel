// import { View, Text, TouchableOpacity, FlatList, Modal , TextInput} from 'react-native'
// import React, { useState, useEffect } from 'react'
// import theme from '../assets/styles/theme';
// import axios from 'axios';
// const New1 = ({ route }) => {
//     const [products, setProducts] = useState([]);
//     const [editedData, setEditedData] = useState(null);
//     const [isModalVisible, setIsModalVisible] = useState(false);


//     const getProducts = async () => {
//         try {
//             const response = await axios.get(`https://bankapi-2puz.onrender.com/api/new/news`);
//             console.log('data');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//             console.log('catch');
//         }
//     };

//     useEffect(() => {
//         getProducts();
//     }, []);

//     const handleDelete = async (id) => {
//         try {
//             await axios.delete(`https://bankapi-2puz.onrender.com/api/new/new/${id}`);
//             getProducts();
//         } catch (error) {
//             console.error(error);
//         }
//     };
//     const renderItem = ({ item }) => {
//         return (
//             <View style={{ flexDirection: 'row' }}>
//                 <TouchableOpacity style={{ margin: 10, backgroundColor: '#C0D6EB', marginTop: 20, width: '80%' }}>
//                     <View style={theme.item}>
//                         <View style={[theme.row ,{flexDirection:'column',justifyContent:'flex-start', alignContent:'flex-start', alignItems:'flex-start' }]}>
//                             <Text style={theme.text}> Title : {item.title}</Text>
//                             <Text style={theme.text}> Date :  {item.date}</Text>
//                             <Text style={theme.text}> Text  :  {item.text}</Text>
//                         </View>
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleEdit(item._id)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 20, backgroundColor: 'green' }]}>
//         <Text style={[theme.buttonText, { fontSize: 15 , marginRight:5}]}>Edit</Text>
//       </TouchableOpacity>
//                 <TouchableOpacity onPress={() => handleDelete(item._id)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 20, backgroundColor: 'green' }]}>
//                     <Text style={[theme.buttonText, { fontSize: 15 }]}>Delete</Text>
//                 </TouchableOpacity>
//             </View>

//         );
//     };
//     const handleEdit = (id) => {
//         const user = products.find(item => item._id === id);
//         setEditedData(user);
//         setIsModalVisible(true);
//       };
    
//       const handleSave = async (id, editedData) => {
//         try {
//         const response = await axios.put(`https://bankapi-2puz.onrender.com/api/new/new/${id}`, editedData);
//         setProducts(products.map(item => {
//         if (item._id === id) {
//         return response.data;
//         }
//         return item;
//         }));
//         setIsModalVisible(false);
//         } catch (error) {
//         console.error('Error updating user:', error);
//         }
//         };
//     return (
//         <View>
//             <FlatList
//                 data={products}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id} />
                
// <View>
// <Modal visible={isModalVisible} animationType="slide">
//   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <TextInput value={editedData?.title} onChangeText={(text) => setEditedData({ ...editedData, title: text })} placeholder="Name" style={{ borderBottomWidth: 1, padding: 10, width:'80%' , margin:5}} />
//     <TextInput value={editedData?.date} onChangeText={(text) => setEditedData({ ...editedData, date: number })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5}} />
//     <TextInput value={editedData?.text} onChangeText={(text) => setEditedData({ ...editedData, text: text })} placeholder="Surname" style={{ borderBottomWidth: 1, padding: 10 , width:'80%' , margin:5 }} />
//    <View style={{flexDirection:'row', }}>
//    <TouchableOpacity onPress={() => handleSave(editedData?._id, editedData)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 50, backgroundColor: 'green' }]}>
//       <Text style={{color:'#FFFFFF',marginRight:5}}>Save</Text>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setIsModalVisible(false)} style={[theme.button, { alignContent: 'flex-end', alignItems: 'flex-end', height: 30, marginTop: 50, backgroundColor: 'green' }]}>
//       <Text style={{color:'#FFFFFF'}}>Cancel</Text>
//     </TouchableOpacity>
//    </View>
//   </View>
// </Modal>
// </View>
                
//         </View>
//     )
// }

// export default New1
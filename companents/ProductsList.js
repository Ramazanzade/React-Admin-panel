import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import theme from '../assets/styles/theme';
import axios from 'axios';


function EditModal({ product, visible, onClose, onSave }) {
    const [name, setName] = useState(product.name);
    const [surname, setSurname] = useState(product.surname);
    const [fin, setFin] = useState(product.fin);
    const [work, setWork] = useState(product.work);
    const [live, setLive] = useState(product.live);
    const [age, setAge] = useState(product.age);
  
    const handleSave = () => {
      onSave({ ...product, name, surname, fin, work, live, age });
      onClose();
    };
  
    return (
      <Modal visible={visible} animationType="slide">
        <View style={theme.modalContainer}>
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Name' value={name} onChangeText={setName} />
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Surname' value={surname} onChangeText={setSurname} />
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Age' value={fin} onChangeText={setFin} />
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Live' value={work} onChangeText={setWork} />
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Work' value={live} onChangeText={setLive} />
          <TextInput style={[theme.input, theme.inputFocused]} placeholder='Fin' value={age} onChangeText={setAge} />
       <View style={theme.modalButtons}>
       <TouchableOpacity onPress={handleSave} style={theme.button}>
            <Text style={theme.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} style={theme.button}>
            <Text style={theme.buttonText}>Cancel</Text>
          </TouchableOpacity>
       </View>
        </View>
      </Modal>
    );
  }
export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8082/api/product/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/api/product/product/${id}`);
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };
  const handleEdit = (item) => {
    setEditingProduct(item);
    setModalVisible(true);

  };
  
  const handleSave = async (editedProduct) => {
    try {
      await axios.put(`http://localhost:8081/api/product/product/${editedProduct.id}`, editedProduct);
      setEditingProduct(null);
      setModalVisible(false);
      getProducts();
    } catch (error) {
      console.error(error);
    }
  };
  const search = async (event) => {
    const key = event.target.value;
    if (key) {
      try {
        const result = await axios.get(`http://localhost:8081/api/product/product/:id/${key}`);
        const data = result.data;
        if (data && data.value > 0) {
          setProducts(data);
        } else {
          console.log("No data found");
        }
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    } else {
      console.log("Please enter a search key");
    }
  };
  const renderItem = ({ item }) => {
    console.log('egdhgsd', item);
    return (
      <View style={theme.item}>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Name:</Text>
          <Text style={theme.text}>{item.name}</Text>
        </View>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Surname:</Text>
          <Text style={theme.text}>{item.surname}</Text>
        </View>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Fin:</Text>
          <Text style={theme.text}>{item.fin}</Text>
        </View>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Work:</Text>
          <Text style={theme.text}>{item.work}</Text>
        </View>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Live:</Text>
          <Text style={theme.text}>{item.live}</Text>
        </View>
        <View style={theme.row}>
          <Text style={[theme.text, theme.heading]}>Age:</Text>
          <Text style={theme.text}>{item.age}</Text>
        </View>
        <View style={theme.buttons}>
          <TouchableOpacity onPress={() => handleDelete(item._id)} style={theme.button}>
            <Text style={theme.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(item)} style={theme.button}>
            <Text style={theme.buttonText}>Update</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <View style={theme.container}>
      <Text style={theme.title}>ProductsList</Text>
      <TextInput
        style={theme.Searchinput}
        onChange={search}
        placeholder='Search'
        />
      <FlatList data={products} renderItem={renderItem} keyExtractor={item => item.id} />
      {editingProduct && (
        <EditModal
          product={editingProduct}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleSave}
        />)}
    </View>
  );
}


    // const sortedData = data.sort((a, b) => a.surname.localeCompare(b.surname));product/:id

import { View, Text } from 'react-native'
import React from 'react'

export default function editingModal() {
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
    }    
  return (
    <View>
    
    return (
      <Modal visible={visible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput style={styles.input} value={name} onChangeText={setName} />
          <TextInput style={styles.input} value={surname} onChangeText={setSurname} />
          <TextInput style={styles.input} value={fin} onChangeText={setFin} />
          <TextInput style={styles.input} value={work} onChangeText={setWork} />
          <TextInput style={styles.input} value={live} onChangeText={setLive} />
          <TextInput style={styles.input} value={age} onChangeText={setAge} />
          <Button title="Save" onPress={handleSave} />
          <Button title="Cancel" onPress={onClose} />
        </View>
      </Modal>
    );
       
    </View>
  )
}
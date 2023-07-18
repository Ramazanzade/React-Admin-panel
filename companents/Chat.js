    // import React, { useState, useEffect } from 'react';
    // import { View, FlatList, Text, TextInput, Button } from 'react-native';
    // import io from 'socket.io-client';

    // export default function Admin() {
    //   const socket = io('https://bankapi-2puz.onrender.com');
    //   const [messages, setMessages] = useState([]);
    //   const [message, setMessage] = useState('');
    //   console.log("Dialog");
    //   const sendMessage = () => {
    //     socket.emit('message', message);
    //     setMessage('');
    //     console.log('las,', message);
    //   };
    //   useEffect(() => {
    //     socket.on('connect', () => {
    //       console.log('Connected to server');
    //     });
    //     socket.on('message', (data) => {
    //       console.log('Message from app:', data);
    //       setMessages((prevMessages) => [...prevMessages, { id: Date.now(), message: data }]);
    //     });
    //   }, []);



    //   return (
    //     <View style={{ flex: 1 }}>
    //       <FlatList
    //         data={messages}
    //         keyExtractor={(item, index) => index.toString()}
    //         renderItem={({ item }) => (
    //           <View style={{ padding: 10 , marginLeft:'80%' }}>
    //             <Text>{item.message}</Text>
    //           </View>
    //         )}
    //       />
    //       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //         <TextInput
    //           style={{ flex: 1, height: 40, margin: 10, borderWidth: 1, padding: 10 }}
    //           value={message}
    //           onChangeText={(text) => setMessage(text)}
    //           placeholder="Type a message"
    //         />
    //         <Button title="Send" onPress={sendMessage} />
    //       </View>
    //     </View>
    //   );
    // }
    import React, { useState, useEffect } from 'react';
    import { View, Button, Image, Text } from 'react-native';
    import axios from 'axios';
    
    const Chat = () => {
      const [uploadedFiles, setUploadedFiles] = useState([]);
    
      const fetchUploadedFiles = async () => {
        try {
          const response = await axios.get('https://marvel-backend2.onrender.com/api/file/');
          setUploadedFiles(response.data);
        } catch (err) {
          console.log('Error fetching uploaded files:', err);
        }
      };
    
      useEffect(() => {
        fetchUploadedFiles();
      }, []);
    
      return (
        <View>
          <Button title="Refresh Files" onPress={fetchUploadedFiles} />
    
          {uploadedFiles.map((file) => (
            <View key={file._id}>
              <Text>{file.category}</Text>
<View style={{ width: 200, height: 200 }} >
<Image source={{ uri: `https://marvel-backend2.onrender.com/api/file/file/${file.filename}` }} style={{ width: 100, height: 100 }} />
</View>
            </View>
          ))}
        </View>
      );
    };
    
    export default Chat;
    

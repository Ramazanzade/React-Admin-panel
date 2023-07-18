// import React, { useState , useEffect} from 'react';
// import { View, Button, TouchableOpacity, Text, Image } from 'react-native';
// import axios from 'axios';
// import * as ImagePicker from 'expo-image-picker';
// import * as Permissions from 'expo-permissions';
// const Delete = ({ navigation }) => {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [viewFile, setViewFile] = useState(null);
//   const [uploadError, setUploadError] = useState(null);



//   const selectFile = async () => {
//     try {
//       const result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         quality: 1,
//       });
  
//       if (!result.canceled) {
//         const selectedAsset = result.assets[0];
//       const { uri, type , name} = selectedAsset;

//       setSelectedFile({
//         uri,
//         type,
//         name
//       });
//       console.log('Selected file URI:', uri);
//       console.log('Selected file type:', type);
//       console.log('Selected file type:', name);
//       } else {
//         console.log('Image selection cancelled');
//       }
//     } catch (error) {
//       console.log('Error selecting image:', error);
//     }
//   };
//   const uploadFile = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('file',selectedFile);
  
//       const response = await axios.post(
//         'https://marvel-backend2.onrender.com/api/file/file',
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
  
//       console.log(response.data);
  
//       if (response.data && response.data.length > 0) {
//         setViewFile(response.data[0].url);
//         console.log('File uploaded successfully:', response.data);
//       } else {
//         console.log('Error uploading file:', response.data);
//         setUploadError('Error uploading file. Please try again.');
//       }
//     } catch (err) {
//       console.log('Error uploading file:', err);
//       setUploadError('Error uploading file. Please try again.');
//     }
//   };
  

//   return (
//     <View>
//       <TouchableOpacity
//         onPress={() => navigation.navigate('Chat')}
//         style={{
//           backgroundColor: '#D1CAB9',
//           width: 100,
//           height: 50,
//           borderRadius: 10,
//         }}
//       >
//         <Text style={{ textAlign: 'center', marginTop: 12 }}> + Chat</Text>
//       </TouchableOpacity>

//       <Button title="Select File" onPress={selectFile} />
//       {selectedFile && <Button title="Upload File" onPress={uploadFile} />}

//       {viewFile && (
//         <View>
//           <Text>Uploaded File:</Text>
//           <Image
//             source={{ uri: viewFile }} 
//             style={{ width: 200, height: 200 }}
//           />
//         </View>
//       )}

//       {uploadError && <Text>{uploadError}</Text>}
//     </View>
//   );
// };

// export default Delete;


import React, { useState } from 'react';
import axios from 'axios';

const Delete = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const uploadFile = async () => {
    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await axios.post(
        'https://marvel-backend2.onrender.com/api/file/file',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log(response.data);

      if (response.data && response.data.length > 0) {
        console.log('File uploaded successfully:', response.data);
      } else {
        console.log('Error uploading file:', response.data);
        setUploadError('Error uploading file. Please try again.');
      }
    } catch (err) {
      console.log('Error uploading file:', err);
      setUploadError('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={uploadFile}>Upload File</button>
      {uploadError && <p>{uploadError}</p>}
    </div>
  );
};

export default Delete;


import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    text1: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 16,
      },
      input: {
        padding: 20,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
    marginVertical: 5,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    width:'80%',
    marginLeft:20   


    // margin:20,
   
      },
      inputFocused: {
        backgroundColor: '#ddd',
      },
     
      container: {
            marginLeft:15   
        
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      item: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#F7F7F7',
        borderRadius: 5,
        elevation: 3,
        borderBottomWidth:2,
        borderBottomColor:'green',
        // borderTopWidth:1

      },
      row: {
        flexDirection: 'row',
        marginBottom: 5,
      },
      text: {
        fontSize: 16,
        color: '#333',
        textAlign:'center',
        // margin:50
      },
      heading: {
        fontWeight: 'bold',
        width: 80,
        color: '#555',
      },
      TouchableOpacity:{
        backgroundColor: 'green',
        padding: 10,
        paddingHorizontal: 25,
        borderRadius: 4,
        marginRight:'20%',
        alignSelf: 'flex-end',
        width:100,
        height:35,
        marginBottom:10
      },
      buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    paddingBottom:5,
    marginTop:-3
      },
      buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10,
      },
      button: {
        backgroundColor: '#2196F3',
        borderRadius: 5,
        padding: 5,
        marginLeft: 10,
        minWidth: 50,
      },
      Searchinput:{
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 5,
        margin: 10,
        width:200
      },
      modalContainer: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 20,
      },
      inputContainer: {
        marginBottom: 20,
      },
      modalInput: {
        marginBottom: 10,
        
      },
      modalButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        

      },
      valdation:{
        color: 'red',
         fontSize: 12, 
         margin: 5 
      }
        });

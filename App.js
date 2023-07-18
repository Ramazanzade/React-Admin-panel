import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import theme from './assets/styles/theme';
import AnimatedBackground from './companents/AnimatedBackground';
import Home from './companents/Home';
import ProductsList from './companents/ProductsList';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import About from './companents/About';
import New from './companents/New';
import New1 from './companents/New1';
import New2 from './companents/New2';
import New3 from './companents/New3';
import Chat from './companents/Chat';
import Delete from './companents/Delete';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="ProductsList" component={ProductsList} /> 
        <Stack.Screen name="Home" component={Home} />  */}
         {/* <Stack.Screen name="About" component={About} />
        <Stack.Screen name="New" component={New} />
        <Stack.Screen name="New1" component={New1} />
        <Stack.Screen name="New2" component={New2} /> */}
        <Stack.Screen name="Delete" component={Delete} />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  container1: {
    overflow: 'hidden'
  },

  content: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 1,
  },
});

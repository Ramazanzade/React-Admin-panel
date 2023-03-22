import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import theme from './assets/styles/theme';
import AnimatedBackground from './companents/AnimatedBackground';
import Home from './companents/Home';
import ProductsList from './companents/ProductsList';

export default function App() {
  return (
    <View style={styles.container}>
    <View style={styles.container1}>
    <AnimatedBackground></AnimatedBackground>
    </View>
    <View style={styles.content}>
      <Home/>
      <ProductsList />
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    position:"relative",
  },
  container1:{
overflow:'hidden'
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

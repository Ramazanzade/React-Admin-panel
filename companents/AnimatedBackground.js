import React from 'react';
import { StyleSheet, View, Animated, Easing, Dimensions } from 'react-native';

const AnimatedBackground = () => {
  const backgroundColor1 = new Animated.Value(0);
  const backgroundColor2 = new Animated.Value(0);
  const backgroundColor3 = new Animated.Value(0);
  const scaleX = new Animated.Value(0);
  const scaleY = new Animated.Value(0);
  const translateX = new Animated.Value(0);
  const translateY = new Animated.Value(0);
  const animateBackground = () => {
    backgroundColor1.setValue(0);
    backgroundColor2.setValue(0);
    backgroundColor3.setValue(0);
    scaleX.setValue(0);
    scaleY.setValue(0);
    translateX.setValue(0);
    translateY.setValue(0);

    const { width } = Dimensions.  get('window');
    Animated.parallel([
      Animated.timing(backgroundColor1, {
        toValue: 1,
        duration: 4000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColor2, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(backgroundColor3, {
        toValue: 1,
        duration: 10000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(scaleX, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(translateX, {
        toValue: width * 0.5,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(translateY, {
        toValue: height * 0.5,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
      Animated.timing(scaleY, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ]).start(() => animateBackground());
  };

  React.useEffect(() => {
    animateBackground();
  }, []);

  const interpolateColors = [backgroundColor1, backgroundColor2, backgroundColor3].map((bgColor) =>
    bgColor.interpolate({
      inputRange: [0, 1],
      outputRange: ['#4b6cb7', '#F5F5F5'],
    })
  );

  const { width, height } = Dimensions.get('window');
  const animatedStyles = {
    backgroundColor: interpolateColors[0],
    transform: [
      {
        rotate: backgroundColor2.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
        }),
      },
      {
        translateY: backgroundColor2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 20],
        }),
      },
      {
        scale: backgroundColor2.interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.2],
        }),
      },
      {
        scaleX,
      },
      {
        scaleY,
      },
    ],
  };

  return <View style={[styles.container, { width, height }]}><Animated.View style={[styles.background, animatedStyles]} /></View>;
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      background: {
        width: '100%',
        height: '100%',
      },
});

export default AnimatedBackground;

























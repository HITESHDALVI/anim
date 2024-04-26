import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const AnimatedFlipCard = () => {
  const spin = useSharedValue(0);
  const cardStyle = useAnimatedStyle(() => {
    const spinValue = interpolate(spin.value, [0, 1], [180, 360]);
    return {
      transform: [{rotateY: withTiming(`${spinValue}deg`)}],
    };
  });
  const handlePress = () => {
    spin.value = spin.value == 0 ? 1 : 0;
  };
  return (
    <View style={[styles.container]}>
      <View>
        <Animated.Image
          source={require('./assets/hulk_2.jpeg')}
          style={[styles.img1, cardStyle]}
          resizeMode="cover"
        />
        <Animated.Image
          source={require('./assets/banner.png')}
          style={[styles.img2, cardStyle]}
          resizeMode="cover"
        />
      </View>
      <TouchableOpacity style={[styles.button]} onPress={handlePress}>
        <Text style={[styles.text]}>Flip Card</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedFlipCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img1: {
    height: 550,
    width: 300,
    borderRadius: 15,
    position: 'absolute',
  },
  img2: {
    height: 550,
    width: 300,
    borderRadius: 15,
    backfaceVisibility: 'hidden',
  },
  text: {
    color: 'orange',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
  },
  button: {
    borderColor: 'orange',
    borderWidth: 1.25,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: '10%',
  },
});

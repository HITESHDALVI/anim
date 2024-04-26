import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

import HomeIcon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withClamp,
  withDecay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
type Props = {};

const AnimationBasics = (props: Props) => {
  const anim = useSharedValue(0);
  const [animState, setAnimState] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        // {translateX: anim.value},
        // {translateY: anim.value},
        // {rotate: `${anim.value}deg`},
        {scale: anim.value},
      ],
    };
  });
  return (
    <View style={[styles.container]}>
      <Animated.View style={[animatedStyle]}>
        <HomeIcon name="home" size={35} color="indigo" />
      </Animated.View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {
          if (animState) {
            setAnimState(false);
            anim.value = withSpring(1);
          } else {
            setAnimState(true);
            anim.value = withSpring(0.5);
          }
        }}>
        <Text style={[styles.text]}>AnimationBasics</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnimationBasics;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'orange',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  button: {
    borderWidth: 0.5,
    borderColor: 'indigo',
    padding: 6,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginVertical: 20,
  },
});

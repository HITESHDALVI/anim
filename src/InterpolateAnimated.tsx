import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

const InterpolateAnimated = (props: Props) => {
  const anim = useSharedValue(1);
  const [animState, setAnimState] = useState(false);

  const animationStyle = useAnimatedStyle(() => {
    const width = interpolate(anim.value, [1, 0], [100, 200]);
    const color = interpolateColor(anim.value, [1, 0], ['red', 'orange']);
    const radius = interpolate(anim.value, [1, 0], [10, 0]);

    return {
      width: width,
      height: width,
      backgroundColor: color,
      borderRadius: radius,
    };
  });
  return (
    <View style={[styles.container]}>
      <Animated.View
        style={[
          {
            backgroundColor: 'orange',
            height: 100,
            width: 100,
          },
          animationStyle,
        ]}></Animated.View>

      <TouchableOpacity
        style={[styles.button]}
        onPress={() => {
          console.log({animState, anim});
          if (animState) {
            anim.value = withTiming(1, {duration: 1000});
            // anim.value = 1;
          } else {
            anim.value = withTiming(0, {duration: 1000});
            // anim.value = 0;
          }
          setAnimState(!animState);
        }}>
        <Text style={[styles.text]}>Interpolate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InterpolateAnimated;

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

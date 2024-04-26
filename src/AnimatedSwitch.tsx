import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

const AnimatedSwitch = (props: Props) => {
  const animation = useSharedValue(0);
  const [day, setDay] = useState(true);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animation.value}],
    };
  });
  const handlePress = () => {
    if (animation.value === 0) {
      animation.value = withTiming(100, {duration: 500});
    } else {
      animation.value = withTiming(0, {duration: 500});
    }
    setDay(!day);
  };
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: day ? 'white' : '#1B3C73'}]}
        onPress={handlePress}>
        <Animated.View style={[styles.day, animatedStyle]}>
          <Icon
            name={day ? 'partly-sunny' : 'cloudy-night'}
            size={25}
            color={day ? 'orange' : 'white'}
          />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedSwitch;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {
    width: 150,
    height: 45,
    borderRadius: 50,
    borderWidth: 0,
    borderColor: '#0e0e0e',
    paddingHorizontal: '1%',
    shadowColor: '#B5C0D0',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 1,
    shadowRadius: 50,
    elevation: 4,
  },
  day: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

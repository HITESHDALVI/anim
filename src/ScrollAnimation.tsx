import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';

type Props = {};

const ScrollAnimation = (props: Props) => {
  const animX = useSharedValue(0);
  const animY = useSharedValue(0);
  const [animState, setAnimState] = useState(false);

  const genstureHandler = useAnimatedGestureHandler({
    onStart: (e, c) => {
      c.startX = animX.value;
      c.startY = animY.value;
    },
    onActive: (e, c) => {
      animX.value = c.startX + e.translationX;
      animY.value = c.startY + e.translationX;
    },

    onEnd: (e, c) => {
      //   animX.value = withSpring(0);
      //   animY.value = withSpring(0);
      animX.value = withTiming(0, {duration: 500});
      animY.value = withTiming(0, {duration: 500});
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animX.value}, {translateY: animY.value}],
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={[styles.container]}>
        <PanGestureHandler onGestureEvent={genstureHandler}>
          <Animated.View
            style={[
              {
                backgroundColor: 'orange',
                height: 100,
                width: 100,
              },
              animatedStyle,
            ]}></Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default ScrollAnimation;

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    // height: '100%',
    flex: 1,

    // alignItems: 'center',
    // justifyContent: 'center',
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

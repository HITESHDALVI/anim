import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useCallback} from 'react';
import Like from 'react-native-vector-icons/Ionicons';
import {
  GestureHandlerRootView,
  TapGestureHandler,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';

type Props = {};

const LikeAnimation = (props: Props) => {
  const scale = useSharedValue(0);
  const doubleTap = useCallback(() => {
    scale.value = withSpring(1, undefined, isFinished => {
      if (isFinished) {
        scale.value = withDelay(250, withSpring(0));
      }
    });
  }, []);
  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{scale: Math.max(scale.value, 0)}]};
  });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={[styles.container]}>
        <TapGestureHandler
          numberOfTaps={2}
          maxDelayMs={250}
          onActivated={doubleTap}>
          <Animated.View>
            <ImageBackground
              source={require('./spiderman.jpg')}
              style={[styles.like]}>
              <Animated.View style={[animatedStyle]}>
                <Like name="heart" size={100} color="red" />
              </Animated.View>
            </ImageBackground>
          </Animated.View>
        </TapGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default LikeAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  like: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

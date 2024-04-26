import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler} from 'react-native-reanimated';

type Props = {};

const bgImage =
  'https://images.unsplash.com/photo-1710447177159-c4ae694ba09b?q=80&w=3026&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const AnimatedZoom = (props: Props) => {
  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        console.log({event});
      },
    });
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={[styles.container]}>
        <PinchGestureHandler onGestureEvent={pinchHandler}>
          <Text>fff</Text>
          <Image source={{uri: bgImage}} style={{flex: 1}} />
        </PinchGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default AnimatedZoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

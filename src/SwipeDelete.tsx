import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import {AnimatedView} from 'react-native-reanimated/lib/typescript/reanimated2/component/View';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconDown from 'react-native-vector-icons/Ionicons';

type Props = {};

const SwipeDelete = (props: Props) => {
  const animated = useSharedValue(0);
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.startX = animated.value;
    },
    onActive: (event, ctx) => {
      animated.value = ctx.startX + event.translationX;
    },
    onEnd: (event, ctx) => {
      animated.value = withTiming(0, {duration: 500});
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animated.value}],
    };
  });
  const animatedIconLeftStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animated.value > 70 ? withSpring(1.45) : withSpring(1)},
      ],
    };
  });
  const animatedIconRightStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {scale: animated.value > -70 ? withSpring(1) : withSpring(1.45)},
      ],
    };
  });

  const animatedBg = useAnimatedStyle(() => {
    return {
      backgroundColor: animated.value < 0 ? 'red' : 'green',
    };
  });
  return (
    <GestureHandlerRootView style={{flex: 1, alignItems: 'center'}}>
      <View style={[styles.container]}>
        <PanGestureHandler onGestureEvent={gestureHandler}>
          <Animated.View
            style={[styles.shadow, styles.parentWrapper, animatedBg]}>
            <Animated.View style={[{marginLeft: '4%'}, animatedIconLeftStyle]}>
              <IconDown name="download-outline" size={25} color="white" />
            </Animated.View>
            <Animated.View
              style={[{marginRight: '4%'}, animatedIconRightStyle]}>
              <Icon name="delete" size={25} color="white" />
            </Animated.View>
            <Animated.View
              style={[
                styles.shadow,
                styles.child,
                styles.messageWrapper,
                animatedStyle,
              ]}>
              <View style={[styles.profile]}>
                <Text style={{color: 'white', fontSize: 22, fontWeight: '600'}}>
                  HD
                </Text>
              </View>
              <View style={[styles.message]}>
                <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
                  React-Native
                </Text>
                <Text style={{color: 'gray', fontSize: 14, fontWeight: '500'}}>
                  One message for Latest Update
                </Text>
              </View>
            </Animated.View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </GestureHandlerRootView>
  );
};

export default SwipeDelete;
const styles = StyleSheet.create({
  messageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  message: {
    width: '80%',
    height: '60%',
    paddingHorizontal: '2%',
    paddingVertical: '1%',
  },
  profile: {
    backgroundColor: 'orange',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '40%',
    width: Dimensions.get('window').width - 25,
  },
  shadow: {
    shadowOffset: {width: 1, height: 2},
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    borderRadius: 8,
  },
  parentWrapper: {
    backgroundColor: 'green',
    width: '100%',
    height: 80,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  child: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});

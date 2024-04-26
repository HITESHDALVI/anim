import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

type Props = {};

const {width, height} = Dimensions.get('window');

const ListItem = (props: Props) => {
  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = props?.currentIndex;
  }, [props?.currentIndex]);

  console.log(
    animation.value == props?.index,
    ' animation.value === props?.index',
  );
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale:
            animation.value == props?.index ? withSpring(1) : withSpring(0.85),
        },
      ],
    };
  });
  return (
    <Animated.View
      key={props.index}
      style={[
        {
          width: width,
          height: height / 1.9,
          // marginHorizontal: 20,
          // backgroundColor: 'red',
        },
        animatedStyle,
      ]}>
      <Image
        source={props?.item}
        resizeMode="contain"
        style={{width: '100%', height: '100%'}}
      />
    </Animated.View>
  );
};

export default ListItem;

const styles = StyleSheet.create({});

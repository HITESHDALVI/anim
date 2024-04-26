import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const {width, height} = Dimensions.get('window');

type Props = {};

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const AnimatedNavbar = (props: Props) => {
  const [selected, setSelected] = useState(0);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const animatedHomeY = useSharedValue(0);
  const animatedCartY = useSharedValue(0);
  const animatedProfileY = useSharedValue(0);
  const handlePress = (id: number) => {
    setSelected(id);
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: animatedX.value}, {translateY: animatedY.value}],
    };
  });

  const animatedHomeBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedHomeY.value}],
    };
  });
  const animatedCartBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedCartY.value}],
    };
  });
  const animatedProfileBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: animatedProfileY.value}],
    };
  });
  useEffect(() => {
    if (selected === 0) {
      animatedY.value = withTiming(80, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming((width * 0.15) / 100, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});

        setTimeout(() => {
          animatedHomeY.value = withSpring(-50);
        }, 500);
        setTimeout(() => {
          animatedHomeY.value = withSpring(0);
        }, 1000);
      }, 1000);
    } else if (selected === 1) {
      animatedY.value = withTiming(80, {duration: 500});
      setTimeout(() => {
        animatedX.value = withTiming(width / 3.5, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});
        setTimeout(() => {
          animatedCartY.value = withSpring(-50);
        }, 500);
        setTimeout(() => {
          animatedCartY.value = withSpring(0);
        }, 1000);
      }, 1000);
    } else {
      animatedY.value = withTiming(80, {duration: 500});

      setTimeout(() => {
        animatedX.value = withTiming(width / 1.75, {duration: 500});
      }, 500);
      setTimeout(() => {
        animatedY.value = withTiming(0, {duration: 500});

        setTimeout(() => {
          animatedProfileY.value = withSpring(-50);
        }, 500);
        setTimeout(() => {
          animatedProfileY.value = withSpring(0);
        }, 1000);
      }, 1000);
    }
  }, [selected]);

  return (
    <View style={[styles.container]}>
      <View style={[styles.nav]}>
        <Animated.View style={[styles.bg, animatedStyle]} />
        <AnimatedBtn
          style={[styles.button, animatedHomeBtnStyle]}
          onPress={() => handlePress(0)}>
          <Icon name={'home'} size={25} color={'#7077A1'} />
        </AnimatedBtn>
        <AnimatedBtn
          style={[styles.button, animatedCartBtnStyle]}
          onPress={() => handlePress(1)}>
          <Icon name={'bag-handle'} size={25} color={'#7077A1'} />
        </AnimatedBtn>
        <AnimatedBtn
          style={[styles.button, animatedProfileBtnStyle]}
          onPress={() => handlePress(2)}>
          <Icon name={'person-circle-outline'} size={30} color={'#7077A1'} />
        </AnimatedBtn>
      </View>
    </View>
  );
};

export default AnimatedNavbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bg: {
    width: 60,
    height: 60,
    position: 'absolute',
    backgroundColor: '#FF9843',
    borderRadius: 50,
  },
  nav: {
    position: 'absolute',
    bottom: 0,
    height: 70,
    width: '100%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#EEF5FF',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    shadowColor: 'black',
  },
  button: {
    height: 60,
    width: 60,

    alignItems: 'center',
    justifyContent: 'center',
  },
});

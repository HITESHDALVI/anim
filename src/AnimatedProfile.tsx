import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};
const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity);
const {width, height} = Dimensions.get('window');

const AnimatedProfile = (props: Props) => {
  const animatedProfileWidth = useSharedValue(70);
  const animatedProfileHeight = useSharedValue(70);
  const animatedProfileY = useSharedValue(0);
  const animatedProfileClose = useSharedValue(0);
  const [profile, setprofile] = useState(false);
  const animatedProfileStyle = useAnimatedStyle(() => {
    return {
      width: animatedProfileWidth.value,
      height: animatedProfileHeight.value,
      transform: [{translateY: animatedProfileY.value}],
    };
  });
  const handleProfileClick = () => {
    if (animatedProfileWidth.value == 70) {
      animatedProfileWidth.value = withTiming(width - 40, {duration: 500});
      animatedProfileHeight.value = withTiming(width - 40, {duration: 500});
      animatedProfileY.value = withTiming(150, {duration: 500});
      animatedProfileClose.value = withTiming(1, {duration: 500});
    } else {
      animatedProfileClose.value = withTiming(0, {duration: 500});
      animatedProfileWidth.value = withTiming(70, {duration: 500});
      animatedProfileHeight.value = withTiming(70, {duration: 500});
      animatedProfileY.value = withTiming(0, {duration: 500});
    }
    setprofile(!profile);
  };

  const animatedProfileCloseStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: animatedProfileClose.value}],
    };
  });
  return (
    <View style={[styles.container]}>
      <AnimatedBtn
        style={[{width: 50, height: 50}, animatedProfileCloseStyle]}
        onPress={handleProfileClick}>
        <Icon name={'close'} size={50} color={'white'} />
      </AnimatedBtn>

      <TouchableOpacity onPress={handleProfileClick}>
        <AnimatedImage
          source={require('./assets/Profile.png')}
          style={[styles.profile, animatedProfileStyle]}
        />
      </TouchableOpacity>
      <Animated.View
        style={{
          height: 60,
          width,
          backgroundColor: '#000000',
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}>
        <Icon name={'home'} size={30} color={'white'} />
        <Icon name={'albums'} size={30} color={'white'} />
        <Icon name={'person-circle-outline'} size={30} color={'white'} />
        <Icon name={'settings-outline'} size={30} color={'white'} />
      </Animated.View>
    </View>
  );
};

export default AnimatedProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070A52',
  },
  profile: {
    width: 70,
    height: 70,
    marginLeft: 20,
    marginTop: 20,
    resizeMode: 'contain',
  },
});

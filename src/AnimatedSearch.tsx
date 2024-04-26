import {
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Search from 'react-native-vector-icons/Ionicons';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {};

const AnimatedSearch = (props: Props) => {
  const value = useSharedValue(1);
  const [search, setSearch] = useState(false);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      width:
        value.value == 1
          ? withTiming(300, {duration: 500})
          : withTiming(50, {duration: 500}),
      // value.value == 1 ? 300 : 50,
    };
  });

  return (
    <View style={[styles.container]}>
      <Animated.View style={[styles.search, animatedStyle]}>
        <TextInput
          style={{width: !search ? '85%' : '0%'}}
          placeholder="Search Here...!"
        />
        <TouchableOpacity
          onPress={() => {
            if (value.value === 1) {
              value.value = 0;
            } else {
              value.value = 1;
            }
            setSearch(!search);
          }}>
          <Search name="search" size={25} color="#0e0e0e" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default AnimatedSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search: {
    width: Dimensions.get('window').width - 50,
    height: 50,
    backgroundColor: '#E7E7E7',
    opacity: 0.85,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: '50%',
  },
});

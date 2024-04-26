import {Dimensions, FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Image3, Image4, Image5, Image6} from './assets';
import ListItem from './ListItem';

type Props = {};
const {width, height} = Dimensions.get('window');

const AnimatedList = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View style={[styles.container]}>
      <FlatList
        onScroll={e => {
          const x = e.nativeEvent.contentOffset.x;

          setCurrentIndex((x / width).toFixed(0));
        }}
        data={[Image3, Image4, Image5, Image6, Image3, Image4, Image5, Image6]}
        renderItem={({item, index}) => {
          return (
            <ListItem item={item} index={index} currentIndex={currentIndex} />
          );
        }}
        contentContainerStyle={{
          height: '70%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        horizontal
        pagingEnabled
      />
    </View>
  );
};

export default AnimatedList;

const styles = StyleSheet.create({
  container: {
    height: height - 50,
    width: width,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingTop: '25%',
  },
});

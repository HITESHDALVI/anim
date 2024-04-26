import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {AnimatedNavbar, AnimatedFlipCard, AnimatedZoom} from './src';

const {width, height} = Dimensions.get('window');

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.white,
  };

  return (
    <SafeAreaView
      style={[
        backgroundStyle,
        {
          flex: 1,
        },
      ]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <AnimationBasics /> */}
      {/* <InterpolateAnimated /> */}
      {/* <ScrollAnimation /> */}
      {/* <LikeAnimation /> */}
      {/* <AnimatedSearch /> */}
      {/* <SwipeDelete /> */}
      {/* <AnimatedList /> */}
      {/* <AnimatedSwitch /> */}
      {/* <AnimatedProfile /> */}
      {/* <AnimatedCart /> */}
      {/* <AnimatedNavbar /> */}
      {/* <AnimatedFlipCard /> */}
      <AnimatedZoom />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});

export default App;

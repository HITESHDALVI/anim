import {
  ActivityIndicator,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
type Props = {};

const {width, height} = Dimensions.get('window');

const AnimatedCart = (props: Props) => {
  const [count, setCount] = useState(0);
  const [button, setButton] = useState(false);
  const animatedX = useSharedValue(0);
  const animatedY = useSharedValue(0);
  const scale = useSharedValue(0);
  const scaleCount = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: animatedX.value},
        {translateY: animatedY.value},
        {scale: scale.value},
      ],
    };
  });
  const animatedCountStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleCount.value}],
    };
  });
  const handleCart = () => {
    if (animatedX.value == 0) {
      setCount(count + 1);
      setButton(true);
      scale.value = 1;
      animatedX.value = withTiming(width / 2.35, {duration: 1200});
      animatedY.value = withTiming(-height / 1.23, {duration: 1200});
    }
  };
  useEffect(() => {
    if (button) {
      setTimeout(() => {
        scaleCount.value = withSpring(1.5);
        setCount(count + 1);
        setButton(false);
        scale.value = 0;
        animatedX.value = 0;
        animatedY.value = 0;
        setTimeout(() => {
          scaleCount.value = withSpring(1);
        }, 250);
      }, 1500);
    }
  }, [button]);

  return (
    <View style={[styles.container]}>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={[styles.prod]}
        showsVerticalScrollIndicator={false}>
        <View style={[styles.cart]}>
          <Animated.View style={[styles.qty, animatedCountStyle]}>
            <Text style={[styles.qtyText]}>{count}</Text>
          </Animated.View>
          <Icon name={'shopping-bag'} size={32} color={'#0e0e0e'} />
        </View>
        <Image source={require('./assets/image7.png')} style={[styles.image]} />
        <View style={[styles.description]}>
          <Text style={[styles.title]}>Asics EDGE GT-2000 11 </Text>
          <View style={[styles.priceWrapper]}>
            <Text style={[styles.subtitle]}>Men Running Shoes</Text>
            <Text style={[styles.price]}>$ 120</Text>
          </View>
          <Text style={[styles.desc]}>
            ASICS Men's Running Shoes: Comfort meets style for active strides.
            Elevate your style game with ASICS – Unbeatable discounts on Running
            Shoes. Limited Period Offer. Free Shipping. Unparalleled
            Performance. GEL Cushioning. Types: Men's Footwear, Women's
            Footwear. {`\n`}Choose ASICS men’s running shoes to power your
            workout and help you surpass your goals. Popular with casual
            enthusiasts, serious marathon runners and professional athletes
            alike, our running shoes for men have a global reputation for
            superior comfort, incredible durability plus iconic style and design
            features which make you stand out from the crowd. Whether you’re
            into road running, track and field, trail running, or clocking up
            the miles on your gym’s machines, we’ve got the perfect men’s
            running shoes for your activity. {`\n`} Running can put strain on
            your feet and joints, so it’s essential to select footwear that
            specifically targets the kind of running you do. If you need shoes
            to address overpronation, or underpronation, or even if you are a
            neutral pronation runner, ASICS has a shoe to help you get the most
            out of each run. Need a wide shoe? ASICS has a great selection of
            extended width running shoes as well. {`\n`}ASICS is heavily
            invested in innovative technologies that match your style and needs
            – whether it’s Gore-Tex® protection for running in mud and snow or
            our unique GEL® technology to take the shock out of your run. Even
            if you are just exploring our site for the men’s best running shoe
            for you – the Shoe Finder can help runners of every level, gait, and
            pronation find the best matching shoe for them.
          </Text>
        </View>
      </ScrollView>
      <Animated.View style={[styles.increase, animatedStyle]}>
        <Text style={[styles.qtyText]}>+1</Text>
      </Animated.View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={handleCart}
        // disabled={button}
      >
        {button ? (
          <ActivityIndicator color={'white'} size={'small'} />
        ) : (
          <>
            <Icon name={'shopping-bag'} size={25} color={'white'} />
            <Text style={[styles.cartText]}>Add to Cart</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default AnimatedCart;

const styles = StyleSheet.create({
  increase: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
  prod: {
    alignItems: 'center',
    flexGrow: 1,
  },
  image: {
    width: width,
    height: (height * 40) / 100,
  },
  subtitle: {
    color: '#5d5d5d',
    fontSize: 20,
    fontWeight: '600',
  },
  desc: {
    fontSize: 15,
    marginVertical: '2.5%',
  },
  priceWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: 'gold',
  },
  description: {
    alignItems: 'flex-start',
    width: width,
    paddingHorizontal: '5%',
    marginTop: '-20%',
  },
  button: {
    width: '95%',
    height: 52,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange',
    marginHorizontal: '2.5%',
    borderRadius: 10,
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  cartText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginLeft: 5,
    marginTop: 6,
  },
  cart: {
    position: 'absolute',
    top: 10,
    right: 25,
    zIndex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    shadowColor: '#5d5d5d',
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowOffset: {
      height: 2,
      width: 2,
    },
  },
  qty: {
    backgroundColor: 'red',
    height: 25,
    width: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: -6,
    zIndex: 2,
  },
  qtyText: {color: 'white', fontSize: 11},
  title: {color: 'black', fontSize: 25, fontWeight: '600'},
});

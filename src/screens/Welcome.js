import {
  Image,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Welcome = ({navigation}) => {
  const LoginLink = () => {
    navigation.replace('Login');
  };
  const RegisterLink = () => {
    navigation.replace('Register');
  };
  return (
    <ImageBackground
      source={require('../assets/welcome-bg.png')}
      className="flex-1">
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <View className="flex-1 justify-around items-center space-y-10">
        <Image
          style={{height: hp(8), width: hp(26)}}
          source={require('../assets/splash-logo.png')}
        />
        <View>
          <Text className="text-5xl font-semibold text-white">
            Get Better Talent Assessment Now
          </Text>
          <Text className="text-sm text-white mb-4">
            From Instinct to Insights : Make Powerful and Precise People
            Decisions
          </Text>
          <TouchableOpacity
            onPress={LoginLink}
            className="p-3 mb-4 bg-cyan-500 border-2 border-cyan-500 rounded-md text-center">
            <Text className="text-center font-semibold text-white text-lg">
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={RegisterLink}
            className="p-3 bg-transparent border-2 border-white rounded-md text-center">
            <Text className="text-center font-semibold text-white text-lg">
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

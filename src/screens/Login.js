import {
  ImageBackground,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {EyeIcon as EyeIconOutline} from 'react-native-heroicons/outline';
import {EyeSlashIcon as EyeSlashIconOutline} from 'react-native-heroicons/outline';
import {ArrowLeftIcon as ArrowLeftIconOutline} from 'react-native-heroicons/outline';
const Login = ({navigation}) => {
  const BackLink = () => {
    navigation.replace('Welcome');
  };

  const HomeLink = () => {
    navigation.replace('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/login-bg.png')}
      className="flex-1 h-2/5">
      <StatusBar
        barStyle={'default'}
        translucent
        backgroundColor={'transparent'}
      />
      <View className="pt-24 flex-1">
        <View className="px-3">
          <View className="mb-3">
            <ArrowLeftIconOutline onPress={BackLink} color="white" />
          </View>

          <Text className="text-4xl font-semibold text-white">
            Log in to your Account
          </Text>
          <Text className="text-sm mb-8 text-white">
            Enter your credential to continue.
          </Text>
        </View>

        <View className="bg-white rounded-3xl px-4 py-8 flex-grow flex justify-between">
          <View>
            <View className="flex-row items-center bg-white border border-gray-500 rounded-lg mb-4">
              <TextInput
                placeholder="Assesser ID"
                placeholderTextColor={'gray'}
                style={{fontSize: hp(1.9)}}
                className="flex-1 pl-3 tracking-wider py-3"
              />
            </View>
            <View className="flex-row items-center bg-white border border-gray-500 rounded-lg mb-4">
              <TextInput
                placeholderTextColor={'gray'}
                style={{fontSize: hp(1.9)}}
                secureTextEntry={true}
                placeholder="Password"
                className="flex-1 pl-3 tracking-wider py-3"
              />
              <View className="bg-white rounded-full p-3">
                <EyeIconOutline color="gray" />
              </View>
            </View>
            <TouchableOpacity
              onPress={HomeLink}
              className="p-3 bg-cyan-500 border-2 border-cyan-500 rounded-md text-center">
              <Text className="text-center font-semibold text-white text-lg">
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="text-gray-700 text-center pb-5 text-sm">
            Don’t have an account yet?{' '}
            <Text
              onPress={() => navigation.replace('Register')}
              className="text-cyan-500">
              Register here
            </Text>
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Login;

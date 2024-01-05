import {StatusBar, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const LogoutLink = () => {
    navigation.replace('Login');
  };
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-white">
      <StatusBar />
      <View className="w-80 bg-gray-200 p-5 rounded-xl">
        <Text className="text-black text-5xl mb-4">Home Page</Text>
        <TouchableOpacity
          onPress={LogoutLink}
          className="p-3 py-2 bg-cyan-500 border-2 border-cyan-500 rounded-md text-center">
          <Text className="text-center font-semibold text-white text-lg">
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

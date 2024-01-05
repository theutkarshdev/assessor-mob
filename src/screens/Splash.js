import {View, Image, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Welcome');
    }, 4000);
  }, []);
  
  return (
    <View className="flex-1 justify-center items-center space-y-10 bg-cyan-500">
      <StatusBar backgroundColor={'transparent'} hidden />
      <Image
        style={{height: hp(8), width: hp(26)}}
        source={require('../assets/splash-logo.png')}
      />
      <Image
        style={{
          height: hp(5),
          width: hp(5),
        }}
        source={require('../assets/loading-icon.png')}
      />
    </View>
  );
};

export default Splash;

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {ArrowLeftIcon as ArrowLeftIconOutline} from 'react-native-heroicons/outline';

const OTPScreen = () => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [otp, setOtp] = useState({1: '', 2: '', 3: '', 4: ''});

  return (
    <View className="flex-1 p-3 bg-white">
      <StatusBar barStyle="dark-content" translucent />

      <View className="mb-10 mt-14">
        <ArrowLeftIconOutline color="#231F20" />
      </View>

      <Text className="text-4xl font-bold text-black">OTP Verification</Text>
      <Text className="text-sm mb-10">
        Please Enter the OTP sent to
        <Text className="font-bold"> +917982864531</Text>
      </Text>

      <Image
        style={{
          height: hp(30),
          width: wp(80),
          marginBottom: 20,
        }}
        source={require('../assets/otp-img.png')}
      />

      <View className="mb-10 flex gap-5 justify-center items-center flex-row">
        <View className="rounded-xl border-2 border-gray-300 focus:border-cyan-500">
          <TextInput
            className="text-xl font-semibold text-center px-3.5"
            keyboardType="number-pad"
            maxLength={1}
            ref={firstInput}
            onChangeText={text => {
              setOtp({...otp, 1: text});
              text && secondInput.current.focus();
            }}
          />
        </View>
        <View className="rounded-xl border-2 border-gray-300 focus:border-cyan-500">
          <TextInput
            className="text-xl font-semibold text-center px-3.5"
            keyboardType="number-pad"
            maxLength={1}
            ref={secondInput}
            onChangeText={text => {
              setOtp({...otp, 2: text});
              text ? thirdInput.current.focus() : firstInput.current.focus();
            }}
          />
        </View>
        <View className="rounded-xl border-2 border-gray-300 focus:border-cyan-500">
          <TextInput
            className="text-xl font-semibold text-center px-3.5"
            keyboardType="number-pad"
            maxLength={1}
            ref={thirdInput}
            onChangeText={text => {
              setOtp({...otp, 3: text});
              text ? fourthInput.current.focus() : secondInput.current.focus();
            }}
          />
        </View>
        <View className="rounded-xl border-2 border-gray-300 focus:border-cyan-500">
          <TextInput
            className="text-xl font-semibold text-center px-3.5"
            keyboardType="number-pad"
            maxLength={1}
            ref={fourthInput}
            onChangeText={text => {
              setOtp({...otp, 4: text});
              !text && thirdInput.current.focus();
            }}
          />
        </View>
      </View>
      <Text className="text-gray-700 text-center pb-5 text-sm">
        Didn’t receive OTP?
        <Text className="text-cyan-500"> RESEND</Text>
      </Text>
      <TouchableOpacity
        className="p-3 bg-cyan-500 border-2 border-cyan-500 rounded-md text-center"
        onPress={() => console.log(otp)}>
        <Text className="text-center font-semibold text-white text-lg">
          Verify
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default OTPScreen;

import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';

const LoginScreen = () => {
  const navigation = useRootNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View className="flex-1 bg-gray-50">
      <Text className='text-[28px] font-bold text-blue-800 text-center my-[100px]'>HealthChallenge</Text>
     
      <TextInputBox placeholder='Email' value={email} onChangeText={setEmail} secureTextEntry={false} />
      <TextInputBox placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />

      <View className="mx-[16px] flex-1 justify-end">
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className='text-blue-800 text-center font-[12px]'>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity className='bg-white rounded-[12px] p-[16px] border border-blue-800 mt-[16px]' onPress={() => navigation.navigate('SurveyScreen')}>
          <Text className='text-blue-800 text-center font-[12px]'>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, Alert } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';
import { useDialog } from '../../hooks/useDialog';

const LoginScreen = () => {
  const navigation = useRootNavigation();
  const { showDialog, DialogComponent } = useDialog();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 하드코딩된 계정 정보
  const VALID_ACCOUNT = {
    email: 'test1234@naver.com',
    password: '12345678',
    name: '김바이오',
    phoneNumber: '01012345678'
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      showDialog({
        title: '로그인 실패',
        message: '이메일과 비밀번호를 모두 입력해주세요.',
        onConfirm: () => { },
        onCancel: () => { }
      });
      return;
    }

    setIsLoading(true);

    // 로그인 처리 시뮬레이션 (1초 딜레이)
    setTimeout(() => {
      if (email === VALID_ACCOUNT.email && password === VALID_ACCOUNT.password) {
        // 로그인 성공
        showDialog({
          title: '로그인 성공',
          message: `${VALID_ACCOUNT.name}님, 환영합니다!`,
          onConfirm: () => navigation.navigate('SurveyScreen'),
          onCancel: () => { }
        });
      } else {
        // 로그인 실패
        showDialog({
          title: '로그인 실패',
          message: '이메일 또는 비밀번호가 올바르지 않습니다.',
          onConfirm: () => { },
          onCancel: () => { }
        });
      }
      setIsLoading(false);
    }, 1000);
  };
  return (
    <View className="flex-1 bg-gray-50">
      <Text className='text-[28px] font-bold text-blue-800 text-center my-[100px]'>HealthChallenge</Text>

      <TextInputBox placeholder='Email' value={email} onChangeText={setEmail} secureTextEntry={false} />
      <TextInputBox placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />

      <View className="mx-[16px] flex-1 justify-end">
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className='text-blue-800 text-center font-[12px]'>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-[12px] p-[16px] mt-[16px] ${isLoading ? 'bg-gray-400' : 'bg-blue-800'
            }`}
          // onPress={handleLogin}
          onPress={() => navigation.navigate('MainTabs')}
          disabled={isLoading}
        >

          <Text className='text-white text-center font-semibold text-[16px]'>
            {isLoading ? '로그인 중...' : '로그인'}
          </Text>
        </TouchableOpacity>
      </View>
      <DialogComponent />
    </View>
  );
};

export default LoginScreen;
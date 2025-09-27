import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';
import { useDialog } from '../../hooks/useDialog';
import { useAuth } from '../../hooks/useAuthService';

const LoginScreen = () => {
  const navigation = useRootNavigation();
  const { showDialog, DialogComponent } = useDialog();
  const { login, user, isLoading, error, clearError } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    clearError();
    const success = await login({ email, password });

    if (success && user) {
      showDialog({
        title: '로그인 성공',
        message: `${user.name}님, 환영합니다!`,
        onConfirm: () => navigation.navigate('SurveyScreen'),
        onCancel: () => { },
        onCancelVisible: false,
      });
    } else if (error) {
      showDialog({
        title: '로그인 실패',
        message: error,
        onConfirm: () => { },
        onCancel: () => { }
      });
    }
  };
  return (
    <View className="flex-1 bg-background">
      <Text className='text-[28px] font-bold text-blue text-center my-[100px]'>HealthChallenge</Text>

      <TextInputBox placeholder='Email' value={email} onChangeText={setEmail} secureTextEntry={false} />
      <TextInputBox placeholder='Password' value={password} onChangeText={setPassword} secureTextEntry={true} />

      <View className="mx-[16px] flex-1 justify-end">
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className='text-blue text-center font-[12px]'>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-[12px] p-[16px] mt-[16px] ${isLoading ? 'bg-gray' : 'bg-blue'
            }`}
          onPress={handleLogin}
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
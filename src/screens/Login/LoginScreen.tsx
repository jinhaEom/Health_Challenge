import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';
import { useDialog } from '../../hooks/useDialog';
import { useAuth } from '../../hooks/useAuthService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = () => {
  const navigation = useRootNavigation();
  const { showDialog, DialogComponent } = useDialog();
  const { login, isLoading, error, clearError } = useAuth();

  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const focusPassword = () => {
    setTimeout(() => {
      passwordRef.current?.focus();
      if (passwordRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(passwordRef.current);
      }
    }, 100);
  };

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      showDialog({
        title: '로그인 실패',
        message: '이메일과 비밀번호를 모두 입력해주세요.',
        onConfirm: () => {},
        onCancelVisible: false,
      });
      return;
    }

    if (isLoading) {
      return;
    }

    clearError();
    const result = await login({ email, password });

    if (result.success && result.user) {
      showDialog({
        title: '로그인 성공',
        message: `${result.user.name}님, 환영합니다!`,
        onConfirm: () => navigation.navigate('SurveyScreen'),
        onCancel: () => {},
        onCancelVisible: false,
      });
    } else if (error) {
      showDialog({
        title: '로그인 실패',
        message: error,
        onConfirm: () => {},
        onCancelVisible: false,
      });
    }
  };
  return (
    <KeyboardAwareScrollView
      ref={scrollViewRef}
      className="flex-1 bg-background"
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
      enableOnAndroid={true}
      enableAutomaticScroll={true}
      extraScrollHeight={120}
      extraHeight={150}
      keyboardOpeningTime={150}
      enableResetScrollToCoords={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <Text className="text-[28px] font-bold text-blue text-center my-[100px]">
        HealthChallenge
      </Text>

      <TextInputBox
        ref={emailRef}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        returnKeyType="next"
        onSubmitEditing={focusPassword}
      />
      <TextInputBox
        ref={passwordRef}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        returnKeyType="done"
        onSubmitEditing={handleLogin}
        blurOnSubmit={true}
      />

      <View className="mx-[16px] flex-1 justify-end">
        <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
          <Text className="text-blue text-center font-[12px]">Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-[12px] p-[16px] mt-[16px] ${
            isLoading ? 'bg-gray' : 'bg-blue'
          }`}
          onPress={handleLogin}
          disabled={isLoading}
        >
          <Text className="text-white text-center font-semibold text-[16px]">
            {isLoading ? '로그인 중...' : '로그인'}
          </Text>
        </TouchableOpacity>
      </View>
      <DialogComponent />
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;

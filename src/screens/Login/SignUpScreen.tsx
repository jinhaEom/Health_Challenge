import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';
import { useDialog } from '../../hooks/useDialog';
import { useAuth } from '../../hooks/useAuthService';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
interface SignUpFormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber: string;
}

interface ValidationErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
  phoneNumber?: string;
}

const SignUpScreen = () => {
  const navigation = useRootNavigation();
  const { showDialog, DialogComponent } = useDialog();
  const { signUp, isLoading, error, clearError } = useAuth();

  // 각 입력 필드에 대한 ref 생성
  const scrollViewRef = useRef<KeyboardAwareScrollView>(null);
  const usernameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const nameRef = useRef<TextInput>(null);
  const phoneNumberRef = useRef<TextInput>(null);

  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: '',
  });

  const [errors, setErrors] = useState<ValidationErrors>({});

  const updateFormData = (field: keyof SignUpFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // 필드 포커스 함수들 - KeyboardAwareScrollView의 scrollToInput 사용
  const focusEmail = () => {
    setTimeout(() => {
      emailRef.current?.focus();
      if (emailRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(emailRef.current);
      }
    }, 100);
  };

  const focusPassword = () => {
    setTimeout(() => {
      passwordRef.current?.focus();
      if (passwordRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(passwordRef.current);
      }
    }, 100);
  };

  const focusConfirmPassword = () => {
    setTimeout(() => {
      confirmPasswordRef.current?.focus();
      if (confirmPasswordRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(confirmPasswordRef.current);
      }
    }, 100);
  };

  const focusName = () => {
    setTimeout(() => {
      nameRef.current?.focus();
      if (nameRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(nameRef.current);
      }
    }, 100);
  };

  const focusPhoneNumber = () => {
    setTimeout(() => {
      phoneNumberRef.current?.focus();
      if (phoneNumberRef.current) {
        scrollViewRef.current?.scrollToFocusedInput(phoneNumberRef.current);
      }
    }, 100);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = '아이디를 입력해주세요';
    } else if (formData.username.length < 4) {
      newErrors.username = '아이디는 4자 이상이어야 합니다';
    } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
      newErrors.username = '아이디는 영문, 숫자, _만 사용 가능합니다';
    }

    if (!formData.email.trim()) {
      newErrors.email = '이메일을 입력해주세요';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다';
    }

    if (!formData.password.trim()) {
      newErrors.password = '비밀번호를 입력해주세요';
    } else if (formData.password.length < 6) {
      newErrors.password = '비밀번호는 6자 이상이어야 합니다';
    }

    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = '비밀번호 확인을 입력해주세요';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '비밀번호가 일치하지 않습니다';
    }

    if (!formData.name.trim()) {
      newErrors.name = '이름을 입력해주세요';
    } else if (formData.name.length < 2) {
      newErrors.name = '이름은 2자 이상이어야 합니다';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = '핸드폰 번호를 입력해주세요';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    // 이미 로딩 중이면 중복 실행 방지
    if (isLoading) {
      return;
    }

    clearError();
    const result = await signUp(formData);

    if (result.success && result.user) {
      showDialog({
        title: '회원가입 완료',
        message: `${result.user.name}님, 회원가입이 완료되었습니다!`,
        onConfirm: () => navigation.navigate('LoginScreen'),
        onCancel: () => navigation.navigate('LoginScreen'),
        onCancelVisible: false,
      });
    } else if (error) {
      showDialog({
        title: '회원가입 실패',
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
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 150 }}
    >
      <View className="px-[12px] pt-[60px]">
        <Text className="text-[32px] font-bold text-blue text-center mb-[8px]">
          회원가입
        </Text>

        <View className="mb-[32px]">
          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px]">
            아이디
          </Text>
          <TextInputBox
            ref={usernameRef}
            placeholder="아이디를 입력하세요"
            value={formData.username}
            onChangeText={text => updateFormData('username', text)}
            returnKeyType="next"
            onSubmitEditing={focusEmail}
          />
          {errors.username && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.username}
            </Text>
          )}

          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px] mt-[20px]">
            이메일
          </Text>
          <TextInputBox
            ref={emailRef}
            placeholder="이메일을 입력하세요"
            value={formData.email}
            onChangeText={text => updateFormData('email', text)}
            returnKeyType="next"
            onSubmitEditing={focusPassword}
          />
          {errors.email && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.email}
            </Text>
          )}

          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px] mt-[20px]">
            비밀번호
          </Text>
          <TextInputBox
            ref={passwordRef}
            placeholder="비밀번호를 입력하세요"
            value={formData.password}
            onChangeText={text => updateFormData('password', text)}
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={focusConfirmPassword}
          />
          {errors.password && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.password}
            </Text>
          )}

          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px] mt-[20px]">
            비밀번호 확인
          </Text>
          <TextInputBox
            ref={confirmPasswordRef}
            placeholder="비밀번호를 다시 입력하세요"
            value={formData.confirmPassword}
            onChangeText={text => updateFormData('confirmPassword', text)}
            secureTextEntry
            returnKeyType="next"
            onSubmitEditing={focusName}
          />
          {errors.confirmPassword && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.confirmPassword}
            </Text>
          )}

          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px] mt-[20px]">
            이름
          </Text>
          <TextInputBox
            ref={nameRef}
            placeholder="이름을 입력하세요"
            value={formData.name}
            onChangeText={text => updateFormData('name', text)}
            returnKeyType="next"
            onSubmitEditing={focusPhoneNumber}
          />
          {errors.name && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.name}
            </Text>
          )}

          <Text className="text-[16px] font-semibold text-gray mb-[8px] ml-[4px] mt-[20px]">
            핸드폰 번호
          </Text>
          <TextInputBox
            ref={phoneNumberRef}
            placeholder="010-0000-0000"
            value={formData.phoneNumber}
            onChangeText={text => updateFormData('phoneNumber', text)}
            returnKeyType="done"
            onSubmitEditing={handleSignUp}
            blurOnSubmit={true}
          />
          {errors.phoneNumber && (
            <Text className="text-red text-[12px] ml-[4px] mt-[4px]">
              {errors.phoneNumber}
            </Text>
          )}
        </View>

        <TouchableOpacity
          className={`rounded-[12px] py-[16px] mb-[16px] ${
            isLoading ? 'bg-gray' : 'bg-blue'
          }`}
          onPress={handleSignUp}
          disabled={isLoading}
        >
          <Text className="text-white text-[16px] font-semibold text-center">
            {isLoading ? '회원가입 중...' : '회원가입'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-white rounded-[12px] py-[16px] border border-blue mb-[40px]"
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <Text className="text-blue text-[16px] font-semibold text-center">
            이미 계정이 있으신가요? 로그인
          </Text>
        </TouchableOpacity>
      </View>
      <DialogComponent />
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;

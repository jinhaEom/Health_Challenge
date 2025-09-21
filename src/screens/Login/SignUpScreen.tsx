import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useRootNavigation } from '../../navigation/Navigation';
import TextInputBox from '../../components/TextInputBox';

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
  
  const [formData, setFormData] = useState<SignUpFormData>({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    phoneNumber: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateFormData = (field: keyof SignUpFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
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

  const mockSignUp = async (): Promise<boolean> => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const existingUsers = [
      'admin', 'user123', 'test', 'demo'
    ];
    
    if (existingUsers.includes(formData.username.toLowerCase())) {
      setErrors({ username: '이미 존재하는 아이디입니다' });
      return false;
    }
    
    const chance = Math.random();
    return chance > 0.1;
  };

  const handleSignUp = async () => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      const success = await mockSignUp();
      
      if (success) {
        Alert.alert(
          '회원가입 성공', 
          `${formData.name}님, 환영합니다!`,
          [{
            text: '확인',
            onPress: () => navigation.navigate('LoginScreen')
          }]
        );
      } else {
        Alert.alert('회원가입 실패', '회원가입 중 오류가 발생했습니다.');
      }
    } catch (error) {
      Alert.alert('오류', '네트워크 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-gray-50">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="px-[12px] pt-[60px]">
          <Text className="text-[32px] font-bold text-blue-800 text-center mb-[8px]">
            회원가입
          </Text>
      

          <View className="mb-[32px]">
            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px]">
              아이디
            </Text>
            <TextInputBox
              placeholder="아이디를 입력하세요"
              value={formData.username}
              onChangeText={(text) => updateFormData('username', text)}

            />
            {errors.username && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.username}
              </Text>
            )}

            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px] mt-[20px]">
              이메일
            </Text>
            <TextInputBox
              placeholder="이메일을 입력하세요"
              value={formData.email}
              onChangeText={(text) => updateFormData('email', text)}
            />
            {errors.email && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.email}
              </Text>
            )}

            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px] mt-[20px]">
              비밀번호
            </Text>
            <TextInputBox
              placeholder="비밀번호를 입력하세요"
              value={formData.password}
              onChangeText={(text) => updateFormData('password', text)}
              secureTextEntry
            />
            {errors.password && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.password}
              </Text>
            )}

            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px] mt-[20px]">
              비밀번호 확인
            </Text>
            <TextInputBox
              placeholder="비밀번호를 다시 입력하세요"
              value={formData.confirmPassword}
              onChangeText={(text) => updateFormData('confirmPassword', text)}
              secureTextEntry
            />
            {errors.confirmPassword && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.confirmPassword}
              </Text>
            )}

            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px] mt-[20px]">
              이름
            </Text>
            <TextInputBox
              placeholder="이름을 입력하세요"
              value={formData.name}
              onChangeText={(text) => updateFormData('name', text)}
            />
            {errors.name && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.name}
              </Text>
            )}

            <Text className="text-[16px] font-semibold text-gray-700 mb-[8px] ml-[4px] mt-[20px]">
              핸드폰 번호
            </Text>
            <TextInputBox
              placeholder="010-0000-0000"
              value={formData.phoneNumber}
              onChangeText={(text) => updateFormData('phoneNumber', text)}
            />
            {errors.phoneNumber && (
              <Text className="text-red-500 text-[12px] ml-[4px] mt-[4px]">
                {errors.phoneNumber}
              </Text>
            )}
          </View>

          <TouchableOpacity
            className={`rounded-[12px] py-[16px] mb-[16px] ${
              isLoading ? 'bg-gray-400' : 'bg-blue-800'
            }`}
            onPress={handleSignUp}
            disabled={isLoading}
          >
            <Text className="text-white text-[16px] font-semibold text-center">
              {isLoading ? '회원가입 중...' : '회원가입'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white rounded-[12px] py-[16px] border border-blue-800 mb-[40px]"
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <Text className="text-blue-800 text-[16px] font-semibold text-center">
              이미 계정이 있으신가요? 로그인
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;
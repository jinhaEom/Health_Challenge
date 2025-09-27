import { useState, useCallback } from 'react';

export interface User {
  id: string;
  username: string;
  email: string;
  name: string;
  phoneNumber: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignUpRequest {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  phoneNumber: string;
}

// Mock 데이터
const mockUsers: User[] = [
  {
    id: '1',
    username: 'test1234',
    email: 'test1234@naver.com',
    name: '김바이오',
    phoneNumber: '01012345678',
  },
];

const existingUsernames = ['admin', 'user123', 'test', 'demo', 'test1234'];

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 로그인
  const login = useCallback(async (request: LoginRequest): Promise<boolean> => {
    setIsLoading(true);
    setError(null);


    const foundUser = mockUsers.find(u => u.email === request.email);

    if (!foundUser) {
      setError('존재하지 않는 이메일입니다.');
      setIsLoading(false);
      return false;
    }

    if (request.password !== '12345678') {
      setError('비밀번호가 올바르지 않습니다.');
      setIsLoading(false);
      return false;
    }

    // 10% 확률로 서버 에러 시뮬레이션
    if (Math.random() < 0.1) {
      setError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      setIsLoading(false);
      return false;
    }

    setUser(foundUser);
    setIsLoading(false);
    return true;
  }, []);

  // 회원가입
  const signUp = useCallback(async (request: SignUpRequest): Promise<boolean> => {
    setIsLoading(true);
    setError(null);


    // 중복 사용자명 검사
    if (existingUsernames.includes(request.username.toLowerCase())) {
      setError('이미 존재하는 아이디입니다.');
      setIsLoading(false);
      return false;
    }

    // 중복 이메일 검사
    const existingUser = mockUsers.find(u => u.email === request.email);
    if (existingUser) {
      setError('이미 존재하는 이메일입니다.');
      setIsLoading(false);
      return false;
    }

    // 10% 확률로 회원가입 실패 시뮬레이션
    if (Math.random() < 0.1) {
      setError('회원가입 중 오류가 발생했습니다.');
      setIsLoading(false);
      return false;
    }

    // 새 사용자 추가
    const newUser: User = {
      id: Date.now().toString(),
      username: request.username,
      email: request.email,
      name: request.name,
      phoneNumber: request.phoneNumber,
    };

    mockUsers.push(newUser);
    existingUsernames.push(request.username.toLowerCase());

    setIsLoading(false);
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    user,
    isLoading,
    error,
    login,
    signUp,
    logout,
    clearError,
  };
};
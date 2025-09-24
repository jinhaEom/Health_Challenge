import { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRootNavigation } from '../../navigation/Navigation';
import { useDialog } from '../../hooks/useDialog';

const MyProfileScreen = () => {
  const navigation = useRootNavigation();
  const { showDialog, DialogComponent } = useDialog();

  // 하드코딩된 사용자 정보
  const [userInfo, setUserInfo] = useState({
    name: '김바이오',
    email: 'test1234@naver.com',
    phoneNumber: '01012345678',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userInfo.name);

  const handleEditProfile = () => {
    setIsEditing(true);
    setEditedName(userInfo.name);
  };

  const handleSaveProfile = () => {
    if (!editedName.trim()) {
      showDialog({
        title: '입력 오류',
        message: '이름을 입력해주세요.',
      });
      return;
    }

    setUserInfo(prev => ({ ...prev, name: editedName }));
    setIsEditing(false);
    showDialog({
      title: '프로필 수정',
      message: '프로필이 성공적으로 수정되었습니다.',
      onCancelVisible: false,
    });
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedName(userInfo.name);
  };

  const handleLogout = () => {
    showDialog({
      title: '로그아웃',
      message: '정말 로그아웃 하시겠습니까?',
      onConfirm: () => {
        console.log('로그아웃 확인');
        setTimeout(() => {
          console.log('로그아웃 - 로그인 화면으로 이동 시도');
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          });
        }, 100);
      },
    });
  };

  const handleDeleteAccount = () => {
    showDialog({
      title: '회원 탈퇴',
      message: '정말 회원 탈퇴하시겠습니까?\n탈퇴 시 모든 데이터가 삭제됩니다.',
      onConfirm: () => {
        console.log('회원 탈퇴 확인');
        // 다이얼로그가 닫힌 후 네비게이션 실행
        setTimeout(() => {
          console.log('로그인 화면으로 이동 시도');
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }],
          });
        }, 100);
      },
    });
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* 헤더 */}
      <View className="bg-white px-[16px] py-[12px] flex-row justify-between items-center border-b border-light-gray">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[16px] font-bold text-dark-gray">내 프로필</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* 프로필 정보 섹션 */}
        <View className="bg-white mx-[16px] mt-[16px] rounded-[12px] shadow-sm border border-light-gray">
          <View className="p-[16px]">
            <Text className="text-[16px] font-semibold text-dark-gray mb-[16px]">
              기본 정보
            </Text>

            {/* 이름 */}
            <View className="mb-[16px]">
              <Text className="text-[12px] text-dark-gray mb-[8px]">이름</Text>
              {isEditing ? (
                <View className="flex-row items-center">
                  <TextInput
                    className="flex-1 border border-gray rounded-[12px] px-[16px] py-[12px] text-dark-gray"
                    value={editedName}
                    onChangeText={setEditedName}
                    placeholder="이름을 입력하세요"
                  />
                  <TouchableOpacity
                    onPress={handleSaveProfile}
                    className="ml-[4px] bg-light-blue px-[16px] py-[12px] rounded-[12px]"
                  >
                    <Text className="text-white font-medium">저장</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={handleCancelEdit}
                    className="ml-[4px] bg-gray px-[16px] py-[12px] rounded-[12px]"
                  >
                    <Text className="text-white font-medium">취소</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                <View className="flex-row justify-between items-center">
                  <Text className="text-dark-gray text-[16px]">
                    {userInfo.name}
                  </Text>
                  <TouchableOpacity
                    onPress={handleEditProfile}
                    className="bg-light-blue px-[16px] py-[12px] rounded-[12px]"
                  >
                    <Text className="text-white text-[12px] font-medium">
                      수정
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>

            {/* 이메일 */}
            <View className="mb-[16px]">
              <Text className="text-[12px] text-dark-gray mb-[8px]">이메일</Text>
              <Text className="text-dark-gray text-[16px]">
                {userInfo.email}
              </Text>
            </View>

            {/* 전화번호 */}
            <View>
              <Text className="text-[12px] text-dark-gray mb-[8px]">
                전화번호
              </Text>
              <Text className="text-dark-gray text-[16px]">
                {userInfo.phoneNumber}
              </Text>
            </View>
          </View>
        </View>

        {/* 계정 관리 */}
        <View className="bg-white mx-[16px] mt-[16px] rounded-[12px] shadow-sm border border-light-gray">
          <View className="p-[16px]">
            <Text className="text-[16px] font-semibold text-gray mb-[16px]">
              계정 관리
            </Text>

            {/* 로그아웃 */}
            <TouchableOpacity
              onPress={handleLogout}
              className="flex-row items-center justify-between py-[16px]"
            >
              <View className="flex-row items-center">
                <Ionicons name="log-out-outline" size={20} color="#6b7280" />
                <Text className="text-dark-gray text-[16px] ml-[16px]">
                  로그아웃
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>

            {/* 회원 탈퇴 */}
            <TouchableOpacity
              onPress={handleDeleteAccount}
              className="flex-row items-center justify-between py-[16px]"
            >
              <View className="flex-row items-center">
                <Ionicons
                  name="person-remove-outline"
                  size={20}
                  color="#ef4444"
                />
                <Text className="text-red text-[16px] ml-[16px]">
                  회원 탈퇴
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="#9ca3af" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 앱 정보 섹션 */}
        <View className="bg-white mx-[16px] mt-[16px] mb-[24px] rounded-[12px] shadow-sm border border-light-gray">
          <View className="p-[16px]">
            <Text className="text-[16px] font-semibold text-gray mb-[16px]">
              앱 정보
            </Text>

            <View className="flex-row justify-between items-center py-[16px]">
              <Text className="text-gray text-[16px]">앱 버전</Text>
              <Text className="text-gray text-[16px]">1.0.0</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <DialogComponent />
    </View>
  );
};

export default MyProfileScreen;
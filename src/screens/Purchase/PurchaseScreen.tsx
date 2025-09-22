import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRootRoute, useRootNavigation } from '../../navigation/Navigation';
import { useOrderStore } from '../../store/useOrderStore';
import { useDialog } from '../../hooks/useDialog';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PurchaseScreen = () => {
  const { id, quantity, price, name } = useRootRoute<'PurchaseScreen'>().params;
  const navigation = useRootNavigation();
  const { addOrder } = useOrderStore();
  const { showDialog, DialogComponent } = useDialog();

  const totalPrice = price * quantity;

  const handlePurchase = () => {
    // 주문 내역 저장
    addOrder({
      items: [
        {
          id: parseInt(id, 10),
          name,
          price,
          quantity,
        },
      ],
      totalPrice,
    });

    // 결제 완료 다이얼로그 표시
    showDialog({
      title: '결제 완료',
      message: '결제가 성공적으로 완료되었습니다.',
      onConfirm: () => {
        navigation.navigate('MainTabs');
      },
    });
  };

  return (
    <View className="flex-1 bg-gray-50">
      {/* 헤더 */}
      <View className="bg-white px-4 py-3 flex-row items-center border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="ml-[16px] text-[16px] font-bold text-gray-800">결제하기</Text>
      </View>

      <ScrollView className="flex-1">
        {/* 주문 정보 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
            주문 상품
          </Text>

          <View className="border-b border-gray-200 pb-[12px]">
            <Text
              className="text-[14px] font-semibold text-gray-700"
              numberOfLines={2}
            >
              {name}
            </Text>
            <View className="flex-row justify-between items-center mt-[8px]">
              <Text className="text-[12px] text-gray-600">수량: {quantity}개</Text>
              <Text className="text-red-600 font-semibold">
                {price.toLocaleString()}원
              </Text>
            </View>
          </View>

          <View className="flex-row justify-between items-center mt-[12px]">
            <Text className="text-[16px] font-bold text-gray-800">총 결제금액</Text>
            <Text className="text-[24px] font-bold text-red-600">
              {totalPrice.toLocaleString()}원
            </Text>
          </View>
        </View>

        {/* 결제 방법 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
            결제 방법
          </Text>

          <View className="flex-row items-center p-[12px] border border-blue-300 rounded-[12px] bg-blue-50">
            <Ionicons name="card" size={24} color="#3b82f6" />
            <Text className="ml-[12px] text-[16px] text-blue-700 font-semibold">신용카드</Text>
          </View>
        </View>

        {/* 주문자 정보 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
            주문자 정보
          </Text>

          <View className="space-y-[8px]">
            <View className="flex-row">
              <Text className="text-gray-600 w-[80px]">이름:</Text>
              <Text className="text-gray-800">엄진하</Text>
            </View>
            <View className="flex-row">
              <Text className="text-gray-600 w-[80px]">연락처:</Text>
              <Text className="text-gray-800">010-1234-5678</Text>
            </View>
            <View className="flex-row">
              <Text className="text-gray-600 w-[80px]">이메일:</Text>
              <Text className="text-gray-800">test@naver.com</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 결제 버튼 */}
      <View className="bg-white px-[16px] py-[16px] border-t border-gray-200">
        <TouchableOpacity
          onPress={handlePurchase}
          className="bg-blue-500 py-[16px] rounded-[12px]"
        >
          <Text className="text-white text-[16px] font-bold text-center">
            {totalPrice.toLocaleString()}원 결제하기
          </Text>
        </TouchableOpacity>
      </View>

      <DialogComponent />
    </View>
  );
};

export default PurchaseScreen;

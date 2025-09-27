import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRootRoute, useRootNavigation } from '../../navigation/Navigation';
import { useOrderStore } from '../../store/useOrderStore';
import { useCartStore } from '../../store/useCartStore';
import { useDialog } from '../../hooks/useDialog';
import { useOrder } from '../../hooks/useOrderService';
import { useAuth } from '../../hooks/useAuthService';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PurchaseScreen = () => {
  const { items, totalPrice } = useRootRoute<'PurchaseScreen'>().params;
  const navigation = useRootNavigation();
  const { addOrder } = useOrderStore();
  const { removeFromCart } = useCartStore();
  const { showDialog, DialogComponent } = useDialog();
  const { createOrder, isLoading: orderLoading, error: orderError } = useOrder();
  const { user } = useAuth();

  const handlePurchase = async () => {
    const orderItems = items.map(item => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const success = await createOrder(orderItems, totalPrice);

    if (success) {
      // Store에도 저장 (기존 로직 유지)
      addOrder({
        items: orderItems,
        totalPrice,
      });

      showDialog({
        title: '결제 완료',
        message: '결제가 성공적으로 완료되었습니다.',
        onConfirm: () => {
          items.forEach(item => removeFromCart(item.id));
          navigation.navigate('MainTabs');
        },
        onCancelVisible: false,
      });
    } else if (orderError) {
      showDialog({
        title: '결제 실패',
        message: orderError,
        onConfirm: () => {},
        onCancelVisible: false,
      });
    }
  };

  return (
    <View className="flex-1 bg-background">
      {/* 헤더 */}
      <View className="bg-white px-[16px] py-[12px] flex-row items-center border-b border-light-gray">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="ml-[16px] text-[16px] font-bold text-dark-gray  ">
          결제하기
        </Text>
      </View>

      <ScrollView className="flex-1">
        {/* 주문 정보 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-dark-gray mb-[8px]">
            주문 상품 ({items.length}개)
          </Text>

          {items.map((item, index) => (
            <View
              key={item.id}
              className={`${
                index > 0 ? 'border-t border-light-gray pt-[12px]' : ''
              } ${
                index < items.length - 1
                  ? 'border-b border-light-gray pb-[12px]'
                  : ''
              } ${index > 0 && index < items.length - 1 ? 'py-[12px]' : ''}`}
            >
              <Text
                className="text-[14px] font-semibold text-gray"
                numberOfLines={2}
              >
                {item.name}
              </Text>
              <View className="flex-row justify-between items-center mt-[8px]">
                <Text className="text-[12px] text-dark-gray">
                  수량: {item.quantity}개
                </Text>
                <Text className="text-red font-semibold">
                  {(item.price * item.quantity).toLocaleString()}원
                </Text>
              </View>
            </View>
          ))}

          <View className="flex-row justify-between items-center mt-[12px] pt-[12px] border-t border-light-gray">
            <Text className="text-[16px] font-bold text-dark-gray">
              총 결제금액
            </Text>
            <Text className="text-[24px] font-bold text-red">
              {totalPrice.toLocaleString()}원
            </Text>
          </View>
        </View>

        {/* 결제 방법 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-gray-800 mb-[8px]">
            결제 방법
          </Text>

          <View className="flex-row items-center p-[12px] border border-light-blue rounded-[12px] bg-lighest-blue">
            <Ionicons name="card" size={24} color="#3b82f6" />
            <Text className="ml-[12px] text-[16px] text-blue font-semibold">
              신용카드
            </Text>
          </View>
        </View>

        {/* 주문자 정보 */}
        <View className="bg-white mx-[16px] mt-[16px] p-[16px] rounded-[12px] shadow-sm">
          <Text className="text-[16px] font-bold text-dark-gray mb-[8px]">
            주문자 정보
          </Text>

          <View className="space-y-[8px]">
            <View className="flex-row">
              <Text className="text-gray w-[80px]">이름:</Text>
              <Text className="text-dark-gray">{user?.name || '김바이오'}</Text>
            </View>
            <View className="flex-row">
              <Text className="text-gray w-[80px]">연락처:</Text>
              <Text className="text-dark-gray">{user?.phoneNumber || '010-1234-5678'}</Text>
            </View>
            <View className="flex-row">
              <Text className="text-gray w-[80px]">이메일:</Text>
              <Text className="text-dark-gray">{user?.email || 'test@naver.com'}</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 하단 결제 버튼 */}
      <View className="bg-white px-[16px] py-[16px] border-t border-light-gray">
        <TouchableOpacity
          onPress={handlePurchase}
          className={`py-[16px] rounded-[12px] ${orderLoading ? 'bg-gray' : 'bg-light-blue'}`}
          disabled={orderLoading}
        >
          <Text className="text-white text-[16px] font-bold text-center">
            {orderLoading ? '결제 중...' : `${totalPrice.toLocaleString()}원 결제하기`}
          </Text>
        </TouchableOpacity>
      </View>

      <DialogComponent />
    </View>
  );
};

export default PurchaseScreen;

import { View, Text, FlatList } from 'react-native';
import { useOrderStore, Order } from '../../store/useOrderStore';
import { formatDate, formatTime } from '../../utils/dateUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';

const OrderListScreen = () => {
  const { orders } = useOrderStore();

  const renderOrderItem = ({ item }: { item: Order }) => (
    <View className="bg-white mx-[16px] mb-[12px] p-[16px] rounded-[12px] shadow-sm border border-gray-100">
      <View className="flex-row justify-between items-start mb-[12px]">
        <View>
   
          <Text className="text-[12px] text-gray-500">
            주문날짜: {formatDate(item.orderDate)} {formatTime(item.orderDate)}
          </Text>
        </View>
        <View className="flex-row items-center">
          
          <View
            className={`px-[8px] py-[4px] rounded-[12px] ${
              item.status === 'completed' ? 'bg-green-100' : 'bg-yellow-100'
            }`}
          > 
            <Text
              className={`text-[12px] font-medium ${
                item.status === 'completed'
                  ? 'text-green-700'
                  : 'text-yellow-700'
              }`}
            >
              {item.status === 'completed' ? '주문완료' : '처리중'}
            </Text>
          </View>
        </View>
      </View>

      {/* 주문 상품 */}
      {item.items.map((orderItem, index) => (
        <View
          key={index}
          className="border-b border-gray-100 pb-[8px] mb-[8px] last:border-b-0 last:pb-0 last:mb-0"
        >
          <Text
            className="text-base font-semibold text-gray-800"
            numberOfLines={2}
          >
            {orderItem.name}
          </Text>
          <View className="flex-row justify-between items-center mt-[8px]">
            <Text className="text-[12px] text-gray-600">
              수량: {orderItem.quantity}개
            </Text>
            <View className="flex-row items-center">
              <Text className="text-[12px] text-black">
                개당 : </Text>
            <Text className="text-[12px] text-red-600 font-semibold">
            {(orderItem.price * orderItem.quantity).toLocaleString()}원
            </Text>
            </View>
          </View>
        </View>
      ))}

      {/* 총 금액 */}
      <View className="flex-row justify-between items-center mt-[12px] pt-[12px] border-t border-gray-200">
        <Text className="text-[16px] font-bold text-gray-800">총 결제금액</Text>
        <Text className="text-[16px] font-bold text-red-600">
          {item.totalPrice.toLocaleString()}원
        </Text>
      </View>
    </View>
  );

  if (orders.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Ionicons name="receipt-outline" size={80} color="#9ca3af" />
        <Text className="text-[16px] font-semibold text-gray-600 mt-[16px]">
          주문 내역이 없습니다
        </Text>
        <Text className="text-[12px] text-gray-500 mt-[8px] text-center px-[8px]">
          상품을 주문하면 여기에서 확인할 수 있습니다
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      {/* 헤더 */}
      <View className="bg-white px-[16px] py-[12px] border-b border-gray-200">
        <Text className="text-lg font-bold text-gray-800">
          주문 내역 ({orders.length}건)
        </Text>
      </View>

      {/* 주문 목록 */}
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default OrderListScreen;

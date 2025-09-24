import { View, Text, FlatList } from 'react-native';
import { useOrderStore, Order } from '../../store/useOrderStore';
import { formatDate, formatTime } from '../../utils/dateUtils';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchInput from '../../components/SearchInput';
import { useState, useEffect } from 'react';

const OrderListScreen = () => {
  const { orders } = useOrderStore();
  const [search, setSearch] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState(orders);

  useEffect(() => {
    setFilteredOrders(orders);
  }, [orders]);

  const filterOrders = () => {
    if (search.trim() === '') {
      setFilteredOrders(orders);
      return;
    }

    const filtered = orders.filter(order => {
      // 주문번호로 검색
      if (order.id.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }

      // 상품명으로 검색
      return order.items.some(item =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      );
    });
    setFilteredOrders(filtered);
  };
  const renderOrderItem = ({ item }: { item: Order }) => (
    <View className="bg-white mx-[16px] mb-[12px] p-[16px] rounded-[12px] shadow-sm border border-light-gray">
      <View className="flex-row justify-between items-start mb-[12px]">
        <View>
          <Text className="text-[14px] font-semibold text-dark-gray mb-[4px]">
            주문번호: {item.id}
          </Text>
          <Text className="text-[12px] text-dark-gray">
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
          className="pb-[8px] mb-[8px]"
        >
          <Text
            className="text-base font-semibold text-dark-gray"
            numberOfLines={2}
          >
            {orderItem.name}
          </Text>
          <View className="flex-row justify-between items-center mt-[8px]">
            <Text className="text-[12px] text-dark-gray">
              수량: {orderItem.quantity}개
            </Text>
            <View className="flex-row items-center">
              <Text className="text-[12px] text-black">개당 : </Text>
              <Text className="text-[12px] text-red font-semibold">
                {(orderItem.price * orderItem.quantity).toLocaleString()}원
              </Text>
            </View>
          </View>
        </View>
      ))}

      {/* 총 금액 */}
      <View className="flex-row justify-between items-center mt-[12px] pt-[12px] border-t border-light-gray">
        <Text className="text-[16px] font-bold text-dark-gray">총 결제금액</Text>
        <Text className="text-[16px] font-bold text-red">
          {item.totalPrice.toLocaleString()}원
        </Text>
      </View>
    </View>
  );

  if (orders.length === 0) {
    return (
      <View className="flex-1 bg-background">
        {/* 헤더 */}
        <View className="bg-white px-[16px] py-[12px] border-b border-light-gray">
          <Text className="text-[16px] font-bold text-gray-800">
            주문 내역 (0건)
          </Text>
          <SearchInput
            placeholder="주문번호 또는 상품명을 검색해주세요."
            value={search}
            onChangeText={text => {
              setSearch(text);
              if (text.trim() === '') {
                setFilteredOrders(orders);
              }
            }}
            onFocus={() => setSearchFocus(true)}
            onBlur={() => setSearchFocus(false)}
            showSearchButton={searchFocus}
            onSearchPress={filterOrders}
            showCartButton={false}
          />
        </View>

        {/* 빈 주문 내역 */}
        <View className="flex-1 justify-center items-center">
          <Ionicons name="receipt-outline" size={80} color="#9ca3af" />
          <Text className="text-[16px] font-semibold text-dark-gray mt-[16px]">
            주문 내역이 없습니다
          </Text>
          <Text className="text-[12px] text-dark-gray mt-[8px] text-center px-[8px]">
            상품을 주문하면 여기에서 확인할 수 있습니다
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-background">
      {/* 헤더 */}
      <View className="bg-white px-[16px] py-[12px] border-b border-light-gray">
        <Text className="text-lg font-bold text-dark-gray">
          주문 내역 ({filteredOrders.length}건)
        </Text>
        <SearchInput
          placeholder="주문번호 또는 상품명을 검색해주세요."
          value={search}
          onChangeText={text => {
            setSearch(text);
            if (text.trim() === '') {
              setFilteredOrders(orders);
            }
          }}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
          showSearchButton={searchFocus}
          onSearchPress={filterOrders}
          showCartButton={false}
        />
      </View>

      {/* 주문 목록 */}
      <FlatList
        data={filteredOrders}
        renderItem={renderOrderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Ionicons name="search-outline" size={80} color="#9ca3af" />
            <Text className="text-[16px] font-semibold text-dark-gray mt-[16px]">
              검색 결과가 없습니다
            </Text>
            <Text className="text-[12px] text-dark-gray mt-[8px] text-center px-[8px]">
              다른 검색어로 다시 시도해보세요
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default OrderListScreen;

import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { useState } from 'react';
import { useCartStore } from '../../store/useCartStore';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDialog } from '../../hooks/useDialog';
import { useRootNavigation } from '../../navigation/Navigation';
import PlusMinusButton from '../../components/PlusMinusButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const BasketScreen = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const { showDialog, DialogComponent } = useDialog();
  const navigation = useRootNavigation();
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const totalPrice = cart
    .filter(item => selectedItems.includes(item.id))
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  const toggleItemSelection = (id: number) => {
    setSelectedItems(prev =>
      prev.includes(id) ? prev.filter(itemId => itemId !== id) : [...prev, id],
    );
  };

  const handleRemoveItem = (id: number, name: string) => {
    showDialog({
      title: '상품 삭제',
      message: `'${name}'을(를) 장바구니에서 삭제하시겠습니까?`,
      onConfirm: () => {
        removeFromCart(id);
        setSelectedItems(prev => prev.filter(itemId => itemId !== id));
      },
    });
  };

  const handleRemoveSelectedItems = () => {
    if (selectedItems.length === 0) {
      showDialog({
        title: '선택된 상품 없음',
        message: '삭제할 상품을 선택해주세요.',
      });
      return;
    }

    showDialog({
      title: '선택 상품 삭제',
      message: `선택된 ${selectedItems.length}개 상품을 삭제하시겠습니까?`,
      onConfirm: () => {
        selectedItems.forEach(id => removeFromCart(id));
        setSelectedItems([]);
      },
    });
  };

  const handleOrder = () => {
    if (selectedItems.length === 0) {
      showDialog({
        title: '선택된 상품 없음',
        message: '주문할 상품을 선택해주세요.',
      });
      return;
    }

    const selectedCartItems = cart.filter(item =>
      selectedItems.includes(item.id),
    );

    // 선택된 상품들을 PurchaseScreen으로 전달
    navigation.navigate('PurchaseScreen', {
      items: selectedCartItems.map(item => ({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      totalPrice,
    });
  };

  const renderCartItem = ({ item }: { item: CartItem }) => (
    <View className="bg-white mx-4 mb-3 p-4 rounded-lg shadow-sm border border-gray-100">
      <View className="flex-row justify-between items-start">
        <View className="flex-1 mr-3">
          <View className="flex-row">
          <BouncyCheckbox
                size={20}
                fillColor="#3b82f6"
                unFillColor="#FFFFFF"
                iconStyle={{
                  borderColor: '#3b82f6',
                  borderRadius: 4,
                  borderWidth: 2,
                }}
                innerIconStyle={{
                  borderRadius: 4,
                  borderWidth: 2,
                }}
                textStyle={{ display: 'none' }}
                isChecked={selectedItems.includes(item.id)}
                onPress={() => toggleItemSelection(item.id)}
              />
          <Text
            className="text-lg font-semibold text-gray-800"
            numberOfLines={2}
          >
            {item.name}
          </Text>
          
          </View>
     
          {/* 수량 조절 섹션 */}
          <View className="flex-row items-center justify-between mt-3">
            <View className="flex-row items-center">
            
              <Text className="text-gray-600 mr-[4px] ml-[4px">수량:</Text>
              <View className="flex-row items-center border border-gray-300 rounded-[12px]">
                <PlusMinusButton
                  onDecrease={() => updateQuantity(item.id, item.quantity - 1)}
                  onIncrease={() => updateQuantity(item.id, item.quantity + 1)}
                  quantity={item.quantity}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => handleRemoveItem(item.id, item.name)}
            >
              <Ionicons name="trash-outline" size={18} color="#ef4444" />
            </TouchableOpacity>
          </View>

          <View className="mt-2">
            <Text className="text-[16px] font-bold text-red-600">
              {(item.price * item.quantity).toLocaleString()}원
            </Text>
            <Text className="text-[14px] text-gray-500">
              (개당 {item.price.toLocaleString()}원)
            </Text>
          </View>
        </View>
      </View>
    </View>
  );

  if (cart.length === 0) {
    return (
      <View className="flex-1 justify-center items-center bg-gray-50">
        <Ionicons name="cart-outline" size={80} color="#9ca3af" />
        <Text className="text-xl font-semibold text-gray-600 mt-4">
          장바구니가 비어있습니다
        </Text>
        <Text className="text-gray-500 mt-2 text-center px-8">
          상품을 장바구니에 담고 주문해보세요
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-white px-[16px] py-[12px] flex-row justify-between items-center border-b border-gray-200">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[16px] font-bold text-gray-800">
          장바구니 ({cart.length}개)
        </Text>
        <TouchableOpacity onPress={handleRemoveSelectedItems}>
          <Text className="text-[14px] text-red-500 font-medium">선택삭제</Text>
        </TouchableOpacity>
      </View>

      {/* 상품 목록 */}
      <FlatList
        data={cart}
        renderItem={renderCartItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
      />

      {/* 하단 결제 영역 */}
      <View className="bg-white px-[16px] py-[16px] border-t border-gray-200">
        <View className="flex-row justify-between items-center mb-[16px]">
          <Text className="text-[16px] font-semibold text-gray-800">
            총 결제금액 ({selectedItems.length}개 선택)
          </Text>
          <Text className="text-2xl font-bold text-red-600">
            {totalPrice.toLocaleString()}원
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleOrder}
          className={`py-[16px] rounded-[12px] ${
            selectedItems.length > 0 ? 'bg-blue-500' : 'bg-gray-300'
          }`}
          disabled={selectedItems.length === 0}
        >
          <Text className="text-white text-[16px] font-bold text-center">
            주문하기
          </Text>
        </TouchableOpacity>
      </View>

      <DialogComponent />
    </View>
  );
};

export default BasketScreen;

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Animated,
} from 'react-native';
import { useRootNavigation, useRootRoute } from '../../navigation/Navigation';
import { ProductInfo, ProductList } from '../../data/ProductList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState } from 'react';
import { ProductReview } from '../../data/ProductReview';
import { useCartStore } from '../../store/useCartStore';
import Toast from 'react-native-simple-toast';
import PlusMinusButton from '../../components/PlusMinusButton';

const Tab = createMaterialTopTabNavigator();
const { width } = Dimensions.get('window');
const ImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={{ width, height: 256 }}
            resizeMode="contain"
          />
        ))}
      </ScrollView>

      {/* 인디케이터 점들 */}
      <View className="flex-row justify-center items-center mt-2 mb-4">
        {images.map((_, index) => (
          <View
            key={index}
            className={`w-[8px] h-[8px] rounded-full mx-[4px] ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

// 상품 정보 탭
const ProductInfoTab = ({ product }: { product: ProductInfo }) => {
  const [quantity, setQuantity] = useState(1);
  const animatedValue = useState(new Animated.Value(1))[0];
  const { addToCart } = useCartStore();

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    // 장바구니에 상품 추가
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: quantity,
    });
    Toast.show('장바구니에 상품이 추가되었습니다.', Toast.LONG, {
      tapToDismissEnabled: true,
    });

    // 장바구니 애니메이션
    Animated.sequence([
      Animated.timing(animatedValue, {
        toValue: 0.8,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1.2,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(animatedValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const totalPrice = (product?.price || 0) * quantity;
  const navigation = useRootNavigation();

  return (
    <View className="flex-1">
      <ScrollView className="flex-1 p-[16px]">
        <Text className="text-[20px] font-bold mb-[4px]">{product?.name}</Text>
        <Text className="text-lg text-red-600 font-semibold">
          {product?.price?.toLocaleString()}원
        </Text>
      </ScrollView>

      <View className="p-[16px] border-t border-gray-200 bg-white">
        {/* 수량 조절 */}
        <View className="flex-row items-center justify-between mb-[16px]">
          <Text className="text-[24px] font-semibold">수량</Text>
          <View className="flex-row items-center">
            <PlusMinusButton
              onDecrease={decreaseQuantity}
              onIncrease={increaseQuantity}
              quantity={quantity}
            />
          </View>
        </View>

        {/* 총 금액  */}
        <View className="flex-row items-center justify-between mb-[16px]">
          <Text className="text-[16px] font-semibold">총 금액</Text>
          <Text className="text-[24px] font-bold text-red-600">
            {totalPrice.toLocaleString()}원
          </Text>
        </View>

        <View className="flex-row space-x-[16px]">
          <TouchableOpacity
            onPress={handleAddToCart}
            className="flex-1 bg-gray-100 py-[16px] rounded-[12px] flex-row justify-center items-center"
          >
            <Animated.View style={{ transform: [{ scale: animatedValue }] }}>
              <Ionicons name="cart-outline" size={20} color="#666" />
            </Animated.View>
            <Text className="ml-2 text-gray-600 font-semibold">장바구니</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="flex-1 bg-blue-500 py-[16px] rounded-[12px] justify-center items-center"
            onPress={() =>
              navigation.navigate('PurchaseScreen', {
                items: [
                  {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    quantity: quantity,
                  },
                ],
                totalPrice: product.price * quantity,
              })
            }
          >
            <Text className="text-white font-bold text-lg">구매하기</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
// 상품 리뷰 탭
const ReviewTab = ({ product }: { product: ProductInfo }) => {
  return (
    <ScrollView className="flex-1 p-4">
      {product?.ProductReview?.map((review: ProductReview) => (
        <View key={review.id} className="mb-4 p-4 bg-gray-50 rounded-[12px]">
          <View className="flex-row items-center mb-2">
            <Text className="font-semibold text-blue-600">
              {review.reviewer}
            </Text>
            <Text className="ml-[4px] text-yellow-500">
              {'★'.repeat(parseInt(review.score, 10))}
              {'☆'.repeat(5 - parseInt(review.score, 10))}
            </Text>
            <Text className="ml-auto text-gray-500 text-[12px]">
              {review.date}
            </Text>
          </View>
          <Text className="text-gray-800">{review.content}</Text>
        </View>
      )) || <Text className="text-gray-500">리뷰가 없습니다.</Text>}
    </ScrollView>
  );
};

// 상품 설명 탭
const ProductDescriptionTab = ({ product }: { product: ProductInfo }) => {
  return (
    <ScrollView className="flex-1 p-4">
      <Text className="text-[16px]">{product?.description}</Text>
    </ScrollView>
  );
};

const ProductDetailScreen = () => {
  const { id } = useRootRoute<'ProductDetailScreen'>().params;
  const product = ProductList.find(Product => Product.id === parseInt(id, 10));
  const navigation = useRootNavigation();

  return (
    <View className="flex-1">
      <View className="flex-row items-center p-[16px]">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ImageSlider images={product?.images || []} />

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#3b82f6',
          tabBarInactiveTintColor: '#6b7280',
          tabBarIndicatorStyle: {
            backgroundColor: '#3b82f6',
          },
          tabBarStyle: {
            backgroundColor: 'white',
          },
        }}
      >
        <Tab.Screen name="ProductInfo" options={{ title: '상품정보' }}>
          {() => <ProductInfoTab product={product!} />}
        </Tab.Screen>
        <Tab.Screen name="ProductDescription" options={{ title: '상품설명' }}>
          {() => <ProductDescriptionTab product={product!} />}
        </Tab.Screen>
        <Tab.Screen name="ProductReview" options={{ title: '리뷰' }}>
          {() => <ReviewTab product={product!} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default ProductDetailScreen;

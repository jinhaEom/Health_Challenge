import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useState } from 'react';
import { ProductList } from '../../data/ProductList';
import { useRootNavigation } from '../../navigation/Navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(ProductList);
  const navigation = useRootNavigation();
  const filterProducts = () => {
    const productFilter = ProductList.filter(product =>
      product.name.includes(search),
    );
    setFilteredProducts(productFilter);
  };
  return (
    <View className="flex-1">
      <View className="flex-row  items-center">
        <TextInput
          placeholder="상품명을 검색해주세요."
          className="border-[1px] border-blue-800 p-[8px] m-[8px] flex-1 rounded-[12px] h-[36px] bg-white"
          value={search}
          onChangeText={text => {
            setSearch(text);
            if (text.trim() === '') {
              setFilteredProducts(ProductList);
            }
          }}
          onFocus={() => setSearchFocus(true)}
          onBlur={() => setSearchFocus(false)}
        />
        <TouchableOpacity
          className="mx-[8px]"
          onPress={() => navigation.navigate('BasketScreen')}
        >
          <Ionicons name="bag" size={24} color="black" />
        </TouchableOpacity>
        {searchFocus && (
          <TouchableOpacity
            className="mx-[4px]"
            onPress={() => {
              filterProducts();
            }}
          >
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
        )}
      </View>

      <FlatList
        className="flex-1"
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="m-2 p-4 border border-gray-200 rounded-lg bg-white"
            onPress={() =>
              navigation.navigate('ProductDetailScreen', {
                id: item.id.toString(),
              })
            }
          >
            <Image
              source={{ uri: item.images[0] }}
              className="w-full h-48"
              resizeMode="contain"
            />
            <Text className="text-base font-medium text-gray-800">
              {item.name}
            </Text>
            <Text className="text-[24px] text-gray-600 mt-1">
              ₩{item.price.toLocaleString()}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray-600 ">검색결과가 없습니다.</Text>
          </View>
        }
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

export default HomeScreen;

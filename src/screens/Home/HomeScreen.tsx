import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { ProductList } from '../../data/ProductList';
import { useRootNavigation } from '../../navigation/Navigation';
import SearchInput from '../../components/SearchInput';

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
      <SearchInput
        placeholder="상품명을 검색해주세요."
        value={search}
        onChangeText={text => {
          setSearch(text);
          if (text.trim() === '') {
            setFilteredProducts(ProductList);
          }
        }}
        onFocus={() => setSearchFocus(true)}
        onBlur={() => setSearchFocus(false)}
        showCartButton={true}
        onCartPress={() => navigation.navigate('BasketScreen')}
        showSearchButton={searchFocus}
        onSearchPress={filterProducts}
      />

      <FlatList
        className="flex-1"
        data={filteredProducts}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="m-2 p-4 border border-light-gray rounded-[12px] bg-white"
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
            <Text className="text-base font-medium text-gray">
              {item.name}
            </Text>
            <Text className="text-[24px] text-gray-600 mt-1">
              ₩{item.price.toLocaleString()}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View className="flex-1 justify-center items-center">
            <Text className="text-gray ">검색결과가 없습니다.</Text>
          </View>
        }
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

export default HomeScreen;

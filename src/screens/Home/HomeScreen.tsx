import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import { useRootNavigation } from '../../navigation/Navigation';
import SearchInput from '../../components/SearchInput';
import ProductBadge from '../../components/ProductBadge';
import { useProductFilter } from '../../hooks/useProductFilter';
import { useProduct } from '../../hooks/useProductService';
const HomeScreen = () => {
  const [searchFocus, setSearchFocus] = useState(false);
  const navigation = useRootNavigation();
  const {
    products,
    search,
    setSearch,
    handleTypePress,
    isTypeSelected,
    fetchProducts,
    searchProducts,
    isLoading,
    error
  } = useProduct();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleCartPress = useCallback(() => {
    navigation.navigate('BasketScreen');
  }, [navigation]);

  const handleSearchFocus = useCallback(() => {
    setSearchFocus(true);
  }, []);

  const handleSearchBlur = useCallback(() => {
    setSearchFocus(false);
  }, []);

  return (
    <View className="flex-1">
      <SearchInput
        placeholder="상품명을 검색해주세요."
        value={search}
        onChangeText={setSearch}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        showCartButton={true}
        onCartPress={handleCartPress}
        showSearchButton={searchFocus}
        onSearchPress={() => searchProducts(search)}
      />

      <View className="flex-row justify-start py-[8px] px-[4px]">
        <ProductBadge
          type="vitamin"
          onPress={handleTypePress}
          isSelected={isTypeSelected('vitamin')}
        />
        <ProductBadge
          type="protein"
          onPress={handleTypePress}
          isSelected={isTypeSelected('protein')}
        />
        <ProductBadge
          type="magnesium"
          onPress={handleTypePress}
          isSelected={isTypeSelected('magnesium')}
        />
      </View>

      <FlatList
        className="flex-1"
        data={products}
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
            <Text className="text-base font-medium text-gray">{item.name}</Text>
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

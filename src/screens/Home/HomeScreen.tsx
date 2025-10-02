import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useState, useCallback, useEffect } from 'react';
import { useRootNavigation } from '../../navigation/Navigation';
import SearchInput from '../../components/SearchInput';
import ProductBadge from '../../components/ProductBadge';
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
    clearSearch,
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

  const handleSearchPress = useCallback(async () => {
    if (search.trim() === '') {
      await fetchProducts();
    } else {
      await searchProducts(search);
    }
  }, [search, fetchProducts, searchProducts]);

  const handleClearPress = useCallback(() => {
    clearSearch();
  }, [clearSearch]);

  const handleSearchTextChange = useCallback(
    (text: string) => {
      setSearch(text);
      if (text.trim() === '') {
        clearSearch();
      }
    },
    [setSearch, clearSearch],
  );

  return (
    <View className="flex-1 bg-background">
      <SearchInput
        placeholder="상품명을 검색해주세요."
        value={search}
        onChangeText={handleSearchTextChange}
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        onClearPress={handleClearPress}
        showCartButton={true}
        onCartPress={handleCartPress}
        showSearchButton={searchFocus}
        onSearchPress={handleSearchPress}
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
        contentContainerStyle={products.length === 0 ? { flex: 1 } : {}}
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
            <Text className="text-gray text-center w-full">검색결과가 없습니다.</Text>
          </View>
        }
        keyExtractor={item => item.id.toString()}
        numColumns={1}
      />
    </View>
  );
};

export default HomeScreen;

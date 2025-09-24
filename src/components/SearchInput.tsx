import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onSearchPress?: () => void;
  showSearchButton?: boolean;
  showCartButton?: boolean;
  onCartPress?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  value,
  onChangeText,
  onFocus,
  onBlur,
  onSearchPress,
  showSearchButton = false,
  showCartButton = false,
  onCartPress,
}) => {
  return (
    <View className="flex-row items-center">
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#A0AEC0"
        className="border-[1px] border-blue p-[8px] m-[8px] flex-1 rounded-[12px] h-[36px] bg-white"
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        onBlur={onBlur}
        onSubmitEditing={onSearchPress}
        returnKeyType="search"
        underlineColorAndroid="transparent"
        selectionColor="blue"
        style={{
          fontSize: 14,
          color: 'blue',
          padding: 8,
          margin: 8,
        }}
      />

      {/* 장바구니 버튼 */}
      {showCartButton && onCartPress && (
        <TouchableOpacity className="mx-[8px]" onPress={onCartPress}>
          <Ionicons name="bag" size={24} color="black" />
        </TouchableOpacity>
      )}

      {/* 검색 버튼 */}
      {showSearchButton && onSearchPress && (
        <TouchableOpacity className="mx-[4px]" onPress={onSearchPress}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

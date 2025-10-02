// components/SearchEmptyView.tsx
import { View, Text } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

export const EmptyStateView = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <Ionicons name="search-outline" size={80} color="#9ca3af" />
      <Text className="text-[16px] font-semibold text-dark-gray mt-[16px]">
        검색 결과가 없습니다
      </Text>
      <Text className="text-[12px] text-gray mt-[8px] text-center px-[8px]">
        다른 검색어로 다시 시도해보세요
      </Text>
    </View>
  );
};

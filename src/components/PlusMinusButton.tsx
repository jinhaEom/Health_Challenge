import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface PlusMinusButtonProps {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const PlusMinusButton: React.FC<PlusMinusButtonProps> = ({
  quantity,
  onIncrease,
  onDecrease,
}) => {
  return (
    <View className="flex-row">
      <TouchableOpacity
        onPress={onDecrease}
        className="w-[32px] h-[32px] border border-gray rounded-l-[12px] justify-center items-center"
      >
        <Ionicons name="remove" size={20} color="gray" />
      </TouchableOpacity>

      <View className="w-[32px] h-[32px] border-t border-b border-gray justify-center items-center">
        <Text className="text-lg font-semibold">{quantity}</Text>
      </View>

      <TouchableOpacity
        onPress={onIncrease}
        className="w-[32px] h-[32px] border border-gray rounded-r-[12px] justify-center items-center"
      >
        <Ionicons name="add" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default PlusMinusButton;

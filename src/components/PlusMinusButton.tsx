import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

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
        className="w-[42px] h-[42px] border border-gray-300 rounded-l-lg justify-center items-center"
      >
        <Ionicons name="remove" size={20} color="#666" />
      </TouchableOpacity>

      <View className="w-[42px] h-[42px] border-t border-b border-gray-300 justify-center items-center">
        <Text className="text-lg font-semibold">{quantity}</Text>
      </View>

      <TouchableOpacity
        onPress={onIncrease}
        className="w-[42px] h-[42px] border border-gray-300 rounded-r-lg justify-center items-center"
      >
        <Ionicons name="add" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export default PlusMinusButton;

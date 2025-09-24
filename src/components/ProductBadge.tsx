import { View, Text, TouchableOpacity } from 'react-native';

interface ProductBadgeProps {
  type: string;
  onPress?: (type: string) => void;
  isSelected?: boolean;
}

const ProductBadge = ({
  type,
  onPress,
  isSelected = false,
}: ProductBadgeProps) => {
  const getTypeLabel = () => {
    switch (type) {
      case 'vitamin':
        return '비타민';
      case 'protein':
        return '단백질';
      case 'magnesium':
        return '마그네슘';
      default:
        return '';
    }
  };

  const getBadgeStyle = () => {
    if (isSelected) {
      return 'border-b-[2px] border-light-blue';
    }
  };

  const getTextStyle = () => {
    if (isSelected) {
      return 'text-gray font-bold text-[15px]';
    }

    switch (type) {
      case 'vitamin':
      case 'protein':
      case 'magnesium':
        return 'text-gray font-semibold';
      default:
        return 'text-dark-gray font-semibold';
    }
  };

  return (
    <TouchableOpacity onPress={() => onPress?.(type)}>
      <View
        className={`px-[12px] py-[6px] rounded-[20px] mx-[4px] ${getBadgeStyle()}`}
      >
        <Text className={`text-[14px] ${getTextStyle()}`}>
          {getTypeLabel()}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductBadge;

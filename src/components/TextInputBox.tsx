import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// TextInputBox 컴포넌트의 Props 인터페이스 정의
interface TextInputBoxProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const TextInputBox: React.FC<TextInputBoxProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  // 텍스트 클리어 함수
  const handleClear = () => {
    onChangeText('');
  };

  return (
    <View className="my-[8px] mx-[16px]">
      <View className="flex-row items-center bg-white border-2 border-blue rounded-[12px] px-[16px] py-[12px] h-[50px]">
        <TextInput
          className="flex-1 text-blue"
          placeholder={placeholder}
          placeholderTextColor="#A0AEC0"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          underlineColorAndroid="transparent"
          selectionColor="black"
          style={{
            fontSize: 16,
            color: 'black',
            padding: 0,
            margin: 0,
          }}
        />

        {/* 텍스트가 있을 때만 X 버튼 표시 */}
        {value.length > 0 && (
          <TouchableOpacity
            className="center"
            onPress={handleClear}
            activeOpacity={0.7}
          >
            <Text className="text-lg text-blue font-bold">✕</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default TextInputBox;

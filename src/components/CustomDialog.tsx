import { View, Text, TouchableOpacity, Modal } from 'react-native';

interface CustomDialogProps {
  visible: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  onCancelVisible?: boolean;
}

const CustomDialog = ({
  visible,
  title,
  message,
  onConfirm,
  onCancel,
  onCancelVisible = true,
}: CustomDialogProps) => {
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white p-[24px] rounded-[12px] border border-gray-200 mx-[32px] w-[300px]">
          <Text className="text-[18px] font-bold mb-[8px] text-center">
            {title}
          </Text>
          <Text className="text-[16px] mb-[24px] text-center text-gray-600">
            {message}
          </Text>

          {onCancelVisible ? (
            <View className="flex-row space-x-[12px]">
              <TouchableOpacity
                onPress={onCancel}
                className="flex-1 bg-gray-100 py-[12px] rounded-[8px]"
              >
                <Text className="text-center font-semibold text-gray-700">
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onConfirm}
                className="flex-1 bg-blue-500 py-[12px] rounded-[8px]"
              >
                <Text className="text-center font-semibold text-white">
                  확인
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              onPress={onConfirm}
              className="w-full bg-blue-500 py-[12px] rounded-[8px]"
            >
              <Text className="text-center font-semibold text-white">확인</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CustomDialog;

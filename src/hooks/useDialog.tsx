import { useState } from 'react';
import CustomDialog from '../components/CustomDialog';

interface DialogConfig {
  title: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}

export const useDialog = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [config, setConfig] = useState<DialogConfig>({
    title: '',
    message: '',
  });

  const showDialog = (dialogConfig: DialogConfig) => {
    setConfig(dialogConfig);
    setIsVisible(true);
  };

  const hideDialog = () => {
    setIsVisible(false);
  };

  const handleConfirm = () => {
    config.onConfirm?.();
    hideDialog();
  };

  const handleCancel = () => {
    config.onCancel?.();
    hideDialog();
  };

  const DialogComponent = () => (
    <CustomDialog
      visible={isVisible}
      title={config.title}
      message={config.message}
      onConfirm={handleConfirm}
      onCancel={handleCancel}
    />
  );

  return {
    showDialog,
    hideDialog,
    DialogComponent,
  };
};

import toast, { ToastOptions } from 'react-hot-toast';

const useToastify = () => {
  const OpenToastify = (
    message: string,
    type: 'error' | 'success',
    options?: ToastOptions
  ) => {
    if (type === 'success') toast.success(message, options);
    if (type === 'error') toast.error(message, options);
  };

  return { OpenToastify };
};

export { useToastify };

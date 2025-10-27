import { useState } from 'react';

interface ToastOptions {
  duration?: number;
  type?: 'success' | 'error' | 'warning' | 'info';
}

interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'warning' | 'info';
}

export const useToast = () => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const showToast = (message: string, options: ToastOptions = {}) => {
    const { duration = 3000, type = 'info' } = options;
    const id = `toast-${Date.now()}-${Math.random()}`;

    const newToast: Toast = {
      id,
      message,
      type,
    };

    setToasts((prev) => [...prev, newToast]);

    // Auto remove after duration
    setTimeout(() => {
      removeToast(id);
    }, duration);

    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (message: string, duration?: number) => {
    return showToast(message, { type: 'success', duration });
  };

  const error = (message: string, duration?: number) => {
    return showToast(message, { type: 'error', duration: duration || 5000 });
  };

  const warning = (message: string, duration?: number) => {
    return showToast(message, { type: 'warning', duration });
  };

  const info = (message: string, duration?: number) => {
    return showToast(message, { type: 'info', duration });
  };

  return {
    toasts,
    showToast,
    removeToast,
    success,
    error,
    warning,
    info,
  };
};

import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { JBCToast, ToastVariant } from './JBCToast';

export interface ToastOptions {
  title: string;
  description?: string;
  variant?: ToastVariant;
  duration?: number;
}

interface ToastInstance extends ToastOptions {
  id: string;
}

interface JBCToastContextType {
  showToast: (options: ToastOptions) => void;
}

export const JBCToastContext = createContext<JBCToastContextType | undefined>(undefined);

export const JBCToastProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastInstance[]>([]);

  const showToast = useCallback((options: ToastOptions) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { ...options, id }]);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <JBCToastContext.Provider value={{ showToast }}>
      {children}
      {typeof document !== 'undefined' && createPortal(
        <div className="fixed bottom-0 right-0 left-0 sm:left-auto z-jbc-toast p-4 sm:p-8 flex flex-col gap-3 pointer-events-none items-center sm:items-end">
          {toasts.map((toast) => (
            <div key={toast.id} className="pointer-events-auto">
              <JBCToast
                {...toast}
                onClose={removeToast}
              />
            </div>
          ))}
        </div>,
        document.body
      )}
    </JBCToastContext.Provider>
  );
};

import { useContext } from 'react';
import { JBCToastContext } from './JBCToastProvider';

export const useJBCToast = () => {
  const context = useContext(JBCToastContext);
  if (!context) {
    throw new Error('useJBCToast must be used within a JBCToastProvider');
  }
  return context;
};
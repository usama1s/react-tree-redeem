import React, { useEffect } from 'react';
import './ToastNotification.css';

function ToastNotification(props) {
  const { message, onClose } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="toast-notification">
      <p className='text-black text-bold'>{message}</p>
    </div>
  );
}

export default ToastNotification;

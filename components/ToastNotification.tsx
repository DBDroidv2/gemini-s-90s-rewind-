import React, { useState, useEffect } from 'react';

interface ToastNotificationProps {
  message: string;
  onClose: () => void; // Callback when the toast closes
}

const ToastNotification: React.FC<ToastNotificationProps> = ({ 
  message, 
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  // No automatic timeout for hiding, stays until manually closed
  // The useEffect is now only for cleanup if component unmounts
  useEffect(() => {
    return () => {
      // Any cleanup if needed when component unmounts
    };
  }, []);

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="fixed inset-0 flex items-center justify-center z-[1000]"> {/* Fixed positioning, centered with flexbox, high z-index */}
      {/* Inner container for the toast message */}
      <div className="relative bg-gray-900 text-white p-6 rounded-lg shadow-xl border-2 border-accent-lime max-w-sm mx-auto"> {/* Toast styling, increased padding, stronger shadow, max-width for card effect */}
      <p className="font-mono text-base pr-8">{message}</p> {/* Increased font size, adjusted padding-right for close button */}
      {/* Close button */}
      <button 
        onClick={() => { setIsVisible(false); onClose(); }}
        className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-transparent text-accent-lime hover:bg-accent-lime hover:text-white text-xl font-extrabold transition-colors duration-200" // Made close button a circular button with hover effects
        aria-label="Close notification"
      >
        &times;
      </button>
      </div> {/* Closing tag for the inner toast container */}
    </div>
  );
};

export default ToastNotification;

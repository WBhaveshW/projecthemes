'use client';
'use client';  // Add this line at the top of the file
import React from 'react';

// Your existing code follows

import { useEffect, useState } from 'react';
import { CheckCircle, AlertTriangle, XCircle } from 'lucide-react';

type AlertProps = {
  message: string;
  type: 'success' | 'error' | 'warning';
  duration?: number;
};

export default function AlertBox({ message, type, duration = 3000 }: AlertProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  if (!visible) return null;

  const baseStyle =
    'flex items-center gap-3 p-4 rounded-xl shadow-md text-white text-sm animate-fade-in-up transition-all duration-300 max-w-[90%] sm:max-w-sm w-full';

  const typeStyles: Record<typeof type, string> = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-500 text-black',
  };

  const icons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <XCircle className="w-5 h-5" />,
    warning: <AlertTriangle className="w-5 h-5" />,
  };

  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className={`${baseStyle} ${typeStyles[type]}`}>
        {icons[type]}
        <span className="flex-1 break-words">{message}</span>
      </div>
    </div>
  );
}

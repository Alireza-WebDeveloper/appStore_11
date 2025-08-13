// components/orders/StatusBadge.tsx
import React from 'react';

export default function StatusBadge({
  text,
  type,
}: {
  text: string;
  type: 'success' | 'warning' | 'error';
}) {
  const colors = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold ${colors[type]}`}
    >
      {text}
    </span>
  );
}

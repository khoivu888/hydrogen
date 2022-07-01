import React from 'react';

/**
 * A shared component that specifies the icon to represent a cart
 */
export default function CartIcon(size) {
  return (
    <svg
      width={`${size.width}`}
      height={`${size.width}`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.18191 20.2271C9.60867 20.2271 9.95463 19.8811 9.95463 19.4544C9.95463 19.0276 9.60867 18.6816 9.18191 18.6816C8.75514 18.6816 8.40918 19.0276 8.40918 19.4544C8.40918 19.8811 8.75514 20.2271 9.18191 20.2271Z"
        stroke="#525252"
        strokeWidth="1.54545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6819 20.2271C18.1087 20.2271 18.4546 19.8811 18.4546 19.4544C18.4546 19.0276 18.1087 18.6816 17.6819 18.6816C17.2551 18.6816 16.9092 19.0276 16.9092 19.4544C16.9092 19.8811 17.2551 20.2271 17.6819 20.2271Z"
        stroke="#525252"
        strokeWidth="1.54545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4H6.09091L8.16182 14.3468C8.23248 14.7026 8.42602 15.0221 8.70856 15.2496C8.99109 15.477 9.34463 15.5979 9.70727 15.5909H17.2182C17.5808 15.5979 17.9344 15.477 18.2169 15.2496C18.4994 15.0221 18.693 14.7026 18.7636 14.3468L20 7.86364H6.86364"
        stroke="#525252"
        strokeWidth="1.54545"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

import React from 'react';

export default function renderIcon({
  width = 131,
  height = 131,
  color = '#86B959',
}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 131 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M107.568 34.3487C109.7 36.4803 109.7 39.9363 107.568 42.068L56.8442 92.7917C52.581 97.0549 45.669 97.0549 41.4058 92.7917L17.9737 69.3596C15.8421 67.228 15.8421 63.772 17.9737 61.6404C20.1053 59.5088 23.5613 59.5088 25.693 61.6404L49.125 85.0724L99.8487 34.3487C101.98 32.2171 105.436 32.2171 107.568 34.3487Z"
        fill={color}
      />
    </svg>
  );
}

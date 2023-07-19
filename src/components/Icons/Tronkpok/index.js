import React from 'react';

export default function renderIcon({ width = 30, height = 30 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.0625 13.125L16.875 28.125L4.6875 13.125L10.625 5.625H23.125L29.0625 13.125Z"
        fill="#B2B6F4"
      />
      <path
        d="M27.3815 11.4076C27.4554 11.3167 27.4562 11.1867 27.3835 11.0948L21.446 3.59482C21.3986 3.53493 21.3264 3.5 21.25 3.5H8.75C8.67361 3.5 8.60141 3.53493 8.55399 3.59482L2.61649 11.0948C2.54377 11.1867 2.54459 11.3167 2.61847 11.4076L14.806 26.4076C14.8534 26.4661 14.9247 26.5 15 26.5C15.0753 26.5 15.1466 26.4661 15.194 26.4076L27.3815 11.4076Z"
        fill="white"
        stroke="#763B28"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M2.75 5.25L4.84996 2.68338C4.94493 2.56731 5.08697 2.5 5.23694 2.5H11"
        stroke="white"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.1484 25.2043L26.248 10.3125L21.0527 3.75H21.248L27.1855 11.25L14.998 26.25L14.1484 25.2043Z"
        fill="#E7C63C"
      />
      <path d="M2.8125 11.25H27.1875" stroke="#763B28" stroke-width="0.5" />
      <path
        d="M15 3.75L8.90625 11.25L15 26.25L21.0938 11.25L15 3.75Z"
        stroke="#763B28"
        stroke-width="0.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

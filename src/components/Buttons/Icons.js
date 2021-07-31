import React from "react";

export const AddIcon = ({ color }) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5698 8.175H8.51984V13.35H5.86984V8.175H0.819842V5.775H5.86984V0.599999H8.51984V5.775H13.5698V8.175Z"
        fill={color}
      />
    </svg>
  );
};

export const LibraryIcon = () => {
  return (
    <svg
      width="18"
      height="22"
      viewBox="0 0 22 22"
      fill="#7F8B99"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="10" height="10" rx="2" fill="#7F8B99" />
      <rect x="12" width="10" height="10" rx="2" fill="#7F8B99" />
      <rect x="12" y="12" width="10" height="10" rx="2" fill="#7F8B99" />
      <rect y="12" width="10" height="10" rx="2" fill="#7F8B99" />
    </svg>
  );
};

export const DeleteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#ff3333"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
    </svg>
  );
};

export const MoveIcon = ({ color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill={color}
    >
      <g>
        <rect fill="none" height="24" width="24" />
      </g>
      <g>
        <path d="M20,6h-8l-2-2H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V8C22,6.9,21.1,6,20,6z M20,18H4V6h5.17l1.41,1.41 L11.17,8H20V18z M12.16,12H8v2h4.16l-1.59,1.59L11.99,17L16,13.01L11.99,9l-1.41,1.41L12.16,12z" />
      </g>
    </svg>
  );
};

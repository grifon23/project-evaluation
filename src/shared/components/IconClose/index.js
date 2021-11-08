import React from "react";

export const IconClose = ({ onClick }) => {
  const styles = {
    cursor: "pointer",
  };
  return (
    <div style={styles} onClick={onClick}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.3955 7.59497L7.60352 12.387"
          stroke="#906FD9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.3971 12.3898L7.60107 7.59277"
          stroke="#906FD9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14.3345 0.750244H5.66549C2.64449 0.750244 0.750488 2.88924 0.750488 5.91624V14.0842C0.750488 17.1112 2.63549 19.2502 5.66549 19.2502H14.3335C17.3645 19.2502 19.2505 17.1112 19.2505 14.0842V5.91624C19.2505 2.88924 17.3645 0.750244 14.3345 0.750244Z"
          stroke="#906FD9"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

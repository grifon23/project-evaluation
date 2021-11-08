import React from "react";

import "./style.css";
export const BtnDel = ({ onClick }) => {
  return (
    <div className="btn-del" onClick={onClick}>
      <svg
        className="btn-del-svg"
        width="36"
        height="36"
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.74585"
          y="0.944458"
          width="34.7542"
          height="34.5556"
          rx="7.5"
          stroke="url(#paint0_linear_10:309)"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M24.2958 13.217C24.5855 13.217 24.8268 13.4563 24.8268 13.7607V14.0422C24.8268 14.3392 24.5855 14.5859 24.2958 14.5859H11.9507C11.6602 14.5859 11.4189 14.3392 11.4189 14.0422V13.7607C11.4189 13.4563 11.6602 13.217 11.9507 13.217H14.1225C14.5637 13.217 14.9477 12.9052 15.0469 12.4652L15.1606 11.96C15.3374 11.2719 15.9191 10.8148 16.5849 10.8148H19.6608C20.3193 10.8148 20.9076 11.2719 21.0778 11.9237L21.1995 12.4644C21.298 12.9052 21.682 13.217 22.1239 13.217H24.2958ZM23.1924 23.5067C23.4191 21.4052 23.8161 16.4127 23.8161 16.3623C23.8306 16.2097 23.7806 16.0653 23.6814 15.949C23.5749 15.8401 23.4401 15.7757 23.2916 15.7757H12.9597C12.8105 15.7757 12.6685 15.8401 12.57 15.949C12.47 16.0653 12.4208 16.2097 12.428 16.3623C12.4293 16.3716 12.4436 16.5474 12.4674 16.8415C12.5732 18.1476 12.8679 21.7853 13.0583 23.5067C13.193 24.7748 14.0297 25.5719 15.2417 25.6008C16.177 25.6222 17.1405 25.6296 18.1257 25.6296C19.0537 25.6296 19.9962 25.6222 20.9604 25.6008C22.2144 25.5793 23.0504 24.7963 23.1924 23.5067Z"
          fill="url(#paint1_linear_10:309)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_10:309"
            x1="0.245849"
            y1="18.2222"
            x2="36"
            y2="18.2222"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#E1DAF6" />
            <stop offset="1" stop-color="#B29AE9" stop-opacity="0.44" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_10:309"
            x1="11.4189"
            y1="18.2222"
            x2="24.8268"
            y2="18.2222"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#F5F7FB" />
            <stop offset="1" stop-color="#B29AE9" stop-opacity="0.44" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

import React, { FC } from "react";
import { pclsx } from "../untils/pclsx";
import { CommonProps } from "../untils/types";

export const AngleIcon: FC<CommonProps> = ({ className, style }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 36"
    className={pclsx("icon", className)}
    fill="currentColor"
    style={style}
  >
    <g>
      <path d="M29.52,22.52,18,10.6,6.48,22.52a1.7,1.7,0,0,0,2.45,2.36L18,15.49l9.08,9.39a1.7,1.7,0,0,0,2.45-2.36Z" />
      <rect x="0" y="0" width="36" height="36" fillOpacity="0" />
    </g>
  </svg>
);

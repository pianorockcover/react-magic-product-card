import React, { FC } from "react";
import { pclsx } from "../untils/pclsx";
import { CommonProps } from "../untils/types";

export const MinusIcon: FC<CommonProps> = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42 42"
    className={pclsx("icon")}
    fill="currentColor"
  >
    <g>
      <path d="M37.059,16H26H16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16h10h11.059C39.776,26,42,23.718,42,21
	S39.776,16,37.059,16z"
      />
    </g>
  </svg>
);

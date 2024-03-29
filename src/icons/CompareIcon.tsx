import React, { FC } from "react";
import { pclsx } from "../utils/pclsx";
import { CommonProps } from "../utils/types";

export const CompareIcon: FC<CommonProps> = () => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 490 490"
    className={pclsx("icon")}
    fill="currentColor"
  >
    <g>
      <rect x="269.785" y="366.749" width="220.215" height="123.251" />
      <rect x="130.049" y="183.374" width="359.951" height="123.251" />
      <rect width="490" height="123.252" />
    </g>
  </svg>
);

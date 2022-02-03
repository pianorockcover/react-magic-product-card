import React, { FC } from "react";
import { TagIcon } from "../../icons/TagIcon";
import { pclsx } from "../../untils/pclsx";
import "./style.less";

/**
 * Product tag
 *
 * @returns {JSX.Element}
 */
export const Tag: FC = ({ children }) => (
  <div className={pclsx("tag")}>
    <TagIcon />
    {children}
  </div>
);

import React, { FC, useMemo } from "react";
import { SimpleProductCardColor } from "../types";
import { pclsx } from "../../untils/pclsx";
import "./style.less";

interface LabelProps {
  /**
   * Label color
   */
  color?: SimpleProductCardColor;
}

/**
 * Product label
 *
 * @param {LabelProps} props
 * @returns {JSX.Element}
 */
export const Label: FC<LabelProps> = ({ children, color }) => (
  <div className={pclsx("label", `bg-${color}-faded`)}>
    {children}
  </div>
);

Label.defaultProps = {
  color: "default",
};

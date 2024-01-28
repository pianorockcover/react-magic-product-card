import React, { FC, useMemo } from "react";
import { MagicProductCardColor } from "../types";
import { pclsx } from "../../utils/pclsx";

interface LabelProps {
  /**
   * Label color
   */
  color?: MagicProductCardColor;
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

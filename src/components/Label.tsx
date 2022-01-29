import React, { FC, useMemo } from "react";
import { SimpleProductCardColor } from "../types";
import { pclsx } from "../untils/pclsx";

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
 * 
 * @returns {JSX.Element} 
 */
export const Label: FC<LabelProps> = ({ children, ...restProps }) => {
    const color = useMemo(() => restProps.color || "default", [restProps.color]);

    return (
        <div className={pclsx("label", `bg-${color}-faded`)}>
            {children}
        </div>
    );
}
import React, { FC, useMemo } from "react";
import { getIcon, IconType } from "../../icons";
import { SimpleProductCardColor } from "../types";
import { pclsx } from "../../untils/pclsx";
import { CommonProps } from "../../untils/types";
import "./style.less";

type ButtonProps = CommonProps & {
    color?: SimpleProductCardColor;
    onClick?: () => void;
    icon?: IconType;
}

/**
 * Button Element
 * 
 * @param {ButtonProps} props
 * 
 * @returns {JSX.Element} 
 */
export const Button: FC<ButtonProps> = ({
    children,
    onClick,
    icon,
    className,
    disabled,
    ...restProps
}) => {
    const color = useMemo(() => restProps.color || "default", [restProps.color]);

    const IconComponent = useMemo(() => getIcon(icon), [icon]);

    return (
        <button
            className={pclsx("button", `button-faded-${color}`, className)}
            disabled={disabled}
            onClick={onClick}
        >
            <IconComponent />
            <span>{children}</span>
        </button>
    )
}
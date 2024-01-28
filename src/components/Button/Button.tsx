import React, { FC, useMemo } from "react";
import { getIcon, IconType } from "../../icons";
import { MagicProductCardColor } from "../types";
import { CommonProps } from "../../utils/types";
import { pclsx } from "../../utils/pclsx";

type ButtonProps = CommonProps & {
  color?: MagicProductCardColor;
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
  color,
}) => {
  const IconComponent = useMemo(() => getIcon(icon), [icon]);

  return (
    <button
      className={pclsx("button", `button-faded-${color}`, className)}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <IconComponent />
      <span>{children}</span>
    </button>
  );
};

Button.defaultProps = {
  color: "default",
  onClick: undefined,
  icon: "NoIconComponent",
};

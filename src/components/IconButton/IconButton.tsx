import React, { FC, useMemo } from "react";
import { getIcon, IconType } from "../../icons";
import { SimpleProductCardColor } from "../types";
import { pclsx } from "../../untils/pclsx";
import { CommonProps } from "../../untils/types";
import "./style.less";

type IconButtonProps = CommonProps & {
  hoverColor?: SimpleProductCardColor;
  onClick?: () => void;
  icon: IconType;
};

/**
 * Rounded button with icon
 *
 * @param {IconButtonProps} props
 *
 * @returns {JSX.Element}
 */
export const IconButton: FC<IconButtonProps> = ({
  onClick,
  icon,
  className,
  disabled,
  active,
  hoverColor,
}) => {
  const IconComponent = useMemo(() => getIcon(icon), [icon]);

  return (
    <button
      className={pclsx("icon-button", `hover-${hoverColor}`, className)}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      <IconComponent />
    </button>
  );
};

IconButton.defaultProps = {
  hoverColor: "default",
  onClick: undefined,
};

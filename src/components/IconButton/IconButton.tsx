import React, { FC, useMemo } from "react";
import { getIcon, IconType } from "../../icons";
import { MagicProductCardColor } from "../types";
import { CommonProps } from "../../utils/types";
import { pclsx } from "../../utils/pclsx";

type IconButtonProps = CommonProps & {
  hoverColor?: MagicProductCardColor;
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

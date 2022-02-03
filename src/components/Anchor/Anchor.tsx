import React, { FC, useMemo } from "react";
import { SimpleProductCardColor } from "../types";
import { pclsx } from "../../untils/pclsx";
import { CommonProps } from "../../untils/types";
import "./style.less";

type AnchorProps = CommonProps & {
  to: string;
  newTab?: boolean;
  color?: SimpleProductCardColor;
};

/**
 * Anchor element
 *
 * @param {props} AnchorProps
 *
 * @returns {JSX.Element}
 */
export const Anchor: FC<AnchorProps> = ({
  to,
  newTab,
  title,
  children,
  color,
  className,
}) => {
  const colorClass = useMemo(() => `anchor-${color}`, [color]);
  const target = useMemo(() => (newTab ? { target: "_blank" } : {}), [newTab]);

  return (
    <a
      href={to}
      title={title}
      {...target}
      className={pclsx("anchor", colorClass, className)}
    >
      {children}
    </a>
  );
};

Anchor.defaultProps = {
  newTab: false,
  color: "primary",
};

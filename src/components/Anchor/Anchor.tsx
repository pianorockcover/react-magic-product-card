import React, { FC, useMemo } from "react";
import { SimpleProductCardColor } from "../../types";
import { pclsx } from "../../untils/pclsx";
import { PropsWithClassName } from "../../untils/types";
import "./style.less";

type AnchorProps = PropsWithClassName & {
    to: string;
    newTab?: boolean;
    title?: string;
    color?: SimpleProductCardColor;
}

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
    ...restProps
}) => {
    const colorClass = useMemo(() => `anchor-${color || "primary"}`, [color]);
    const target = useMemo(() => (newTab ? { target: "_blank" } : {}), [newTab]);
    const className = useMemo(() => `${pclsx("anchor", colorClass)} ${restProps.className}`, [
        colorClass,
        restProps.className,
    ]);

    return (
        <a
            href={to}
            title={title}
            {...target}
            className={className}
        >
            {children}
        </a>
    );
}
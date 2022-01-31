import React, { FC, useMemo } from "react";
import { StarFilledIcon } from "../../icons/StarFilledIcon";
import { StarIcon } from "../../icons/StarIcon";
import { pclsx } from "../../untils/pclsx";
import "./style.less";

interface RateProps {
    amount?: number;
}

/**
 * Product rate
 * 
 * @param {RateProps} props
 * 
 * @returns {JSX.Element}
 */
export const Rate: FC<RateProps> = ({
    amount,
}) => {
    const stars = useMemo(() => Math.round(amount || 0), [amount]);

    return (
        <div className={pclsx("rate")}>
            <div className={pclsx("rate-stars")}>
                {new Array(5).fill(null).map((_, i) => {
                    const IconComponent = i < stars ? StarFilledIcon : StarIcon;
                    return <IconComponent key={i} />
                })}
            </div>
            <div className={pclsx("rate-digit")}>{amount}</div>
        </div>
    )
};
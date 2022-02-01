import React, { FC } from "react";
import { pclsx } from "../../untils/pclsx";
import "./style.less";

interface PriceProps {
    value: string;
    oldValue?: string;
}

export const Price: FC<PriceProps> = ({
    value,
    oldValue
}) => (
        <div className={pclsx("price")}>
            {value}
            {oldValue && <div className={pclsx("price-old-value")}>{oldValue}</div>}
        </div>
    )
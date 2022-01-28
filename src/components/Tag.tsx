import React, { FC } from "react";
import { TagIcon } from "../icons/TagIcon";
import { getClassName } from "../untils/getClassName";

export const Tag: FC = ({ children }) => (
    <div className={getClassName("tag")}>
        <TagIcon />
        {children}
    </div>
)
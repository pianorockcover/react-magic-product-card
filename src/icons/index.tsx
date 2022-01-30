import React from "react";
import { BagIcon } from "./BagIcon";
import { CheckIcon } from "./CheckIcon";
import { CompareIcon } from "./CompareIcon";
import { HeartIcon } from "./HeartIcon";
import { StarFilledIcon } from "./StarFilledIcon";
import { TagIcon } from "./TagIcon";

const NoIconComponent = () => <></>;

const icons = {
    BagIcon,
    CheckIcon,
    CompareIcon,
    HeartIcon,
    StarFilledIcon,
    TagIcon,
};

export type IconType = keyof typeof icons;

/**
 * Returns a component of icon given by its name
 * 
 * @param {string} iconName
 * 
 * @returns {FC} 
 */
export const getIcon = (iconName?: IconType) => {
    return iconName && icons[iconName] ? icons[iconName] : NoIconComponent;
}
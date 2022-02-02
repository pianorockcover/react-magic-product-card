import React, { FC, useEffect, useMemo } from "react";
import { pclsx } from "../../untils/pclsx";

const animationSpeed = 1500;
const barStyle = {
    animationDuration: `${animationSpeed}ms`,
};

interface GalleryProgressProps {
    onClick: (index: number) => void;
    activeIndex?: number;
    index: number;
    showAnimation?: boolean;
}

export const GalleryProgress: FC<GalleryProgressProps> = ({
    activeIndex,
    index,
    showAnimation,
    onClick,
}) => {
    const isAnimated = useMemo(() => showAnimation && activeIndex === index, [
        showAnimation, activeIndex,
    ]);

    useEffect(() => {
        if (isAnimated) {
            setTimeout(() => {
                if (isAnimated) {
                    onClick(index + 1);
                }
            }, animationSpeed);
        }
    }, [isAnimated]);

    console.log(activeIndex, index);

    return (
        <div className={pclsx("gallery-progress-item")}>
            <div
                className={pclsx(
                    "gallery-progress-item-bar", {
                    animated: isAnimated,
                    visited: activeIndex && activeIndex > index,
                })}
                style={barStyle}
            />
        </div>
    );
}

import React, { FC, useCallback, useEffect, useRef, useState } from "react";
import { pclsx } from "../../untils/pclsx";

export const defaultAnimationSpeed = 200;

interface GalleryProgressProps {
    onClick: (index: number) => void;
    activeIndex?: number;
    index: number;
    speed: number;
    showAnimation?: boolean;
}

export const GalleryProgress: FC<GalleryProgressProps> = ({
    activeIndex,
    index,
    speed,
    showAnimation,
    ...restProps
}) => {
    const [width, setWidth] = useState(0);
    const interval = useRef<NodeJS.Timer>();

    const destroyAnimation = useCallback(() => {
        if (interval.current) {
            clearInterval(interval.current);
        }
    }, [activeIndex, index]);

    useEffect(() => {
        if (showAnimation && activeIndex === index) {
            setWidth(0);
            interval.current = setInterval(() => (
                setWidth((w) => {
                    const nextWidth = w += 5;

                    if (nextWidth >= 100) {
                        destroyAnimation();
                        restProps.onClick(index + 1);
                    }

                    return nextWidth;
                })
            ), speed);
        }

        if (showAnimation && (activeIndex || 0) < index) {
            setWidth(0);
        }

        return destroyAnimation;
    }, [activeIndex, showAnimation]);

    return (
        <div
            className={pclsx("gallery-progress-item")}
        >
            <div
                className={pclsx("gallery-progress-item-bar")}
                style={{ width: `${width}%` }}
            />
        </div>
    );
}

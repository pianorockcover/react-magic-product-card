import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { pclsx } from "../../untils/pclsx";
import { defaultAnimationSpeed, GalleryProgress } from "./GalleryProgress";
import "./style.less";

type Image = {
    src: string;
    alt?: string;
}

type NonEmptyArray<T> = [T, ...T[]];

interface GalleryProps {
    items: NonEmptyArray<Image>;
}

export const Gallery: FC<GalleryProps> = ({
    items,
}) => {
    const [itemIndex, pureSetItemIndex] = useState(0);
    const setItemIndex = useCallback((nextIntex: number) => (
        pureSetItemIndex(nextIntex === items.length ? 0 : nextIntex)
    ), [items, itemIndex]);

    const [showAnimation, setShowAnimation] = useState<boolean>();

    const onMouseEnter = useCallback(() => setShowAnimation(true), []);
    const onMouseLeave = useCallback(() => {
        setShowAnimation(false);
        setItemIndex(0);
    }, []);

    const animationSpeed = useMemo(() => (
        defaultAnimationSpeed / items.length
    ), [items.length]);

    return (
        <div
            className={pclsx("gallery-wrapper")}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <img
                className={pclsx("gallery")}
                src={items[itemIndex].src}
                alt={items[itemIndex].alt}
            />
            {items.length > 1 && (
                <div className={pclsx("gallery-progress")}>
                    {new Array(items.length)
                        .fill(null)
                        .map((_, i) => (
                            <GalleryProgress
                                onClick={setItemIndex}
                                key={i}
                                index={i}
                                activeIndex={itemIndex}
                                speed={animationSpeed}
                                showAnimation={showAnimation}
                            />
                        ))}
                </div>
            )}
        </div>
    )
};

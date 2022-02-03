import React, { FC, useCallback, useState } from "react";
import { isTouch } from "../../untils/isTouch";
import { pclsx } from "../../untils/pclsx";
import { GalleryProgress } from "./GalleryProgress";
import "./style.less";

type Image = {
  src: string;
  alt?: string;
}

type NonEmptyArray<T> = [T, ...T[]];

export interface GalleryProps {
  items: NonEmptyArray<Image>;
}

/**
 * Images gallery
 *
 * @param {GalleryProps} props
 * @returns {JSX.Element}
 */
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
      {items.length > 1 && !isTouch() && (
        <div className={pclsx("gallery-progress")}>
          {items.map((_, i) => (
            <GalleryProgress
              showItem={setItemIndex}
              key={i}
              index={i}
              activeIndex={itemIndex}
              showAnimation={showAnimation}
            />
          ))}
        </div>
      )}
    </div>
  );
};

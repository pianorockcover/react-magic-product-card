import React, { FC, useEffect, useMemo } from "react";
import { pclsx } from "../../untils/pclsx";

const animationSpeed = 1500;
const barStyle = {
  animationDuration: `${animationSpeed}ms`,
};

interface GalleryProgressProps {
  showItem: (index: number) => void;
  activeIndex?: number;
  index: number;
  showAnimation?: boolean;
}

/**
 * Images gallery progress bar
 *
 * @param {GalleryProgressProps} props
 * @returns {JSX.Element}
 */
export const GalleryProgress: FC<GalleryProgressProps> = ({
  activeIndex,
  index,
  showAnimation,
  showItem,
}) => {
  const isAnimated = useMemo(() => showAnimation && activeIndex === index, [
    showAnimation, activeIndex,
  ]);

  useEffect(() => {
    if (isAnimated) {
      setTimeout(() => {
        if (isAnimated) {
          showItem(index + 1);
        }
      }, animationSpeed);
    }
  }, [isAnimated]);

  const stateClasses = useMemo(() => (
    {
      animated: isAnimated,
      visited: activeIndex && activeIndex > index,
    }
  ), [isAnimated, activeIndex, index]);

  return (
    <div className={pclsx("gallery-progress-item")}>
      <div
        className={pclsx(
          "gallery-progress-item-bar",
          stateClasses,
        )}
        style={barStyle}
      />
    </div>
  );
};

GalleryProgress.defaultProps = {
  activeIndex: undefined,
  showAnimation: undefined,
};

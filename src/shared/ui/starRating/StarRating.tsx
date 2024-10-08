import { memo, useState } from 'react';

import { classNames } from '@/shared/lib';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg';
import { Icon } from '../icon/Icon';

interface StarRatingProps {
  className?: string;
  size?: number;
  onSelect?: (_: number) => void;
  selectedStars?: number;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(function StarRating({
  className,
  size = 30,
  onSelect,
  selectedStars = 0,
}: StarRatingProps) {
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStars));

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
    }
  };

  const onClick = (starNumber: number) => () => {
    if (!isSelected) {
      setIsSelected(true);
      onSelect?.(starNumber);
    }
  };

  return (
    <div className={classNames(cls.starRating, {}, [className])}>
      {stars.map((starNumber, index) => (
        <Icon
          onClick={onClick(starNumber)}
          onMouseEnter={onHover(starNumber)}
          onMouseLeave={onLeave}
          Svg={StarIcon}
          key={`star-key-${index}`}
          className={classNames(
            cls.starIcon,
            {
              [cls.hovered]: currentStarsCount >= starNumber,
              [cls.selected]: isSelected,
            },
            [cls.normal],
          )}
          width={size}
          height={size}
        />
      ))}
    </div>
  );
});

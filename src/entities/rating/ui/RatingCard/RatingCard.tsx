import { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './RatingCard.module.scss';
import { Button, Card, Input, Modal, Text } from '@/shared/ui';
import { StarRating } from '@/shared/ui/starRating/StarRating';
import { HStack, VStack } from '@/shared/ui/stack';
import { BrowserView, MobileView } from 'react-device-detect';
import { Drawer } from '@/shared/ui/drawer/Drawer';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (_: number) => void;
  onAccept?: (_: number, __: string) => void;
  rate?: number;
}

export const RatingCard = ({
  className,
  title,
  feedbackTitle,
  hasFeedback,
  onAccept,
  onCancel,
  rate = 0,
}: RatingCardProps) => {
  const { t } = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedBack] = useState('');

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount, '');
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandler = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [onAccept, starsCount, feedback]);

  const cancelHandler = useCallback(() => {
    setIsModalOpen(false);
    setFeedBack('');
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const modalContent = (
    <VStack gap={`16`} max={true}>
      <Text title={feedbackTitle} />
      <Input
        placeholder={`отзыв`}
        className={cls.input}
        onChange={setFeedBack}
        value={feedback}
      />
      <HStack gap={`16`} justify={`end`}>
        <Button
          theme={`outline_red`}
          onClick={cancelHandler}
        >{`закрыть`}</Button>
        <Button theme={`outline`} onClick={acceptHandler}>{`отправить`}</Button>
      </HStack>
    </VStack>
  );

  const closeDrawer = () => {
    cancelHandler();
  };

  return (
    <Card className={classNames(cls.ratingCard, {}, [className])}>
      <VStack align={`center`}>
        <Text title={starsCount ? 'Спасибо за оценку!' : title} />
        <StarRating onSelect={onSelectStars} selectedStars={starsCount} />
        <MobileView>
          <Drawer isOpen={isModalOpen} onClose={closeDrawer}>
            {modalContent}
          </Drawer>
        </MobileView>
        <BrowserView>
          <Modal isOpen={isModalOpen} lazy>
            {modalContent}
          </Modal>
        </BrowserView>
      </VStack>
    </Card>
  );
};

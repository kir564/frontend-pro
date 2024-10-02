import { memo } from 'react';
import { classNames } from '@/shared/lib';
import { INotification } from '../../model/types/notification';
import { AppLink, Card, Text } from '@/shared/ui';

interface NotificationProps {
  className?: string;
  item: INotification;
}

export const Notification = memo(function Notification({
  className,
  item,
}: NotificationProps) {
  const content = (
    <Card theme={`outlined`} className={classNames('', {}, [className])}>
      <Text text={item.description} title={item.title} />
    </Card>
  );

  if (item.href) {
    return <AppLink to={item.href}>{content}</AppLink>;
  }

  return content;
});

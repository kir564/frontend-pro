import { memo } from 'react';
import { classNames } from '@/shared/lib';
import cls from './NotificationList.module.scss';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { Notification } from '../Notification/Notification';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(function NotificationList({
  className,
}: NotificationListProps) {
  const { data } = useGetNotificationsQuery(null, {
    // pollingInterval: 5000,
  });

  return (
    <div className={classNames(cls.notificationList, {}, [className])}>
      {data?.map((notification) => (
        <Notification key={notification.id} item={notification} />
      ))}
    </div>
  );
});

import { memo } from 'react';
import { classNames } from 'shared/lib';
import cls from './NotificationButton.module.scss';
import { MyPopover } from 'shared/ui/popups';
import { Button, Icon } from 'shared/ui';
import { NotificationList } from 'entities/notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(function NotificationButton({
  className,
}: NotificationButtonProps) {
  return (
    <MyPopover
      className={classNames('', {}, [className])}
      trigger={
        <Button theme={`clean`}>
          <Icon Svg={NotificationIcon} inverted />
        </Button>
      }
    >
      <NotificationList className={cls.notifications} />
    </MyPopover>
  );
});

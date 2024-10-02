import { memo, useState } from 'react';
import { classNames } from 'shared/lib';
import cls from './NotificationButton.module.scss';
import { MyPopover } from 'shared/ui/popups';
import { Button, Icon } from 'shared/ui';
import { NotificationList } from 'entities/notification';
import NotificationIcon from 'shared/assets/icons/notification.svg';
import { Drawer } from 'shared/ui/drawer/Drawer';
import { BrowserView, MobileView } from 'react-device-detect';

import { AnimationProvider } from 'shared/lib/components/animationProvider';

interface NotificationButtonProps {
  className?: string;
}

export const NotificationButton = memo(function NotificationButton({
  className,
}: NotificationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };
  const closeDrawer = () => {
    setIsOpen(false);
  };

  const trigger = (
    <Button theme={`clean`} onClick={openDrawer}>
      <Icon Svg={NotificationIcon} inverted />
    </Button>
  );

  return (
    <div style={{ display: `flex`, alignItems: `center` }}>
      <MobileView>
        {trigger}
        <AnimationProvider>
          <Drawer isOpen={isOpen} onClose={closeDrawer}>
            <NotificationList />
          </Drawer>
        </AnimationProvider>
      </MobileView>
      <BrowserView>
        <MyPopover
          className={classNames('', {}, [className])}
          trigger={trigger}
        >
          <NotificationList className={cls.notifications} />
        </MyPopover>
      </BrowserView>
    </div>
  );
});

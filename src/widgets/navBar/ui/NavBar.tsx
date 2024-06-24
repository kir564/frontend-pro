import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './NavBar.module.scss';
import { AppLink, Button, Modal } from 'shared/ui';
import { routePath } from 'shared/config/router/routePath';

interface NavBarProps {
  className?: string;
}

export const NavBar: FC<NavBarProps> = ({ className }) => {
  const { t } = useTranslation();

  const [isAuthModal, setIsAuthModal] = useState(false);

  const toggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.navBar, {}, [className])}>
      <Modal isOpen={isAuthModal} onClose={toggleModal}>
        {`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias ab harum dignissimos sint nemo perferendis voluptatem reprehenderit iure. Odio sint, assumenda nostrum tenetur sapiente vitae, laudantium consequatur minus sed totam voluptatum neque? Suscipit amet ipsam, ea voluptas minima aliquam labore? Nam tempore quis quod exercitationem? Ipsam soluta accusamus laudantium sit debitis consectetur? Voluptates, voluptate nihil. Unde ratione quam beatae ut quia possimus vitae alias quidem deleniti, amet asperiores non? Quasi, eveniet sit! Quo voluptatem vero facilis corrupti iure commodi! Quae totam ut voluptas facere iure cupiditate officiis. Quos cumque vel ipsam officia iste ullam libero odio natus obcaecati alias.`}
      </Modal>
      <div className={cls.links}>
        <Button theme="cleanInverted" onClick={toggleModal}>
          {t('log-in')}
        </Button>
        {/* <AppLink theme="secondary" to={routePath.main} className={cls.mainLink}>
          {t('nav-main')}
        </AppLink> */}
      </div>
    </div>
  );
};

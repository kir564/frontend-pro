import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib';
import cls from './MainPage.module.scss';
import { Button } from '@/shared/ui';
import { Page } from '@/widgets/page/Page';
import { ListBox } from '@/shared/ui/popups';
import { Dropdown } from '@/shared/ui/popups';
import { RatingCard } from '@/entities/rating';

interface MainPageProps {
  className?: string;
}

export const MainPage: FC<MainPageProps> = ({ className }) => {
  const { t } = useTranslation('main');

  const [error, setError] = useState<boolean>(false);

  const onTHrow = () => {
    setError(true);
  };

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Page className={classNames(cls.mainPage, {}, [className])}>
      {t('main-page')}
      <p>{t('new-key')}</p>
      <ListBox
        defaultValue={`Выберите значение`}
        onChange={() => {}}
        value={undefined}
        items={[
          { value: '1', content: 'content-1 content-1 content-1 content-1' },
          { value: '2', content: 'content-2', disabled: true },
          { value: '3', content: 'content-3' },
        ]}
      />
      <div>123</div>
      <div>123</div>
      <div>123</div>
      <Button onClick={onTHrow}>{t('throw')}</Button>
      <Dropdown
        trigger={<Button>{`open`}</Button>}
        items={[
          { content: 'first' },
          { content: 'second' },
          { content: 'third' },
        ]}
      />
      <RatingCard
        hasFeedback
        title={`оцените страницу`}
        feedbackTitle={`Оставьте отзыв о статье:`}
      />
    </Page>
  );
};

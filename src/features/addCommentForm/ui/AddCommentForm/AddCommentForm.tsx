import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames, DynamicModuleLoader, ReducersList } from 'shared/lib';
import cls from './AddCommentForm.module.scss';
import { Button, Input } from 'shared/ui';
import { useSelector } from 'react-redux';
import {
  getCommentFormText,
  getCommentFormError,
} from '../../model/selectors/getCommentForm';
import { useAppDispatch } from 'shared/lib/hooks';
import {
  addCommentFormActions,
  addCommentFormReducer,
} from '../../model/slice/addCommentFormSlice';

export interface AddCommentFormProps {
  className?: string;
  onSendComment?: (_: string) => void;
}

const reducers: ReducersList = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo(function AddCommentForm({
  className,
  onSendComment,
}: AddCommentFormProps) {
  const { t } = useTranslation();
  const text = useSelector(getCommentFormText);
  const error = useSelector(getCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback(
    (text: string) => {
      dispatch(addCommentFormActions.setText(text));
    },
    [dispatch],
  );

  const onSendCommentHandler = () => {
    onCommentTextChange('');
    onSendComment?.(text || '');
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.addCommentForm, {}, [className])}>
        <Input
          className={cls.input}
          placeholder={t('new-comment')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button onClick={onSendCommentHandler}>{t('send-new-comment')}</Button>
      </div>
    </DynamicModuleLoader>
  );
});

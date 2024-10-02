import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests';
import { EditableProfileCard } from './EditableProfileCard';
import { Profile, profileReducer } from '@/entities/profile';
import { screen } from '@testing-library/react';
import { IOption } from '@/shared/lib/tests/componentRender/componentRender';
import { instanceApi } from '@/shared/api/api';

describe('EditableProfileCard', () => {
  const profile: Profile = {
    id: '1',
    first: 'admin',
    lastName: 'admin',
    age: 465,
    currency: 'USD',
    country: 'Kazakhstan',
    city: 'Moscow',
    username: 'admin213',
  };

  const options: IOption = {
    initialState: {
      profile: {
        readonly: true,
        data: profile,
        form: profile,
      },
      user: {
        authData: {
          id: '1',
        },
      },
    },
    asyncReducers: {
      profile: profileReducer,
    },
  };

  test('mode readonly should switched', async () => {
    componentRender(<EditableProfileCard />, options);

    await userEvent.click(
      screen.getByTestId('EditableProfilePageHeader.EditButton'),
    );

    expect(
      screen.getByTestId('EditableProfilePageHeader.CancelButton'),
    ).toBeInTheDocument();
  });

  test('cancel click should default', async () => {
    componentRender(<EditableProfileCard />, options);

    const user = userEvent.setup();

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.EditButton'),
    );

    await user.clear(screen.getByTestId('ProfileCard.firstName'));
    await user.clear(screen.getByTestId('ProfileCard.lastName'));

    await user.type(screen.getByTestId('ProfileCard.firstName'), 'user');
    await user.type(screen.getByTestId('ProfileCard.lastName'), 'user');

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('user');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('user');

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.CancelButton'),
    );

    expect(screen.getByTestId('ProfileCard.firstName')).toHaveValue('admin');
    expect(screen.getByTestId('ProfileCard.lastName')).toHaveValue('admin');
  });

  test('should be error', async () => {
    componentRender(<EditableProfileCard />, options);
    const user = userEvent.setup();

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.EditButton'),
    );

    await user.clear(screen.getByTestId('ProfileCard.firstName'));

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.SaveButton'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('should be put request ', async () => {
    componentRender(<EditableProfileCard />, options);
    const user = userEvent.setup();
    const mockPutReq = jest.spyOn(instanceApi, 'put');

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.EditButton'),
    );

    await user.clear(screen.getByTestId('ProfileCard.firstName'));
    await user.type(screen.getByTestId('ProfileCard.firstName'), 'user');

    await user.click(
      screen.getByTestId('EditableProfilePageHeader.SaveButton'),
    );

    expect(mockPutReq).toHaveBeenCalled();
  });
});

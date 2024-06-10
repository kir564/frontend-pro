import { screen, fireEvent } from '@testing-library/react';

import { SideBar } from './SideBar';
import { renderWithTranslation } from 'shared/lib/tests';

describe('SideBar', () => {
  test('test render', () => {
    renderWithTranslation(<SideBar />);

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    renderWithTranslation(<SideBar />);

    const btn = screen.getByTestId('sidebar-toggle');

    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

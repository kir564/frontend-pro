import { screen, fireEvent } from '@testing-library/react';

import { SideBar } from './SideBar';
import { componentRender } from 'shared/lib/tests';
import { routePath } from 'shared/config/router/routePath';

describe('SideBar', () => {
  test('test render', () => {
    componentRender(<SideBar />, { routes: [routePath.main, routePath.about] });

    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
  test('test toggle', () => {
    componentRender(<SideBar />, { routes: [routePath.main, routePath.about] });

    const btn = screen.getByTestId('sidebar-toggle');

    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});

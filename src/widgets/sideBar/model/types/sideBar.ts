import { SVGProps, VFC } from 'react';

export interface SideBarItemType {
  text: string;
  path: string;
  Icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

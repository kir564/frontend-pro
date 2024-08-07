// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string;
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

// /\.(sc|sa|c)ss$/i

declare module '*.module.css';
declare module '*.module.scss';

declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare const __IS_DEV__: boolean;
declare const __API__: string;
declare const __PROJECT__: 'jest' | 'storybook' | 'frontend';

// declare module '*.svg' {
//   const svg: string;
//   export default svg;
// }

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

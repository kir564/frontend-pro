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

declare module '*.svg' {
  import React from 'react';
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

// declare module '*.svg' {
//   const svg: string;
//   export default svg;
// }

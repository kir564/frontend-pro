const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  const componentName = firstCharUpperCase(sliceName);

  return `import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import cls from './${componentName}.module.scss';

interface ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo(function ${componentName}({
  className,
}: ${componentName}Props){
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.${sliceName}, {}, [className])}>
      {\`${sliceName}\`}
    </div>
  );
});`;
};

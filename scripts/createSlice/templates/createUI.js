const resolveRoot = require('../resolveRoot');
const fs = require('fs/promises');
const firstCharUpperCase = require('../firstCharUpperCase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storyTemplate = require('./storyTemplate');

module.exports = async (layer, sliceName) => {
  const resolveUiPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUiDir = async () => {
    try {
      await fs.mkdir(resolveUiPath());
    } catch (error) {
      console.log('Не удалось создать UI директорию');
    }
  };

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName);

      fs.mkdir(resolveUiPath(componentName));
      fs.writeFile(
        resolveUiPath(componentName, `${componentName}.tsx`),
        componentTemplate(sliceName),
      );
      fs.writeFile(
        resolveUiPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName),
      );
      fs.writeFile(
        resolveUiPath(componentName, `${componentName}.module.scss`),
        styleTemplate(sliceName),
      );
    } catch (error) {
      console.log('Не удалось создать компонент');
    }
  };

  await createUiDir();
  await createComponent();
};

const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = firstCharUpperCase(`${componentName}Schema`);
  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${schemaName} } from './model/types/${schemaName}';`,
    );
  } catch (error) {
    console.log('Не удалось создать PUBLIC API');
  }
};

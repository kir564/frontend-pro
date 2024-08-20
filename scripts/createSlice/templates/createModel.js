const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUpperCase = require('../firstCharUpperCase');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const reduxSliceTemplate = require('./reduxSliceTemplate');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) =>
    resolveRoot('src', layer, sliceName, 'model', ...segments);

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('services'));
      await fs.mkdir(resolveModelPath('selectors'));
    } catch (error) {
      console.log(
        `Не удалось создать model сегмент для среза ${sliceName}`,
        error,
      );
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (error) {
      console.log(`Не удалось создать reduxSlice ${sliceName}`, error);
    }
  };

  const createSchemaTypes = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${firstCharUpperCase(sliceName)}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (error) {
      console.log(`Не удалось создать SchemaTypes ${sliceName}`, error);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaTypes();
};

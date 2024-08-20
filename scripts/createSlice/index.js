const createTemplate = require('./templates/createTemplate');

const layers = ['entities', 'features', 'pages'];

const layer = process.argv[2];
const sliceName = process.argv[3];

if (!layer || !layers.includes(layer)) {
  throw new Error(`Укажите слой: ${layers.join(' или ')}`);
}

if (!sliceName) {
  throw new Error(`Укажите название среза(slice)`);
}

createTemplate(layer, sliceName);

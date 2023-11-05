const { range } = require('js-toolkit/array');
const { whitespace } = require('js-toolkit/string');

const makeListTransformations = () => {
  const indentation = 2;
  const getRegex = (startChar) =>
    new RegExp(`^((?:${whitespace(indentation)})*)${startChar} (.+)$`);
  const orderedTransformation = {
    name: 'ordered.list',
    tag: 'ol',
    itemTag: 'li',
    regex: getRegex('[0-9]+.'),
    specialChars: [...range(9), '.'],
    delimiter: '\n\n',
    indentation,
  };
  const unorderedTransformation = {
    name: 'unordered.list',
    tag: 'ul',
    itemTag: 'li',
    regex: getRegex('-'),
    specialChars: ['-'],
    delimiter: '\n\n',
    indentation,
  };
  return [orderedTransformation, unorderedTransformation];
};

module.exports = { makeListTransformations };

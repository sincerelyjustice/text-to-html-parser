const { whitespace } = require('js-toolkit/string');

const makeCodeTransformations = () => {
  const inlineTransformation = {
    name: 'code.inline',
    tag: 'code',
    regex: /`(.+?)`/,
    specialChars: ['`'],
    delimiter: whitespace(1),
  };
  const blockTransformation = {
    name: 'code.block',
    tag: 'pre',
    subTag: inlineTransformation.tag,
    regex: /^\$\$\$ (.+)$/,
    specialChars: ['$'],
    delimiter: '\n\n',
  };
  return [inlineTransformation, blockTransformation];
};

module.exports = { makeCodeTransformations };

const { whitespace } = require('js-toolkit/string');

const makeLinkTransformations = () => {
  const linkTransformation = {
    name: 'link',
    tag: 'a',
    regex: /(?<!\!)\[(.*?)\]\((.*?)\)/,
    specialChars: ['[', ']', '(', ')'],
    delimiter: whitespace(1),
  };
  const imageLinkTransformation = {
    name: 'image',
    tag: 'img',
    regex: /\!\[(.*?)\]\((.*?)\)/,
    specialChars: ['!', '[', ']', '(', ')'],
    delimiter: whitespace(1),
  };
  return [linkTransformation, imageLinkTransformation];
};

module.exports = { makeLinkTransformations };

const { whitespace } = require('js-toolkit/string');

const makeEmphasisTransformations = () => {
  const bold = {
    name: 'bold',
    tag: 'strong',
    regex: /\*\*(.+?)\*\*/,
    specialChars: ['*'],
    delimiter: whitespace(1),
  };
  const italic = {
    name: 'italic',
    tag: 'em',
    regex: /\*(.+?)\*/,
    specialChars: ['*'],
    delimiter: whitespace(1),
  };
  const underline = {
    name: 'underline',
    tag: 'u',
    regex: /\_(.+?)\_/,
    specialChars: ['_'],
    delimiter: whitespace(1),
  };
  return [bold, italic, underline];
};

module.exports = { makeEmphasisTransformations };

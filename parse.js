const fs = require('fs');
const path = require('path');
const { textToHtmlParser } = require('./src');

const textFilePath = path.resolve(process.argv[2]);
const textFileName = path.basename(textFilePath, '.txt');

if (!fs.existsSync(textFilePath)) {
  console.log(`\nCould not find source file '${textFilePath}'.`);
  process.exit(1);
}

const text = fs.readFileSync(textFilePath, 'utf-8');
const html = textToHtmlParser(text);

fs.writeFileSync(`${textFileName}.html`, html);

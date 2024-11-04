const fs = require('fs');
const path = require('path');

function generateFunction(index) {
  // Generate a function with a large enough body to contribute to the file size
  const largeBody = ' '.repeat(1000); // Adjust the size of the body as needed
  return `
function exampleFunction${index}() {
  console.log("This is example function ${index}");
  console.log("${largeBody}");
}
`;
}

function generateExport(index) {
  return `
module.exports = {
  exampleFunction${index}
};
`;
}

function generateJsFile(fileName, targetSizeKB) {
  const baseFunction = generateFunction(1) + generateFunction(2) + generateExport(1) + generateExport(2);
  const baseSize = Buffer.byteLength(baseFunction, 'utf8');
  const repetitions = Math.ceil((targetSizeKB * 1024) / baseSize);

  let content = '';
  for (let i = 0; i < repetitions; i++) {
    content += generateFunction(i * 2 + 1) + generateFunction(i * 2 + 2) + generateExport(i * 2 + 1);
  }

  fs.writeFileSync(fileName, content);

  const currentSize = fs.statSync(fileName).size;
  if (currentSize < targetSizeKB * 1024) {
    fs.appendFileSync(fileName, ' '.repeat(targetSizeKB * 1024 - currentSize));
  }
}

// Example usage
generateJsFile(path.join(__dirname, 'output.js'), 50);  // Generate a 50KB JavaScript file
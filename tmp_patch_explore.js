const fs = require('fs');
const path = 'src/routes/explore.tsx';
let text = fs.readFileSync(path, 'utf8');
const start = '          <div className="explore-main">';
const end = '      <SiteFooter />';
const startIndex = text.indexOf(start);
if (startIndex === -1) {
  console.error('start marker not found');
  process.exit(1);
}
const endIndex = text.indexOf(end, startIndex);
if (endIndex === -1) {
  console.error('end marker not found');
  process.exit(1);
}
const newText = text.slice(0, startIndex) + text.slice(endIndex);
fs.writeFileSync(path, newText, 'utf8');
console.log('patched');

import fs from 'fs';
const html = fs.readFileSync('dist/docs/html/index.html', 'utf8');
const match = html.match(/<div class="pb-4">\s*<h4[^>]*>Installation & Setup<\/h4>([\s\S]*?)<\/div>\s*<div class="pb-4">/);
console.log(match ? match[1] : 'Not found');

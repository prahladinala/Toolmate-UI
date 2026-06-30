import fs from 'fs';
const html = fs.readFileSync('dist/docs/html/index.html', 'utf8');
const matches = html.match(/<h4 class="[^"]*">([^<]+)<\/h4>/g);
console.log(matches);

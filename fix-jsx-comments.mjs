import fs from 'fs';
import path from 'path';

function fixComments(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixComments(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      if (content.includes('<!--')) {
        content = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
        fs.writeFileSync(fullPath, content);
        console.log(`Fixed comments in ${fullPath}`);
      }
    }
  }
}

fixComments('./src/registry');

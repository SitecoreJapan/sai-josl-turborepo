import fs from 'fs';
import path from 'path';

const mapPaths: Record<string, string> = {
  '../../packages/ui-sitecore/src/components': '@sample/ui-sitecore/src/components',
};

const destination = '.sitecore';
const componentMapFile = path.join(process.cwd(), destination, 'component-map.ts');
const importMapFile = path.join(process.cwd(), destination, 'import-map.ts');

// Get the component map content and replace paths with the defined mapPaths mapping
const componentMapContent = fs.readFileSync(componentMapFile, 'utf8');

// Do the same for import map
const importMapContent = fs.readFileSync(importMapFile, 'utf8');

const newContent = Object.entries(mapPaths).reduce((content, [oldPath, newPath]) => {
  return content.replaceAll(oldPath, newPath);
}, componentMapContent);
fs.writeFileSync(componentMapFile, newContent, {
  encoding: 'utf8',
});

const newImportMapContent = Object.entries(mapPaths).reduce((content, [oldPath, newPath]) => {
  return content.replaceAll(oldPath, newPath);
}, importMapContent);
fs.writeFileSync(importMapFile, newImportMapContent, {
  encoding: 'utf8',
});

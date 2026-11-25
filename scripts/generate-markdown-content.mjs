import {readFile, mkdir, writeFile} from 'node:fs/promises';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const generatedDirectory = resolve(root, 'src/generated');

await mkdir(generatedDirectory, {recursive: true});

const files = [
  ['design.md', 'designMarkdown.ts'],
  ['DESIGN.repository.md', 'repositoryDesignMarkdown.ts'],
  ['DESIGN.standalone.md', 'standaloneDesignMarkdown.ts'],
];

for (const [filename, outputFilename] of files) {
  const source = await readFile(resolve(root, filename), 'utf8');
  const output = resolve(generatedDirectory, outputFilename);
  await writeFile(output, `// Generated from ${filename}. Do not edit directly.\nexport default ${JSON.stringify(source)};\n`);
}

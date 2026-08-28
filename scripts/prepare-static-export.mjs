import { copyFile, mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const exportDirectory = join(process.cwd(), 'dist', 'client');
const englishDirectory = join(exportDirectory, 'en');

await mkdir(englishDirectory, { recursive: true });
await copyFile(join(exportDirectory, 'en.html'), join(englishDirectory, 'index.html'));
await writeFile(join(exportDirectory, '.nojekyll'), '');

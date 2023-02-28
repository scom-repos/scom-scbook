import fs from 'fs';
import { promisify } from 'util';
const readFile = promisify(fs.readFile);
import { resolve } from 'path';

export async function getHTML(body: string) {
    const script = await readFile(resolve(__dirname, '../../dist/index.js'));
    return `<html><head><script type="module">${script}</script></head><body>${body}<body</html>`;
}
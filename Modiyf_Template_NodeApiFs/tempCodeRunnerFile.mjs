import { readFile } from 'fs/promises';

let template = await readFile(new URL('./template.html', import.meta.url)); // koi enclosing function nhi hain isliye async ki need nhi

console.log(template);
process.stdin.write(template);

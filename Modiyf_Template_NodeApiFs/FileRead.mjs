
import { readFile, writeFile } from 'fs/promises';

let template = await readFile(new URL('./template.html', import.meta.url));
// koi enclosing function nhi hain isliye async ki need nhi


// Convert the buffer to a string
let templateString = template.toString();


console.log(templateString);


 // Define template data
 const templateData = {
    title: 'NITDElhi',
    body: 'B.tech'
};

// Replace placeholders in the template with data
for (const [k, v] of Object.entries(templateData)) {
    templateString = templateString.replace(`{${k}}`, v);
}

// Output the modified template
process.stdout.write(templateString);

await writeFile(new URL('.index.html',import.meta.url),templateString);
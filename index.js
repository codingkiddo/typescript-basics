const ts = require('./typescript');
const fs = require('fs');

const str = fs.readFileSync(__dirname + '/index.ts', 'utf8');
const result = ts.transpileModule(str, { 
        fileName: 'test.tsx', 
        compilerOptions: { 'jsx': 'React', 'module':'es2020' }
    }
);
// const result = ts.transpileModule(str, { fileName: 'test.tsx' });
console.log(result.outputText);

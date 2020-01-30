import * as fileB from './fileB.mjs';
import QualquerNome from './fileB.mjs';
import { sayHello } from './fileB.mjs';

// fileB.default === QualquerNome
// fileB.sayHello === sayHello;

console.log(QualquerNome); // vai apontar para o export default
sayHello(); // vai apontar para o export default
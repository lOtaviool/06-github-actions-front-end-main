import { execSync } from 'child_process';

console.log('Deploy Preview: START')

const command = 'npm run deploy:staging';
const output = execSync(command, {encoding: "utf-8"});

console.log('LOG:', output)
console.log('Deploy Preview: END')
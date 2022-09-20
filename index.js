import expand from './emmet.js';
import { printf, in as stdin, exit } from 'std';
import { isatty } from "os";

if (!isatty(stdin)) scriptArgs[1] = stdin.getline()
else if (scriptArgs.length === 1 || scriptArgs[1] === "-h" || scriptArgs[1] === "--help")  {
    printf(`usage: ${scriptArgs[0]} 'emmet-abbreviation'\n`)
    exit(0)
}

// keep indentation
let indent = scriptArgs[1][0]
if (indent === ' ' || indent === '\t') {
    for (const char of scriptArgs[1].slice(1)) {
        if (indent[0] === char) indent += char
    }
}

const expanded = expand(scriptArgs[1].trim());
printf(indent.slice(0, -1) + expanded)
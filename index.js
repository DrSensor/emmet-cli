import expand from './emmet.js';
import { printf, in as stdin, exit } from 'std';
import { isatty } from "os";

if (!isatty(stdin)) scriptArgs[1] = stdin.getline()
else if (scriptArgs.length === 1 || scriptArgs[1] === "-h" || scriptArgs[1] === "--help")  {
    printf(`usage: ${scriptArgs[0]} 'emmet-abbreviation'\n`)
    exit(0)
}

const expanded = expand(scriptArgs[1]);
printf(expanded)
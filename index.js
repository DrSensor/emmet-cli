import expand from './emmet.js';
import { printf, exit } from 'std';

if (scriptArgs.length === 1 || scriptArgs[1] === "-h" || scriptArgs[1] === "--help")  {
	printf(`usage: ${scriptArgs[0]} 'emmet-abbreviation'\n`)
	exit(0)
}

const expanded = expand(scriptArgs[1]);
printf(expanded)
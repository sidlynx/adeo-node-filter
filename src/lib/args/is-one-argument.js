import { getArguments } from './get-arguments.js';

export const isOneArgument = ()=> getArguments().length === 1;
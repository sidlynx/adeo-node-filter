import { countries } from '../data.js';

import { 
    getCountriesWithItemsCount,
    getFilterCountriesByAnimals,
} from './lib/data/index.js';

 import { 
    isOneArgument,
    isArgumentFilter,
    isArgumentCount,
    getArgument,
    getFilter,
 } from './lib/args/index.js';

import { log } from './lib/log.js';

let result;
let success = false;


if(isOneArgument()){
  const arg = getArgument();
  if(isArgumentFilter(arg)){
    const filter = getFilter(arg);
    result = getFilterCountriesByAnimals(countries,filter);
    success = true;
  }else if(isArgumentCount(arg)){
    result = getCountriesWithItemsCount(countries);
    success = true;
  }
}

if(success){
    log(result);
}
else{
  console.log("Please provide a valid argument");
  console.log("For filtering by animals, use: node index.js --filter=your_filter");
  console.log("For adding counts, use: node index.js --count");
}
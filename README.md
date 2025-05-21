# Javascript test solution proposal

## Solution
The program proposes the two main functionalities, please refer to [the task description](/TASK.md) for more context

Sample of running the commands, and their output:

```shell script
$ node app.js --filter=ry
[
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
]
```

```shell script
node app.js --count
[ { name: 'Dillauti [5]',
    people:
     [ { name: 'Winifred Graham [6]',
         animals:
          [ { name: 'Anoa' },
            { name: 'Duck' },
            { name: 'Narwhal' },
            { name: 'Badger' },
            { name: 'Cobra' },
            { name: 'Crow' } ] },
       { name: 'Blanche Viciani [8]',
         animals:
          [ { name: 'Barbet' },
            { name: 'Rhea' },
            { name: 'Snakes' },
            { name: 'Antelope' },
            { name: 'Echidna' },
            { name: 'Crow' },
            { name: 'Guinea Fowl' },
            { name: 'Deer Mouse' } ] },
      ...
...
]
```

## Disclaimer

- No external library was added except for vitest to run unit tests
- The project type is "module", for vitest sake, since vitest runs by default in esm, commonjs can still be used but using default exports only, we can't use named exports, i could use jest or mocha/chai duo or native node testing module bu I find vitest more complete and conveniant
- To keep things simple, the program use always the data file in the root as source of data, I could have changed that to read it from parameters but I preferred to keep things as simple as possible
- The filter functionnality looks for the filter as a "string", i could have changed that to regular expression but that wasn't mentionned anywhere
- For clarity sake i put every single function in its own file, with an other file containing its own unit tests
- If the program is used the wrong way, a message will appear to explain how to use it
- If the program is intentionally msiused, and I point here the case where a user changes the arguments programmatically, the program will throw an error
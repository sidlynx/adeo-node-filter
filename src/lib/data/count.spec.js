import { describe, it, expect } from 'vitest';
import { getCountriesWithItemsCount } from './count.js';

describe('getCountriesWithItemsCount', () => {
  it('adds people and animal counts to names', () => {
    const input = [
      {
        name: 'CountryA',
        people: [
          { name: 'Alice', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
          { name: 'Bob', animals: [] }
        ]
      },
      {
        name: 'CountryB',
        people: []
      }
    ];

    const result = getCountriesWithItemsCount(input);

    expect(result).toEqual([
      {
        name: 'CountryA [2]',
        people: [
          { name: 'Alice [2]', animals: [{ name: 'Dog' }, { name: 'Cat' }] },
          { name: 'Bob [0]', animals: [] }
        ]
      },
      {
        name: 'CountryB [0]',
        people: []
      }
    ]);
  });

  it('handles empty input', () => {
    expect(getCountriesWithItemsCount([])).toEqual([]);
  });

  it('handles countries with no people property', () => {
    const input = [{ name: 'CountryC', people: undefined }];
    expect(() => getCountriesWithItemsCount(input)).toThrow();
  });
});
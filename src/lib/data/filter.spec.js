import { describe, it, expect } from 'vitest';
import { getFilterCountriesByAnimals } from './filter.js';

describe('getFilterCountriesByAnimals', () => {
  const data = [
    {
      name: 'CountryA',
      people: [
        {
          name: 'Alice',
          animals: [{ name: 'Dog' }, { name: 'Cat' }, { name: 'Parrot' }]
        },
        {
          name: 'Bob',
          animals: [{ name: 'Dog' }]
        }
      ]
    },
    {
      name: 'CountryB',
      people: [
        {
          name: 'Charlie',
          animals: [{ name: 'Fish' }]
        }
      ]
    }
  ];

  it('filters animals by name (case-insensitive)', () => {
    const result = getFilterCountriesByAnimals(data, 'dog');
    expect(result).toEqual([
      {
        name: 'CountryA',
        people: [
          {
            name: 'Alice',
            animals: [{ name: 'Dog' }]
          },
          {
            name: 'Bob',
            animals: [{ name: 'Dog' }]
          }
        ]
      }
    ]);
  });

  it('returns empty array if no animals match', () => {
    const result = getFilterCountriesByAnimals(data, 'lion');
    expect(result).toEqual([]);
  });

  it('returns all animals if filter is empty string', () => {
    const result = getFilterCountriesByAnimals(data, '');
    expect(result).toEqual(data);
  });

  it('filters correctly when some people have no animals', () => {
    const input = [
      {
        name: 'CountryC',
        people: [
          { name: 'Dan', animals: [] },
          { name: 'Eve', animals: [{ name: 'Cat' }] }
        ]
      }
    ];
    const result = getFilterCountriesByAnimals(input, 'cat');
    expect(result).toEqual([
      {
        name: 'CountryC',
        people: [
          { name: 'Eve', animals: [{ name: 'Cat' }] }
        ]
      }
    ]);
  });

  it('returns empty array if input is empty', () => {
    expect(getFilterCountriesByAnimals([], 'dog')).toEqual([]);
  });
});
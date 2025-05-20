import { describe, it, expect } from 'vitest';
import { getFilter } from './get-filter.js';

describe('getFilter', () => {
  it('returns the value after the first "="', () => {
    expect(getFilter('foo=bar')).toBe('bar');
  });

  it('returns everything after the first "=" if multiple "=" are present', () => {
    expect(getFilter('foo=bar=baz')).toBe('bar=baz');
  });

  it('returns an empty string if there is no "="', () => {
    expect(getFilter('foobar')).toBe('');
  });

  it('returns an empty string if "=" is at the end', () => {
    expect(getFilter('foo=')).toBe('');
  });

  it('returns the correct value if "=" is at the start', () => {
    expect(getFilter('=bar')).toBe('bar');
  });
});
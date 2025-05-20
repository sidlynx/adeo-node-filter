import { describe, it, expect } from 'vitest';
import { isArgumentCount } from './is-argument-count.js';

describe('isArgumentCount', () => {
  it('returns true for "--count"', () => {
    expect(isArgumentCount('--count')).toBe(true);
  });

  it('returns false for other arguments', () => {
    expect(isArgumentCount('--other')).toBe(false);
    expect(isArgumentCount('count')).toBe(false);
    expect(isArgumentCount('')).toBe(false);
    expect(isArgumentCount('--Count')).toBe(false);
  });
});
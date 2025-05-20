import { describe, it, expect } from 'vitest';
import { isArgumentFilter } from './is-argument-filter.js';

describe('isArgumentFilter', () => {
  it('returns true for valid --filter= argument', () => {
    expect(isArgumentFilter('--filter=value')).toBe(true);
    expect(isArgumentFilter('--filter=')).toBe(true);
    expect(isArgumentFilter('--filter=foo=bar')).toBe(true);
  });

  it('returns false for arguments not starting with --filter=', () => {
    expect(isArgumentFilter('--filtr=value')).toBe(false);
    expect(isArgumentFilter('filter=value')).toBe(false);
    expect(isArgumentFilter('--filter')).toBe(false);
    expect(isArgumentFilter('--filter')).toBe(false);
    expect(isArgumentFilter('')).toBe(false);
  });

  it('returns false for arguments without "=" after --filter', () => {
    expect(isArgumentFilter('--filter')).toBe(false);
    expect(isArgumentFilter('--filter')).toBe(false);
  });
});
import { describe, it, expect, vi } from 'vitest';
import { isOneArgument } from './is-one-argument.js';
import * as getArgumentsModule from './get-arguments.js';

describe('isOneArgument', () => {
  it('returns true if getArguments returns an array with one element', () => {
    vi.spyOn(getArgumentsModule, 'getArguments').mockReturnValue(['foo']);
    expect(isOneArgument()).toBe(true);
  });

  it('returns false if getArguments returns an empty array', () => {
    vi.spyOn(getArgumentsModule, 'getArguments').mockReturnValue([]);
    expect(isOneArgument()).toBe(false);
  });

  it('returns false if getArguments returns an array with more than one element', () => {
    vi.spyOn(getArgumentsModule, 'getArguments').mockReturnValue(['foo', 'bar']);
    expect(isOneArgument()).toBe(false);
  });
});
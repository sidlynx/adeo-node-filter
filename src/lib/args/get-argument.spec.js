import { describe, it, expect, vi } from 'vitest';
import { getArgument } from './get-argument.js';
import * as getArgumentsModule from './get-arguments.js';

describe('getArgument', () => {
  it('returns the first argument from getArguments', () => {
    vi.spyOn(getArgumentsModule, 'getArguments').mockReturnValue(['foo', 'bar']);
    expect(getArgument()).toBe('foo');
  });

  it('returns undefined if getArguments returns an empty array', () => {
    vi.spyOn(getArgumentsModule, 'getArguments').mockReturnValue([]);
    expect(getArgument()).toBeUndefined();
  });
});
import { describe, it, expect, afterEach } from 'vitest';
import { getArguments } from './get-arguments.js';
import { UNEXCEPTED_EXCEPTION } from '../../const';

describe('getArguments', () => {
  const originalArgv = process.argv;

  afterEach(() => {
    process.argv = originalArgv;
  });

  it('returns arguments after the first two argv entries', () => {
    process.argv = ['node', 'script.js', 'foo', 'bar'];
    expect(getArguments()).toEqual(['foo', 'bar']);
  });

  it('throws UNEXCEPTED_EXCEPTION if only two argv entries', () => {
    process.argv = ['node', 'script.js'];
    expect(() => getArguments()).toThrow(UNEXCEPTED_EXCEPTION);
  });

  it('throws UNEXCEPTED_EXCEPTION if argv is not an array', () => {
    // @ts-ignore
    process.argv = null;
    expect(() => getArguments()).toThrow(UNEXCEPTED_EXCEPTION);
  });

  it('returns all arguments after the script name', () => {
    process.argv = ['node', 'script.js', 'a', 'b', 'c'];
    expect(getArguments()).toEqual(['a', 'b', 'c']);
  });
});
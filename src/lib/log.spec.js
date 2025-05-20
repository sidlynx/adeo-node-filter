import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { log } from './log.js';

describe('log', () => {
    let consoleLogSpy;

    beforeEach(() => {
        consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
    });

    it('logs a simple object as pretty JSON', () => {
        const data = { a: 1, b: 'test' };
        log(data);
        expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });

    it('logs an array as pretty JSON', () => {
        const data = [1, 2, 3];
        log(data);
        expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });

    it('logs a string as pretty JSON', () => {
        const data = 'hello';
        log(data);
        expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });

    it('logs null as pretty JSON', () => {
        const data = null;
        log(data);
        expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });

    it('logs undefined as pretty JSON', () => {
        const data = undefined;
        log(data);
        expect(consoleLogSpy).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
    });
});
/* eslint-env jest */
import { describe, expect, it } from '@jest/globals';
import { twDX } from '../src';

describe('twDX', () => {
	it('should return joined classNames', () => {
		const result = twDX({
			layout: 'flex items-center',
			spacing: 'p-4',
			typography: 'text-black',
		});

		expect(result).toBe('flex items-center p-4 text-black');
	});

	it('should include preset if provided', () => {
		const result = twDX({
			preset: 'card',
			spacing: 'p-2',
			typography: 'text-gray-800',
		});

		expect(result).toContain('bg-white');
		expect(result).toContain('p-2');
		expect(result).toContain('text-gray-800');
	});

	it('should return empty string for non-object input', () => {
		expect(twDX(null as any)).toBe('');
		expect(twDX(undefined as any)).toBe('');
		expect(twDX('not-an-object' as any)).toBe('');
		expect(twDX(123 as any)).toBe('');
	});
});

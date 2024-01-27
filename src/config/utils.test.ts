import { getEnvString } from './utils';

describe('utils', () => {
	describe('getEnvString', () => {
		beforeEach(() => {
			// Set up any necessary environment variables for the tests
			process.env.TEST_VAR = 'test value';
		});

		afterEach(() => {
			// Clean up any changes made to the environment variables
			delete process.env.TEST_VAR;
		});

		it('should return the value of an existing environment variable', () => {
			const result = getEnvString('TEST_VAR');
			expect(result).toBe('test value');
		});

		it('should throw an error for an undefined environment variable', () => {
			expect(() => {
				getEnvString('UNDEFINED_VAR');
			}).toThrowError('Undefined environment variable UNDEFINED_VAR.');
		});
	});
});

export function getEnvString(key: string): string {
	const value = process.env[key];

	if (typeof value === 'undefined') {
		throw new Error(`Undefined environment variable ${key}.`);
	}

	return value;
}

export function getEnvWithValidate<T>(
	key: string,
	availableValues: readonly string[],
): T {
	const value = getEnvString(key);

	if (!availableValues.includes(value)) {
		throw new Error(`Field ${key} is unsupported.`);
	}

	return value as T;
}

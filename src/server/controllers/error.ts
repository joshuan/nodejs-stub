import type { NextFunction, Request, Response } from 'express';

function serializeError(err: unknown): any {
	if (!(err instanceof Error)) {
		if (typeof err === 'object' && err !== null) {
			return Object.fromEntries(
				Object.entries(err).map(([key, value]) => [
					key,
					serializeError(value),
				]),
			);
		}

		return err;
	}

	return {
		message: err.message,
		cause: serializeError(err.cause),
		stack: err.stack,
	};
}

export function errorHandler(
	err: unknown,
	_req: Request,
	res: Response,
	_next: NextFunction,
) {
	const message = err instanceof Error ? err.message : 'Unknown error';
	const code =
		err instanceof Error && 'statusCode' in err
			? (err.statusCode as number)
			: 503;

	res.status(code).send({
		message,
		error: serializeError(err),
	});
}

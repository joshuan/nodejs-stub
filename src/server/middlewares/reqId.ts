import { v4 as uuidv4 } from 'uuid';

import type { NextFunction, Request, Response } from 'express';

const HEADER_NAME = 'X-Request-Id';
const REQUEST_ATTRIBUTE_NAME = 'id';

export function createRequestIdMiddleware() {
	return function requestIdMiddleware(
		request: Request,
		response: Response,
		next: NextFunction,
	) {
		const oldValue = request.get(HEADER_NAME);
		const id = oldValue === undefined ? uuidv4() : oldValue;

		response.set(HEADER_NAME, id);
		request[REQUEST_ATTRIBUTE_NAME] = id;

		next();
	};
}

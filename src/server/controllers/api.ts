import express, { type Response, type Request } from 'express';

import type { IAPIGetVersionDTOResponse } from '../../interfaces/api-dto';

const apiRouter = express.Router();

apiRouter.get('/version', (req: Request<void, IAPIGetVersionDTOResponse, void, void>, res: Response<IAPIGetVersionDTOResponse>) => {
	return res.json({
		version: process.env.npm_package_version || 'unknown_version',
	});
});

export { apiRouter };

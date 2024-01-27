import type { Request, Response } from 'express';
import type { IAppData } from '../../interfaces/app-data';

export function mainController(req: Request, res: Response) {
	const appData: IAppData = {
		reqId: String(req.id),
	};

	res.render('main', {
		title: 'Title',
		data: appData,
	});
}

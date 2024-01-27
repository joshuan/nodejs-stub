import type { Request, Response } from 'express';
import type { IAppData } from '../../interfaces/app-data';

export function mainController(req: Request, res: Response) {
	const appData: IAppData = {
		title: 'title',
	};

	res.render('index', {
		title: 'title',
		data: appData,
	});
}

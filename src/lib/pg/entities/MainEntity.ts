import { Column, Entity } from 'typeorm';

import type { IMainEntityCreate } from '../interfaces';

@Entity({ name: 'account' })
export class MainEntity {
	@Column({ primary: true, type: 'varchar', length: 255 })
	id: string;

	@Column({ type: 'varchar', length: 255 })
	title: string;

	static create(data: IMainEntityCreate): MainEntity {
		const main = new MainEntity();

		main.id = data.id;
		main.title = data.title;

		return main;
	}
}

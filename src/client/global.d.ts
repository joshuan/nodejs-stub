import type { IAppData } from '../interfaces/app-data';

declare global {
	interface Window {
		__APP_DATA__: IAppData;
	}
}

// Экспорт пустого объекта нужен, чтобы TypeScript обработал этот файл как модуль.
export {};

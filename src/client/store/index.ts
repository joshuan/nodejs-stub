import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { versionApi } from '../api/version';

import requestReducer from './request';

import type { PreloadedState } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	[versionApi.reducerPath]: versionApi.reducer,
	request: requestReducer,
});

const setupStore = (preloadedState?: PreloadedState<RootState>) => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware().concat(
				versionApi.middleware,
			),
		preloadedState,
	});
};

export const store = setupStore({ request: { reqId: window.__APP_DATA__.reqId } });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

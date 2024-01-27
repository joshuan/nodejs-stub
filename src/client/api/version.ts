import { createApi } from '@reduxjs/toolkit/query/react';

import { baseQuery } from './baseQuery';

import type { IAPIGetVersionDTOResponse } from '../../interfaces/api-dto';

export const versionApi = createApi({
	reducerPath: 'version',
	baseQuery,
	endpoints: (builder) => ({
		get: builder.query<IAPIGetVersionDTOResponse, void>({
			query: () => '/',
		}),
	}),
});

export const { useGetQuery } = versionApi;

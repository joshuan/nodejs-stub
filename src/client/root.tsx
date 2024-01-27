import React from 'react';
import { ThemeProvider, configure } from '@gravity-ui/uikit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import '@gravity-ui/uikit/styles/styles.css';

import { store } from './store';
import { router } from './router';

configure({
	lang: 'ru',
});

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			networkMode: 'always',
		},
	},
});

export function Root() {
	return (
		<ThemeProvider theme="light">
			<Provider store={store}>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</Provider>
		</ThemeProvider>
	);
}

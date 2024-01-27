import path from 'node:path';

import appConfig from './src/config';

import type { Configuration } from 'webpack';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const devServer: DevServerConfiguration = {
	port: appConfig.http.port - 1,
	proxy: {
		'/': {
			target: `http://localhost:${appConfig.http.port}`,
		},
	},
};

const config: Configuration = {
	entry: './src/client/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build/client'),
		filename: 'app.js',
		publicPath: '/assets',
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					compilerOptions: {
						module: 'ESNext',
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer,
};

export default config;

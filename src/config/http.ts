export interface IConfigHttp {
	port: number;
}

export const http: IConfigHttp = {
	port: process.env.PORT ? parseInt(process.env.PORT, 10) : 80,
};

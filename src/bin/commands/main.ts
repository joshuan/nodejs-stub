import type { Arguments, Argv } from 'yargs';

export const command = 'main';

export const desc = 'Main command';

interface IMainArgv {
	foo?: string;
}

export const builder = (yargs: Argv<{}>): Argv<IMainArgv> => {
	return yargs.option('foo', {
		describe: 'Foo option',
		type: 'string',
	});
};

export const handler = async (argv: Arguments<IMainArgv>) => {
	console.log(argv);
};

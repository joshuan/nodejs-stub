import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

yargs(hideBin(process.argv))
	.commandDir('commands', {
		extensions: ['ts'],
	})
	.strictCommands()
	.demandCommand()
	.parse();

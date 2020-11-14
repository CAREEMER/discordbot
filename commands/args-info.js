module.exports = {
	name: 'args-info',
	description: 'Выводит информацию о аргументах команд.',
	args: true,
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Первый аргумент: ${args[0]}`);
	},
};
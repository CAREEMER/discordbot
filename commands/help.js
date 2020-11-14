const { prefix } = require('../config.json');

module.exports = {
	name: 'help',
	description: 'Список доступных команд:',
	aliases: ['команды'],
	usage: '[имя команды]',
	cooldown: 5,
	execute(message, args) {
		const data = [];
		const { commands } = message.client;

		if (!args.length) {
			data.push('Список доступных команд:');
			data.push(commands.map(command => command.name).join(', '));
			data.push(`\nМожешь написать \`${prefix}help [название команды]\` что бы получить информацию о нужной команде!`);

			return message.author.send(data, { split: true })
				.then(() => {
					if (message.channel.type === 'dm') return;
					message.reply('Я отправил список доступных команд тебе в ЛС!');
				})
				.catch(error => {
					console.error(`Не смог отправить список ${message.author.tag}.\n`, error);
					message.reply('Я не могу отправить список тебе');
				});
		}

		const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
            return message.reply('Это не существующая команда');
		}

		data.push(`**Команда:** ${command.name}`);

		if (command.aliases) data.push(`**Аргументы:** ${command.aliases.join(', ')}`);
		if (command.description) data.push(`**Описание:** ${command.description}`);
		if (command.usage) data.push(`**Использование:** ${prefix}${command.name} ${command.usage}`);

		data.push(`**Кулдаун:** ${command.cooldown || 3} секунд(ы)`);

		message.channel.send(data, { split: true });
	},
};
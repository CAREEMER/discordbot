module.exports = {
	name: 'profpic',
	description: 'Получает URL твоего аватара или тагнутых пользователей.',
    aliases: ['icon', 'pfp'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Твой аватар: \n<${message.author.displayAvatarURL()}>`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `Аватар ${user.username}'а: \n<${user.displayAvatarURL()}>`;
		});

		message.channel.send(avatarList);
	},
};
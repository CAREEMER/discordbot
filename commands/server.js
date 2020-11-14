module.exports = {
	name: 'server',
	description: 'Отображает информацию о сервере.',
	guildOnly: true,
	execute(message) {
		message.channel.send(`Название сервера: ${message.guild.name}.\nВсего участников: ${message.guild.memberCount}.`);
		console.log(message.guild.channels.cache)
	},
};
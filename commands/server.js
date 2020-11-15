module.exports = {
	name: 'server',
	description: 'Отображает информацию о сервере.',
	guildOnly: true,
	cooldown: 60,
	execute(message) {
		message.channel.send(`Название сервера: ${message.guild.name}.\nВсего участников: ${message.guild.memberCount}.\nID сервера: ${message.guild.id}.`);
		//console.log(message.guild.channels.cache)
	},
};
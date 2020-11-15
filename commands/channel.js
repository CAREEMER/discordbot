module.exports = {
	name: 'channel',
	description: 'Отображает ID канала по названию.',
	guildOnly: true,
    cooldown: 60,
    args : true,
	execute(message, args) {
		message.channel.send(`ID канала ${args[0]} ${message.guild.channels.cache.find(channel => channel.name === args[0]).id}.`);
	},
};
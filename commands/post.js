module.exports = {
	name: 'post',
	description: 'Создает анонимный пост.',
    args: true,
    dmOnly: true,
    cooldown: 60,
	execute(message, args, client) {
		client.channels.cache.get(args[0]).send(`Аноним сообщает: \n> ${message.content.slice(7 + args[0].length)}\nКоманда [$post <channelID> <text>]`);
	},
};
module.exports = {
	name: 'post',
	description: 'Создает анонимный пост.',
    args: true,
    dmOnly: true,
    cooldown: 60,
	execute(message, args) {
		//client.channels.cache.get("510155117622722583").send(`Аноним сообщает: > ${message.content.slice(5)}\nЧто бы оставить анонимный пост, используйте команду [$post] у меня в ЛС!`);
	},
};
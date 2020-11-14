module.exports = {
	name: 'pedo',
    description: 'Выбирает педофила дня',
    guildOnly: true,
	execute(message) {
        array = []
        message.guild.members.cache.array().forEach(member => {
            array.push(member.user.username)
          });
        console.log(array);
        let rand = array[Math.floor(Math.random()*array.length)]
        message.channel.send('Педофил дня - ' + rand + '.');
	},
};
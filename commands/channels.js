const { PassThrough } = require("stream");

module.exports = {
	name: 'channels',
    description: 'Отображает ID каналов сервера.',
    args: false,
    guildOnly: true,
    cooldown: 60,
	execute(message, args, client) {
        let ostring = "";
        message.guild.channels.cache.forEach((channel) => {
            if (channel.type === "category") return;
            ostring += (` ~ ${channel.name} (${channel.type}) - ${channel.id}\n`)
        });
        message.channel.send(ostring)
	},
};
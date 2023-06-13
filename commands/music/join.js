const { EmbedBuilder, PermissionsBitField } = require("discord.js");

module.exports = {
    config: {
        name: "join",
        aliases: ["summon"],
        description: "📤 Makes the bot join the voice channel.",
        accessableby: "Owner",
        category: "music",
    },
    run: async (client, message, args) => {
		// if(message.author.id != client.owner) return message.channel.send("Just for **!          𝐌͜͡𝐏・♛✯ 𝐀𝐬𝐦𝐚𝐫 ོ ✯♛**")
        const msg = await message.channel.send("Processing.....");

		const { channel } = message.member.voice;
        if (!message.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Connect)) return message.channel.send(`I don't have perm \`CONNECT\` in ${channel.name} to join voice!`);
        if (!message.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Speak)) return message.channel.send(`I don't have perm \`SPEAK\` in ${channel.name} to join voice!`);

        const clientVoice = message.guild.members.me.voice.channel;
        const memberVoice = message.member.voice.channel;
		
		if (clientVoice) {
			if (clientVoice !== memberVoice) {
				return msg.edit({ content: `You must be in the same channel as ${message.client.user}` });
			} else {
				return msg.edit({ content: `I'm already on your voice channel` });
			}
		} else {
			if (memberVoice) {
				client.distube.voices.join(memberVoice)
					.then(voice => {
                        msg.edit({ content:`🔊 | **Joined:** \`${memberVoice.name}\`` });
					})
					.catch(error => {
						console.log(e);
					})

				
			} else {
				return msg.edit({ content: `You must be in a voice channel!` });
			}
		}
    }
}

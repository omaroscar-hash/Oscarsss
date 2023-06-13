const { PermissionsBitField } = require("discord.js");

module.exports = {
    config: {
        name: "play",
        aliases: ["pplay", "p"],
        description: "🎶 Plays a song from the source.",
        accessableby: "Owner",
        category: "music",
    },
    run: async (client, message, args) => {
        // if(message.author.id != client.owner) return message.channel.send("Just for **!          𝐌͜͡𝐏・♛✯ 𝐀𝐬𝐦𝐚𝐫 ོ ✯♛**")
     //   message.channel.send(`**Searching.....** \`${args.join(" ")}\``).then(msg => {
     //       setTimeout(() => msg.delete(), 5000)
     //   })
        
        const { channel } = message.member.voice;
        if (!channel) return message.channel.send("You need to be in voice channel.");
        if (!message.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Connect)) return message.channel.send(`I don't have perm \`CONNECT\` in ${channel.name} to join voice!`);
        if (!message.guild.members.cache.get(client.user.id).permissionsIn(channel).has(PermissionsBitField.Flags.Speak)) return message.channel.send(`I don't have perm \`SPEAK\` in ${channel.name} to join voice!`);
        const clientVoice = message.guild.members.me.voice.channel;
        const memberVoice = message.member.voice.channel;
        if (clientVoice) {
			if (clientVoice !== memberVoice) {
				return message.channel.send({ content: `You must be in the same channel as ${message.client.user}`});
			}
        }
        const string = args.join(" ");
        if (!string) {
            return message.channel.send("Please provide a song name or link.");
        }

        const options = {
            member: message.member,
            textChannel: message.channel,
            message
        }

        await client.distube.play(message.member.voice.channel, string, options);
    }
}

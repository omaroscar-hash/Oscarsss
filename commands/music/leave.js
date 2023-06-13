const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "leave",
        aliases: ["lev", "stop", "dc"],
        description: "📥 Makes the bot leave the voice channel.",
        accessableby: "Owner",
        category: "music",
    },
    run: async (client, message, args) => {
        // if(message.author.id != client.owner) return message.channel.send("Just for **!          𝐌͜͡𝐏・♛✯ 𝐀𝐬𝐦𝐚𝐫 ོ ✯♛**")
        const msg = await message.channel.send("Processing.....");
        const queue = client.distube.getQueue(message);
        
		if (!queue) return msg.edit(`There is nothing in the queue right now!`)
        const clientVoice = message.guild.members.me.voice.channel;
        const memberVoice = message.member.voice.channel;

        if (clientVoice === memberVoice) {
            if (queue) {
                client.distube.stop(message);
                client.distube.voices.leave(message.guild);
            } else {
                client.distube.voices.leave(message.guild);
            }
            msg.edit({ content: `🚫 | **Stop and Left:** | \`${memberVoice.name}\`` });

        }

    }
}

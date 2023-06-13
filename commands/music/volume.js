const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "volume",
        aliases: ["vol", "v"],
        description: "🔊 Changes the volume of the music playing.",
        accessableby: "Owner",
        category: "music",
    },
    run: async (client, message, args) => {
        // if(message.author.id != client.owner) return message.channel.send("Just for **!          𝐌͜͡𝐏・♛✯ 𝐀𝐬𝐦𝐚𝐫 ོ ✯♛**")
        const msg = await message.channel.send("Processing.....");

        const queue = client.distube.getQueue(message);
        if (!queue) msg.edit(`There is nothing in the queue right now!`)
        const { channel } = message.member.voice;
        if (!channel || message.member.voice.channel !== message.guild.members.me.voice.channel) return msg.edit("You need to be in a same/voice channel.")

        const volume = parseInt(args[0]);

        if (!volume) {
            return msg.edit({ content: `Current **volume** : \`${queue.volume}\`%` });
        }

        if (isNaN(volume)) {
            return msg.edit({ content: `Please enter a valid number` });
        }

        if (Number(volume) < 1 || Number(volume) > 100) return msg.edit(`Please provide a number between 1 and 100`)

        client.distube.setVolume(message, volume);
        msg.edit({ content: `🔊 | **Change volume to:** \`${args[0]}\`%` });

    }
}

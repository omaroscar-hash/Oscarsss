const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "skip",
        aliases: ["s"],
        description: "⏩ Skips the current song.",
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

        if (queue.songs.length === 1 && queue.autoplay === false) {
                msg.edit({ content: "🚨 | **There are no** `Songs` **in queue**" });
        } else {
            client.distube.skip(message)
                .then(song => {
                    msg.edit({ content: "⏭ | **Song has been:** `Skipped`"});
                });
        }
    }
}
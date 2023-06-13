const { EmbedBuilder } = require("discord.js");

module.exports = {
    config: {
        name: "loopqueue",
        aliases: ["lq", "loopall"],
        description: "🔁 loop the song in queue playing.",
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

        if (queue.repeatMode === 2) {
                client.distube.setRepeatMode(message, 0);
                msg.edit({ content: `🔁 | **Song is unloop:** \`All\``});
            } else {
                client.distube.setRepeatMode(message, 2);
                msg.edit({ content: `🔁 | **Song is loop:** \`All\`` });
            }
    }
}

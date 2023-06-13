
module.exports = async (client, queue, song) => {
    queue.textChannel.send({ content: `**Add Song • ${song.name}** \`${song.formattedDuration}\``})
}
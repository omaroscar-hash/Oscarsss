module.exports = async (client, queue, playlist) => {
     queue.textChannel.send({ content: `**Add Playlist • ${playlist.name}** \`${queue.formattedDuration}\` (${playlist.songs.length} tracks)`})
}
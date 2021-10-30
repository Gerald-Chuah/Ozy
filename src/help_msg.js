const help = (cmd, client) => {
  const PREFIX = client.config.PREFIX

  const FULL_COMMAND_LIST =
    `\`\`\`\
Full command list: \n\
${PREFIX}album keyword1 (keywords2) ... \n\
${PREFIX}clear \n\
${PREFIX}help \n\
${PREFIX}jump pos \n\
${PREFIX}lyric \n\
${PREFIX}next \n\
${PREFIX}pause \n\
${PREFIX}play keyword1 (keywords2) ... \n\
${PREFIX}play youtube_url \n\
${PREFIX}playfile uploaded_file \n\
${PREFIX}playlist \n\
${PREFIX}prev \n\
${PREFIX}queue (full | amount) \n\
${PREFIX}remove pos (pos2) (pos3->pos4) ... \n\
${PREFIX}resume \n\
${PREFIX}shuffle \n\
${PREFIX}stop \n\
${PREFIX}user username \n\n\
use ${PREFIX}help <command> to check detailed explaination \
\`\`\``

  const ALBUM =
    `\`\`\`\
${PREFIX}album [keyword] \n\
Aliases: pa, playalbum \n\n\
Search for an album \n\
Reply to the returned message to select an album and add it to the track. \n\n\
example: ${PREFIX}pa street legal dylan\
\`\`\``

  const CLEAR = `\`\`\`\
${PREFIX}clear \n\n\
Removes all songs from the list.\
\`\`\``

  const JUMP =
    `\`\`\`\
${PREFIX}jump [position] \n\
Aliases: j, goto \n\n\
Jumps to a specified position in the track\n\n\
example: ${PREFIX}j 10\
\`\`\``

  const NEXT = `\`\`\`\
${PREFIX}next \n\
Aliases: n, skip \n\n\
Skips to the next song.\
\`\`\``

  const PAUSE = `\`\`\`\
${PREFIX}pause \n\n\
Pauses the song.\
\`\`\``

  const PLAY =
    `\`\`\`\
${PREFIX}play [link or keywords] \n\
Aliases: p \n\n\
Search for the song in Netease and add the first result to the track \n\
If it's a link, then it adds the url\n\n\
example:\n\
  ${PREFIX}p free four pink floyd\n\
  ${PREFIX}p https://www.youtube.com/watch?v=DNvOajRSfZ8\
\`\`\``

  const PLAYFILE =
    `\`\`\`\
${PREFIX}playfile \n\
Aliases: f, pf \n\n\
Adds the attached file to the track.\
\`\`\``

  const PLAYLIST =
    `\`\`\`\
${PREFIX}playlist \n\
Aliases: list \n\n\
List all the playlist from the Netease user (set by using '${PREFIX}user') \n\
Reply to the returned message to select a playlist and add it to the track. \n\n\
\`\`\``

  const PREV =
    `\`\`\`\
${PREFIX}prev \n\
Aliases: b, back \n\n\
Skips to the previous song.\
\`\`\``

  const QUEUE =
    `\`\`\`\
${PREFIX}queue [full | amount] \n\
Aliases: q \n\n\
Displays the queue\n\
An additional parameter can be added to set the display amount\n\n\
example:\n\
  ${PREFIX}q \n\
  ${PREFIX}q 30\n\
  ${PREFIX}q full\
\`\`\``

  const REMOVE =
    `\`\`\`\
${PREFIX}remove [positions] \n\
Aliases: rm \n\n\
Removes the specified song(s) from the queue\n\n\
example:\n\
  ${PREFIX}rm 2 5 7 13 (removes 2, 5, 7, 13)\n\
  ${PREFIX}rm 4 8->10 (removes 4, 8, 9, 10)\
\`\`\``

  const RESUME = `\`\`\`\
${PREFIX}resume \n\n\
Resumes the paused song.\
\`\`\``

  const SHUFFLE = `\`\`\`\
${PREFIX}shuffle \n\n\
Shuffles the remaining queue.\
\`\`\``

  const STOP =
    `\`\`\`\
${PREFIX}stop \n\
Aliases: leave, reset \n\n\
Clears the queue and leaves the voice channel\
\`\`\``

  const USER =
    `\`\`\`\
${PREFIX}user [Netease username] \n\n\
Sets the user for this bot\n\
After user is set, you can use '${PREFIX}playlist' to display all the playlists created by this user.\n\n\
example: ${PREFIX}user 麻辣烤鱼别放大葱\
\`\`\``

  const HELP = {
    album: ALBUM,
    clear: CLEAR,
    jump: JUMP,
    next: NEXT,
    pause: PAUSE,
    play: PLAY,
    playfile: PLAYFILE,
    playlist: PLAYLIST,
    prev: PREV,
    queue: QUEUE,
    remove: REMOVE,
    resume: RESUME,
    shuffle: SHUFFLE,
    stop: STOP,
    user: USER,
    help: FULL_COMMAND_LIST,
  }

  return HELP[cmd]
}

const GENERAL_HELP_MESSAGE = (client) => {
  const PREFIX = client.config.PREFIX;
  return `My prefix is \`${PREFIX}\`\n\
  Join a voice channel and use \`${PREFIX}play\` to play some songs\n\
  Type \`${PREFIX}help\` to check the full list of commands`
}

exports.help = help
exports.GENERAL_HELP_MESSAGE = GENERAL_HELP_MESSAGE

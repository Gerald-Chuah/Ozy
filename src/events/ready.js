module.exports = (client, message) => {
  client.user.setActivity(` @ozy | ${client.config.PREFIX}help`, { type: "LISTENING" })
}

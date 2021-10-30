const { help } = require("../help_msg")
const { formulate_command } = require("../helper")

module.exports = {
  info: {
    name: "help",
  },

  run: async (client, message, args) => {
    try {
      if (args.length === 0) {
        message.channel.send(help("help", client))
      } else {
        let command = formulate_command(args[0])

        if (!help(command, client)) {
          message.channel.send(`${command} is not a valid command!`)
        } else {
          message.channel.send(help(command, client))
        }
      }
    } catch (err) {
      console.error(err)
      message.channel.send(`Error (help): ${err}`)
    }
  },
}

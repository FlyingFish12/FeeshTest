const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const human = require("humanize");
const paginationEmbed = require("discord.js-pagination");
module.exports = {
  name: "eval",
  description: "cool kids only",
  aliases: [],
  execute(message, args, client) {
    if (
      message.author.id === "427476318050058251"
    ) {
      var result = message.content.split(" ").slice(1).join(" ");
      let evaled = eval(result);
      message.channel.send(evaled);
    }
  },
};

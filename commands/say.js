const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports ={
    name: 'say',
    description: "A Say Command",
    aliases: ['say','s','write', 'repeat'],
    execute(message,client){
    let args = message.content.split(" ").slice(1);
    message.delete();

        const sayembed = new Discord.MessageEmbed()
            .setColor('#50C878')
            .setDescription(args.join(` `)).cleanContent;
        message.channel.send(sayembed)
    }
}
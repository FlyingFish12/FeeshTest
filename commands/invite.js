const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const human = require('humanize');
const paginationEmbed = require('discord.js-pagination');
module.exports={
    name: 'invite',
    description: "An invite command",
    aliases: ['botinvite'],
    execute(message,args,client){
        const InviteEmbed = new Discord.MessageEmbed()
        .setColor(`#DA005A`)
        .setTitle("Invite me to your server today")
        .setDescription("[This Link Here](https://discord.com/api/oauth2/authorize?client_id=735918313921708053&permissions=388160&redirect_uri=https%3A%2F%2Fdiscord.com%2Fapi%2Foauth2%2Fauthorize%3Fclient_id%3D735918313921708053%26permissions%3D8%26redirect_uri%3Dhttps%253A%252F%252Fdiscord.com%252Fapi%252Foauth2%252Fauthorize%253Fclient_id%253D735918&scope=bot)")
        .setFooter("Everyone needs a little Feesh in their lives")
        .setTimestamp()
message.channel.send(InviteEmbed)                

    }
}

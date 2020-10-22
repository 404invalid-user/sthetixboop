module.exports = {
    name: 'say',
    description: "say command for mods and admins",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('./roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        const noPerm = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#10FF00')
            .setTitle('error')
            .setDescription('You do not have permission to use that command. Only a admin and / or moderator can use this command');

        //command
        let staffRole = message.member.roles.cache.find(r => ['Owner', 'dev', 'Staff'].includes(r.name))
        if (!staffRole) return message.reply(noPerm)
        if (staffRole) {
            message.delete();
            if (!args[1]) { message.reply(`Error Supply a message to send if you need help do ${PREFIX}help say`) };
            if (args[1]) {
                let logChannel = message.guild.channels.cache.get(logChannleId)
                if (!logChannel) return message.reply('there isnt a log channel\ncontact a devolper of this bot to fix this.')
                if (logChannel) {
                    let sayArgs = message.content.substring(PREFIX.length).split(" ");
                    if (message.content.includes('@here')) return message.reply(`Holup you can @ :shrek: everyone`)
                    if (message.content.includes('@everyone') || message.content.includes(serverId)) return message.reply(`Holup you can @ :shrek: everyone`)
                    if (message.content.includes('@here')) return message.reply(`get outa here you cant do at here`)
                    message.channel.send(`${sayArgs.slice(1).join(" ")}`)
                    let statLog = new Discord.MessageEmbed()
                        .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                        .setTitle('__LOG__ say')
                        .addField('done by:', `<@!${message.member.id}>`)
                        .addField('done in:', `#${message.channel.name}`)
                        .addField('command:', `${sayArgs.slice(0).join(" ")}`)
                        .setTimestamp()
                        .setFooter('Moderation message', `${message.author.displayAvatarURL()}`)
                    logChannel.send(statLog)
                }
            }
        }
    }
}
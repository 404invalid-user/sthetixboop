module.exports = {
    name: 'sthetix',
    description: "sends the requested link for Sthetix",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');


        //command

        if (args[1] == "youtube") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix youtube link')
                .setURL('https://www.youtube.com/sthetixofficial')
                .setDescription('https://www.youtube.com/sthetixofficial')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else if (args[1] == "server") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix discord server link')
                .setURL('https://discord.link/sthetix')
                .setDescription('https://discord.link/sthetix')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else if (args[1] == "twitter") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix twitter link')
                .setURL('https://www.twitter.com/sthetixofficial')
                .setDescription('https://www.twitter.com/sthetixofficial')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else if (args[1] == "facebook") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix facebook link')
                .setURL('https://www.facebook.com/sthetixofficial')
                .setDescription('https://www.facebook.com/sthetixofficial')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else if (args[1] == "instagram") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix instagram link')
                .setURL('https://www.instagram.com/sthetixofficial')
                .setDescription('https://www.instagram.com/sthetixofficial')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else if (args[1] == "bitchute") {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix bitchute link')
                .setURL('https://www.bitchute.com/channel/Aljex1X2BQGt/')
                .setDescription('https://www.bitchute.com/channel/Aljex1X2BQGt/')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        } else {
            let sthetix = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Sthetix links')
                .setDescription(`to get a link do\n\n${PREFIX}Sthetix youtube\n${PREFIX}Sthetix server\n${PREFIX}Sthetix twitter\n${PREFIX}Sthetix facebook\n${PREFIX}Sthetix instagram\n${PREFIX}Sthetix bitchute`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(sthetix);
        }
    }
}
module.exports = {
    name: 'about',
    description: "about bot",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        //command
        let aboutEmbed = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#10FF00')
            .setTitle('About bot')
            .setDescription('everything you need to know.')
            .addField('Developers', '<@!577059129097584640> <@!522534458071449620> and some otheres i think')
            .addField('Version', '1.2.1')
            .addField('Coolness level', 'epic bot for Sthetix Official discord server')
            .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
            .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
        message.channel.send(aboutEmbed);

    }
}
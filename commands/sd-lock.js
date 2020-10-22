module.exports = {
    name: 'sd-lock',
    description: "sd-lock command",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        //command
        const sdLockEmbed = new Discord.MessageEmbed()
            .setTitle('This is SD Lock state:')
            .setColor('#10FF00')
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setImage('https://cdn.discordapp.com/attachments/618037641522315284/708326331955413072/Oic5s_1.png')
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);

        message.channel.send(sdLockEmbed);
    }
}
module.exports = {
    name: 'roleinfo',
    description: "role command for admins",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('./roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');


        //command
        const noPerm = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#10FF00')
            .setTitle('error')
            .setDescription('You do not have permission to use that command. Only a admin and / or moderator can use this command');

        let staff_role = message.member.roles.cache.find(r => ['Owner', 'dev', 'Staff'].includes(r.name))
        if (!staff_role) return message.reply(noPerm);
        if (staff_role) {
            if (!args[1]) return message.channel.send("you need to @ a role.\n@ everyone will not work");
            let roleInfoId = message.mentions.roles.first().id
            let membersWithRole = message.guild.roles.cache.get(roleInfoId).members;
            message.channel.send(`there are ${membersWithRole.size} members with that role.`);
        }

    }
}
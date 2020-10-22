module.exports = {
    name: 'test',
    description: "test",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');


        message.channel.send('test')

    }
}
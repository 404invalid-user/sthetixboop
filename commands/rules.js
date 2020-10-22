module.exports = {
    name: 'rules',
    description: "rules command ",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('./roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');


        //rules command

        if (args[1] == 'shrek') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Do not insult, offend, discriminate, diss, say you don’t like and be auntie ogre to the all powerful the all mighty the one the only Shrek the god')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '1') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('1.  No NSFW content of any kind')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '2') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('2. No spamming, advertising or promoting of other servers')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '3') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('3. No pinging unless it is for an actual reason')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '4') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('4. No harassment, abuse or public bullying of other members ')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '5') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('5. No racism, sexism - respect other people')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '6') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('6. No public squabbling, if you have personal problems with another member, resolve it yourself.')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '7') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('7. No comparing, complaining of another server')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '8') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('8. No talk about illegal stuff, e.g. drugs, guns, etc')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '9') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('9. No discussion about illegal activity such as carding, stealing, frauding, etc')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '10') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('10. No impersonating someone else. ')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '11') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('11. No swearing or using bad words')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '12') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('12. Do not make false / hoaxes / misleading / bullsh*t claim about the video guide')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '13') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('13. No talk about piracy. Do not post any link to pirated game site.')
            message.channel.send(rulesEmbed);
        } else if (args[1] == '14') {
            let rulesEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('14. Do not ping staff without a valid reason. ')
            message.channel.send(rulesEmbed);
        } else {
            const noRules = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('rule not found.')
                .setDescription("Do /rules (1 to 14)")
            message.channel.send(noRules)
        }


    }
}
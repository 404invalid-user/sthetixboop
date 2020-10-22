module.exports = {
    name: 'help',
    description: "help command ",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('./roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        //help command
        if (args[1] == 'rules') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help rules')
                .setDescription(`Quotes the rules from <#736511184194371709> by doing ${PREFIX}rules 1 to 14`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'sd-lock') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help sd-lock')
                .setDescription('Gives a nice photo description of what a locked and unlocked SD card looks like')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'sd-root') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help sd-root')
                .setDescription('Gives a nice photo description of what your SD card’s root should look like and where it is')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'about') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help about')
                .setDescription('Gives you basic info on the bot')
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } /*mod commands help*/
        else if (args[1] == 'say') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help say')
                .setDescription(`**For mods and admins only**\nMakes sthetixboop repeat what you say\ne.g. \`${PREFIX}say hello people of the stheix official server\``)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'embed') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help embed')
                .setDescription('**For mods and admins only**\nLet’s mods and admin make a custom embed.')
                .addField('Command structure', `${PREFIX}embed [title] [description] [colour]`)
                .addField('Command example', `${PREFIX}embed [Sthetix is awesome] [Sthetix is one awesome person and content creator] [#13ff00]`)
                .addField('Extra info', `To get the # colour code(s) [click here](https://htmlcolorcodes.com/)`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'embed-img') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help embed-img')
                .setDescription('**For mods and admins only**\nLet’s mods and admin make a custom embed.')
                .addField('Command structure', `${PREFIX}embed [title] [description] [colour] [img-url]`)
                .addField('Command example', `${PREFIX}embed [Sthetix is awesome] [Sthetix is one awesome person and content creator] [#13ff00] [http://imgsite.com/sthetix.png]`)
                .addField('Extra info', `To get the # colour code(s) [click here](https://htmlcolorcodes.com/)`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'stat') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help stat')
                .setDescription(`**For admins only**\nsets the stats of Sthetixboop\ne.g. \`${PREFIX}stat looking at the server\``)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'rules-info') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help rules-info')
                .setDescription(`**For admins only**\nPosts the rules, info and links in <#736511184194371709>`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'console-roles') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help console-roles')
                .setDescription(`**For admins only**\nPosts the console roles in <#736511186941771776>`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'old') {
            if (!args[2]) return message.reply(`do you mean ${PREFIX}help old rules-info ?`)
            if (args[2] == 'rules-info') {
                let helpSomethingEmbed = new Discord.MessageEmbed()
                    .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                    .setColor('#10FF00')
                    .setTitle('Help rules-info')
                    .setDescription(`**For admins only**\nPosts the rules, info and links in <#736511184194371709> without the fancy embed `)
                    .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                    .setTimestamp()
                    .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
                message.channel.send(helpSomethingEmbed);
            }
        } else if (args[1] == 'role-info') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help role-info')
                .setDescription(`**For admins and staff only**\nShows how many members have that role `)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } else if (args[1] == 'users-left') {
            let helpSomethingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setColor('#10FF00')
                .setTitle('Help users-left')
                .setDescription(`Shows the amount of users left to join the server until we reach 3,500`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpSomethingEmbed);
        } /*the main help command*/
        else {
            const helpEmbed = new Discord.MessageEmbed()
                .setColor('#10FF00')
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setTitle('Help')
                .setDescription(`For help with a specific command do ${PREFIX}help (command)`)
                .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                .addFields({ name: 'Commands', value: `${PREFIX}ping\n${PREFIX}users-left\n${PREFIX}rules 1-14\n${PREFIX}help\n${PREFIX}sthetix\n${PREFIX}sd-lock\n${PREFIX}sd-root\n${PREFIX}about` }, { name: 'mod commands', value: `${PREFIX}say\n${PREFIX}embedn${PREFIX}embed-img\n${PREFIX}role-info` }, { name: 'admin/dev commands', value: `${PREFIX}stat\n${PREFIX}rules-info\n${PREFIX}console-roles\n${PREFIX}old rules-info` }, { name: '\u200B', value: 'want to add a command? contact a bot dev' }, )
                .setTimestamp()
                .setFooter(`Requested by ${message.member.displayName}`, `${message.author.displayAvatarURL()}`);
            message.channel.send(helpEmbed)
        }
    }
}
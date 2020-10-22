module.exports = {
    name: 'embed',
    description: "embed command for mods and admins",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        const no_perm = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#10FF00')
            .setTitle('error')
            .setDescription('You do not have permission to use that command. Only a admin and / or moderator can use this command');

        //command
        let staffRole = message.member.roles.cache.find(r => ['Owner', 'dev', 'Staff'].includes(r.name))
        if (!staffRole) return message.reply(no_perm);
        if (staffRole) {
            let logChannel = message.guild.channels.cache.get(logChannleId)
            if (!logChannel) return message.reply('there isnt a log channel\ncontact a devolper of this bot to fix this.')
            if (logChannel) {
                if (!args[1]) return message.reply(`you at leas need to supply a title if you stuck do ${PREFIX}help embed`)
                if (!message.content.includes('[')) return message.reply(`something is wrong with that if youre stuck do ${PREFIX}help embed`)
                let stat_log = new Discord.MessageEmbed()
                    .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                    .setTitle('__LOG__ embed')
                    .addField('done by:', `<@!${message.member.id}>`)
                    .addField('command:', `${args.slice(0).join(" ")}`)
                    .setTimestamp()
                    .setFooter('Moderation message', `${message.author.displayAvatarURL()}`)
                logChannel.send(stat_log)

                let mcontent = message.content;
                let titleStart = mcontent.indexOf('[');
                let titleEnd = mcontent.indexOf(']');
                let title = mcontent.substr(titleStart + 1, titleEnd - titleStart - 1);

                let descStart = mcontent.indexOf('[', titleStart + 1);
                let descEnd = mcontent.indexOf(']', titleEnd + 1);
                let description = mcontent.substr(descStart + 1, descEnd - descStart - 1);

                let colorstart = mcontent.indexOf('[', descStart + 1);
                let colorend = mcontent.indexOf(']', descEnd + 1);
                let color = mcontent.substr(colorstart + 1, colorend - colorstart - 1);

                let thumstart = mcontent.indexOf('[', colorstart + 1);
                let thumend = mcontent.indexOf(']', colorend + 1);
                let thum = mcontent.substr(thumstart + 1, thumend - thumstart - 1);

                let imgstart = mcontent.indexOf('[', thumstart + 1);
                let imgend = mcontent.indexOf(']', thumend + 1);
                let img = mcontent.substr(imgstart + 1, imgend - imgstart - 1);

                let custome_embed = new Discord.MessageEmbed().setAuthor(`${message.member.displayName}`, `${message.author.displayAvatarURL()}`).setTitle(title).setDescription(description).setColor(color)
                message.channel.send(custome_embed)
            }
        }
    }
}
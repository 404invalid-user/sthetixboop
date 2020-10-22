module.exports = {
    name: 'rules-info',
    description: "rules-info command for admins",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('../roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        const noPerm = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#10FF00')
            .setTitle('error')
            .setDescription('You do not have permission to use that command. Only a admin and / or moderator can use this command');

        //command
        let adminRole = message.member.roles.cache.find(r => ['Owner', 'dev'].includes(r.name))
        if (!adminRole) return message.reply(noPerm)
        if (adminRole) {
            //set rules channel again to prevent the error 
            let rules = message.guild.channels.cache.get(rulesChannelId);
            if (!rules) return message.reply('**error** there isnt a rules-info channle\ncheck `channels.json` and set rules_channel_id to the channel id')
            if (rules) {
                //Makes two embeds
                const embedOne = new Discord.MessageEmbed()
                    .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                    .setColor('#10FF00')
                    .setTitle('\nWelcome to the official Sthetix discord server. This is a support server for all of my YouTube videos.')
                    .setThumbnail('https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512')
                    .setDescription("\n\nRULES\n\n1.  No NSFW content of any kind.\n2. No spamming, advertising or promoting of other servers.\n3. No pinging unless it is for an actual reason.\n4. No harassment, abuse or public bullying of other members.\n5. No racism, sexism - respect other people.\n6. No public squabbling, if you have personal problems with another member, resolve it yourself.\n7. No comparing, complaining of another server.\n8. No talk about illegal stuff, e.g. drugs, guns, etc.\n9. No discussion about illegal activity such as carding, stealing, frauding, etc.\n10. No impersonating someone else.\n11. No swearing or using bad words.\n12. Do not make false/hoaxes/misleading/bullsh*t claim about the video guide(s).\n13. No talk about piracy. Do not post any link to pirated game site.\n14. Do not ping staff without a valid reason.\n\nHelp other people if you can and do not act as you were a staff or admin.\n\n\nIf you do not like this server or my videos, then you can leave without provoking others.\nThe server can ban you anytime without warning.")
                const embedTwo = new Discord.MessageEmbed()
                    .setColor('#10FF00')
                    .setDescription("\n\n__**SUPPORT**__\n\nIf you need help, please post your questions or problems to specific channel by getting appropriated roles in <#736511186941771776>.\n\nor you can contact <@!307284032167870466>  for faster response.\n\n__**LINKS**__\n\nThese are some important links related to homebrew and modding.\n\n__**Sthetix**__\n__Server link __: https://discord.link/sthetix\n__YouTube __:  https://www.youtube.com/sthetixofficial\n__Twitter __: https://www.twitter.com/sthetixofficial\n__Facebook __: https://www.facebook.com/sthetixofficial\n__Instagram__ :  https://www.instagram.com/sthetixofficial\n\n__**Nintendo 3DS**__\n__3DS modding guide __: https://3ds.hacks.guide/\n\n__**PS Vita**__\n__PS Vita modding guide __: https://vita.hacks.guide/\n__HENkaku __: https://henkaku.xyz/\n\n__**News**__\n__News __: https://gbatemp.net/\n\n__**Playstation 4**__\n__PSXHAX __: https://www.psxhax.com/\n\n__**Xbox 360**__\n__Xbox 360 Modding guide __: https://www.se7ensins.com/forums/threads/jtag-rgh-r-jtag-xbox-360-ultimate-exploit-guide.804054/\n\n__**Nintendo Wii U**__\n__Wii U modding guide __: https://wiiu.hacks.guide/\n\n__**Nintendo Wii**__\n__Modding guide __: https://wii.guide/\n\n__**Nintendo Switch**__\n__CFW__\nSX OS : https://sx.xecuter.com/\nAtmosphere https://github.com/Atmosphere-NX/Atmosphere/releases\nReiNX Guide : https://reinx.guide/\nAtlas NX / Kosmos : https://github.com/AtlasNX/Kosmos/releases\n\n__**Firmwares**__\nhttps://link.sthetix.info/nxfirmware\nhttps://www.youtube.com/watch?v=zZlzVGViJy0\n\n")
                    .setFooter('rules and info', 'https://cdn.discordapp.com/icons/539302504777777152/68b5c9c57e24eaa7a8e3b0fb5ebaf455.png?size=512');
                //sends the two embeds and one standard message.
                rules.send(embedOne);
                rules.send(embedTwo);
                rules.send("<@&736511127772725261> to access server, type```/verify```in <#736511187965050880>")
            }
        }
    }
}
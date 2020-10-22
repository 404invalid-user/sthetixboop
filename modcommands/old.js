module.exports = {
    name: 'old',
    description: "old rules-info command for admins",
    execute(message, args) {

        //discord things

        const Discord = require('discord.js');
        const admins = ['577059129097584640', '307284032167870466']
        const { PREFIX } = require('../config.json');
        const { member, security, hacker } = require('./roles.json');
        const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannleId, memberCountChannelId, serverId } = require('../channels.json');

        const noPerm = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setColor('#0099ff')
            .setTitle('error')
            .setDescription('You do not have permission to use that command. Only a admin and / or moderator can use this command');

        //command
        if (!args[1]) return;
        if (args[1] == 'rules-info') {
            let adminRole = message.member.roles.cache.find(r => ['Owner', 'dev'].includes(r.name))
            if (!adminRole) return message.reply(noPerm)
            if (adminRole) {
                rules.send('Welcome to the official **Sthetix** discord server. \nThis is a support server for all of my YouTube videos.\n\n\n**RULES**\n\n1.  No NSFW content of any kind\n2. No spamming, advertising or promoting of other servers\n3. No pinging unless it is for an actual reason\n4. No harassment, abuse or public bullying of other members \n5. No racism, sexism - respect other people\n6. No public squabbling, if you have personal problems with another member, resolve it yourself.\n7. No comparing, complaining of another server\n8. No talk about illegal stuff, e.g. drugs, guns, etc\n9. No discussion about illegal activity such as carding, stealing, frauding, etc.\n10. No impersonating someone else. \n11. No swearing or using bad words\n12. Do not make false/hoaxes/misleading/bullsh*t claim about the video guide\n13. No talk about piracy. Do not post any link to pirated game site.\n14. Do not ping staff without a valid reason \n\n\n**Help other people if you can and do not act as you were a staff or admin.** \n\n**If you do not like this server or my videos, then you can leave without provoking others.**\n**The server can ban you anytime without warning.**\n\n\n**SUPPORT**\n\nIf you need help, please post your questions or problems to specific channel by getting appropriated roles in #consoles-roles.\n\nor you can contact @sthetix#7311  for faster respond. \n\n**LINKS**\n\nServer link  : <https://invite.gg/sthetix>\nYouTube  :  <https://www.youtube.com/sthetixofficial>\nTwitter : <https://www.twitter.com/sthetixofficial>\nFacebook : <https://www.facebook.com/sthetixofficial>\nInstagram :  <https://www.instagram.com/sthetixofficial>\n');
                rules.send('These are some important links related to homebrew and modding\n\n**Nintendo 3DS**\n3DS modding guide : <https://3ds.hacks.guide/>\n\n**PS Vita**\nPS Vita modding guide : <https://vita.hacks.guide/>\nHENkaku : <https://henkaku.xyz/>\n\n**News**\nNews : <https://gbatemp.net/>\n\n**Playstation 4**\nPSXHAX : <https://www.psxhax.com/>\n\n**Xbox 360**\nXbox 360 Modding guide : <https://www.se7ensins.com/forums/threads/jtag-rgh-r-jtag-xbox-360-ultimate-exploit-guide.804054/>\n\n**Nintendo Wii U **\nWii U modding guide : <https://wiiu.hacks.guide/>\n\n**Nintendo Wii**\nModding guide : <https://gbatemp.net/threads/modify-any-wii-4-3-below.171901/>\n\n**Nintendo Switch**\n\n**CFW** \nSX OS : <https://sx.xecuter.com/>\nAtmosphere <https://github.com/Atmosphere-NX/Atmosphere/releases>\nReiNX Guide : <https://reinx.guide/>\nAtlas NX / Kosmos : <https://github.com/AtlasNX/Kosmos/releases>\n\n**Firmwares**\n<https://link.sthetix.info/nxfirmware>	');
                rules.send(' discord.link/sthetix   https://www.youtube.com/watch?v=zZlzVGViJy0')
                rules.send("@Security to access server, type ```/verify``` in " + client.channels.cache.get('736511187965050880').toString());
                rules.send('To see Sony/Xbox/Nintendo/Mobile/PC channels, type the different commands:\nIf you want to access Xbox channels type ```/xbox```\nIf you want to access Playstation channels type ```/playstation```\nIf you want to access Nintendo channels type ```/nintendo```\nIf you want to access PC related channels type ```/pc```\nIf you want to access Mobile channels type ```/mobile```\n');
            }
        }
    }
}
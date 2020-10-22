//check the README in the repo for more info
//discord things

const Discord = require('discord.js');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

//gets file
const { PREFIX, token } = require('./config.json');
//gets roles
const { member, security, hacker } = require('./roles.json');
//gets channels
const { verifyChannelId, rulesChannelId, consoleRolesChannelId, logChannelId, memberCountChannelId, serverId } = require('./channels.json');
//set the admins
const admins = ['577059129097584640', '307284032167870466']
    //me who made most of this
const invalidUser = "522534458071449620"

//word lists
const piracyWords = ["freeshop", "ciangel", "tikdevil", "beeshop", "hbgshop", "tinfoil", "wiiu usb helper", "ghost eshop", "3dscia", "cia-3ds", "ziperto", "romsmania", "emuparadise", "vimm"]


/*Command handler
make sure commands folder is in the same folder as index.js and all commands are in the commands folder */
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.modCommands = new Discord.Collection();

const modCommandFiles = fs.readdirSync('./modcommands/').filter(file => file.endsWith('.js'));
for (const file of modCommandFiles) {

    const modCommand = require(`./modcommands/${file}`);
    client.modCommands.set(modCommand.name, modCommand);
}



//console log when bot is online
client.once('ready', () => {
    console.log("loading...")
    console.log('Check the README in the repo for info')
    console.log('Current commands:')
    console.log(`${commandFiles}`)
    console.log('SthetixBoop Ready!');
    console.log('__')
    console.log(`do ${PREFIX}help in discord for commands and info`)
});

const noPermAdmin = new Discord.MessageEmbed()
    .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
    .setColor('#10FF00')
    .setTitle('error')
    .setDescription('You do not have permission to use that command. Only a admin can use this command');

//sent message to new members on join
client.on("guildMemberAdd", (member) => {
    //Defines the channels and member count
    const rulesChannel = client.channels.cache.get(rulesChannelId)
    const rolesChannel = client.channels.cache.get(consoleRolesChannelId)
    let memberCount = client.guilds.cache.get(serverId).memberCount;
    let memberCountChannel = client.guilds.cache.get(serverId).channels.cache.get(memberCountChannelId);

    //Makes a welcome embed to dm to the user
    const welcomeEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
        .setDescription("Welcome to Sthetix discord server!\nPlease review rules in " + rulesChannel.toString() + "and select your roles in " + rolesChannel.toString())

    //sends embed to new member
    member.send(welcomeEmbed)

    //updates member count channel
    memberCountChannel.setName("Member• " + memberCount + " •Users");

    //Insta ban if name is galindo
    if (member.user.username == "galindo") {
        member.ban({ reason: "name = galindo" }).then(() => {})
    }
});

client.on("message", async message => {

    let args = message.content.toLowerCase().substring(PREFIX.length).split(" ");

    if (message.channel.type == "dm") return;

    //at bot gives prefix
    if (message.content.includes("<@!618053789835853824>")) {
        let atBotEmbed = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setDescription(`my prefix is \`${PREFIX}\`\ndo \`${PREFIX}help\` for help menu`)
            .setColor('#10FF00')
        message.channel.send(atBotEmbed)
    }


    for (i = 0; i < piracyWords.length; i++) {
        if (message.content.toLowerCase().includes(piracyWords[i])) {
            message.delete();
            message.reply(`no piracy`);

            const logchannel = client.channels.cache.get(logChannleId);
            if (!logchannel) { message.channel.send(`error.\n there is no log channel <@!${invalidUser} fix it`) }
            if (logchannel) {
                const embed = new Discord.MessageEmbed()
                    .setTitle('piracy Words')
                    .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                    .setColor('#10FF00')
                    .addField('user', `${message.author.tag} (${message.author.id})`)
                    .addField('channel', `${message.channel.name}`)
                    .setDescription(message.content)
                    .setThumbnail(message.author.displayAvatarURL())
                    .setFooter('moderation message')
                    .setTimestamp()
                logchannel.send(embed)
            }

            if (message.author.bot) return;

        }

    }


    if (!message.content.startsWith(PREFIX)) return;


    //====================================================
    //everyon can use these commands

    //verify command
    if (args[0] == "verify") {
        //give and remove roles
        message.member.roles.add(member);
        message.member.roles.remove(security);
        message.delete();
        //Dms user confirming they are now a member
        message.member.send(`you are now a verified member in Sthetix official.\nhappy modding / hacking / home brewing`)
    }

    //usersleft command
    if (args[0] == "users-left") {

        let memberCount = client.guilds.cache.get(serverId).memberCount;
        let usersLeft = parseInt(3500) - parseInt(memberCount)
        let usersLeftEmbed = new Discord.MessageEmbed()
            .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
            .setTitle("there are " + `${usersLeft}` + "members left to join untill we reach 3500 members")
            .setColor('#10FF00')
        message.channel.send(usersLeftEmbed)
    }

    //ping command
    if (args[0] == 'ping') {
        message.channel.send("Pinging...").then(m => {
            var ping = m.createdTimestamp - message.createdTimestamp;
            var pingEmbed = new Discord.MessageEmbed()
                .setAuthor('Sthetixboop', 'https://cdn.discordapp.com/avatars/618053789835853824/a1c51db0b9d2f02f6212ba57aba7a690.png?size=512')
                .setTitle("pong.")
                .setDescription(`\nping is ${ping}`)
                .setColor('#10FF00')

            message.channel.send(pingEmbed)
        });
    }


    //rules comamd
    if (args[0] === 'rule' || args[0] == 'rules') {
        client.commands.get('rules').execute(message, args);
    }
    //help 
    if (args[0] == 'help') {
        client.commands.get('help').execute(message, args);
    }
    //sends the requested link for Sthetix
    if (args[0] == "sthetix") {
        client.commands.get('sthetix').execute(message, args);
    }
    //about command
    if (args[0] == 'about') {
        client.commands.get('about').execute(message, args);
    }
    //sd-lock command
    if (args[0] == 'sd-lock') {
        client.commands.get('sd-lock').execute(message, args);
    }
    //sd-root command
    if (args[0] == 'sd-root') {
        client.commands.get('sd-root').execute(message, args);
    }
    //ignore this 
    /* if (args[0] == 'hacker') {
        if (!args[1]) return message.channel.send(`do \`${prefix}hacker upvote id or @ mention to suggest someone to become hacker++\ndo \`${prefix}hacker downvote id or @ mention\` to sugest a removal of the hacker++ role from someone`)
        if (args[1] == 'upvote') {

        } else if (args[1] == 'downvote') {

        }
    }*/

    //=======================================
    //moderator and admin commands that can’t be used by general members

    //The bot repeats what you type after /say 
    if (args[0] == 'say') {
        client.modCommands.get('say').execute(message, args);
    }
    //Lets all moderators Make a custom embed 
    if (args[0] == 'embed') {
        message.delete()
        client.modCommands.get('embed').execute(message, args);
    }
    if (args[0] == 'embed-img') {
        message.delete()
        client.modCommands.get('embed-img').execute(message, args);
    }

    //==========================================
    //Only admins can use these commands (dev and owner)

    if (args[0] == "rules-info") {
        client.modCommands.get('rules-info').execute(message, args);
    }
    if (args[0] == "console-roles") {
        client.modCommands.get('console-roles').execute(message, args);
    }
    //The text sent to rules and info channel
    if (args[0] == 'old') {
        client.modCommands.get('old').execute(message, args);
    }
    if (args[0] == 'role-info') {
        client.modCommands.get('roleinfo').execute(message, args);
    }
    //Sets the stats of the bot
    //This would be in the command handler but js was hmm so I can’t be bothered 
    if (args[0] == 'stat') {
        let adminRole = message.member.roles.cache.find(r => ['Owner', 'dev'].includes(r.name)) || message.author.id == invalidUser
        if (!adminRole) return message.reply(noPermAdmin)
        if (adminRole) {
            if (!args[1]) return message.reply(`You need to supply a status to set like /stat to the people of Sthetix Official\nfor more info do ${PREFIX}help stat`)
            client.user.setActivity(`${args.slice(1).join(" ")}`, { type: 'PLAYING' })
            message.reply(`stat set to "${args.slice(1).join(" ")}"`)
        }
    }

});


client.login(token);

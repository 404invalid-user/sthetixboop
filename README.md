# sthetixboop
## test edit

Nothing is perfect my code will have some errors I have tested most functions 

- setup

to use this you must replace "yourbottokenhere" with your bot token in config.json and have node installed also change the role/server id in roles and the same for channels in channels.json

**To apply this ‘update’**

You need to go into your config.json and change the name ‘prefix’ to ‘PREFIX’ 
Then back up and delete the index.js that is already in your bot file and replace it with the one here 
Then you drag and drop commands, channels.json and roles.json into the bots folder
If you experience an error make sure you have node.js and discord.js v12 installed because they are not in this folder
Any other problems contact me

discord Fast: !nvalid-user#0157

Slowish Email: user@invaliduser.uk.to



__**a full list of commands and what they do**__


__commands that can be used by all members:__

- [ping] - pings the bots latency in (ms) miller seconds. 
- [xbox] - gives the xbox role to members then sends a confirm message and deletes it after 3 seconds if they already have the xbox role it removes the role then sends a confirm message and deletes it after 3 seconds.
- [playstation] - gives the sony role to members then sends a confirm message and deletes it after 3 seconds if they already have the sony role it removes the role then sends a confirm message and deletes it after 3 seconds.
- [nintendo] - gives the nintendo role to members then sends a confirm message and deletes it after 3 seconds if they already have the nintendo role it removes the role then sends a confirm message and deletes it after 3 seconds.
- [pc] - gives the pc role to members then sends a confirm message and deletes it after 3 seconds if they already have the pc role it removes the role then sends a confirm message and deletes it after 3 seconds.
- [mobile] - gives the mobile role to members then sends a confirm message and deletes it after 3 seconds if they already have the mobile role it removes the role then sends a confirm message and deletes it after 3 seconds.
- [rules] [rule] - sends an embed of the selected rule if the specified rule number doesn't exist it will send an error rule doesn't exist embed.
- [help] - sends an embed of all the commands. to get help with a specific command you can do /help (command)
- [sthetix] - sends a link to sthetix youtube, discord server, twitter, Facebook and Instagram. 
- [about] - sends an embed of basic info on the bot.
- [sd-lock] - sends an embed of what a locked sd card looks like and an unlocked sd card looks like.
- [sd-root] - sends an embed of where your sd card's root it and what it should look like.


__**commands that only can be used by admins and staff:**__

- [say] - gets the bot to repeat what you said after /say
- [embed] - lets staff and admins make a custom embed for the bot to send.

command layout:
/embed [title] [description] [colour]

__an example would be:__
>  /embed [a cool title] [this is the description] [##12f100]

the [] are required around the title description and colour code because it tells the bot where the title, description and colour code start and end.


__**commands that can only be used by admins:**__

- [rules-info] - sends an embed with all the rules links and info to the rules and info channel.
- [console-roles] - sends an embed with the commands to get the roles to the console-roles channel.
- [old rules-info] - sends the old rules and info text to the rules and info channel (not an embed message)
- [stat] - allows you to set the status of the bot so if you do '/stat watching the sthetix official discord server' the bot will show the status 'playing watching the sthetix official discord server'

const Discord = require('discord.js')
//const config = require('./config.json')
const bot = new Discord.Client()
var prefix = process.env.prefix
//var prefix = config.prefix
var singleChannelId = ''
var logChannel = '689773741047414815'
var botMasters = [].push(process.env.ownerID)
//var botMasters = [].push('151990643684540416')
var botMasterRoles = []
var overwrites = ["clear"]


bot.on('ready', () => {
  botMasterRoles.push('689576270333345905')
  botMasterRoles.push('689860365454147594')
  console.log("Connected as: " + bot.user.tag)
  bot.user.setActivity("JvO Discord", {type: 'WATCHING'})
  console.log(`Bot has started, with ${bot.users.cache.size} users, in ${bot.channels.cache.size} channels of ${bot.guilds.cache.size} guilds.`); 
  bot.guilds.cache.forEach((guild) => {
    console.log("Connected to: "+ guild.name)
  })
})

bot.on('message', (message) => {
  if(message.author == bot.user) return
  if(singleChannelId != "" && overwrites.indexOf(message.content.substr(prefix.length).split(' ')) == -1) {
    if(message.channel.id != singleChannelId) return
  }
  if(message.content.startsWith(prefix)) {
    processCmd(message)
  }
  if(message.channel.parentID == '689878518267379944') {
    message.delete()
  }
})

function processCmd(message) {
  const args = message.content.substr(prefix.length).split(' ')
  switch(args[0]) {
    case 'help': {
      help(args, message)
      return
    }
    case 'settings': {
      settings(args, message)
      return
    }
    case 'delete': {
      del(message, args)
      return
    }
    case 'clear': {
      del(message, args)
      return
    }
    case 'set': {
      setChan(message, args)
      return
    }
  }
}

function setChan(message, args) {
  if(message.channel.parentID != '689878518267379944' && message.channel.parentID != '689808353718960365') {
    message.channel.send("Je heb het recht niet om dit kanaal aan te passen.")
    return
  }
  if(!message.member.voice.channel) {
    message.channel.send("Je moet in een spraak kanaal zitten om de naam ervan te veranderen.").then(msg => {
      message.delete({'timeout': 5000})
      msg.delete({'timeout': 5000})
    })
    return
  }
  if(message.member.voice.channel.name.split(' ')[0] != 'Tafel') return
  
  if(args.length == 1) {
    message.member.voice.channel.setName(message.member.voice.channel.name.substr(0,8))
    message.delete()
    return
  }
  
  let name = ""
  for(i = 1; i < args.length; ++i) {
    name += args[i] + " "
  }
  message.member.voice.channel.setName(message.member.voice.channel.name.substr(0,8) + " | " + name)
  message.delete()
}

bot.on('voiceStateUpdate', (oldState, newState) => {
  //console.log("oldState: "); console.log(oldState); console.log("newState: "); console.log(newState)
  if(oldState.channel === null) return;
  if(oldState.channel.parentID != '689878518267379944' && oldState.channel.parentID != '689808353718960365') return
  if(newState.channel === null || oldState.channelID != newState.channelID) {
    if(oldState.channel.members.size == 0)
      oldState.channel.name = oldState.channel.setName(oldState.channel.name.substr(0,8))
  }
})

bot.on('messageReactionAdd', (messageReaction, user) => {
  if(!messageReaction.channel === logChannel) return
  if(messageReaction.emoji.name != "✅") return

  var member = messageReaction.message.guild.members.cache.find(member => member.id === user.id)
  if(member) {
    var profielRole = false
    if(member.roles.cache.find(role => role.id === '689773485395804205')) profielRole = true
    if(member.roles.cache.find(role => role.id === '689773506547810378')) profielRole = true
    if(member.roles.cache.find(role => role.id === '689773519759867952')) profielRole = true
    if(member.roles.cache.find(role => role.id === '689773530103021612')) profielRole = true
    if(!profielRole) {
      user.send("Je hebt geen profiel geselecteerd")
      return
    }

    var klasRole = false
    if(member.roles.cache.find(role => role.id === '689809587754631243')) klasRole = true
    if(member.roles.cache.find(role => role.id === '689809540723900438')) klasRole = true
    if(member.roles.cache.find(role => role.id === '689809498571014164')) klasRole = true
    if(member.roles.cache.find(role => role.id === '689809457965826180')) klasRole = true
    if(member.roles.cache.find(role => role.id === '689809327913041985')) klasRole = true
    if(member.roles.cache.find(role => role.id === '689809152972685334')) klasRole = true
    if(!klasRole)  {
      user.send("Je hebt geen klas geselecteerd")
      return
    }

    var keuzevakRole = 0
    if(member.roles.cache.find(role => role.id === '689781092240064524')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689780398976401408')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689781028826775583')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689779837992566857')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689780952532385803')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689780212006649883')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689779589379391517')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689779245500858533')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689779769251987468')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689812749491896487')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689780253094183051')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689780321448886272')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689781754910736391')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689781935073001487')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689781256300265503')) ++keuzevakRole
    if(member.roles.cache.find(role => role.id === '689779509393752064')) ++keuzevakRole
    if(keuzevakRole < 3) {
      user.send("Je hebt geen keuzevakken geselecteerd")
      return
    }
  }

  var role = messageReaction.message.guild.roles.cache.find(role => role.id === '690525990144966716')
  if(role) {
    if(member) {
      member.roles.remove(role.id)
      return
    }
  }
})

bot.on('raw', event => {
  if(event.t === 'MESSAGE_REACTION_ADD') {
    if(!event.d.channel_id === logChannel) return
    if(bot.channels.cache.get(event.d.channel_id).messages.cache.has(event.d.message_id)) return
    else {
      bot.channels.cache.get(event.d.channel_id).messages.fetch(event.d.message_id).then(msg => {
        bot.emit('messageReactionAdd', msg.reactions.cache.get(event.d.emoji.name), bot.users.cache.get(event.d.user_id))
      }).catch(err => console.log(err))
    }
  }
})

function getUserFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1)
		if (mention.startsWith('!')) {
			mention = mention.slice(1)
		}
		return bot.users.cache.get(mention)
	}
}

function getIdFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<@') && mention.endsWith('>')) {
		mention = mention.slice(2, -1)
		if (mention.startsWith('!')) {
			mention = mention.slice(1)
		}
		return mention.toString()
	}
}

function getRoleFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<@&') && mention.endsWith('>')) return bot.roles.cache.get(mention.slice(3, -1))
}

function getRoleIdFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<@&') && mention.endsWith('>')) return mention.slice(3, -1)
}

function getChanFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<#') && mention.endsWith('>'))
		return bot.channels.cache.get(mention.slice(2, -1))
}

function getChanIdFromMention(mention) {
	if (!mention) return
	if (mention.startsWith('<#') && mention.endsWith('>'))
		return mention.slice(2, -1).toString()
}

function getRoleFromID(id, guildID) {
	if (!id) return
	return bot.guilds.cache.get(guildID).roles.cache.get(id)
}

function del(message, args) {
  let hasAccess = false
  for(i = 0; i < botMasterRoles.length; ++i) {
    if(message.member.roles.cache.has(botMasterRoles[i])) hasAccess = true
  }
  if(!hasAccess)
    for(i = 0; i < botMasters.length; ++i)
      if(message.author.id === botMasters[i]) hasAccess = true
  if(!hasAccess) return
  const fetched = message.channel.messages.fetch()
  if(args.length == 1) {
    message.channel.send("Please add how many messages you want to delete! ("+prefix+"delete [int|all] )")
  } else if(args[1] == "all" || args[1] == "ALL") {
    let brk = false
    //while(brk == false) {
      message.channel.messages.fetch({limit: 100}).then(msgs => {
        console.log(msgs.size)
        if(msgs.size != 0) {
          message.channel.bulkDelete(100)
        } else brk = true;
      })
    //}
    //message.delete()
    //message.channel.bulkDelete(fetched)
  } else if(parseInt(args[1]) < 100) {
    message.channel.bulkDelete(parseInt(args[1])+1)
  } else if(parseInt(args[1]) == 100) {
    message.channel.bulkDelete(parseInt(args[1]))
  } else {
    message.channel.send("You may only remove up to 100 messages at a time")
    return
  }
  message.channel.send(`Removed ${args[1]} messages`).then(msg => {
    msg.delete({'timeout': 5000})
  })
}

function help(args, message) {
  if(args.length == 1) {
    message.channel.send(new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle('Commands list')
                                .setAuthor('Jvo helper', 'https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
                                .setDescription('[] means required, {} means optional, | means or.\nDon\'t include these.')
                                .setThumbnail('https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
                                .addField(prefix+'help', 'This command')
                                .addField(prefix+'settings [setting] {args}', 'Change the bot\'s configuration')
                                .addField(prefix+'clear|delete [int|all]', 'Clear (x) amount of messages (max = 100)')
                                .addField(prefix+'set {name, leave blank to set to default}', 'Set new channel name to specify what you are working on. Only works in leerplein')
                                .setTimestamp()
                                .setFooter('By Jubiman', 'https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
    )
  } else if(args[1] == "settings") {
    message.channel.send(new Discord.MessageEmbed()
                                .setColor('#0099ff')
                                .setTitle('Settings list')
                                .setAuthor('Jvo helper', 'https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
                                .setDescription('[] means required, {} means optional, | means or.\nDon\'t include these.')
                                .setThumbnail('https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
                                .addField(`${prefix}settings prefix [newPrefix]`, 'Change the bot\'s prefix')
                                .addField(`${prefix}settings channel [channelMention]`, `Make the bot only listen on one channel, overwrites are: ${prefix}clear`)
                                .addField(`${prefix}settings listChannel [channelMention]`, 'Set channel for bot\'s reaction role listening')
                                .addField(`${prefix}settings botMaster [userMention]`, 'Set bot master user')
                                .addField(`${prefix}settings botMasterRole [roleMention] (seperate with ' ' (space))`, 'Set bot master role(s)')
                                .setTimestamp()
                                .setFooter('By Jubiman', 'https://gymnasiumamersfoort.nl/wp-content/uploads/2016/08/JvO.png')
    )
  }  else {
    message.channel.send("Coming soon...")
  }
}

function settings(args, message) {
  if(args.length == 0) {
    message.channel.send("You done fucked up! You need arguments to edit shit!!")
  } 
  else {
    switch(args[1]) {
      case "prefix": {
       message.channel.send("The old prefix: "+prefix+" was changed to "+args[2]+".")
       prefix = args[2]
       return
      } 
      case "channel": {
        if(args.length < 2 || args[2] == "this") {
          singleChannelId = message.channel.id.toString()
        } else if(args.length == 3 && args[2] != "this") {
          if(!message.mentions.cache.channels.cache.first()) {
            bot.channels.get(args[2])
            message.channel.send("Please add a mention a channel for me to log.")
          } else {
            singleChannelId = getChanIdFromMention(args[2])
          }
        }
        message.channel.send(`The bot is now listening on ${getChanFromMention(args[2])}`)
        return
      }
      case "listChannel": {
        if(args.length < 2 || args[2] == "this") {
          logChannel = message.channel.id.toString()
        } else if(args.length >= 3) {
          if(!message.mentions.channels.first()) {
            bot.channels.get(args[2])
            message.channel.send("Please add a mention a channel for me to log.")
          } else {
            logChannel = getChanIdFromMention(args[2])
          }
        }
        message.channel.send(`The bot is now listening on ${getChanFromMention(args[2])}`)
        return
      }
      case "botMasterRole": {
        if(args.length < 2) {
          message.channel.send("Please add a role that should be bot master.")
          return
        }
        let args2 = ''
        for(i = 2; i<args.length; ++i) {
          if(botMasterRoles.includes(getRoleIdFromMention(args[i]))) continue
          botMasterRoles.push(getRoleIdFromMention(args[i]))
          args2 += args[i] + " "
        }
        message.channel.send(`Added ${args2.substr(0, args2.length-1)} to the bot master roles`)
        return
      }
      case "botMaster": {
        if(args.length < 2) {
          message.channel.send("Please add a mention that should be bot master.")
          return
        }
        let args2 = ""
        for(i = 2; i<args.length; ++i) {
          if(botMasterRoles.includes(getRoleIdFromMention(args[i]))) continue
          botMasterRoles.push(getIdFromMention(args[i]))
          args2 += args[i] + " "
        }
        message.channel.send(`Added ${args2.substr(0, args2.length-1)} to the bot master roles`)
        return
      }
    }
  }
}

//bot.login(config.token)
bot.login(process.env.TOKEN)

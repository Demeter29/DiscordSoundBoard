const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
require('dotenv').config();
const prefix = process.env.PREFIX;
global.ready = true;
global.stay = false;
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);   
}

bot.on("ready", () => {
    console.log("im ready")
    bot.user.setActivity(process.env.GAME, { type: process.env.TYPE });
});

bot.on("message", message => {
    if (!message.content.startsWith(prefix)) return;

    let args= message.content.slice(prefix.length).split(" ");
    var VC=message.member.voice.channel;
    try{
        message.guild.voice.channel
        var botOnVC=true;
    }catch(err){
        var botOnVC=false;
    }

    if(args[0] == "stay"){
        args[0] = args[1];
        stay=true;
    }
   

    switch (args[0]) {
        case process.env.LIST:
            bot.commands.get("list").execute(message);
            break;
        case "random":
            bot.commands.get("playRandom").execute(message,VC.botOnVC);
            break;
        case "leave":
            bot.commands.get("leave").execute(message,stay,VC);
            break;
        default:
            bot.commands.get("play").execute(message,args,VC,botOnVC);
    }
});


bot.login(process.env.TOKEN);

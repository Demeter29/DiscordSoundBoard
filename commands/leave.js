const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const Folder = process.env.FOLDER;

module.exports ={
    name: "leave",
    description: "the bot leaves the voice channel",
    execute(message,stay,VC){
        if (!message.guild.voice.channel) return;

        global.stay = false;
        VC.leave();
    }
}
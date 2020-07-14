const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const Folder = process.env.FOLDER;

module.exports={
    name: "list",
    description: "lists the available sounds",
    execute(message){
        
        let output = "```";
        fs.readdir(Folder, (err, files) => {
             files.forEach(file => {
                output += "\n" + file.substring(0, file.indexOf(".mp3"));
            });
            output += "```"
            message.channel.send(output)
        });
        
    }
}
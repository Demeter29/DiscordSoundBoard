const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
require('dotenv').config();
const prefix = process.env.PREFIX;
const Folder = process.env.FOLDER;
let ready=true;


client.on("ready", () => {
    console.log("im ready")
    client.user.setActivity(process.env.GAME, { type: process.env.TYPE });
    
});

client.on("message", async message => {

    if (!message.content.startsWith(prefix)) return;
    if (!ready) return;
    

    
    var VC = message.member.voice.channel;
    var TC = message.channel;
    command = message.content.substring(prefix.length);

    

    if (command == process.env.LIST) {
        let output = "```";
        fs.readdir(Folder, (err, files) => {
            files.forEach(file => {
                output += "\n" + file.substring(0, file.indexOf(".mp3"));
            });
            output += "```"
            TC.send(output)
        });
    }

    

    
    else if(command=="random"){

        ready=false;
        if(!VC) return message.channel.send(process.env.NOVC);
        
        fs.readdir(Folder, (err, files) => {
            var toPlay=Math.floor(Math.random()* (files.length-1))+1;
            for(let i=0; i<files.length; i++){
                if(i==toPlay){
                    ready=false;
                    VC.join().then(connection => {
                        dispatcher = connection.play("./sounds/" + files[i]);
                        dispatcher.on("finish", finish => {
                            VC.leave();
                            ready=true;
                        });
                    }).catch(err => console.log(err)); 
                    break;
                }
            };
        });

    }
    else {
        if(!VC)  return message.channel.send(process.env.NOVC);
        

        fs.readdir(Folder, (err, files) => {
            for(let i=0; i<files.length; i++){
                if (command == files[i].substring(0, files[i].indexOf(".mp3"))) {
                    ready=false;
                    VC.join().then(connection => {
                        dispatcher = connection.play("./sounds/" + files[i]);
                        dispatcher.on("finish", finish => {
                            VC.leave();
                            ready=true;
                        });
                    }).catch(err => console.log(err));
                    break;
                }
            };
        });
    }

   
});

client.login(process.env.TOKEN);

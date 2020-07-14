const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const Folder = process.env.FOLDER;

module.exports={
    name: "play",
    description: "plays the given sound",
    execute(message,args,VC,botOnVC){

        if (!VC) return message.channel.send(process.env.NOVC);
        if (botOnVC && !global.ready) return;
    
        fs.readdir(Folder, (err, files) => {
            for (let i = 0; i < files.length; i++) {
                if (args[0] == files[i].substring(0, files[i].indexOf(".mp3"))) {
                    global.ready = false;
                    VC.join().then(connection => {
                        dispatcher = connection.play("./sounds/" + files[i]);
                         dispatcher.on("finish", finish => {
                            if (global.stay == false) {
                                VC.leave();   
                            }
                            global.ready = true;
                            });
                    }).catch(err => console.log(err));
                    break;
                    
                }
            };
        });
        
    },
}
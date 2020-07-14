const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const Folder = process.env.FOLDER;

module.exports={
    name: "playRandom",
    description: "play a random sound from the list",
    execute(message,VC,){  

        if (!VC) return message.channel.send(process.env.NOVC);

        if (VC && !global.ready) return;

        fs.readdir(Folder, (err, files) => {
            let toPlay = Math.floor(Math.random() * (files.length - 1)) + 1;
            for (let i = 0; i < files.length; i++) {
                if (i == toPlay) {
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
    }
}
    
    
    
    
    
    
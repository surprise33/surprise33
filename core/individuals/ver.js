const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('../settings.json');
const fs = require('fs');
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;

client.on('ready', () => {
    function ready() {
        if (client.guilds.get(settings.auto.server_id).me.hasPermission("ADMINISTRATOR")) {
            settings.ver = "oui";
            fs.writeFile('../settings.json', JSON.stringify(settings), (err) => console.error);
            console.log('Vous pouvez fermer cette console.');
        } else {
            settings.ver = "non";
            fs.writeFile('../settings.json', JSON.stringify(settings), (err) => console.error);
            console.log('Vous pouvez fermer cette console.');
        }
    }
    function quit() {
        process.exit();
    }
    setTimeout(ready, 1000);
    setTimeout(quit, 2000);
});

client.login(settings.token);

function quitall(){
    process.exit();
}
setTimeout(quitall, 7000);
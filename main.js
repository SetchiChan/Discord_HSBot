const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});

var request
bot.commands = new Discord.Collection();

bot.on('guildMemberAdd', (member) => require("./events/Join_Events.js")(bot, member));

bot.on('guildMemberRemove', (member) => require("./events/Leave_Log.js")(bot, member));

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "'";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  let commandfile = bot.commands.get(cmd.slice(prefix.length));

  if (cmd.startsWith(prefix)) {

      if (commandfile) {

          commandfile.run(bot,message,args);

      } else {

          message.reply("Invalid Command!");

      }

  }

});

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
    bot.user.setActivity("'help for commands.", {type: "PLAYING"});
});

bot.login("Mzk4NzEwMDgzNDcyODUwOTQ1.DV6SWQ.DxiUgzwPHVoosTlTyvmPjbM0_zs");

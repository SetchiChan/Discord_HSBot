const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const collector = message.createReactionCollector(reaction, user);

    const embed = new Discord.RichEmbed()
    .setTitle("")
    .setAuthor("Heaven Shadow Commands", "https://i.imgur.com/7QfhxU1.png")
    .setColor(10038562)
    .setDescription("")
    .setFooter("Commands available for: Guardian Member")
    .setTimestamp()
    .addField("' or 'Help", "Lists Server Commands")
    .addField("'Info", "Lists server information.", true)
    .addField("'Pref", "Pref changes your prefered lane roles. [Limit 2 Roles]", true)
    .addField("'Rankupdate", "Updates your current Discord profile with current LOL statistics.", true)

    message.author.send({embed});

}

module.exports.help = { 
    name: "info"
}

const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.RichEmbed()
    .setTitle("")
    .setAuthor("Heaven Shadow Commands", "https://i.imgur.com/7QfhxU1.png")
    .setColor(10038562)
    .setDescription("")
    .setFooter("Commands available for: Guardian Member")
    .setTimestamp()
    .addField("' or 'Help", "Lists Server Commands")
    .addField("'Info", "Lists server information.", true)
    .addField("'Verify", "Verifies the user.", true)

    message.channel.send({embed})

    .then(message.react('👍').then(() => message.react('👎')));
    
    const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
            message.reply('you reacted with a thumbs up.');
        } else {
            message.reply('you reacted with a thumbs down.');
        }
    })
    .catch(collected => {
        console.log(`After a minute, only ${collected.size} out of 4 reacted.`);
        message.reply('you didn\'t react with neither a thumbs up, nor a thumbs down.');
    });

}

module.exports.help = { 
    name: "pref"
}

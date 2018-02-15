const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if (message.member.roles.find("name", "dod")) {
        message.channel.sendMessage("You seem to be already verified. If you'd like to change your prefered lane roles, do 'pref. If you'd like to update your current rank, do 'Rankupdate. If you believe an error has occured, please contact <@&399009797921308674> to help you.");

    } else {

        message.channel.send({embed: { 
            color: 10038562,
            author: {
                name: bot.user.username,
                icon_url: bot.user.avatarURL
            },
            title: "Verification System",
            description: "================",
            fields: [{
                name: "How to start!",
                value: "Hello summoner, welcome to the verification process. If an error occurs during this process, you will have to restart the process. If you are unable to verify yourself, please contact <@&399009797921308674>. Press select the emoticon below to continue your verfication."
            }
        ],
        }
    })
    };

}

module.exports.help = { 
    name: "verify"
}

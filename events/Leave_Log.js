module.exports = (bot, member) => {
    //notifies if user has left
    bot.channels.get('399039851288068096').sendMessage(member + " has left Heaven Shadow.");
};

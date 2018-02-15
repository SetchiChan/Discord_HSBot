module.exports = (bot, member) => {
    //notifies if user has left
    bot.channels.get('407731460972478474').sendMessage(member + " has left Heaven Shadow.");
};

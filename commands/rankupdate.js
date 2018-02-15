const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var request = require('request');
    var RiotApi = module.exports = function(API_KEY) {
        this.API_KEY = 'RGAPI-1dbc325d-3987-4212-9da7-bcd0b550c2d7';
        this._cache = {};
        this.BASE_PATH = 'http://prod.api.pvp.net/api/lol/';
    };

    var USERNAME = async (message, content) => {
    
    }

    RiotApi.prototype.getSummoner = function(options, callback) {
    var region = (options.region||'NA').toLowerCase();
    if(options.hasOwnProperty('summonerName')) {
       this.getCachedJSONRequest(this.BASE_PATH + region + '/v1.3/summoner/by-name/' + options.summonerName + '?api_key='+this.API_KEY, callback);
   }
   else {
    callback({});
}
};
    
}

module.exports.help = { 
    name: "rankupdate"
}

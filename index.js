const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();
const cmd = require("node-cmd");
const ms = require("ms");
const fs = require('fs');
const ytdl = require("ytdl-core");
const canvas = require("canvas");
const convert = require("hh-mm-ss")
const fetchVideoInfo = require("youtube-info");
const simpleytapi = require('simple-youtube-api')
const util = require("util")
const gif = require("gif-search");
const jimp = require("jimp");
const guild = require('guild');
const hastebins = require('hastebin-gen');
const getYoutubeID = require('get-youtube-id');
const pretty = require("pretty-ms");
const moment = require('moment');
const request = require('request');
const dateFormat = require('dateformat');

////////////



const prefix = "!"
const developers = ""
//////////


///حالة البوت
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log(client.guilds.map(c => `${c.name} : ${c.me.hasPermission(8)}`));
  client.user.setStatus("online");
  client.user.setActivity(`${prefix}help`, { type: "WATCHING" });
});



   client.on('message', message => {
    if (message.author.bot) return;
     if (message.content  === prefix + "help") {
          const embed = new Discord.RichEmbed()
  

   .setColor('RANDOM')
  .setTimestamp()

  .addField(":shield: ***⦁⦓ Protection Bot ⦔⦁*** :shield:",' ‎ ')
  .addField("✽-  ${prefix} **antihack on/off  -->  『 حماية من الهكر 』**",' ‎ ')
   .addField("✽-  ${prefix} **antibots on/off   -->  『 حماية دخول البوتات 』**",' ‎ ')
     .addField("✽-  ${prefix} **antilink on/off -->  『 حماية روابط 』**",' ‎ ')

 .setFooter('| The Bot By <@708708508262203502> ||')


   message.channel.send({embed});


    }
});



////antihack

let antihack = JSON.parse(fs.readFileSync('./antihack.json' , 'utf8'));
client.on('message', message => { 
    if(message.content.startsWith(prefix + "antihack")) { 
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**'); 
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' ); 
        if(!antihack[message.guild.id]) antihack[message.guild.id] = { 
          onoff: 'Off'
        } 
          if(antihack[message.guild.id].onoff === 'Off') return [message.channel.send(`**✅ The AntiHack Is __𝐎𝐍__ !**`), antihack[message.guild.id].onoff = 'On']
          if(antihack[message.guild.id].onoff === 'On') return [message.channel.send(`**⛔ The AntiHack Is __𝐎𝐅𝐅__ !**`), antihack[message.guild.id].onoff = 'Off']
          fs.writeFile("./antihack.json", JSON.stringify(antihack), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            });
          }
 
        });
        

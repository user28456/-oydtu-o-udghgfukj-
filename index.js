const Discord = require("discord.js");
const client = new Discord.Client();
const proton = require("proton-io")
const db = require("wio.db")
const ayarlar = require("./ayarlar.json")

const { Player } = require("discord-music-player")
const player = new Player(client);
client.player = player;

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["ID"]
let owner = true;
let defaultCommands = ["ping"]; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('message', async(msg) => {

    if(!await db.has("prefix_" + msg.guild.id)) {
       var prefix = "!"
    } else {
       var prefix = await db.fetch("prefix_" + msg.guild.id)
    }

    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm selam**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'aq') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'oç') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananıskm') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'ananıskrm') {
    msg.reply('**Argo Kelime Kullanma**');
  }
})

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'piç') {
    msg.reply('**Argo Kelime Kullanma**');
  }
})





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sik') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sikerim') {
    msg.reply('**Argo Kelime Kullanma**');
  }  
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'amk') {
    msg.reply('**Argo Kelime Kullanma**');
  }
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'siktirgit') {
    msg.reply('**Argo Kelime Kullanma**');
  }
if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'bye bye') {
   	msg.reply('su gibi git su gibi gel');
  }

  if (msg.content === 'günaydın') {
   	msg.reply('sana da günaydın');
  }

  if (msg.content === 'herkese günaydın') {
   	msg.reply('yepyeni bir güne merhaba :)');
  }

  if (msg.content === 'iyi geceler') {
   	msg.reply('sana da iyi geceler');
  }

  if (msg.content === 'sg') {
   	msg.reply('**Sunucuda Argo Kelime Kullanma**');
  }

  if (msg.content === 'iyi akşamlar') {
   	msg.reply('sana da iyi akşamlar');
  }

  if (msg.content === 'selamın aleyküm') {
   	msg.reply('ve aleyküm selam');
  }

  if (msg.content === 'güle güle') {
   	msg.reply('sana da güle güle');
  }
  
});

client.login(ayarlar.token)
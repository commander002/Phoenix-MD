process.on("uncaughtException", console.error);
require("./config");

const fs = require('fs');
const pm2 = require('pm2');
const util = require("util");
const { promisify } = require('util');
const setTimeoutPromise = promisify(setTimeout);
const chalk = require("chalk");
const axios = require('axios');
const { spawn, exec, execSync } = require("child_process");
const moment = require("moment-timezone");
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require("@bochilteam/scraper");
const Tiktok = require("tiktokxd")
const { TTScraper } = require('tiktok-scraper-ts');
const TikTokScraper = require('tiktok-scraper-ts');
const { EmojiAPI } = require("emoji-api");
const { addBalance } = require("./lib/limit.js");
const { smsg, formatp, tanggal, GIFBufferToVideoBuffer, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, fetchBuffer } = require('./lib/myfunc')
const _ = require("lodash");
const yargs = require("yargs/yargs");



let kaitime = moment.tz('Europe/Berlin').format('HH:mm:ss');
const time2 = moment().tz('Europe/Berlin').format('HH:mm:ss');
const kaidate = moment.tz('Europe/Berlin').format('DD/MM/YYYY');
const currentDate = new Date();
const options = { weekday: 'long' }; // Specify 'long' to get the full day name
const currentDay = new Intl.DateTimeFormat('de-EU', options).format(currentDate);

function updateCurrentTime() {
    kaitime = moment.tz('Europe/Berlin').format('HH:mm:ss');
}

setInterval(updateCurrentTime, 1000); 


setInterval(() => {
    
}, 1000); 


const speed = require('performance-now');
const eco = require('discord-mongoose-economy');
// const thiccysapi = require('textmaker-thiccy');
// const ffmpeg = require('fluent-ffmpeg');
// const ffmpegPath = require('ffmpeg-static').path;
// ffmpeg.setFfmpegPath(ffmpegPath);
const Jimp = require('jimp');  // for full dp etc.
const modapk = require("tod-api");
const { hentai } = require('./lib/scraper2.js');
const { instadl } = require('./lib/instadl');
const ty = eco.connect('mongodb+srv://baron:baron2006@lionbot.ymq2zpo.mongodb.net/?retryWrites=true&w=majority&appName=LionBot');
const { isLimit, limitAdd, getLimit, giveLimit, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const githubstalk = require('./lib/githubstalk');
let { covid } = require('./lib/covid.js');
const { Gempa } = require("./lib/gempa.js");
const { PhoenixTiktok } = require('./lib/tiktokdl');
const spaceemojis = ["🌌", "🌠", "🚀", "🪐", "🌟"];     // list of emojis for Space CMDs.
const manyemojis = ["😄", "👍", "👏", "👌", "🥇", "🌟", "🎉", "🙌", "🤩", "💯", "🔥", "✨", "🚀", "💖", "🌈", "🌞", "🌠", "🌼", "💪", "😎", "💫", "💓", "🎈", "🎁", "🍾", "🎊", "🥳", "👑", "🌺", "🌻", "🌸"];
const os = require('os'); 
      // for os info

const gis = require("g-i-s");
const {
  default: PhoenixConnect,
  useMultiFileAuthState,
  DisconnectReason,
  fetchLatestBaileysVersion,
  generateForwardMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  generateMessageID,
  downloadContentFromMessage,
  makeInMemoryStore,
  jidDecode,
  proto,
  MessageType
} = require("@whiskeysockets/baileys");
//"parse-ms": "^1.1.0",

const time0 = kaitime
//
let nowtime = '';

if (time0 < "05:00:00") {
  nowtime = '𝘎𝘜𝘛𝘌 𝘕𝘈𝘊𝘏𝘛';
} else if (time0 < "11:00:00") {
  nowtime = '𝘎𝘜𝘛𝘌𝘕 𝘔𝘖𝘙𝘎𝘌𝘕';
} else if (time0 < "15:00:00") {
  nowtime = '𝘎𝘜𝘛𝘌𝘕 𝘈𝘉𝘌𝘕𝘋';
} else if (time0 < "18:00:00") {
  nowtime = '𝘎𝘜𝘛𝘌𝘕 𝘈𝘉𝘌𝘕𝘋';
} else if (time0 < "19:00:00") {
  nowtime = '𝘎𝘜𝘛𝘌𝘕 𝘈𝘉𝘌𝘕𝘋';
} else {
  nowtime = '𝘎𝘜𝘛𝘌 𝘕𝘈𝘊𝘏𝘛';
}




//
const timestampe = speed();
const latensie = speed() - timestampe

var low;
try {
  low = require("lowdb");
} catch (e) {
  low = require("./lib/lowdb");
}

const { Low, JSONFile } = low;
const mongoDB = require("./lib/mongoDB");

global.opts = new Object(
  yargs(process.argv.slice(2)).exitProcess(false).parse()
);
global.db = new Low(
  /https?:\/\//.test(opts["db"] || "")
    ? new cloudDBAdapter(opts["db"])
    : /mongodb/.test(opts["db"])
      ? new mongoDB(opts["db"])
      : new JSONFile(`src/database.json`)
);
global.DATABASE = global.db; // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ)
    return new Promise((resolve) =>
      setInterval(function () {
        !global.db.READ
          ? (clearInterval(this),
            resolve(
              global.db.data == null ? global.loadDatabase() : global.db.data
            ))
          : null;
      }, 1 * 1000)
    );
  if (global.db.data !== null) return;
  global.db.READ = true;
  await global.db.read();
  global.db.READ = false;
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {}),
  };
  global.db.chain = _.chain(global.db.data);
};
loadDatabase();
global.db = JSON.parse(fs.readFileSync("./src/database.json"));
if (global.db)
  global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {}),
  };



//
let isSleeping = false; // Move the declaration here.
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let kaiaudio = JSON.parse(fs.readFileSync('./Media-Database/audio.json'));
let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
let _buruan = JSON.parse(fs.readFileSync('./storage/user/bounty.json'));
let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/blood.json'))
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json')); //
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'))
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
let ban = JSON.parse(fs.readFileSync('./database/ban.json'))
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'))
let setik = JSON.parse(fs.readFileSync('./src/sticker.json'))
let vien = JSON.parse(fs.readFileSync('./src/audio.json'))
let imagi = JSON.parse(fs.readFileSync('./src/image.json'))
let videox = JSON.parse(fs.readFileSync('./src/video.json'))
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
let _sewa = require("./lib/sewa");

const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'))
const time = moment.tz('Europe/Berlin').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Europe/Berlin').locale('id').format('a')
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
var myHari = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var tgel = new Date();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();



//
module.exports = Phoenix = async (Phoenix, m, chatUpdate, store) => {
  try {
    var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectreply.selectedRowId : (m.mtype == 'templateButtonreplyMessage') ? m.message.templateButtonreplyMessage.selectedId : m.mtype === 'InteractiveResponseMessage' ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson)?.id : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectreply.selectedRowId ||  m.message.InteractiveResponseMessage.NativeFlowResponseMessage || m.text) : ''
    var budy = (typeof m.text == 'string' ? m.text : '')
    const prefix = global.prefa
    
    const isCmd = body.startsWith(prefix)
    const notCmd = body.startsWith('')
    const command = isCmd ? body.slice(1).trim().split(' ')[0].toLowerCase() : ''
    const args = body.trim().split(/ +/).slice(1)
    const pushname = m.pushName || "No Name"
    const botNumber = await Phoenix.decodeJid(Phoenix.user.id)
    const isCreator = [botNumber, ...global.Owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
    const itsMe = m.sender == botNumber ? true : false
    const text = args.join(" ")
    const from = m.chat
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isMedia = /image|video|sticker|audio/.test(mime)
    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
    const groupMetadata = m.isGroup ? await Phoenix.groupMetadata(m.chat).catch(e => { }) : ''
    const groupName = m.isGroup ? groupMetadata.subject : ''
    const participants = m.isGroup ? await groupMetadata.participants : ''
    const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
    const groupOwner = m.isGroup ? groupMetadata.owner : ''
    const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    const isUser = pendaftar.includes(m.sender)
    const isBan = banUser.includes(m.sender)
    const welcm = m.isGroup ? wlcm.includes(from) : false
    const isBanChat = m.isGroup ? banchat.includes(from) : false
    const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
    const AntiLink = m.isGroup ? ntilink.includes(from) : false
    const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
    const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
    const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
    const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
    const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
    const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
    const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
    const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : true
    const antiWame = m.isGroup ? ntwame.includes(from) : false
    const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
    const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
    autoreadsw = true
    const content = JSON.stringify(m.message)
    const q = args.join(' ')

    const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
    const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
///////////////////////////

const checkSpam = require ("./antispam.js");
console.log("Nachricht:", m.text);
console.log("Prefix:", isCmd);
// Anti-Spam-Logik
const isSpam = await checkSpam(isCmd); 
if (isSpam) {
  console.log('Spam detected, ignoring message.');
  return;
}
////////////////

//============================//
if(m.mtype === "interactiveResponseMessage"){
  console.log("interactiveResponseMessage Detected!")   
  let msg = m.message[m.mtype]  || m.msg
  if(msg.nativeFlowResponseMessage  && !m.isBot  ){ 
      let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
      if(id){
          let emit_msg = { 
              key : { ...m.key } , 
              message:{ extendedTextMessage : { text : id } } ,
              pushName : m.pushName,
              messageTimestamp  : m.messageTimestamp || 754785898978
          }
          return Phoenix.ev.emit("messages.upsert" , { messages : [ emit_msg ] ,  type : "notify"})
      }
  }
}
//=======================================

async function loading () {
  var baronlod = [
  "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
  "《 ████▒▒▒▒▒▒▒▒》30%",
  "《 ███████▒▒▒▒▒》50%",
  "《 ██████████▒▒》80%",
  "《 ████████████》100%",
  "𝙻𝙰𝙳𝙴𝚅𝙾𝚁𝙶𝙰𝙽𝙶 𝙴𝚁𝙵𝙾𝙻𝙶𝚁𝙴𝙸𝙲𝙷!"
  ]
  let { key } = await Phoenix.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
  
  for (let i = 0; i < baronlod.length; i++) {
  await Phoenix.sendMessage(from, {text: baronlod[i], edit: key });
  }
  }
    ////////////////////////////
    autoreadsw = true;
    _sewa.expiredCheck(Phoenix, sewa);

    const reply = (teks) => {
      Phoenix.sendMessage(m.chat, { text: teks }, { quoted: m })
    }


    /* const reply = (teks) => {
      Phoenix.sendMessage(m.chat, { text: teks }, { quoted: m }); 
    }; */


    const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
    const senderNumber = sender.split('@')[0]

    function randomNomor(angka) {
      return Math.floor(Math.random() * angka) + 1;
    }

    if (m.message) {
      addBalance(m.sender, randomNomor(574), balance);
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(budy || m.mtype)) +
        "\n" +
        chalk.magenta("=> From"),
        chalk.green(pushname),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? pushname : "Private Chat", m.chat)
      );
    }

    if (isCmd && !isUser) {
      pendaftar.push(m.sender);
      fs.writeFileSync("./storage/user/user.json", JSON.stringify(pendaftar));
    }



    //----------------------------------------------------------------------------------------------------------//



    // if (global.autoreadpmngc) {
    //   if (command) {
    //     await Phoenix.sendPresenceUpdate("composing", m.chat);
    //     Phoenix.sendReadReceipt(from, m.sender, [m.key.id]);
    //   }
    // }


    //
    //   if (global.autoReadGc) {
    //   if (m.isGroup) { 
    //       Phoenix.sendReadReceipt(m.chat, m.sender, [m.key.id]);
    //   }
    // }


    // if (global.autoReadAll) {
    //   if (m.chat) {
    //     Phoenix.sendReadReceipt(m.chat, m.sender, [m.key.id]);
    //   }
    // }


    if (global.autoreadgc) {
      if (command) {
        await Phoenix.sendPresenceUpdate('composing', m.chat);

        // Create an array of message keys to mark as read
        const keysToMarkAsRead = [
          {
            remoteJid: m.chat,
            id: m.key.id,
            participant: m.sender,
          },
          // You can add more message keys to mark multiple messages as read
        ];

        // Use the sock object to read the specified messages
        await Phoenix.readMessages(keysToMarkAsRead);
      }
    }


    if (global.autoRecord) {
      if (m.chat) {
        Phoenix.sendPresenceUpdate("recording", m.chat);
      }
    }

    if (global.autoTyping) {
      if (m.chat) {
        Phoenix.sendPresenceUpdate("composing", m.chat);
      }
    }

    if (global.available) {
      if (m.chat) {
        Phoenix.sendPresenceUpdate("available", m.chat);
      }
    }



    //Dm and Groups Autoreply/Bot chat
    /*
    if (!isCmd && !m.isGroup){
        const botreply = await axios.get(`http://api.brainshop.ai/get?bid=166512&key=5nz1Ha6nS9Zx1MfT&uid=[uid]&msg=[msg]=[${budy}]`)
        txt = `${botreply.data.cnt}`
        m.reply(txt)
        }    
        
     */



    //----------------------------------------------------------------------------------------------------//



   



    //
    // const hariRaya = new Date("6 1, 2022 00:00:00");
    // const sekarang = new Date().getTime();
    // const Selisih = hariRaya - sekarang;
    // const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
    // const jjam = Math.floor(
    //   (Selisih % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    // );
    // const mmmenit = Math.floor((Selisih % (1000 * 60 * 60)) / (1000 * 60));
    // const ddetik = Math.floor((Selisih % (1000 * 60)) / 1000);
    // const ultah = `${jhari}Day ${jjam}Hour ${mmmenit}Minute ${ddetik}Second`;

    // async function hitungmundur(bulan, tanggal) {
    //   let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
    //   let now = Date.now();
    //   let distance = from - now;
    //   let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   let hours = Math.floor(
    //     (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //   );
    //   let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //   let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    //   return (
    //     days +
    //     "Day " +
    //     hours +
    //     "Hour " +
    //     minutes +
    //     "Minute " +
    //     seconds +
    //     "Second"
    //   );
    // }



    //-----------------------------------------------------------------------------------------------------------------------------------//


    //don't edit this part.
  const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

function updateStatus() {
  const uptimeInSeconds = Math.floor(process.uptime());
  const uptimeFormatted = formatTime(uptimeInSeconds);

// Set the status using Phoenix.setStatus or your equivalent method

  // Update the status randomly within 5 minutes (300000 milliseconds)
  const randomTime = Math.floor(Math.random() * 300000) + 1000; // don't edit.
  setTimeout(updateStatus, randomTime);
}

// Initial call to start the random status updates
updateStatus();

// Annahme: isBotAdmins, isAdmins, m.key.fromMe, isCreator sind definierte Variablen

if (AntiLinkAll) {
  const linkRegex = /(?:https?|ftp):\/\/[\n\S]+/i; // Regex zum Erkennen von Links

  if (linkRegex.test(budy)) { // Überprüfung, ob die Nachricht einen Link enthält
      if (!isBotAdmins) return;
    

      const kice = m.sender;
      await Phoenix.sendMessage(from, {
          delete: {
              remoteJid: from,
              fromMe: false,
              id: m.id,
              participant: m.sender,
          },
      }, {
          quoted: m,
      });

      await Phoenix.sendMessage(from, {
          text: `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Gruppenlink Erkannt!*\n\n*🚫@${kice.split("@")[0]} Mach keine Werbung du Schwuchtel!*\n`,
          contextInfo: {
              mentionedJid: [kice]
          }
      }, {
          quoted: m
      });
  }
}



    //-----------------------------------------------------------------------------------------------------------------------------------//



    //
    // if (AntiLinkAll)
    //   var rondonxk = '[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9@:%._+~#=].[-a-zA-Z0-9()@:%_+.~#?&/=]'
    //   if (budy.includes("https://")) {
    //     if (!isBotAdmins) return
    //     bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
    //     if (isAdmins) return reply(bvl)
    //     if (m.key.fromMe) return reply(bvl)
    //     if (isCreator) return reply(bvl)
    //     kice = m.sender
    //     await Phoenix.sendMessage(
    //       from,
    //       {
    //         delete: {
    //           remoteJid: from,
    //           fromMe: false,
    //           id: m.id,
    //           participant: m.sender,
    //         },
    //       },
    //       {
    //         quoted: m,
    //       }
    //     );
    //   //  await Phoenix.groupParticipantsUpdate(m.chat, [kice], 'remove')
    //     Phoenix.sendMessage(from, { text: `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected !*\n\n*🚫@${kice.split("@")[0]} You are not allowed to send any links in this group !*\n`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
    //   } else {
    //   }

    // if (budy.includes("http://")) {
    //     if (!isBotAdmins) return
    //     bvl = `\`\`\`「  Antilink System  」\`\`\`\n\nLink sent by Admin so no action will be taken!`
    //     if (isAdmins) return reply(bvl)
    //     if (m.key.fromMe) return reply(bvl)
    //     if (isCreator) return reply(bvl)
    //     kice = m.sender
    //     await Phoenix.sendMessage(
    //       from,
    //       {
    //         delete: {
    //           remoteJid: from,
    //           fromMe: false,
    //           id: m.id,
    //           participant: m.sender,
    //         },
    //       },
    //       {
    //         quoted: m,
    //       }
    //     );
    //   //  await Phoenix.groupParticipantsUpdate(m.chat, [kice], 'remove')
    //     Phoenix.sendMessage(from, { text: `\`\`\`「  Antilink System  」\`\`\`\n\n*⚠️ Group link detected !*\n\n*🚫@${kice.split("@")[0]} You are not allowed to send any links in this group !*\n`, contextInfo: { mentionedJid: [kice] } }, { quoted: m })
    //   } else {
    //   }


    //     const menulist = `
    //     Konichiwa ${pushname} dear 👋. I am ${global.BotName}, a bot developed by: Kai to take your WhatsApp usage into next level.

    //        「 System Info 」

    //     Speed : ${latensie.toFixed(4)} miliseconds
    //     Up Time : ${runtime(process.uptime())}
    //     Bot Name : ${global.BotName}
    //     Owner Name : ${global.OwnerName}
    //     𝗣𝗹𝗮𝘁𝗳𝗼𝗿𝗺 : Amazon AWS
    //     𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.users).length}


    //        「 User Info 」

    //     User Level: ${levelMenu}
    //     User XP : ${xpMenu} \ ${reqXp}
    //     User Role : ${role}


    //        「 User Bank 」

    //     User Balance : ${uangku}
    //    //Iron : ${getBesi(m.sender)}
    //     Gold : ${getEmas(m.sender)}
    //     Emarald : ${getEmerald(m.sender)}
    //     Potion : ${getPotion(m.sender)}


    //     Type *-menu* or press any button below to start using *${global.BotName}*

    //     ©️ *${global.BotName}* All Rights Reserved by: *Kai*
    //     `
    //         const qtod = m.quoted? "true":"false"



    // function pickRandom(list) {
    // return list[Math.floor(list.length * Math.random())]
    // }



    //-------------------------------------------------------------- tictactoe ----------------------------------------------------------------//


    //
    this.game = this.game ? this.game : {}
    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
    if (room) {
      let ok
      let isWin = !1
      let isTie = !1
      let isSurrender = !1
      //m.reply(`[DEBUG]\n${parseInt(m.text)}`)
      if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
      isSurrender = !/^[1-9]$/.test(m.text)
      if (m.sender !== room.game.currentTurn) {
        if (!isSurrender) return !0
      }
      if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
        reply({
          '-3': 'Game Has Ended',
          '-2': 'Invalid',
          '-1': 'Invalid Position',
          0: 'Invalid Position',
        }[ok])
        return !0
      }
      if (m.sender === room.game.winner) isWin = true
      else if (room.game.board === 511) isTie = true
      let arr = room.game.render().map(v => {
        return {
          X: '❌',
          O: '⭕',
          1: '1️⃣',
          2: '2️⃣',
          3: '3️⃣',
          4: '4️⃣',
          5: '5️⃣',
          6: '6️⃣',
          7: '7️⃣',
          8: '8️⃣',
          9: '9️⃣',
        }[v]
      })
      if (isSurrender) {
        room.game._currentTurn = m.sender === room.game.playerX
        isWin = true
      }
      let winner = isSurrender ? room.game.currentTurn : room.game.winner
      let str = `Room ID: ${room.id}
${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}
${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}
Typed *surrender* to surrender and admited defeat`
      if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
        room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
      if (room.x !== room.o) await Phoenix.sendText(room.x, str, m, { mentions: parseMention(str) })
      await Phoenix.sendText(room.o, str, m, { mentions: parseMention(str) })
      if (isTie || isWin) {
        delete this.game[room.id]
      }
    }


    //-----------------------------------------------------------------------------------------------------------------------------------//


    //
    const pickRandom = (arr) => {
      return arr[Math.floor(Math.random() * arr.length)]
    }

    /*
  let smallinput = budy.toLowerCase()
  if (smallinput.includes('hello')) {
    reply (`*හලො ඉතින් කොහොමද...*, 
    *මහෙන් මොකක් හරි උදවුවක් ඔනිද..ඔයා මොකද කරන්නෙ..*`);
  } 
  
  //if (smallinput.includes('he')) {
  
  //   reply (`Hello ${pushname}, I am ${BotName}. How can i help you?`);
  
  // } 
  
  if (smallinput=='hi') {
      reply (`*හායි හායි* *ඉතින් කියන්න පැටියො ඔයා* *මොකද කරන්නෙ*`)
  }
  
  
  if (smallinput=='runtime') {
    reply (`Hi💞 ${pushname}🦋 │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐌𝐃│𝐕➂ 🦋${runtime(process.uptime())}\n\nCurrent Time: ${kaitime}\n\nCurrent Date: ${kaidate}`)
  }
  
  
  
  if( smallinput.includes('konichiwa') || smallinput.includes('konochiwa') || smallinput.includes('konichiba') || smallinput.includes('salute')){
    reply (`Konichiwa ${pushname}, I am ${BotName}. How can i help you?`);
  }
  
  
  if (smallinput=='panda') {
      reply ('Yes I am Alive 🫂')
  }
  
  if (smallinput=='Hm') {
    reply ('*හූම් හූම්.ගාන්න උබ බක මුනෙක්ද...එ කියපන් පකකො😂*.')
  }
    
  }
  
  if (smallinput=='mk') {
    reply ('*මොමවත් නැ.අනෙ ඔයා මොකද කරන්නෙ..*')
  }
  
  if (smallinput=='ping') {
      reply (`𝘏𝘐🦋 ${pushname} 𝘗𝘖𝘕𝘎 ${latensie.toFixed(4)} 𝘔;𝘚
      🦋 │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐌𝐃│𝐕➂ 🦋`)
  }
  
  
  if (smallinput.includes('good morning') || smallinput.includes('Gm')) {
    reply (`* ${pushname} ගුට් මොනින්ග් පැටියො 
    ආදරෙයි හැම දාම සතුටින් පරිස්සමින් ඉන්න..💞 `);
  }
  
  if (smallinput.includes('good afternoon') || smallinput.includes('konnichiwa')) {
  
    reply (`Good afthernoon to you too ${pushname} 🦋 │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐌𝐃│𝐕➂ 🦋.`);
  
  }
  
  
  //if (smallinput.includes('good afthernoon')) {
   // reply (`Huh ${pushname} 😇.🦋 │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐌𝐃│𝐕➂ 🦋`);
  //   }
  
  
  if (smallinput.includes('good night')) {
    reply (`😴 ගුට් නයිට් පැටියො 💞 ${pushname} බත් කලද ඉන්නෙ.🤷`);
  }
  
  if (smallinput.includes('arigato')|| smallinput.includes('arigatou') || smallinput.includes('thank')) {
    reply (`Mention not ${pushname} 😇. I am a bot afterall.`);
  }
  */


    const responses = {


      hello: `Aloha ${pushname}, Ich bin ${BotName}. Mein Prefix lautet "${prefix}". Wie kann ich dir helfen?`,
      kai: `Mein Boss ist in einem anderen Multiversum verschollen, und ich habe die Verbindung zu ihm verloren...`,
      runtime: `🦋𝘏ey ${pushname}\n${nowtime}\n\n🦋𝘙𝘜𝘕𝘛𝘐𝘔𝘌:${runtime(process.uptime())}\n\n🦋𝘗𝘙𝘌𝘍𝘐𝘟: *${prefix}*\n\n🦋𝘛𝘐𝘔𝘌: ${kaitime}\n\n🦋𝘋𝘈𝘛𝘌: ${kaidate}\n\n🦋𝘛𝘰𝘥𝘢𝘺 𝘪𝘴 ${currentDay}`,
      konichiwa: `Konichiwa ${pushname}, Ich bin ${BotName}. Wie kann ich dir behilflich sein?`,
      alive: ' │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐕1️⃣ 🌃 ',
      ping: `Aloha ${pushname}, Pong ${latensie.toFixed(4)} ms`,
      'good morning': `Good morning💞🦋.`,
      ohayo: `Good morning to you too ${pushname} ☺️. Have a great day 😇.`,
      'good afternoon': `Good afternoon💞🦋.`,
      konnichiwa: `Good afternoon to you too ${pushname} ✨. Wishing you an enjoyable afternoon too 😇🤞🏻.`,
      'good night': `Good night💞🦋`,

    };

    const smallinput = budy.toLowerCase();

    if (responses.hasOwnProperty(smallinput)) {
      reply(responses[smallinput]);
    }




    //-----------------------------------------------------------------------------------------------------------------------------------//


    //
    switch (command) {
      
      //
      case 'sc': case 'script': case 'git': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
      

        let { data } = await axios.get('https://github.com/7ucg/Phoenix-MD.git');
        teks = `
┌───────────────       
│ *®-𝐏𝐇𝐎𝐄𝐍𝐈𝐗-ᴍᴅ*
├───────────────
│ *Total Stars* ${data.stargazers_count}
├───────────────
│ *Total Forks* ${data.forks_count} forks
├───────────────
│ *GitHub* https://github.com/7ucg/Phoenix-MD
├───────────────
│ *Powered by Exiqon&Baron*
└────────────────`
        /*  let buttons = [
          {buttonId: `${prefix}owner`, buttonText: {displayText: '🍁 DEVELOPER 🍁'}, type: 1}
          ] */
        let buttonMessage = {
          image: Thumb,
          jpegThumbnail: BotLogo,
          caption: teks,
          /* footer: `${BotName}`,
           buttons: buttons,
           headerType: 4, */
          contextInfo: {
            externalAdreply: {
              title: "Powered by Baron&Exiqon",
              body: " ",
              thumbnail: fs.readFileSync("Assets/pic2.jpg"),
              mediaType: 1,
              //mediaUrl: 'https://wallpapercave.com/wp/wp10524580.jpg',
              //sourceUrl: "https://wallpapercave.com/wp/wp10524580.jpg"
              mediaUrl: 'github.com/7ucg/Phoenix-MD',
              sourceUrl: "github.com/7ucg/Phoenix-MD"
            }
          }

        }
        Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;



      case 'qt': {
        if (!args[0] && !m.quoted) {
          return m.reply(`Please provide a text (Type or mention a message) !`);
        }

        try {
          let userPfp;
          if (m.quoted) {
            userPfp = await Phoenix.profilePictureUrl(m.quoted.sender, "image");
          } else {
            userPfp = await Phoenix.profilePictureUrl(m.sender, "image");
          }

          const waUserName = pushname;
          const quoteText = m.quoted ? m.quoted.body : args.join(" ");

          const quoteJson = {
            type: "quote",
            format: "png",
            backgroundColor: "#FFFFFF",
            width: 700,
            height: 580,
            scale: 2,
            messages: [
              {
                entities: [],
                avatar: true,
                from: {
                  id: 1,
                  name: waUserName,
                  photo: {
                    url: userPfp,
                  },
                },
                text: quoteText,
                replyMessage: {},
              },
            ],
          };

          const quoteResponse = await axios.post("https://bot.lyo.su/quote/generate", quoteJson, {
            headers: { "Content-Type": "application/json" },
          });

          const buffer = Buffer.from(quoteResponse.data.result.image, "base64");
          Phoenix.sendImageAsSticker(m.chat, buffer, m, {
            packname: `${global.BotName}`,
            author: waUserName,
          });
        } catch (error) {
          console.error(error);
          m.reply("Error generating quote!");
        }
        break;
      }



        case 'supportgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        m.reply(`⚙ *Hey,hier ist der Link zur Supportgruppe:* https://chat.whatsapp.com/GXJA9IomUhaHyofAT4PlJQ`)
      }
        break;


      case 'repo': case 'botrepo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        m.reply(`⚙ My Source Code is </> - https://github.com/7ucg/Phoenix-MD`)
      }
        break;
        
        case 'owner':
          case 'creator':
          case 'mod':
          case 'mods': {
            if (isBan) return reply(mess.banned);
            if (isBanChat) return reply(mess.bangc);

          
            try {
              // Retrieve owner list
              const ownerList = global.Owner || [];
          
              // Prepare mentions for owner and mods
              const yz = ownerList.map((owner) => owner + "@s.whatsapp.net");
          
              // Initialize textM
              let textM = '';
          
              textM += `\n *Owners* \n`;
          
              // Append owner names to the message
              ownerList.forEach((owner) => {
                textM += `\n👑  @${owner}\n`;
              });
          
              // Add footer message
              textM += `\n\n📛 *Wir bitten darum keinen Spam zu versenden!*\n\n*🌃 Bei Problemen bitten wir euch* \n*/support zu verwenden.*\n\n*Danke euer Phoenix-Team.*`;
          
              // Send the message with mentions and caption
              Phoenix.sendMessage(
                m.chat,
                {
                  video: fs.readFileSync('./system/Phoenix_3.mp4'),
                  gifPlayback: true,
                  caption: textM,
                  mentions: yz,
                }
              );
            } catch (err) {
              console.error(err);
              // Send a message in case of internal error
        
              return Phoenix.sendMessage(
                m.from,
                { text: `An internal error occurred while fetching the owner list.` },
                { quoted: m }
              );
            }
          }
          break;
          //////////

          case 'team': 


m.reply(`  *━━━〈 𝗣𝗵𝗼𝗲𝗻𝗶𝘅 Ƀøŧ Team🌃  〉━━━*

*High Team* :
-👑 *Ɛ×ͥΐզͣօͫή* (Inhaber)
-👑 *Baron*  (Inhaber)

*Teamleitung* :
-👀 *𝔜𝔲𝔧𝔦𝔯𝔬* (Leitung)
-👀 *⸸ℑꈤᥴꪊ𝕭ꪊᦓ⸸* (Stv.Leitung)

*Community-Manager* : 
-🤵 *(Name)*

*Tech-Team* :
-💎 *Baron* (Leitung)
-🕹️ *(Name)* 
-🕹️ *(Name)*

*Mod-Team* :
-💎 *𝔜𝔲𝔧𝔦𝔯𝔬* (Leitung)
-👮🏻‍♂ *(Name)*  (Mod)
-👮🏻‍♂ *(Name)* (Mod)

*Support-Team* :
-💎 *𝕾𝖆𝖒𝖚𝖗𝖆𝖎ᴳᵒᵈ* (Leitung)
-👷🏻‍♂️ *(Name)* (Supporter)
-👷🏻‍♂️ *(Name)* (Supporter)
-👷🏻‍♂️ *(Name)* (Supporter)

\n* Um eine Supportanfrage zu stellen,* *benutzt bitte /support gefolgt von eurem Anliegen.*

*📛 Wir bemühen uns, euch zeitnah zu antworten,* *und bitten höflich darum, kein Spam zu versenden.*

*✨ Danke für eure Unterstützung,*
*euer Phoenix-Bot Team.*`)
break;
          
          
///////////////////////////////

      case 'addmod':
      case 'addowner':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (!args[0]) return m.reply(`Use ${prefix + command} number\nBeispiel ${prefix + command} ${OwnerNumber}`)
        bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
        let ceknye = await Phoenix.onWhatsApp(bnnd)
        if (ceknye.length == 0) return m.reply(`Enter A Valid And Registered Number On WhatsApp!!!`)
        Owner.push(bnnd)
        fs.writeFileSync('./database/mod.json', JSON.stringify(Owner))
        m.reply(`Number ${bnnd} Has Become An Owner!!!`)
        break;


      case 'delowner':
      case 'delmod':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (!args[0]) return m.reply(`Use ${prefix + command} nomor\nBeispiel ${prefix + command} 916297175943`)
        ya = q.split("|")[0].replace(/[^0-9]/g, '')
        unp = Owner.indexOf(ya)
        Owner.splice(unp, 1)
        fs.writeFileSync('./database/mod.json', JSON.stringify(Owner))
        m.reply(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)
        break;


      case 'modlist':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner);
        

        try {
          const modData = fs.readFileSync('./database/mod.json', 'utf8');
          const mods = JSON.parse(modData);

          if (mods.length === 0) {
            reply('There are no mods in the list.');
          } else {
            let modList = '';

            mods.forEach((mod, index) => {
              modList += `(${index + 1}) ${Phoenix.getName(mod)}\n`;
            });

            m.reply(`List of List of Moderators:\n\n${modList}`);
          }
        } catch (error) {
          console.error(error);
          reply('Failed to fetch mod list.');
        }
        break;


      case 'setbotpp': {

        if (!isCreator) return reply(mess.owner)
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.owner)
        

        if (!quoted) return `*Send/reply Image With Caption* ${prefix + command}`
        if (!/image/.test(mime)) return `*Send/reply Image With Caption* ${prefix + command}`
        if (/webp/.test(mime)) return `*Send/reply Image With Caption* ${prefix + command}`
        let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
        await Phoenix.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
        m.reply(mess.jobdone)
      }
        break;


      //
      case 'changeprefix':
      case 'setprefix':

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (args.length !== 1) {
          return m.reply(`Please provide a single character as the new prefix.`);
        } else {
          const newPrefix = args[0];
          try {
            global.prefa = [newPrefix];
            return m.reply(`${pushname} Prefix erfolgreich geändert in "${newPrefix}"`);
          } catch (error) {
            console.error('Fehler beim Ändern des Prefix:', error);
            return m.reply(`Beim Ändern des Prefix ist ein Fehler aufgetreten. Bitte versuchen Sie es später noch einmal.`);
          }
        }


      //
      case 'restartt':
        await Phoenix.sendMessage(from, { react: { text: "⚙", key: m.key } });
        if (!isCreator) return reply(mess.botowner)

        await Phoenix.sendMessage(from, { text: mess.waiting });
        await Phoenix.sendMessage(from, { react: { text: "✅", key: m.key } });
        await Phoenix.sendMessage(from, { text: 'Neustart Erfolgreich!' });

        // Delay the shutdown by 5 seconds using sleep function
        //await sleep(5000);

        // Use PM2 to restart the script
        pm2.restart('index', (err) => {
          if (err) {
            Phoenix.sendMessage(from, { react: { text: "❌", key: m.key } });
            Phoenix.sendMessage(from, { text: 'Neustart Fehlgeschlagen!' });
          } else {
            return;
          }
        });
        break;


      //
      case 'restart': case 'sleep':
        if (!isCreator) return reply(mess.owner)
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.owner)
        const baronnlod = [
          "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
          "《 ████▒▒▒▒▒▒▒▒》30%",
          "《 ███████▒▒▒▒▒》50%",
          "《 ██████████▒▒》80%",
          "《 ████████████》100%",
          "𝙽𝙴𝚄𝚂𝚃𝙰𝚁𝚃 𝙴𝚁𝙵𝙾𝙻𝙶𝚁𝙴𝙸𝙲𝙷!✅"
          ]
          let { key } = await Phoenix.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})
          
          for (let i = 0; i < baronnlod.length; i++) {
        await Phoenix.sendMessage(from, {text: baronnlod[i], edit: key });
          }
        await sleep(1000)
        process.exit()
        break;

///////


case 'public': {
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!isCreator) return reply(mess.owner)

  Phoenix.public = true
  reply('I am now Publicly accessable!')
  Phoenix.setStatus(`Mode : Public`)
}
  break;


      case 'self': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        Phoenix.public = false
        reply('Mode : Self')
        Phoenix.setStatus(`Mode : Self`)
      }
        break;


      case 'autoreadgc':
      case 'auto-read-gc':
      case 'readgc':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner);

        if (args.length === 0) {
          // Display the current status of autoreadgc
          return m.reply(`Auto-Read-GC is currently ${global.autoreadgc ? 'enabled' : 'disabled'}.`);
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            global.autoreadgc = true;
            return m.reply('Auto-Read-GC is now enabled.');
          } else {
            global.autoreadgc = false;
            return m.reply('Auto-Read-GC is now disabled.');
          }
        } else {
          return m.reply(`Usage: ${global.prefa[0]}autoreadgc [on/off]`);
        }
        break;


      case 'autotyping':
      case 'auto-typing':

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)


        if (args.length === 0) {
          if (global.autoTyping) {
            return m.reply(`Auto typing in group chats is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autotyping off\`.`);
          } else {
            return m.reply(`Auto typing in group chats is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autotyping on\`.`);
          }
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            global.autoTyping = true;
            return m.reply(`Auto typing in group chats is now *enabled*.`);
          } else {
            global.autoTyping = false;
            return m.reply(`Auto typing in group chats is now *disabled*.`);
          }
        } else {
          return m.reply(`Usage: \`${global.prefa[0]}autotyping [on/off]\``);
        }
        break;


      case 'autorecord':
      case 'auto-recording':

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (args.length === 0) {
          if (global.autoRecord) {
            return m.reply(`Auto recording is currently *enabled*.\n\nTo disable, use \`${global.prefa[0]}autorecord off\`.`);
          } else {
            return m.reply(`Auto recording is currently *disabled*.\n\nTo enable, use \`${global.prefa[0]}autorecord on\`.`);
          }
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            global.autoRecord = true;
            return m.reply(`Auto recording is now *enabled*.`);
          } else {
            global.autoRecord = false;
            return m.reply(`Auto recording is now *disabled*.`);
          }
        } else {
          return m.reply(`Usage: \`${global.prefa[0]}autorecord [on/off]\``);
        }
        break;


      //Hosted platfrom info
      case 'server':
      case 'sysinfo': {
        const used = process.memoryUsage();
        const cpu = os.cpus()[0];
        const totalCpuUsage = (100 * (cpu.times.user + cpu.times.nice + cpu.times.sys + cpu.times.irq) / cpu.times.idle).toFixed(2);
        const systemName = os.platform() + ' ' + os.release();

        const respon = `
  🤖 *Phoenix's Server Info* 🤖
  
  *System*: ${systemName}
  
  *RAM*: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
  
  *NodeJS Memory Usage*: ${Object.keys(used).map(key => `${key}: ${formatp(used[key])}`).join(', ')}
  
  *Total CPU Usage*: ${totalCpuUsage}%
  
  *CPU Model*: ${cpu.model.trim()} (${cpu.speed} MHz)
  
  *Laufzeit*: ${runtime(process.uptime())}
  
  *Reaktionsgeschwindigkeit*: ${latensie.toFixed(4)} sekunden
  `.trim();

        m.reply(respon);
        break;
      }


      case 'autostatus':
      case 'auto-status':
      case 'statusevent':
      case 'autostatusseen':

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (args.length === 0) {
          // Display the current status of autostatus
          return m.reply(`Auto-Status is currently ${global.statusseen ? 'enabled' : 'disabled'}.`);
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            global.statusseen = true;
            return m.reply('Auto-Status is now enabled.');
          } else {
            global.statusseen = false;
            return m.reply('Auto-Status is now disabled.');
          }
        } else {
          return m.reply(`Usage: ${global.prefa[0]}autostatus [on/off]`);
        }
        break;

        case 'ban': {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!isCreator) return reply(mess.botowner);
          
       
          if (global.OwnerNumber.includes(m.sender)) {
            return m.reply('Du kannst keine owner bannen. :)');
        }
        

          if (!args[0]) return m.reply(`Wähle 'add' oder 'del' aus (add zum Sperren, del zum Entsperren). Zum Beispiel: antworte *${prefix}ban add* auf den Benutzer, den du sperren möchtest.`);
        
          let orgnye;
          if (args[1]) {
            orgnye = args[1].endsWith("@s.whatsapp.net") ? args[1] : args[1] + "@s.whatsapp.net";
          } else if (m.quoted) {
            orgnye = m.quoted.sender.endsWith("@s.whatsapp.net") ? m.quoted.sender : m.quoted.sender + "@s.whatsapp.net";
          }
        
          const isBane = banUser.includes(orgnye);
        
          if (args[0] === "add") {
            if (isBane) return m.reply('Benutzer ist bereits gesperrt.');
            banUser.push(orgnye);
            saveBanList();
            m.reply(`Benutzer wurde erfolgreich gesperrt.`);
          } else if (args[0] === "del") {
            if (!isBane) return m.reply('Benutzer ist bereits entsperrt.');
            const delIndex = banUser.indexOf(orgnye);
            if (delIndex !== -1) {
              banUser.splice(delIndex, 1);
              saveBanList();
              m.reply(`Benutzer wurde erfolgreich entsperrt.`);
            } else {
              m.reply('Benutzer nicht gefunden.');
            }
          } else {
            m.reply("Fehler: Ungültiger Befehl.");
          }
        }
        
        function saveBanList() {
          const data = JSON.stringify(banUser);
          fs.writeFile('./database/banUser.json', data, 'utf8', (err) => {
            if (err) {
              console.error('Fehler beim Speichern der Banliste:', err);
            } else {
              console.log('Banliste erfolgreich gespeichert.');
            }
          });
        }
        
        break;


      //-------------------------------------------------------------------------------------------------------------------------//



      //tictactoe game

      case 'ttc': case 'ttt': case 'tictactoe': {
        if (isBan) return reply(mess.ban)
        if (isBanChat) return reply(mess.banChat)

        let TicTacToe = require("./lib/tictactoe")
        this.game = this.game ? this.game : {}
        if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`${pushname} You Are Still In The Game...`)
        let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
        if (room) {
          m.reply(`Hey ${pushname} Your Partner found!`)
          room.o = m.chat
          room.game.playerO = m.sender
          room.state = 'PLAYING'
          let arr = room.game.render().map(v => {
            return {
              X: '❌',
              O: '⭕',
              1: '1️⃣',
              2: '2️⃣',
              3: '3️⃣',
              4: '4️⃣',
              5: '5️⃣',
              6: '6️⃣',
              7: '7️⃣',
              8: '8️⃣',
              9: '9️⃣',
            }[v]
          })
          let str = `Room ID: ${room.id}
  ${arr.slice(0, 3).join('')}
  ${arr.slice(3, 6).join('')}
  ${arr.slice(6).join('')}
  Waiting @${room.game.currentTurn.split('@')[0]}
  Type *surrender* to surrender and admit defeat...`
          if (room.x !== room.o) await Phoenix.sendText(room.x, str, m, { mentions: parseMention(str) })
          await Phoenix.sendText(room.o, str, m, { mentions: parseMention(str) })
        } else {
          room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
          }
          if (text) room.name = text
          reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix} ${command} ${text}` : ''))
          this.game[room.id] = room
        }
      }
        break;



      // report and suggest ...

      case 'support': case 'suggest ': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Bitte gebe die Nachricht an die du übermitteln möchtest.`)
        if (text.length > 300) return m.reply(`Are you trying to send virus!`)
        const txtmsg = `*📮 Support Anfrage* :\n\n*User ➛* wa.me/${m.sender.split("@")[0]}\n\n*Gruppenname ➛* ${groupName}\n\n*Nachricht ➛*  ${text}`
        for (let mod of global.Owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != '4365022989060@s.whatsapp.net'))
          await Phoenix.sendMessage(`${mod}`, { text: `${txtmsg}` }, { quoted: m })
        await Phoenix.sendMessage(`120363198299068646@g.us`, { text: `${txtmsg}`, mentions: groupAdmins }, { quoted: m })
        m.reply(`*Deine Supportanfrage wurde erfolgreich weitergeleitet!✅*\n\n*Wir werden dir so schnell wie möglich antworten.*`);
      }
        break;



      // economy ...

      case 'daily': case 'claim': case 'reward':

        {
          if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return reply(mess.grouponly)

          let user = m.sender
          const cara = "cara"
          const daily = await eco.daily(user, cara, 999); //give 999 for daily, can be changed

          if (daily.cd) return m.reply(`Du hast für heute bereits dein Geschenk einkassiert,komm wieder in ${daily.cdL}`); //cdL is already formatted cooldown Left

          m.reply(`You claimed 💎${daily.amount} for daily`);
        }
        break;

      case 'wallet': case 'purse': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)

        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

        const user = m.sender

        const cara = "cara"

        const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

        await m.reply(`👛 ${pushname}'s Purse:\n\n_💎${balance.wallet}_`);

      }

        break;


      case 'bank': case 'levee': {
        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)


        const user = m.sender
        const cara = "cara"
        const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
        await m.reply(`🏦 ${pushname}'s Bank:\n\n_💎${balance.bank}/${balance.bankCapacity}_`);
      }
        break;


      case 'capacity': case 'bankupgrade':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)

        {


          //if (!isCreator) return reply(mess.botowner)
          if (!text) return m.reply(`💴 Bank-capacity 💳\n\n1 | 1000 sp = 💎100\n\n2 | 10000 sp = 💎1000\n\n3 | 100000 sp = 💎10000\n\nBeispiel- ${prefix}capacity 1 OR ${prefix}bankupgrade 1000`)
          if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          const user = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          const cara = "cara"
          let value = text.trim();
          let k = parseInt(value)
          const balance = await eco.balance(user, cara)
          switch (value) {
            case '1000':
            case '1':
              if (k > balance.wallet) return m.reply(`You need to pay 💎100 to increase bank capacity ~ 1000 sp`);
              const deduct1 = await eco.deduct(user, cara, 100);
              const add1 = eco.giveCapacity(user, cara, 1000);
              await m.reply(`1000 💎diamond storage has been added in ${pushname} bank`)
            case '10000':
            case '2':
              if (k > balance.wallet) return m.reply(`You need to pay 💎1000 to increase bank capacity ~ 10000 sp`);
              const deduct2 = await eco.deduct(user, cara, 1000);
              const add2 = eco.giveCapacity(user, cara, 10000);
              await m.reply(`10000 💎diamond storage has been added in ${pushname} bank`)
            case '100000':
            case '3':
              if (k > balance.wallet) return m.reply(`You need to pay 💎10000 to increase bank capacity ~ 100000 sp`);
              const deduct3 = await eco.deduct(user, cara, 10000);
              const add3 = eco.giveCapacity(user, cara, 100000);
              await m.reply(`100000 💎diamond storage has been added in ${pushname} bank`)
          }
        }
        break;


      case 'deposit':
       case 'pay-in': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)


        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        if (!text) return reply("Provide the amount you want to deposit!");
        const texts = text.trim();
        const user = m.sender;
        const cara = 'cara'
        const deposit = await eco.deposit(user, cara, texts);
        if (deposit.noten) return reply('You can\'t deposit what you don\'t have.'); //if user states more than whats in his wallet
        m.reply(`Successfully Deposited 💎${deposit.amount} to your bank.`)
      }
        break;


      case 'withdraw': case 'withdrawal': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)


        if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
        const user = m.sender
        if (!text) return reply("Provide the amount you want to withdraw!");
        const query = text.trim();
        const cara = 'cara'
        const withdraw = await eco.withdraw(user, cara, query);
        if (withdraw.noten) return reply('🏧 Insufficient fund in bank'); //if user states more than whats in his wallet
        const add = eco.give(user, cara, query);
        m.reply(`🏧 ALERT  💎${withdraw.amount} has been added in your wallet.`)

      }
        break;


      case 'rob': case 'attack':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)

        {

          if (!text) return m.reply(`Use ${prefix}rob @user`)
          const target =
            m.quoted && m.mentionedJid.length === 0
              ? m.quoted.sender
              : m.mentionedJid[0] || null;
          if (!target || target === m.sender) return reply("what are you trying to do!")
          if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
          while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
          const cara = "cara"
          const user1 = m.sender
          const user2 = target
          const k = 250
          const balance1 = await eco.balance(user1, cara)
          const balance2 = await eco.balance(user2, cara)
          const typ = ['ran', 'rob', 'caught'];
          const random = typ[Math.floor(Math.random() * typ.length)];
          if (k > balance1.wallet) return m.reply(`☹️ You don't have enough money to pay incase you get caught`);
          if (k > balance2.wallet) return m.reply(`Sorry, your victim is too poor 🤷🏽‍♂️ let go.`);
          let tpy = random
          switch (random) {
            case 'ran':
              await m.reply(`Your victim escaped, be more scaryðŸ˜¤ next time.`)
          }
        }
        break;


      case 'transfer': case 'give': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)
        let value = text.trim().split(" ");
        if (value[0] === "") return m.reply(`Use ${prefix}transfer 100 @user`);
        const target =
          m.quoted && m.mentionedJid.length === 0
            ? m.quoted.sender
            : m.mentionedJid[0] || null;
        if (!target || target === m.sender) return reply("what are you trying to do!")
        if (m.quoted?.sender && !m.mentionedJid.includes(m.quoted.sender)) m.mentionedJid.push(m.quoted.sender)
        while (m.mentionedJid.length < 2) m.mentionedJid.push(m.sender)
        const cara = "cara"
        const user1 = m.sender
        const user2 = target
        const word = value[0];
        const code = value[1];
        let d = parseInt(word)
        if (!d) return reply("check your text plz u r using the command in a wrong way")

        const balance = await eco.balance(user1, cara);
        let a = (balance.wallet) < parseInt(word)
        //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
        if (a == true) return reply("you dont have sufficient money to transfer");

        const deduct = await eco.deduct(user1, cara, value[0]);
        const give = await eco.give(user2, cara, value[0]);
        m.reply(`📠 Transaction successful`)

      }
        break;


      case 'wealth': case 'ritual': {
        if (!isCreator) return reply(mess.botowner)
        var user = m.sender
        var cara = 'cara'
        const give1 = eco.give(user, cara, 9999)
        m.reply(`You are the wealthiest my *Lord*`)
      }
        break;



      /* ████ ✪ ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ [ GAMBLE ] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███ ✪ ███ */



      //
      case 'gamble': case 'lottery':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)
        {
          //var response = await Phoenix.groupInviteCode(from)
          //var link1 = `https://chat.whatsapp.com/${response}`
          //var link2 = `https://chat.whatsapp.com/BXQaaeg7utI29OI4RbhdIhl`
          var texts = text.trim().split(" ");
          var opp = texts[1];// your value
          var value = texts[0].toLowerCase();
          var gg = parseInt(value)
          var user = m.sender //m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
          const cara = 'cara'
          const balance = await eco.balance(user, cara);
          const g = (balance.wallet) > parseInt(value)
          const k = 50
          const a = (k) > parseInt(value)
          const twice = gg * 2
          const f = ["up", "right", "left", "down", "up", "left", "down", "right", "up", "down", "right", "left"]
          const r = f[Math.floor(Math.random() * f.length)]
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!m.isGroup) return reply(mess.grouponly)
          //if (link1 == link2){
          if (texts[0] === "")
            return reply(
              `Beispiel:  ${prefix}gamble 100 direction(left,right,up,down)`
            );
          if (!value) return reply("*Please, specify the amount you are gambling with!");
          if (!opp) return reply("Specify the direction you are betting on!");
          if (!gg) return reply("Check your text please, You are using the command in a wrong way")
          if (m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
          if (g == false) return m.reply(`You don't have sufficient 💎 Diamond to gamble with`);
          if (a == true) return m.reply(`Sorry ${pushname}, you can only gamble with more than 💎50.`);
          if (r == opp) {
            let give = await eco.give(user, cara, twice);
            m.reply(`*📉 You won 💎${twice}*`)
          }
          else {
            let deduct = await eco.deduct(user, cara, texts[0]);
            m.reply(`*📈 You lost 💎${texts[0]}*`)
          }
          //}
          //else{
          //m.reply(`Gambling is allowed only in Casino/Gamble Group,\n\ntype ${prefix}casino to get the group link`)
          //}
        }
        break;


      //-----------------Slot----------------------
      /*
      case'slot': case 'spin': {
             if (isBan) return reply(mess.banned);
             if (isBanChat) return reply(mess.bangc);
             if (!m.isGroup) return reply(mess.grouponly)
             var today = new Date();
         if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0){
             if (text == 'help') return m.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
             if (text == 'money') return m.reply(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
             const fruit1= ["🥥", "🍎", "🍇"]
             const fruit2 = ["🍎", "🍇", "🥥"]  
             const fruit3 = ["🍇", "🥥", "🍎"]         
             const fruit4 = ["🍇", "🍎", "🥥"]
             const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
             const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
             const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']             
             const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']          
             const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
             const user = m.sender
             const cara = "cara"
             const k = 100
             const balance1  = await eco.balance(user, cara)
             
             if (k > balance1.wallet) return m.reply(`You are going to be spinning on your wallet, you need at least 💎100`);
             const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
             const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
             const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
             const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
             const mess1 = lose[Math.floor(Math.random() * lose.length)];
             const mess2 = won[Math.floor(Math.random() * won.length)];
             const mess3 = near[Math.floor(Math.random() * near.length)];
             const mess4 = jack[Math.floor(Math.random() * jack.length)];
             const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];
             
             if ((f1 !== f2) && f2 !== f3){
                const deduct1 = await eco.deduct(user, cara, 50);
                       m.reply(`${mess1}\n\n*Big Lose -->* _💎50_`)
             }
             else if ((f1 == f2) && f2 == f3){
                const give1 = await eco.give(user, cara, 100); 
                      m.reply(`${mess2}\n*_Big Win -->* _💎100_`)
             }
             else if ((f1 == f2) && f2 !== f3){
                const give2 = await eco.give(user, cara, 20);
                      m.reply(`${mess3}\n*Small Win -->* _💎20_`)
             }
             else if ((f1 !== f2) && f1 == f3){
                const deduct2 = await eco.deduct(user, cara, 20);
                      m.reply(`${mess5}\n\n*Small Lose -->* _💎20_`)
             }
             else if ((f1 !== f2) && f2 == f3){
                const give4 = eco.give(user, cara, 20); 
                      m.reply(`${mess3}\n\n*Small Win -->* _💎20_`)
             }
             else if (((f1 == f2) && f2 == f3) && f3 == f4){
                const give5 = eco.give(user, cara, 1000);
                     m.reply(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
             }
             else { 
                     m.reply(`Do you understand what you are doing?`)
             }
          }
          else{
                 m.reply(`*You can only play this game during weekends*\n\n*🌿 Friday*\n*🎏 Saturday*\n*🎐 Sunday*`)
          }
      }
      break;
      */


      case 'slot': case 'spin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly)
        var today = new Date();
        if (today.getDay() == 6 || today.getDay() == 5 || today.getDay() == 0) {
          if (text == 'help') return m.reply(`*1:* Use ${prefix}slot to play\n\n*2:* You must have 💎100 in your wallet\n\n*3:* If you don't have money in wallet then withdraw from your bank\n\n*4:* If you don't have money in your bank too then use economy features to gain money`)
          if (text == 'money') return m.reply(`*1:* Small Win --> +💎20\n\n*2:* Small Lose --> -💎20\n\n*3:* Big Win --> +💎100\n\n*4:* Big Lose --> -💎50\n\n*5:* 🎉 JackPot --> +💎1000`)
          const fruit1 = ["🥥", "🍎", "🍇"]
          const fruit2 = ["🍎", "🍇", "🥥"]
          const fruit3 = ["🍇", "🥥", "🍎"]
          const fruit4 = ["🍇", "🥥", "🍎"]
          const lose = ['*You suck at playing this game*\n\n_--> 🍍-🥥-🍎_', '*Totally out of line*\n\n_--> 🥥-🍎-🍍_', '*Are you a newbie?*\n\n_--> 🍎-🍍-🥥_']
          const smallLose = ['*You cannot harvest coconut 🥥 in a pineapple 🍍 farm*\n\n_--> 🍍>🥥<🍍_', '*Apples and Coconut are not best Combo*\n\n_--> 🍎>🥥<🍎_', '*Coconuts and Apple are not great deal*\n\n_--> 🥥>🍎<🥥_']
          const won = ['*You harvested a basket of*\n\n_--> 🍎+🍎+🍎_', '*Impressive, You must be a specialist in plucking coconuts*\n\n_--> 🥥+🥥+🥥_', '*Amazing, you are going to be making pineapple juice for the family*\n\n_--> 🍍+🍍+🍍_']
          const near = ['*Wow, you were so close to winning pineapples*\n\n_--> 🍎-🍍+🍍_', '*Hmmm, you were so close to winning Apples*\n\n_--> 🍎+🍎-🍍_']
          const jack = ['*🥳 JackPot 🤑*\n\n_--> 🍇×🍇×🍇×🍇_', '*🎉 JaaackPooot!*\n\n_--> 🥥×🥥×🥥×🥥_', '*🎊 You Just hit a jackpot worth 💎1000*']
          const user = m.sender
          const cara = "cara"
          const k = 100
          const balance1 = await eco.balance(user, cara)

          if (k > balance1.wallet) return m.reply(`You are going to be spinning on your wallet, you need at least 💎100`);
          const f1 = fruit1[Math.floor(Math.random() * fruit1.length)];
          const f2 = fruit2[Math.floor(Math.random() * fruit2.length)];
          const f3 = fruit3[Math.floor(Math.random() * fruit3.length)];
          const f4 = fruit4[Math.floor(Math.random() * fruit4.length)];
          const mess1 = lose[Math.floor(Math.random() * lose.length)];
          const mess2 = won[Math.floor(Math.random() * won.length)];
          const mess3 = near[Math.floor(Math.random() * near.length)];
          const mess4 = jack[Math.floor(Math.random() * jack.length)];
          const mess5 = smallLose[Math.floor(Math.random() * smallLose.length)];

          if ((f1 !== f2) && f2 !== f3) {
            const deduct1 = await eco.deduct(user, cara, 50);
            m.reply(`${mess1}\n\n*Big Lose -->* _💎50_`)
          }
          else if ((f1 == f2) && f2 == f3) {
            const give1 = await eco.give(user, cara, 100);
            m.reply(`${mess2}\n*_Big Win -->* _💎100_`)
          }
          else if ((f1 == f2) && f2 !== f3) {
            const give2 = await eco.give(user, cara, 20);
            m.reply(`${mess3}\n*Small Win -->* _💎20_`)
          }
          else if ((f1 !== f2) && f1 == f3) {
            const deduct2 = await eco.deduct(user, cara, 20);
            m.reply(`${mess5}\n\n*Small Lose -->* _💎20_`)
          }
          else if ((f1 !== f2) && f2 == f3) {
            const give4 = eco.give(user, cara, 20);
            m.reply(`${mess3}\n\n*Small Win -->* _💎20_`)
          }
          else if (((f1 == f2) && f2 == f3) && f3 == f4) {
            const give5 = eco.give(user, cara, 1000);
            m.reply(`${mess4}\n\n_🎊 JackPot --> _💎1000_`)
          }
          else {
            m.reply(`Do you understand what you are doing?`)
          }
        }
        else {
          m.reply(`*Du kannst dieses Spiel nur am Wochenenden spielen!*\n\n*🌿 Freitag*\n*🎏 Samstag*\n*🎐 Sonntag*`)
        }
      }
        break;



      /////////////////////////////////////////////////////////////////////////////////////////////////



      // case 'banchat': case 'bangroup':{
      //   if (isBan) return reply(mess.banned);	 			
      //   if (!isCreator) return reply(mess.botowner)
      //   if (args[0] === "on") {
      //   if (isBanChat) return reply('This Group is Already Banned from using me!')
      //   banchat.push(from)
      //   reply('This Group has been banned from using me!')
      //   var groupe = await Phoenix.groupMetadata(from)
      //   var members = groupe['participants']
      //   var mems = []
      //   members.map(async adm => {
      //   mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      //   })
      //   Phoenix.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
      //   } else if (args[0] === "off") {
      //   if (!isBanChat) return reply('This Group is Already Banned from using me!')
      //   let off = banchat.indexOf(from)
      //   banchat.splice(off, 1)
      //   reply('This Group has been *unbanned* from using me!')
      //   } else {
      //     let buttonsntnsfw = [
      //     { buttonId: `${prefix}bangroup on`, buttonText: { displayText: 'Ban' }, type: 1 },
      //     { buttonId: `${prefix}bangroup off`, buttonText: { displayText: 'Unban' }, type: 1 }
      //     ]
      //     await Phoenix.sendButtonText(m.chat, buttonsntnsfw, `Please choose any Button below.\n\n *On / Off*`, `${global.BotName }`, m)
      //     }
      //     }
      //     break;


      case 'reaction': case 'react': case 'reactions': case 'r':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        m.reply(` *━━〈  💞 Reactions 💞  〉━━*\n\nbonk, cry, bully, cuddle, hug, kiss, lick, pat, smug, yeet, blush, smile, wave, highfive, handhold, nom, glomp, bite, slap, kill, happy, wink, poke, dance, cringe`)
        break;


      case 'limituser': case 'userlimit': case 'limit':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        {
          let txt = `「 *All User Limit* 」\n\n`
          for (let i of _limit) {
            txt += ` *User ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
          }
          reply(txt)
        }
        break;


      case 'film': case 'movie': case 'moviesearch':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        if (!q) return m.reply(`Please enter a Movie Suchbegriff...\nBeispiel: ${prefix}movie Spiderman`)
        xfarrapi.Film(q)
          .then(data => {
            console.log(data)
            let krl = `*Suchbegriff:* ${q}\n\n`
            for (let i of data) {
              krl += (`${prefix}----------------------------------------------------------------------------\n\n\n*Movie Name:* ${i.judul}\n *Quality :* ${i.quality}\n *Type : ${i.type}*\n *Uploaded on :* ${i.upload}\n *Source URL :* ${i.link}\n\n\n`)
            }
            Phoenix.sendMessage(from, { image: { url: data[0].thumb }, caption: krl }, { quoted: fdocs })
          });
        break;


      // case 'wallpaper': case 'animewallpaper': case 'animewall': {
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);
      // if (!args.join(" ")) return reply("Please enter a term to search!")
      // const { AnimeWallpaper } =require("anime-wallpaper")
      // const wall = new AnimeWallpaper();
      // const pages = [1,2,3,4];
      // const random=pages[Math.floor(Math.random() * pages.length)]
      //         const wallpaper = await wall .getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
      //         const i = Math.floor(Math.random() * wallpaper.length);

      // let buttons = [
      //             {buttonId: `${prefix}wallpaper ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
      //         ]
      //         let buttonMessage = {
      //             image: {url:wallpaper[i].image},
      //             caption: `*Suchbegriff:* ${q}`,
      //             footer: `${BotName}`,
      //             buttons: buttons,
      //             headerType: 4
      //         }
      //         Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      //     }
      //     break;


      // case 'wallpaper':
      // case 'animewallpaper':
      // case 'animewall': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);


      //   if (!args.join(" ")) return reply("Please enter a term to search!");

      //   const { AnimeWallpaper } = require("anime-wallpaper");
      //   const wall = new AnimeWallpaper();
      //   const pages = [1, 2, 3, 4];
      //   const random = pages[Math.floor(Math.random() * pages.length)];
      //   const wallpaper = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);
      //   const i = Math.floor(Math.random() * wallpaper.length);

      //   let message = {
      //     image: { url: wallpaper[i].image },
      //     caption: `*Suchbegriff:* ${q}`,
      //     footer: `${BotName}`,
      //     headerType: 4
      //   };

      //   Phoenix.sendMessage(m.chat, message, { quoted: m });
      // }
      // break;


      // case 'wallpaper':
      // case 'animewallpaper':
      // case 'animewall': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!args.join(" ")) return reply("Please enter a term to search!");

      //   const { AnimeWallpaper } = require("anime-wallpaper");
      //   const wall = new AnimeWallpaper();
      //   const pages = [1, 2, 3, 4];
      //   const random = pages[Math.floor(Math.random() * pages.length)];
      //   const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);

      //   for (let i = 0; i < wallpapers.length; i++) {
      //     let message = {
      //       image: { url: wallpapers[i].image },
      //       caption: `*Suchbegriff:* ${q}`,
      //       footer: `${BotName}`,
      //       headerType: 4
      //     };
      //     Phoenix.sendMessage(m.chat, message, { quoted: m });
      //   }
      // }
      // break;


      // case 'wallpaper':
      // case 'animewallpaper':
      // case 'animewall': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      //   reply(mess.waiting)
      //   if (!args.join(" ")) return reply("Please enter a term to search!");

      //   const { AnimeWallpaper } = require("anime-wallpaper");
      //   const wall = new AnimeWallpaper();
      //   const pages = [1, 2, 3, 4];
      //   const random = pages[Math.floor(Math.random() * pages.length)];
      //   const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);

      //   for (let i = 0; i < wallpapers.length; i++) {
      //     let message = {
      //       image: { url: wallpapers[i].image },
      //       footer: `${BotName}`,
      //       headerType: 4
      //     };
      //     Phoenix.sendMessage(m.chat, message, { quoted: m });
      //   }
      // }
      // break;


      case 'wallpaper':
      case 'animewallpaper':
      case 'animewall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting);
        if (!args.join(" ")) return reply("Please enter a term to search!");

        const { AnimeWallpaper } = require("anime-wallpaper");
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)];
        const wallpapers = await wall.getAnimeWall4({ title: q, type: "sfw", page: pages }).catch(() => null);

        const maxImagesToSend = 15;
        const minImagesToSend = 5;
        const imagesToSend = Math.min(maxImagesToSend, Math.max(minImagesToSend, wallpapers.length));

        for (let i = 0; i < imagesToSend; i++) {
          let message = {
            image: { url: wallpapers[i].image },
            footer: `${BotName}`,
            headerType: 4
          };
          Phoenix.sendMessage(m.chat, message, { quoted: m });
        }
      }
        break;


      case 'wikimedia': case 'wikiimage': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return reply("What picture are you looking for??")
        let { wikimedia } = require('./lib/scraper')
        anu = await wikimedia(args)
        hasil = anu[Math.floor(Math.random() * anu.length)]
        let buttons = [
          { buttonId: `${prefix}wikimedia ${args.join(" ")}`, buttonText: { displayText: 'Next Image' }, type: 1 }
        ]
        let buttonMessage = {
          image: { url: hasil.image },
          caption: `Title : ${hasil.title}\nSource : ${hasil.source}\nMedia Url : ${hasil.image}`,
          footer: `${BotName}`,
          buttons: buttons,
          headerType: 4
        }
        Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;


      case 'quotesimagexxx': case 'qoutesimagexxx': case 'quoteimage':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
        reply(mess.waiting)
        Phoenix.sendMessage(m.chat, { image: { url: cok }, caption: 'Here it is...' }, { quoted: m })
        break;


      case 'quotesanime': case 'quoteanime': case 'animequote': case 'animequotes': {
        let { quotesAnime } = require('./lib/scraper')
        let anu = await quotesAnime()
        hasil = anu[Math.floor(Math.random() * anu.length)]
        /*     let buttons = [
                 {buttonId: `${prefix}quotesanime`, buttonText: {displayText: '>>'}, type: 1}
             ]  */
        let buttonMessage = {
          text: `_${hasil.quotes}_\n\nBy '${hasil.karakter}', ${hasil.anime}\n\n- ${hasil.up_at}`,
          /*     footer: 'Phoenix',
               buttons: buttons,
               headerType: 2  */
        }
        Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;



      case 'animestory': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
          .then((res) => {
            console.log(res)
            let sections = []
            for (let i of res.data) {
              const list = {
                title: `${i.title}`,
                rows: [
                  {
                    title: `${i.title}\n\n`,
                    rowId: `${prefix}animesearch ${i.mal_id}`,
                    description: `${i.synopsis}`
                  },
                ]
              }
              sections.push(list)
            }
            const sendm = Phoenix.sendMessage(
              from,
              {
                text: "Anime Search",
                footer: BotName,
                title: OwnerName,
                buttonText: "Search Results",
                sections
              }, { quoted: m }
            )
          })
      }
        break;


      case 'chatgpt':
      case 'ai':
      case 'gpt': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];

        if (!q) return m.reply(`Bitte gebe einen Text ein. Beispiel: ${prefix + command} Hallo, *ChatGPT*`);

        try {
          const apiUrl1 = `https://vihangayt.me/tools/chatgpt2?q=${encodeURIComponent(q)}`;

          const response1 = await fetch(apiUrl1);
          const responseData1 = await response1.json();

          let message = "";

          if (response1.status === 200 && responseData1 && responseData1.status === true && responseData1.data) {
            message = responseData1.data;
          } else {
            return reply("Sorry, I couldn't fetch a response from the API at the moment.");
          }

          const me = m.sender;
          await Phoenix.sendMessage(m.chat, { text: message, mentions: [me] }, { quoted: m });

        } catch (error) {
          console.error(error);
          reply("An error occurred while fetching the response from the API.");
        }
      }
        break;


      case 'img': case 'imgai': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const randomEmoji = manyemojis[Math.floor(Math.random() * manyemojis.length)];
        Phoenix.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

        if (!q) return m.reply(`Please provide a query to generate an image. Beispiel: ${prefix + command} Beautiful landscape`);

        const apiUrl = `https://gurugpt.cyclic.app/dalle?prompt=${encodeURIComponent(q)}`;

        try {
          await Phoenix.sendMessage(m.chat, { image: { url: apiUrl } }, { quoted: m });
        } catch (error) {
          console.error(error);
          reply("An error occurred while generating the image.");
        }
      }
        break;


case 'groupsetting':
 {
   let anu = `
Aloha. @${m.sender.split("@")[0]}

*[ INFORMATION ]*
Group Settings Menu`
let msg = generateWAMessageFromContent(from, {
  viewOnceMessage: {
    message: {
        "messageContextInfo": {
          "deviceListMetadata": {},
          "deviceListMetadataVersion": 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: anu
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "_Powered by Team-Phoenix_"
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            subtitle: "",
            hasMediaAttachment: false
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons: [
              {
                "name": "single_select",
                "buttonParamsJson": 
`{"title":"List Menu ⎙",
"sections":[{"title":"Phoenix-Bot",
"highlight_label": "Favorite Request",
"rows":[{"header":"",
"title":"Group",
"description":"Group open/close",
"id":"${prefix}group"},
{"header":"",
"title":"Antilink",
"description":"Antilinkall on/off",
"id":"${prefix}antilinkall on "},
{"header":"",
"title":"Hidetag",
"id":"${prefix}hidetag"}]
}]
}`
         },
           ],
           
          
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  //forwardingScore: 999,
                  //isForwarded: false,
                forwardedNewsletterMessageInfo: {
                 //newsletterJid: '120363236214682540@newsletter',
                  //newsletterName: 'Phoenix-Bot',
                  serverMessageId: 143
                }
                }
        })
    }
  }
}, {})

await Phoenix.relayMessage(msg.key.remoteJid, msg.message, {
  messageId: msg.key.id
})

}
break

      /*
      case 'animesearchxxx': case 'anime':{
          await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
          .then((res) => {
          let txt = `   _Anime Search Engine_ \n\n*Title:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Anime Type:* *${res.data.type}*\n*Adaptation:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Yes' : 'No'}*\n*Aired:* *${res.data.aired.string}*\n*Duration:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Main Producer:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
          Phoenix.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
          })
          }
          break;
      */


      case 'emojimix': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!q) m.reply(`*Beispiel :* ${prefix + command} 😊+🌹`)
        let [emoji1, emoji2] = q.split`+`
        let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
        for (let res of kuntuh.results) {
          let encmedia = await Phoenix.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
          await fs.unlinkSync(encmedia)
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//


      //
      case 'nsfw': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);

        if (args[0] === "on") {
          if (AntiNsfw) return reply('Bereits aktiviert');
          ntnsfw.push(from);
          reply('Aktiviert, aber bro wir sind nicht Neele bah digga als ob wir sowas haben, wir sagen dazu *Dont be a pervert Baka!*');
        } else if (args[0] === "off") {
          if (!AntiNsfw) return reply('Bereits deaktiviert');
          let off = ntnsfw.indexOf(from);
          ntnsfw.splice(off, 1);
          reply('Disabled NSFW Commands!');
        } else {
          m.reply(`NSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!\n\nPlease use *'${prefix}nsfw on*' to enable NSFW commands or *'${prefix}nsfw off'* to disable them.`);
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'getcase':
        if (isBan) return reply(mess.banned);
        if (m.sender != '4365022989060@s.whatsapp.net') { return; }

        if (isBanChat) return reply(mess.bangc);
        if (m.isGroup) reply(mess.privateonly)


        const getCase = (cases) => {
          return "case" + `'${cases}'` + fs.readFileSync("Core.js").toString().split('case \'' + cases + '\'')[1].split("break;")[0] + "break;"
        }
        m.reply(`${getCase(q)}`)
        break;


      case 'emoji': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args.join(" ")) return reply('Where is the emoji?')
        emoji.get(args.join(" ")).then(async (emoji) => {
          let mese = await Phoenix.sendMessage(m.chat, { image: { url: emoji.images[4].url }, caption: `Here it is...` }, { quoted: m })
          await Phoenix.sendMessage(from, { text: "reply -s to this image to make sticker" }, { quoted: mese })
        })
      }
        break;


      /*
      case 'delete': case 'del': {
       if (isBan) return reply(mess.banned);	 			
      if (isBanChat) return reply(mess.bangc);
      if (!m.quoted) return
      let { chat, fromMe, id, isBaileys } = m.quoted
      if (!isBaileys) return reply('How can i delete messages of other person? Baka!')
      Phoenix.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
      }
      break;
      */


      case 'deleteall': case 'delall': case 'delete': case 'del': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)

        if (!m.quoted) return reply('Please mention a message baka!')
        let { chat, fromMe, id } = m.quoted

        const key = {
          remoteJid: m.chat,
          fromMe: false,
          id: m.quoted.id,
          participant: m.quoted.sender
        }

        await Phoenix.sendMessage(m.chat, { delete: key })
      }
        break;



      //////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////



      case 'ghstalk': case 'githubstalk': case 'github': {

        if (!q) return m.reply(`Give me a user name like *${prefix}github Kai0071*`)

        gitdata = await githubstalk.githubstalk(`${q}`)
        Phoenix.sendMessage(m.chat, {
          image: { url: gitdata.profile_pic }, caption:
            `*ㅤㅤㅤ|ㅤㅤㅤGithub Info ㅤㅤㅤ|\*

  🚩 Id : ${gitdata.id}
  🔖 Nickname : ${gitdata.nickname}
  🔖 Username : ${gitdata.username}
  ✨ Bio : ${gitdata.bio}
  🏢 Company : ${gitdata.company}
  📍 Location : ${gitdata.location}
  📧 Email : ${gitdata.email}
  🔓 Public Repo : ${gitdata.public_repo}
  🔐 Public Gists : ${gitdata.public_gists}
  💕 Followers : ${gitdata.followers}
  👉 Following : ${gitdata.following}`
        }, { quoted: m })
      }
        break;

      //
      //🚩 Id : ${gitdata.id}
      //✅ Type : ${gitdata.type}
      //🛡 Admin : ${gitdata.admin}
      //❇ Nodeid : ${gitdata.nodeId}
      // 📰 Blog : ${gitdata.blog}
      //  🔗 Url Profile : ${gitdata.profile_pic}
      // 🔗 Url Github : ${gitdata.url}
      // 🔄 Updated At : ${gitdata.updated_at}
      // 🧩 Created At : ${gitdata.ceated_at}


      case 'git':
      case 'gitclone':
      case 'git-clone':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);



        if (!args[0]) {
          return m.reply(`Please provide the GitHub repository link.\nBeispiel:\n${prefix}${command} https://github.com/7ucg/Phoenix-MD
 │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃
          `);
        }

        if (!isUrl(args[0]) || !args[0].includes('github.com')) {
          return m.reply(`Invalid or non-GitHub repository link provided. Please use a valid GitHub repository link.`);
        }

        try {
          let splitURL = args[0].split('github.com/');
          if (splitURL.length < 2) throw Error('Invalid GitHub URL');

          let [githubUser, githubRepo] = splitURL[1].split('/');
          githubRepo = githubRepo.replace('.git', '');

          let gitZipUrl = `https://api.github.com/repos/${githubUser}/${githubRepo}/zipball`;

          await Phoenix.sendMessage(from, { text: `${pushname}, Please wait, downloading...` });


          let zipHeaders = await fetch(gitZipUrl, { method: 'HEAD' }).then(res => res.headers);
          let zipFilename = zipHeaders.get('content-disposition').match(/attachment; filename=(.*)/)[1];

          await Phoenix.sendMessage(m.chat, { document: { url: gitZipUrl }, fileName: zipFilename + '.zip', mimetype: 'application/zip' }, { quoted: m });
        } catch (err) {
          console.error(err);
          return m.reply(`Failed to fetch the repository contents. Please ensure the GitHub link is correct and accessible. Use the format: 'https://github.com/username/repository'.`);
        }
        break;


      case 'listpc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
        let teks = ` 「  │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃 user list  」\n\nTotal ${anu.length} users are using Phoenix in personal chat.`
        for (let i of anu) {
          teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Europe/Berlin").format("DD/MM/YYYY HH:mm:ss")}`
        }
        Phoenix.sendTextWithMentions(m.chat, teks, m)
      }
        break;


      case 'listgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
        let teks = ` 「   │𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃 group user list  」\n\nTotal ${anu.length} users are using bot in Groups.`
        for (let i of anu) {
          let metadata = await Phoenix.groupMetadata(i)
          if (metadata.owner === "undefined") {
            loldd = false
          } else {
            loldd = metadata.owner
          }
          teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nMade : ${metadata.creation ? moment(metadata.creation * 1000).tz('Europe/Berlin').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
        }
        Phoenix.sendTextWithMentions(m.chat, teks, m)
      }
        break;

        case 'speedtest':
case 'speedcheck':
  m.reply(`Bitte warten ${pushname} Teste Geschwindigkeit... ⚙️`);

  try {
    const FastSpeedtest = require('fast-speedtest-api');
    

    // Geschwindigkeitstest
    const speedtest = new FastSpeedtest({
      token: 'YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm', // Ihr API-Token hier
      verbose: true,
      timeout: 10000,
      https: true,
      urlCount: 5,
      bufferSize: 8,
      unit: FastSpeedtest.UNITS.Mbps
    });

    const speed = await speedtest.getSpeed();

    // Ergebnisse an den Benutzer senden
    const result = `Download Speed: ${speed} Mbps`;
    await m.reply(result);
  } catch (err) {
    console.error(err);
    // Fehlerbehandlung: Eine Nachricht bei internem Fehler senden
    m.reply(`Bei der ist ein interner Fehler aufgetreten.`);
  }
  break;

/**
 * Class::PromisePing
 * @param {string} addr - Hostname or ip addres
 * @param {PingConfig} config - Configuration for command ping
 * @return {Promise}
 */


case "speed":
    m.reply(`Bitte warten, Ping wird berechnet...`);
    try {
        const { exec } = require('child_process');

        // Ping-Befehl für Linux ausführen
        exec('/bin/ping -c 4 google.com', (error, stdout, stderr) => {
            if (error) {
                console.error(`Fehler beim Ausführen des Ping-Befehls: ${error.message}`);
                m.reply(`Bei der Geschwindigkeitsüberprüfung ist ein Fehler aufgetreten.`);
                return;
            }
            if (stderr) {
                console.error(`Fehlerausgabe des Ping-Befehls: ${stderr}`);
                m.reply(`Bei der Geschwindigkeitsüberprüfung ist ein Fehler aufgetreten.`);
                return;
            }

            // Ping-Ergebnisse aus der Standardausgabe extrahieren
            const pingOutputLines = stdout.split('\n');
            const timeLine = pingOutputLines.find(line => line.includes('time='));
            const timeMatch = /time=([\d.]+) ms/.exec(timeLine);
            const pingTime = timeMatch ? parseFloat(timeMatch[1]) : null;

            // Ergebnisse an den Benutzer senden
            if (pingTime !== null) {
                m.reply(`Ping: ${pingTime} ms`);
            } else {
                m.reply(`Ping-Ergebnisse konnten nicht analysiert werden.`);
            }
        });
    } catch (err) {
        console.error(err);
        m.reply(`Bei der Geschwindigkeitsüberprüfung ist ein interner Fehler aufgetreten.`);
    }
    break;






      case 'status': case 'post': {
        if (!isCreator) return reply(mess.owner)
        if (!quoted) return m.reply(`Send/reply Image With Caption ${prefix}status`)
        if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 30) return reply('Maximum 30 seconds video is allowed!')
        }
        const messageType = Object.keys(m.message)[0]
        if (messageType === 'imageMessage') {
          const media = await downloadMediaMessage(m, 'media', {}, { logger, reuploadRequest: sock.updateMediaMessage })
          await writeFile('./image.jpeg', media)
          await Phoenix.sendMessage(botNumber, 'status@broadcast', { url: './image.jpeg', media }).catch((err) => fs.unlinkSync(media))
          m.reply(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else if (messageType === 'videoMessage') {
          const media = await downloadMediaMessage(m, 'media', {}, { logger, reuploadRequest: sock.updateMediaMessage })
          await writeFile('./video.mp4', media)
          await Phoenix.sendMessage(botNumber, 'status@broadcast', { url: 'video.mp4', media }).catch((err) => fs.unlinkSync(media))
          m.reply(`*✨ ${pushname}...!! Posted On My Status ✨*`);
        }
        else {
          m.reply(`an error occurred`)
        }

      }
        break;



      ////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////



      case 'app': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let user = global.db.users[m.sender]
        user.afkTime = + new Date
        user.afkReason = args.join(" ")
        m.reply(`${m.pushName} is now Away From Keyboard.\nAFK Reason : ${args.join(" ") ? args.join(" ") : ''}`)
      }
        break;


      case 'fliptext': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args.length < 1) return m.reply(`Beispiel:\n${prefix}fliptext ${OwnerName}`)
        quere = args.join(" ")
        flipe = quere.split('').reverse().join('')
        m.reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*Input text :*\n${quere}\n*Fliped text :*\n${flipe}`)
      }
        break;


      case 'toletter': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!Number(args[0])) return m.reply(`Beispiel:\n${prefix}toletter 956`)
        try {
          quere = args.join(" ")
          convertes = await toHur(quere)
          m.reply(`\`\`\`「  Word Maker Tool  」\`\`\`\n*Input Number :*\n${quere}\n*Converted Alphabet :*\n${convertes}`)
        } catch {
          m.reply(`Error!`)
        }
      }



      case 'leveling':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args.length < 1) return reply('Type on to *Enable*\nType off to *Disable*')
        if (args[0] === 'on') {
          if (isLeveling) return m.reply(`Already activated`)
          _leveling.push(from)
          fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
          reply('Leveling activated')
        } else if (args[0] === 'off') {
          let anu = _leveling.indexOf(from)
          _leveling.splice(anu, 1)
          fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
          reply('Leveling deactivated')
        }
        break;


      ////////////////////////////////////////////////////////////////////////////


      /* ████ ✪ ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ [ Antilink ] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███ ✪ ███ */


      //
      case 'antilinkgc': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLink) return reply('Bereits aktiviert!')
          ntilink.push(from)
          reply('Antilink in dieser Gruppe Aktiviert!')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLink) return reply('Bereits deaktiviert!')
          let off = ntilink.indexOf(from)
          ntilink.splice(off, 1)
          reply('Antilink in dieser Gruppe Deaktiviert!')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkgc on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkgc off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkYoutubeVid) return reply('Already activated')
          ntilinkytvid.push(from)
          reply('Activated youtube video antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkYoutubeVid) return reply('Bereits deaktiviert')
          let off = ntilinkytvid.indexOf(from)
          ntilinkytvid.splice(off, 1)
          reply('Deactivated youtube video antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkyoutubevideo on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkyoutubevideo off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkYoutubeChannel) return reply('Already activated')
          ntilinkytch.push(from)
          reply('Activated youtube channel antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkYoutubeChannel) return reply('Bereits deaktiviert')
          let off = ntilinkytch.indexOf(from)
          ntilinkytch.splice(off, 1)
          reply('Deactivated youtube channel antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkyoutubech on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkyoutubech off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkInstagram) return reply('Already activated')
          ntilinkig.push(from)
          reply('Activated instagram antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkInstagram) return reply('Bereits deaktiviert')
          let off = ntilinkig.indexOf(from)
          ntilinkig.splice(off, 1)
          reply('Deactivated instagram antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkinstagram on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkinstagram off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinkfacebook': case 'antilinkfb': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkFacebook) return reply('Already activated')
          ntilinkfb.push(from)
          reply('Activated facebook antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkFacebook) return reply('Bereits deaktiviert')
          let off = ntilinkfb.indexOf(from)
          ntilinkfb.splice(off, 1)
          reply('Deactivated facebook antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinkfacebook on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinkfacebook off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktelegram': case 'antilinktg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTelegram) return reply('Already activated')
          ntilinktg.push(from)
          reply('Activated telegram antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTelegram) return reply('Bereits deaktiviert')
          let off = ntilinkig.indexOf(from)
          ntilinkig.splice(off, 1)
          reply('Deactivated telegram antilink in this group')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktelegram on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktelegram off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below On / Off `, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktiktok': case 'antilinktt': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTiktok) return reply('Already activated')
          ntilinktt.push(from)
          reply('Activated tiktok antilink !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTiktok) return reply('Bereits deaktiviert')
          let off = ntilinktt.indexOf(from)
          ntilinktt.splice(off, 1)
          reply('Deactivated tiktok antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktiktok on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktiktok off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;


      case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkTwitter) return reply('Already activated')
          ntilinktwt.push(from)
          reply('Activated twitter antilink in this group !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkTwitter) return reply('Bereits deaktiviert')
          let off = ntilinktwt.indexOf(from)
          ntilinktwt.splice(off, 1)
          reply('Deactivated twitter antilink !')
        } else {
          let buttonsntilink = [
            { buttonId: `${prefix}antilinktwt on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antilinktwt off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;


      // case 'antilinkall': {
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);
      // if (!m.isGroup) return reply(mess.grouponly);
      // if (!isBotAdmins) return reply(mess.botadmin);
      // if (!isAdmins && !isCreator) return reply(mess.useradmin)
      // if (args[0] === "on") {
      // if (AntiLinkTwitter) return reply('Already activated')
      // ntilinkall.push(from)
      // reply('Enabled all antilink !')
      // var groupe = await Phoenix.groupMetadata(from)
      // var members = groupe['participants']
      // var mems = []
      // members.map(async adm => {
      // mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      // })
      // Phoenix.sendMessage(from, {text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Activated!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
      // } else if (args[0] === "off") {
      // if (!AntiLinkAll) return reply('Bereits deaktiviert')
      // let off = ntilinkall.indexOf(from)
      // ntilinkall.splice(off, 1)
      // reply('Disabled all antilink !')
      // } else {
      // let buttonsntilink = [
      // { buttonId: `${prefix}antilinkall on`, buttonText: { displayText: 'On' }, type: 1 },
      // { buttonId: `${prefix}antilinkall off`, buttonText: { displayText: 'Off' }, type: 1 }
      // ]
      // await Phoenix.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
      // }
      // }
      // break;


      case 'antilinkall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin);

        if (args[0] === "on") {

          if (AntiLinkAll) return reply('Bereits aktiviert');
          ntilinkall.push(from);
          reply('Antilink Aktiviert!');
          var groupe = await Phoenix.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
          if (!AntiLinkAll) return reply('Bereits deaktiviert');
          let off = ntilinkall.indexOf(from);
          ntilinkall.splice(off, 1);
          reply('Disabled all antilink!');
        } else {
          m.reply(`Bitte verwende '${prefix}antilinkall on", um Antilink zu aktivieren, oder '${prefix}antilinkall off' um Antilink zu deaaktivieren.`);
        }
      }
        break;
// Annahme: isBotAdmins, isAdmins, m.key.fromMe, isCreator sind definierte Variablen




      case 'antiwame': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (antiWame) return reply('Already activated')
          ntwame.push(from)
          reply('Activated antiwame !')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`*「  Warnung  」*\`\`\`\n\nAntilink ist aktiv!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!antiWame) return reply('Bereits deaktiviert')
          let off = nttoxic.indexOf(from)
          ntwame.splice(off, 1)
          reply('Deactivated antiwame !')
        } else {
          let buttonsntwame = [
            { buttonId: `${prefix}antiwame on`, buttonText: { displayText: 'On' }, type: 1 },
            { buttonId: `${prefix}antiwame off`, buttonText: { displayText: 'Off' }, type: 1 }
          ]
          await Phoenix.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
        }
      }
        break;



      /////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////



      // case 'nsfw': {
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);
      // if (!m.isGroup) return reply(mess.grouponly);
      // if (!isBotAdmins) return reply(mess.botadmin);
      // if (!isAdmins && !isCreator) return reply(mess.useradmin)
      // if (args[0] === "on") {
      // if (AntiNsfw) return reply('Already activated')
      // ntnsfw.push(from)
      // reply('Enabled NSFW Commands!')
      // var groupe = await Phoenix.groupMetadata(from)
      // var members = groupe['participants']
      // var mems = []
      // members.map(async adm => {
      // mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
      // })
      // Phoenix.sendMessage(from, {text: `\`\`\`「 Notice 」\`\`\`\n\nNSFW(not safe for work) feature has been enabled in this group, which means anyone here can accesss Adult commands!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
      // } else if (args[0] === "off") {
      // if (!AntiNsfw) return reply('Bereits deaktiviert')
      // let off = ntnsfw.indexOf(from)
      // ntnsfw.splice(off, 1)
      // reply('Disabled NSFW Commands!')
      // } else {
      // let buttonsntnsfw = [
      // { buttonId: `${prefix}nsfw on`, buttonText: { displayText: 'On' }, type: 1 },
      // { buttonId: `${prefix}nsfw off`, buttonText: { displayText: 'Off' }, type: 1 }
      // ]
      // await Phoenix.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.BotName}`, m)
      // }
      // }
      // break;


      //-----------------------------------------------------------------------------------------------------------------------------------//


      case 'listonline': case 'listaktif': case 'here': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);

        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
        let online = [...Object.keys(store.presences[id]), botNumber]
        let liston = 1
        Phoenix.sendText(m.chat, '  「 *Aktive Member* 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
      }
        break;


      //-----------------------------------------------------------------------------------------------------------------------------------//


      // case 'happymod': {
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);
      // if (!args.join(" ")) return m.reply(`Beispiel : ${prefix + command} Kinemaster`)
      //modapk.happymod(args.join(" ")).then(async(res) => {
      // teks = '```「 HappyMod Search Engine 」```'
      // for (let i of res) {
      // teks += `\n\n${i.name}\n`
      // teks += `${i.link}`
      // }

      // let buttonMessage = {
      // image: {url:res[0].icon},
      // jpegThumbnail: Thumb,
      // caption: teks,
      // footer: `${global.BotName}`,
      // headerType: 4
      // }
      // Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      // })
      // }
      // break;

      //
      case 'happymod': case 'modapk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args.join(" ")) return m.reply(`Beispiel: ${prefix + command} Kinemaster`);

        const searchTerm = args.join(" ");
        modapk.happymod(searchTerm).then(async (res) => {
          let teks = '```「 HappyMod Suchmaschine 」```';
          for (let i of res) {
            teks += `\n\n${i.name}\n`;
            teks += `${i.link}`;
          }

          let messageToSend = teks;
          if (res[0].icon) {
            messageToSend = {
              text: teks,
              image: { url: res[0].icon },
              jpegThumbnail: Thumb,
            };
          }

          Phoenix.sendMessage(from, messageToSend, { quoted: m });
        });
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//


      //group moderation

      case 'banchat': case 'bangroup': case 'banmode': {
        if (isBan) return reply(mess.banned);
        if (!isCreator) return reply(mess.botowner);

        if (args[0] === "on") {
          if (isBanChat) return reply('This Group is Already Banned from using me!');
          banchat.push(from);
          reply('This Group has been banned from using me!');

          var groupe = await Phoenix.groupMetadata(from);
          var members = groupe['participants'];
          var mems = [];
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'));
          });

          Phoenix.sendMessage(from, { text: `\`\`\`「 Notice 」\`\`\`\n\nThis group is banned from using the bot. So, here nobody can use me anymore!`, contextInfo: { mentionedJid: mems } }, { quoted: m });
        } else if (args[0] === "off") {
          if (!isBanChat) return reply('This Group is Already Banned from using me!');
          let off = banchat.indexOf(from);
          banchat.splice(off, 1);
          reply('This Group has been *unbanned* from using me!');
        } else {
          reply('Please choose either *"on"* or *"off"* to ban or unban the group from using the bot.');
        }
      }
        break;


      case 'setname': case 'setsubject': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (!text) return reply('Pls enter -setname <New Group Name>  to change this Group Name')
        await Phoenix.groupUpdateSubject(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'block': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.updateBlockStatus(users, 'block').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'unblock': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.updateBlockStatus(users, 'unblock').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setdesc': case 'setdesk': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (!text) return reply('Pls enter -setname <New Group Description>  to change this Group Description.')
        await Phoenix.groupUpdateDescription(m.chat, text).then((res) => reply(mess.jobdone)).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (!quoted) return m.reply(`Send/reply Image With Caption ${prefix + command}`)
        if (!/image/.test(mime)) return m.reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        if (/webp/.test(mime)) return m.reply(`Send/reply Image With Caption ${prefix + command} to change the Profile Pic of this group.`)
        let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
        await Phoenix.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
        reply(mess.jobdone)
      }
        break;


      case 'tagall': case 'all': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        let teks = `「 Attention 」

*Nachricht : ${args.join(" ") ? args.join(" ") : 'Keine Nachricht'}*\n\n`
        for (let mem of participants) {
          teks += `» @${mem.id.split('@')[0]}\n`
        }
        Phoenix.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break;


      case 'hidetag': case 'tag': case 'ooo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Phoenix.sendMessage(m.chat, { text: args.join(" ") ? args.join(" ") : '', mentions: participants.map(a => a.id) }, { quoted: m })
      }
        break;


      case 'tagadmins': case 'admins': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!text) return m.reply(`*│𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃*`)
        let teks = 
      `          *「 Tag Admins 」*\n\n*Nachricht : ${text}*\n\n`
        for (let mem of groupAdmins) {
          teks += `👑 @${mem.split('@')[0]}\n`
        }
        Phoenix.sendMessage(m.chat, { text: teks, mentions: groupAdmins }, { quoted: m })
      }
        break;


      /*
      case 'purge':{
        if (isBan) return reply(mess.banned);	 			
      if (isBanChat) return reply(mess.bangc);
      if (!m.isGroup) return reply(mess.grouponly);
      if (!isBotAdmins) return reply(mess.botadmin);
      if (!isAdmins && !isCreator) return reply(mess.useradmin)
      
        const delay = time => new Promise(res=>setTimeout(res,time));
      
        let users = (await Phoenix.fetchGroupMetadataFromWA(m.chat)).participants.map(u => u.jid)
        for (let user of users){
      
            await Phoenix.groupParticipantsUpdate(m.chat, [user], 'remove')
            await delay(3000)
        }
      }
      break;
      
      */

      case 'purge': {
        mess
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        const delay = time => new Promise(res => setTimeout(res, time));
        let mentioned = participants.map(v => v.jid)
        for (let member of mentioned) {
          Phoenix.groupParticipantsUpdate(m.chat, [member], 'remove')
        }
      }

        break;


      case 'nowa': case 'find': case 'stalk': case 'stalknumber': {
        if (isBan) return reply(mess.banned);
        if (!args[0]) return m.reply(`Use command like: ${prefix}stalk <number>xxx`)
        var inputnumber = args[0]
        if (!inputnumber.includes('x')) return reply('You didnot added x')
        m.reply(`Searching for WhatsApp account in given range...`)
        m.reply(`Please wait while i fetch details...`)
        function countInstances(string, word) {
          return string.split(word).length - 1;
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx;
        if (random_length == 1) {
          randomxx = 10
        } else if (random_length == 2) {
          randomxx = 100
        } else if (random_length == 3) {
          randomxx = 1000
        }
        var nomerny = `*『 List of Whatsapp Numbers 』*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within the range you provided*\n`
        for (let i = 0; i < randomxx; i++) {
          var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
          var status1 = nu[Math.floor(Math.random() * nu.length)]
          var status2 = nu[Math.floor(Math.random() * nu.length)]
          var status3 = nu[Math.floor(Math.random() * nu.length)]
          var dom4 = nu[Math.floor(Math.random() * nu.length)]
          var rndm;
          if (random_length == 1) {
            rndm = `${status1}`
          } else if (random_length == 2) {
            rndm = `${status1}${status2}`
          } else if (random_length == 3) {
            rndm = `${status1}${status2}${status3}`
          } else if (random_length == 4) {
            rndm = `${status1}${status2}${status3}${dom4}`
          }
          var anu = await Phoenix.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`);
          var anuu = anu.length !== 0 ? anu : false
          try {
            try {
              var anu1 = await Phoenix.fetchStatus(anu[0].jid)
            } catch {
              var anu1 = '401'
            }
            if (anu1 == '401' || anu1.status.length == 0) {
              nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
            } else {
              nomerny += `🪄 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n🔹 *Bio :* ${anu1.status}\n🔸 *Updated On :* ${moment(anu1.setAt).tz('Europe/Berlin').format('HH:mm:ss DD/MM/YYYY')}\n\n`
            }
          } catch {
            nowhatsapp += `${number0}${i}${number1}\n`
          }
        }
        m.reply(`${nomerny}${nobio}${nowhatsapp}`)
      }
        break;


      case 'grouplink': case 'gclink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        let response = await Phoenix.groupInviteCode(m.chat)
        Phoenix.sendMessage(m.chat, {
          text: `*Group Name:* *${groupMetadata.subject}* \n\n*Group Link :* \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
            mimetype: "image/jpeg",
            text: `${global.OwnerName}`,
            "forwardingScore": 1000000000,
            isForwarded: true,
            sendEphemeral: true,
            "externalAdreply": {
              "title": `${global.BotName}`,
              "body": `${global.WaterMark}`,
              "previewType": "PHOTO",
              "thumbnailUrl": Thumb,
              "thumbnail": Thumb,
              "sourceUrl": `${global.websitex}`
            }
          }
        }, { quoted: m, detectLink: true })
      }
        break;


      case 'resetlinkgc':
      case 'resetlinkgroup':
      case 'resetlinkgrup':
      case 'revoke':
      case 'resetlink':
      case 'resetgrouplink':
      case 'resetgclink':
      case 'resetgruplink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        Phoenix.groupRevokeInvite(m.chat)
      }
        break;


      case 'group': case 'grup': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === 'close') {
          await Phoenix.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*_DIE GRUPPE WURDE ERFOLGREICH GESCHLOSSEN_*.`)).catch((err) => reply(jsonformat(err)))
        } else if (args[0] === 'open') {
          await Phoenix.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*_DIE GRUPPE WURDE ERFOLGREICH GEÖFFNET_*.`)).catch((err) => reply(jsonformat(err)))
        } else {

          let buttonMessage = {
            image: BotLogo,
            jpegThumbnail: Thumb,
            caption: `*「 ${global.BotName} 」*\n\n_Group Setting Changer tool_:\n\nIf you want to Group close *-group close*\n\nIf you want to Group Oepn *-group open*`,
            footer: `${BotName}`,
            headerType: 4
          }
          Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
      }
        break;


      case 'promote': case 'admin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'demote': case 'unadmin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      }
        break;


      case 'kick': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.groupParticipantsUpdate(m.chat, [users], 'remove')
      }
        break;


      // join command  is a possible to Ban bot number.
      case 'join': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        if (!args[0]) return m.reply(`Where's the link?`)
        vdd = args[0]
        let vcc = vdd.split("https://chat.whatsapp.com/")[1]
        if (!vcc) return reply("Link invalid!")
        if (isCreator) {
          await Phoenix.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
          reply("Erfolgreich!")
        } else {
          Phoenix.query({
            tag: "iq",
            attrs: {
              type: "get",
              xmlns: "w:g2",
              to: "@g.us"
            },
            content: [{ tag: "invite", attrs: { code: vcc } }]
          }).then(async (res) => {
            sizny = res.content[0].attrs.size
            if (sizny < 20) {
              teks = `Sorry, minimun 20 members are required in a group to add bot!`
              sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./Assets/pic7.jpg'), `${global.packname}`, `${global.BotName}`, "916297175943@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
            } else if (sizny > 20) {
              await Phoenix.groupAcceptInvite(vcc).then(async (res) => reply(jsonformat(res))).catch(_ => _)
              reply("Joined !")
            } else {
              reply("Error")
            }
          }).catch(_ => _)
        }
      }
        break;


      // case 'leavegc': case 'leavegroup': case 'bye': {
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //       reply(mess.waiting)
      //                   if (!isCreator) return m.reply(`${mess.botowner}`)
      //                   await Phoenix.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
      //               }
      //               break;


      //
      case 'groupevent':
      case 'group-event':

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)

        if (args.length === 0) {
          if (global.groupevent) {
            return m.reply(`Group events are currently *enabled*.\n\nYou can turn them *off* using "${global.prefa[0]}groupevent off".`);
          } else {
            return m.reply(`Group events are currently *disabled*.\n\nYou can turn them *on* using "${global.prefa[0]}groupevent on".`);
          }
        } else if (args.length === 1 && (args[0] === 'on' || args[0] === 'off')) {
          const status = args[0];
          if (status === 'on') {
            if (global.groupevent) {
              return m.reply(`Group events are already *enabled*.`);
            } else {
              global.groupevent = true;
              return m.reply(`Group events are now *enabled*.`);
            }
          } else {
            if (!global.groupevent) {
              return m.reply(`Group events are already *disabled*.`);
            } else {
              global.groupevent = false;
              return m.reply(`Group events are now *disabled*.`);
            }
          }
        } else {
          return m.reply(`Usage: ${global.prefa[0]}groupevent [on/off]`);
        }
        break;


      //
      case 'ban': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)

        if (!args[0]) return m.reply(`Select add or del (add to ban, del to unban), Beispiel: reply *${prefix}ban add* to the user you want to ban.`)
        if (args[1]) {
          orgnye = args[1] + "@s.whatsapp.net"
        } else if (m.quoted) {
          orgnye = m.quoted.sender
        }
        const isBane = banUser.includes(orgnye)
        if (args[0] === "add") {
          if (isBane) return ads('User was already banned.')
          banUser.push(orgnye)
          m.reply(`Successfully banned the user`)
        } else if (args[0] === "del") {
          if (!isBane) return ads('User was already unbanned.')
          let delbans = banUser.indexOf(orgnye)
          banUser.splice(delbans, 1)
          m.reply(`Successfully unbanned the user.`)
        } else {
          reply("Error")
        }
      }
        break;


      case 'antilink': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
        if (args[0] === "on") {
          if (AntiLinkAll) return reply('Bereits aktiviert ')
          ntilinkall.push(from)
          reply('Antilink Aktiviert!')
          var groupe = await Phoenix.groupMetadata(from)
          var members = groupe['participants']
          var mems = []
          members.map(async adm => {
            mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
          })
          Phoenix.sendMessage(from, { text: `\`\`\`「 Warnung 」\`\`\`\n\nAntilink System Aktiviert!`, contextInfo: { mentionedJid: mems } }, { quoted: m })
        } else if (args[0] === "off") {
          if (!AntiLinkAll) return reply('Bereits deaktiviert')
          let off = ntilinkall.indexOf(from)
          ntilinkall.splice(off, 1)
          reply('Antilink Dektiviert!')
        } else {
          let textmsg = 'Type ' + `${prefix}${command}` + ' on to turn on antilink feature or Type ' + `${prefix + command}` + ' off to turn off antilink feature'
          await Phoenix.sendMessage(m.chat, { text: `${textmsg}` }, `${global.BotName}`, m)
        }
      }
        break;



      //-----------------------------------------------------------------------------------------------------------------------------------//



      //
      case 'ringtone': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return m.reply(`Beispiel: ${prefix}ringtone black over`)
        let { ringtone } = require('./lib/scraper')
        let anu = await ringtone(text)
        let result = anu[Math.floor(Math.random() * anu.length)]
        Phoenix.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
      }
        break;


      case 'volume': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return m.reply(`Beispiel: ${prefix + command} 10`)
        media = await Phoenix.downloadAndSaveMediaMessage(quoted, "volume")
        if (isQuotedAudio) {
          rname = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            jadie = fs.readFileSync(rname)
            Phoenix.sendMessage(from, { audio: jadie, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(rname)
          })
        } else if (isQuotedVideo) {
          rname = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            jadie = fs.readFileSync(rname)
            Phoenix.sendMessage(from, { video: jadie, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(rname)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;


      case 'tempo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args.join(" ")) return m.reply(`Beispiel: ${prefix + command} 10`)
        var req = args.join(' ')
        media = await Phoenix.downloadAndSaveMediaMessage(quoted, "tempo")
        if (isQuotedAudio) {
          ran = getRandom('.mp3')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            Phoenix.sendMessage(from, { audio: hah, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else if (isQuotedVideo) {
          ran = getRandom('.mp4')
          exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
            fs.unlinkSync(media)
            if (err) return reply('Error!')
            hah = fs.readFileSync(ran)
            Phoenix.sendMessage(from, { video: hah, mimetype: 'video/mp4' }, { quoted: m })
            fs.unlinkSync(ran)
          })
        } else {
          reply("Please send video/audio file only!")
        }
      }
        break;


      case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':

        try {
          let set
          if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
          if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
          if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
          if (/earrape/.test(command)) set = '-af volume=12'
          if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
          if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
          if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
          if (/reverse/.test(command)) set = '-filter_complex "areverse"'
          if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
          if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
          if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
          if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
          if (/audio/.test(mime)) {
            reply(mess.waiting)
            let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
            let ran = getRandom('.mp3')
            exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
              fs.unlinkSync(media)
              if (err) return reply(err)
              let buff = fs.readFileSync(ran)
              Phoenix.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m })
              fs.unlinkSync(ran)
            })
          } else m.reply(`Pls mention any audio you want to modify _${prefix + command}_`)
        } catch (e) {
          reply(e)
        }
        break;


      case 'calculator': case 'cal': case 'calculate': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args.length < 1) return m.reply(`*Beispiel :*\n${prefix}calculator 2*5\n\n`)
        let qsd = args.join(" ")
        if (typeof mathjs.evaluate(qsd) !== 'number') {
          reply('Error')
        } else {
          m.reply(`\`\`\`「 _Calculator Tool_ 」\`\`\`\n\n*Input :* ${qsd}\n*Calculation Result :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
        }
      }
        break;



      //////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      //
      case 'toimage': case 'makeimg': case 'toimg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return m.reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
        let ran = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media)
          if (err) throw err
          let buffer = fs.readFileSync(ran)
          Phoenix.sendMessage(m.chat, { image: buffer }, { quoted: m })
          fs.unlinkSync(ran)
        })
      }
        break;


      case 'tomp4': case 'makemp4': case 'makevideo': case 'tovideo': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return m.reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.waiting)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Phoenix.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Here it is...' } }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;


      case 'toaud': case 'makeaudio': case 'toaudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        if (!m.quoted) return m.reply(`Send/reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Phoenix.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg' }, { quoted: m })
      }
        break;


      case 'tomp3': case 'makemp3': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (/document/.test(mime)) return m.reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!/video/.test(mime) && !/audio/.test(mime)) return m.reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        if (!m.quoted) return m.reply(`Send/reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
        reply(mess.waiting)
        let media = await quoted.download()
        let { toAudio } = require('./lib/converter')
        let audio = await toAudio(media, 'mp4')
        Phoenix.sendMessage(m.chat, { document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${global.BotName} (${m.id}).mp3` }, { quoted: m })
      }
        break;


      case 'togif': case 'makegif': case 'getgif': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.quoted) return reply('reply Image')
        if (!/webp/.test(mime)) return m.reply(`reply sticker with caption *${prefix + command}*`)
        reply(mess.wait)
        let { webp2mp4File } = require('./lib/uploader')
        let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
        let webpToMp4 = await webp2mp4File(media)
        await Phoenix.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
        await fs.unlinkSync(media)
      }
        break;


      // case 'tourl': case 'makeurl':{
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);

      // // let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader');
      // let media = await Phoenix.downloadAndSaveMediaMessage(quoted)
      // if (/image/.test(mime)) {
      // let anu = await TelegraPh(media)
      // reply(util.format(anu))
      // } else if (!/image/.test(mime)) {
      // let anu = await UploadFileUgu(media)
      // reply(util.format(anu))
      // }
      // await fs.unlinkSync(media)
      // }
      // break;


      case "url": case 'tolink':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let { GraphOrg } = require("./lib/uploader");
        if (!m.quoted) {
          //

          return m.reply(
            `With caption not working, first send an *Image* / *Video* to generate a link! then tag with *${prefix}tourl*`
          );
        }
        let media5 = await Phoenix.downloadAndSaveMediaMessage(quoted);
        if (/image/.test(mime)) {
          //
          let anu = await GraphOrg(media5);
          m.reply(`*Generated Image URL:* \n\n${util.format(anu)}\n`);
        } else if (/video/.test(mime)) {
          //
          try {
            let anu = await GraphOrg(media5);
            m.reply(`*Generated Video URL:* \n\n${util.format(anu)}\n`);
          } catch (e) {
            //
            await fs.unlinkSync(media5);
            return Phoenix.sendMessage(
              m.from,
              {
                text: `*Your video size is too big!*\n\n*Max video size:* 5MB`,
              },
              { quoted: m }
            );
          }
        } else {
          //
          return m.reply(
            `Plese provide an *Image* / *Video* to generate a link!`
          );
        }
        await fs.unlinkSync(media5);
        break;



       //--------------------------------------------------------------------------------------------------------------------//



      case 'translate': case 'ts': case 'trans': {
        if (isBan) return reply(mess.banned);


        if (!args.join(" ")) return reply("Pls enter any text to translate")
        tes = await fetchJson(`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
        Infoo = tes.info
        Detek = tes.translate
        m.reply(`Input : ${Detek}\nTranslation Results : ${Infoo}`)
      }
        break;


      // case 'gimage': case 'gig': case 'googleimage':{
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);

      // if (!args[0]) return reply("Enter a Suchbegriff to get Google Image!")
      // let gis = require('g-i-s')
      // gis(args.join(" "), async (error, result) => {
      // n = result
      // images = n[Math.floor(Math.random() * n.length)].url
      // let buttons = [
      // {buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
      // ]
      // let buttonMessage = {
      // image: { url: images },
      // caption: `「 _Google Image Search_ 」

      // _Suchbegriff_ : ${text}
      // _Media Url_ : ${images}`,
      // footer: `${global.BotName}`,
      // buttons: buttons,
      // headerType: 4,

      // }
      // Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      // })
      // }
      // break;



      // case 'gimage':
      // case 'gig':
      // case 'googleimage': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);

      //   if (!args[0]) return reply("Enter a Suchbegriff to get Google Image!");
      //   let gis = require('g-i-s');
      //   gis(args.join(" "), async (error, result) => {
      //     n = result;
      //     images = n[Math.floor(Math.random() * n.length)].url;
      //     let buttonMessage = {
      //       image: { url: images },
      //       caption: `「 _Google Image Search_ 」\n\n_Suchbegriff_ : ${text}\n_Media Url_ : ${images}`,
      //       footer: `${global.BotName}`,
      //       headerType: 4,
      //     };
      //     Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m });
      //   });
      // }
      // break;
      case 'gimage':
      case 'gig':
      case 'googleimage': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args[0]) return reply("Enter a Suchbegriff to get Google Image!");
        let gis = require('g-i-s');
        gis(args.join(" "), async (error, result) => {
          if (error) {
            console.error(error);
            return reply("Error occurred while searching for images.");
          }

          if (!result || result.length === 0) {
            return reply("No images found for the given Suchbegriff.");
          }

          n = result;
          images = n[Math.floor(Math.random() * n.length)].url;
          let buttonMessage = {
            image: { url: images },
            caption: `「 _Google Image Search_ 」\n\n_Suchbegriff_ : ${text}\n_Media Url_ : ${images}`,
            footer: `${global.BotName}`,
            headerType: 4,
          };
          Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m });
        });
      }
        break;







      // case "gig":
      //   case "gimage":
      //   case "googleimage":
      //   case "image":
      //     if (!text) {
      //       return m.reply(`Please provide an image Suchbegriff !\n\nBeispiel: *${prefix}image cheems*`);
      //     }

      //     gis(text, async (error, result) => {
      //       n = result;
      //       let images = n[Math.floor(Math.random() * n.length)].url;
      //       let resText = `\n_🎀 Image Suchbegriff:_ *${text}*\n\n_🧩 Powered by_ *${botName}*\n`;
      //       /*
      //       let buttons = [
      //         {
      //             buttonId: `${prefix}gimage ${text}`,
      //             buttonText: { displayText: ">>" },
      //             type: 1,
      //         },
      //       ];
      //       */
      //       await Phoenix.sendMessage(
      //         m.from,
      //         {
      //           image: { url: images },
      //           caption: resText,
      //           //footer: `*${botName}*`,
      //           //buttons: buttons,
      //           //headerType: 4,
      //         },
      //         { quoted: m }
      //       );
      //     });
      //     break;



      //---------------------------------------- NASA  -----------------------------------------//

      case 'apod': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const randomEmoji = spaceemojis[Math.floor(Math.random() * spaceemojis.length)]; // Select a random emoji
        Phoenix.sendMessage(from, { react: { text: randomEmoji, key: m.key } });

        const apiKey = 'ugce43VIO63s8gQhcQ7Ts2DHQo1Srcchdh9mgI2S'; // Replace with your actual NASA API key // You can use it.
        const moment = require('moment'); // Import moment library here
        const timeZone = 'Europe/Berlin'; // Set desired timezone.

        const currentDate = moment().tz(timeZone).format('YYYY-MM-DD'); // Initialize currentDate here

        const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

        try {
          const response = await fetch(apiUrl);
          const data = await response.json();

          if (data.url) {
            Phoenix.sendMessage(from, {
              image: { url: data.url },
              caption: `*Astronomy Picture of the Day:*\n\n${data.title}\n${data.explanation}`,
            });
          } else {
            console.log("No APOD image data available.");

            return reply('No APOD image data available.');
          }
        } catch (error) {
          console.error('Error fetching APOD data:', error);

          return reply('An error occurred while fetching APOD data.');
        }
      }
        break;


      case 'google': case 'search': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args[0]) return m.reply(`Beispiel: ${prefix + command} <query>\nUses : ${prefix + command} anything...`)
        let google = require('google-it')
        google({ 'query': args.join(" ") }).then(res => {
          let teks = `「 *Google Suchmaschine* 」\n\n*Suchbegriff:* ${text}\n\n\n`
          for (let g of res) {
            teks += `*Titel* : ${g.title}\n\n`
            teks += `*Beschreibung* : ${g.snippet}\n\n`
            teks += `*Link* : ${g.link}\n\n\n        -----------------------------------------------------------------------------\n\n`
          }
          reply(teks)
        })
      }
        break;


      case "tts": case "texttospeech": case "say": case "speak": {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args[0]) return reply("Please give me a text so that i can speak it!")

        let texttosay = text
          ? text
          : m.quoted && m.quoted.text
            ? m.quoted.text
            : m.text;
        const SpeakEngine = require("google-tts-api");
        const texttospeechurl = SpeakEngine.getAudioUrl(texttosay, { lang: "de", slow: false, host: "https://translate.google.com", });
        Phoenix.sendMessage(m.chat, { audio: { url: texttospeechurl, }, mimetype: "audio/mpeg", fileName: `PhoenixenixSpeechEngine.mp3`, }, { quoted: m, });
      }
        break;


      case 'wiki':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (args.length < 1) return reply('What Are You Looking For?? ')
        const res2 = await wikiSearch(q).catch(e => {
          return reply('Error Result Not Found!')
        })
        const result2 = `*Title :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
        Phoenix.sendMessage(from, { image: { url: res2[0].thumb }, caption: result2 })
        break;

      case 'earthquake':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const tres = await Gempa()
        var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
        console.log(Map)
        const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
        Phoenix.sendMessage(from, { image: { url: Map }, caption: captt })
        break;


      case 'covidinfo':
      case 'covid':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const c = await covid()
        var { cases, death, healed } = c[0]
        Phoenix.sendMessage(from, { text: `\nCovid Sri lanka \n\nCase : ${cases}\n\nDead : ${death}\n\nHealed : ${healed}\n` }, m)
        break;


      // const { getBuffer } = require("./lib/myfunc");

      // case 'ss':
      //   async (Phoenix, m, { pushName, prefix, args, text }) => {
      //     if (!args[0]) return m.reply(`Please provide me a link to lookup!`);

      //     let lookupURL;
      //     if (!args[0].includes("http")) {
      //       lookupURL = `https://${args[0]}`;
      //     } else {
      //       lookupURL = args[0];
      //     }

      //     try {
      //       const resImage = await getBuffer(`https://api.popcat.xyz/screenshot?url=${lookupURL}`);
      //       await Phoenix.sendMessage(m.from, { image: resImage, caption: `_Here's how this URL looks like:_\n${args[0]}\n` }, { quoted: m });
      //     } catch (error) {
      //       m.reply(`An error occurred while processing your request!\n\nPlease recheck your link and try again!`);
      //     }
      //   };
      //   break;



      ///////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


      //
      case 'igdl':
      case 'instagram':
      case 'instagramreels':
      case 'igreels':

        {
          if (isBan) {
            return reply(mess.banned);
          }

          if (isBanChat) {
            return reply(mess.bangc);
          }

          // Send a reaction emoji

          // Check if a link is provided
          if (!text) {
            return m.reply(`Where is the link?\n\nBeispiel: ${prefix + command} https://www.instagram.com/reel/Ctjt0srIQFg/?igshid=MzRlODBiNWFlZA==`);
          }

          try {
            // Download the Instagram video
            let instadownload = await instadl(text);

            // Send the downloaded video as a reply to the command
            await Phoenix.sendMessage(m.chat, { video: { url: instadownload.url[0].url }, caption: mess.jobdone }, { quoted: m });
          } catch (error) {
            console.error('Error while processing Instagram video:', error);
            return reply('An error occurred while processing the Instagram video.');
          }
        }
        break;


      // ///
      // case 'igdl': case 'instagramreels': case 'igreels': {
      // if (isBan) return reply(mess.banned);	 			
      // if (isBanChat) return reply(mess.bangc);
      // if (!args[0]) return m.reply(`Beispiel :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
      // try {
      // hx.igdl(args[0]).then(async(resed) => {
      // ini_anu = []
      // anu_list = []
      // textbv = `「 _Instagram Downloader_ 」\n\nUsername : ${resed.user.username ? resed.user.name : "undefined"}\nFollowers : ${resed.user.followers}`
      // urut = 1
      // for (let i = 0; i < resed.medias.length; i++) {
      // ini_anu.push({
      // "type": resed.medias[i].fileType,
      // "url": resed.medias[i].url
      // })
      // }
      // ilod = 1
      // for (let i of ini_anu) {
      // anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
      // }
      // textbv += `\n\n_Select the media below to download_`
      // let buttons = anu_list
      // let buttonMessage = {
      // image:BotLogo,
      // jpegThumbnail:Thumb,
      // caption: textbv,
      // footer: `${global.BotName}`,
      // buttons: buttons,
      // headerType: 4
      // }
      // Phoenix.sendMessage(from, buttonMessage, {quoted:m})
      // })
      // } catch (err) {
      // reply("An Error Occured!")
      // }
      // }
      // break;


      case 'ig': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (args[0] === "mp4") {
          Phoenix.sendMessage(from, { video: { url: args[1] }, caption: 'Here it is...', mimetype: 'video/mp4' }, { quoted: m })
        } else if (args[0] === "jpg") {
          Phoenix.sendMessage(from, { image: { url: args[1] }, caption: 'Here it is...' }, { quoted: m })
        } else {
          reply("Error! ")
        }
      }
        break;


      case 'mp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return m.reply(`Pls provide link!`)
        try {
          Phoenix.sendMessage(from, {
            video: { url: args[0] }, caption: "Succes!", contextInfo: {
              externalAdreply: {
                title: `${global.BotName}`,
                body: `${global.OwnerName}`,
                thumbnail: BotLogo,
                mediaType: 2,
                mediaUrl: `${global.websitex}`,
                sourceUrl: `${global.websitex}`
              }
            }
          }, { quoted: m })
        } catch {
          reply("Link error!")
        }
      }
        break;


      case 'jpeg': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return m.reply(`Please provide link!`)
        try {
          Phoenix.sendMessage(from, { image: { url: args[0] }, caption: "Success!" }, { quoted: m })
        } catch {
          reply("Link error")
        }
      }
        break;


      case 'igtv': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Please provide link!`)
        const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*Invalid link!*')
        instagramdlv3(`${text}`).then(async (data) => {
          var buf = await getBuffer(data[0].thumbnail)
          Phoenix.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail: buf, caption: `${BotName}` }, { quoted: m })
        }).catch((err) => {
          reply(mess.error)
        })
      }
        break;


      ///  
      case 'twitter': case 'td': case 'twitterdl': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Please provide link!`)
        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return m.reply(`*Invalid link!*`)
        xfarrapi.Twitter(`${text}`).then(async (data) => {
          let txt = `「 _Twitter Downloader_ 」\n\n`
          txt += `*Title :* ${data.title}\n`
          txt += `*Quality :* ${data.medias[1].quality}\n`
          txt += `*Type :* ${data.medias[1].extension}\n`
          txt += `*Size :* ${data.medias[1].formattedSize}\n`
          txt += `*Duration :* ${data.medias.length}\n`
          txt += `*URL :* ${data.url}\n\n`
          txt += `*${BotName}*`
          buf = await getBuffer(data.thumbnail)
          Phoenix.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
          for (let i of data.medias) {
            Phoenix.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*${text}*` }, { quoted: m })
          }
        }).catch((err) => {
          reply(mess.error)
        })
      }
        break;


      case 'twittermp3': case 'twitteraudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Please provide link!`)
        if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return m.reply(`*Invalid link!*`)
        xfarrapi.Twitter(`${text}`).then(async (data) => {
          Phoenix.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4' }, { quoted: m })
        }).catch((err) => {
          reply(mess.reply)
        })
      }
        break;


      case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return m.reply(`Beispiel :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
        try {
          let lotwit = await aiovideodl(args[0])
          teks = `「 _Twitter Downloader_ 」
Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}
_Please choose the video quality_`
          let buttons = [
            { buttonId: `${prefix}twitter ${lotwit.medias[0].url}`, buttonText: { displayText: `Quality ${lotwit.medias[0].quality}` }, type: 1 },
            { buttonId: `${prefix}twitter ${lotwit.medias[2].url}`, buttonText: { displayText: `Quality ${lotwit.medias[2].quality}` }, type: 1 }
          ]
          let buttonMessage = {
            video: { url: lotwit.medias[1].url },
            caption: teks,
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,

          }
          Phoenix.sendMessage(from, buttonMessage, { quoted: m })
        } catch {
          reply("Link Error!")
        }
      }
        break;


      case 'twddlxx': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        let buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '✨Menu✨' }, type: 1 }
        ]
        let buttonMessage = {
          video: { url: args[0] },
          caption: "Here it is...",
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,

        }
        Phoenix.sendMessage(from, buttonMessage, { quoted: m })
      }
        break;


      ///
      case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Please provide the link!\n\nBeispiel: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
        if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return m.reply(`Invalid link!`)
        let bocil = require('@bochilteam/scraper')
        bocil.facebookdlv2(`${text}`).then(async (data) => {
          let txt = `「 _Facebook Downloader_ 」\n\n`
          txt += `*Title :* ${data.title}\n`
          txt += `*Quality :* ${data.result[0].quality}\n`
          txt += `*Description:* ${data.description}\n`
          txt += `*URL :* ${text}\n\n`
          buf = await getBuffer(data.thumbnail)
          Phoenix.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail: buf, caption: `${txt}` }, { quoted: m })
          for (let i of data.result) {
            Phoenix.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail: buf, caption: `*Quality :* ${i.quality}` }, { quoted: m })
          }
        }).catch((err) => {
          reply(mess.error)
        })
      }
        break;


      case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Please provide the link!\n\nBeispiel: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
        if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return m.reply(`Invalid link!`)
        let noh = require('@bochilteam/scraper')
        noh.savefrom(`${text}`).then(async (anu) => {
          Phoenix.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })
        }).catch((err) => {
          reply(mess.error)
        })
      }
        break;


      case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return m.reply(`Beispiel :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
        try {
          let resd = await aiovideodl(args[0])
          teks = `「 _Facebook Downloader_ 」
Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}
_Click the button below to download_`
          let buttons = [
            { buttonId: `${prefix}fbdl ${resd.medias[1].url}`, buttonText: { displayText: 'QualityHD' }, type: 1 }
          ]
          let buttonMessage = {
            video: { url: resd.medias[0].url },
            caption: teks,
            footer: `${pushname}`,
            buttons: buttons,
            headerType: 4,

          }
          Phoenix.sendMessage(from, buttonMessage, { quoted: m })
        } catch {
          reply("Link invalid!")
        }
      }
        break;


      case 'fbddlxx': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        let buttons = [
          { buttonId: `${prefix}menu`, buttonText: { displayText: '✨Menu✨' }, type: 1 }
        ]
        let buttonMessage = {
          video: { url: args[0] },
          caption: "Done!",
          footer: `${pushname}`,
          buttons: buttons,
          headerType: 4,

        }
        Phoenix.sendMessage(from, buttonMessage, { quoted: m })
      }
        break;

        
      ///
      case "tiktok":
      case "tiktokvideo":
        {  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!args[0])
            return m.reply(`Example : ${prefix + command} link`);
          
          let resxeon = await fetch(
            `https://api.maher-zubair.tech/download/tiktok2?url=${args[0]}`
          );
          let jsonxeon = await resxeon.json();
          if (jsonxeon.status == "200" && jsonxeon.result.url.nowm) {
            Phoenix.sendMessage(
              from,
              {
                caption: `➫ 𝐆𝐞𝐧𝐞𝐫𝐚𝐭𝐞𝐝 𝐁𝐲 𝐏𝐇𝐎𝐄𝐍𝐈𝐗-𝐁𝐎𝐓`,
                video: { url: jsonxeon.result.url.nowm },
                fileName: "video.mp4",
                mimetype: "video/mp4",
              },
              { quoted: m }
            );
          } else {
            return m.reply("Failed to get video. Try after a while...");
          }
        }
        break;
      case "tiktokaudio":
        {  if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          if (!q) return m.reply(`Example : ${prefix + command} link`);
          if (!q.includes("tiktok")) return m.reply(`Link Invalid!!`);
          
          let resxeon = await fetch(
            `https://api.maher-zubair.tech/download/tiktok2?url=${q}`
          );
          let jsonxeon = await resxeon.json();
          if (jsonxeon.status == "200" && jsonxeon.result.url.nowm) {
            Phoenix.sendMessage(
              from,
              {
                audio: { url: jsonxeon.result.url.audio },
                fileName: "tiktokaudio.mp3",
                mimetype: "video/mp4",
              },
              { quoted: m }
            );
          } else {
            return m.reply("Failed to get audio. Try after a while...");
          }
        }

        break;
    
////

case 'tt':
  if (isBan) return reply(mess.banned);
  if (isBanChat) return reply(mess.bangc);
  if (!q) return m.reply(`Beispiel: ${prefix + command} Link`);
  const url = q.match(/(https?:\/\/[^\s]+)/)?.[0]; 
  
  // Überprüfe, ob die URL vorhanden und gültig ist
  if (!url || !url.includes("tiktok")) return m.reply(`Ungültiger Link!`);
  
  try {
    const TikTokScraperInstance = new TTScraper();
    
    // Versuche, die Videoinformationen abzurufen
    const video = await TikTokScraperInstance.video(url, true); // true für Video ohne Wasserzeichen
    
    // Überprüfe, ob Video erfolgreich abgerufen wurde
    if (video && video.downloadURL) {
      // Sende das heruntergeladene Video an den Benutzer
      await Phoenix.sendMessage(from, {
        video: { url: video.downloadURL },
        caption: "➫ Downloaded by PHOENIX-BOT"
      }, { quoted: m });
    } else {
      // Behandle den Fall, wenn das Video nicht gefunden wurde
      m.reply("Video nicht gefunden oder konnte nicht heruntergeladen werden.");
    }
  } catch (error) {
    // Behandle den Fehler, falls einer auftritt
    console.error("Fehler:", error);
    m.reply("Ein Fehler ist beim Verarbeiten der Anfrage aufgetreten.");
  }
  break;





case 'tt2':
    if (isBan) return reply(mess.banned);
    if (isBanChat) return reply(mess.bangc);
    if (!q) return m.reply(`Beispiel: ${prefix + command} Link`);
    const path = require('path');
    // Extrahiere die TikTok-URL aus der Nachricht
    const tiktokUrl = q.trim();
    if (!tiktokUrl || !tiktokUrl.includes("tiktok")) return m.reply(`Ungültiger TikTok-Link!`);

    // Verwende das TikTokxD-Modul, um das Video herunterzuladen und Metadaten abzurufen
    Tiktok.Downloader(tiktokUrl, {
        version: "v2" // Version des Downloaders (v1, v2, v3)
    }).then(async (result) => {
        if (result && result.status === "success" && result.result && result.result.video) {
            // Metadaten extrahieren
            const videoData = result.result;
            const author = videoData.author;
            const statistics = videoData.statistics;

            // Video-URL aus der Response extrahieren
            const videoUrl = videoData.video;
           

            // Musik herunterladen und lokal speichern
            
            // Dateinamen für das gespeicherte Video erstellen
            const videoFileName = `tiktok_video_${Date.now()}.mp4`;
            const videoFilePath = path.join("./src/TikTok/", videoFileName);

            // Video herunterladen und lokal speichern
            await axios({ url: videoUrl, responseType: 'arraybuffer' }).then(response => fs.promises.writeFile(videoFilePath, response.data));
           
            // Sende das gespeicherte Video an den Benutzer
            if (fs.existsSync(videoFilePath)) {
                // Sende die heruntergeladenen Metadaten zusammen mit dem Video als Nachricht
            await Phoenix.sendMessage(from, {
              video:  { url: videoFilePath},
              caption:`*TiktokV2*\n\nAutor: ${author.nickname}\nLikes: ${statistics.likeCount}\nKommentare: ${statistics.commentCount}\nShares: ${statistics.shareCount}\n\n➫ *Downloaded by PHOENIX-BOT*`}, { quoted: m });

        } else {
            // Fehler beim Herunterladen des Videos oder keine Videoinformationen gefunden
            m.reply("Fehler beim Herunterladen des TikTok-Videos oder keine Videoinformationen gefunden.");
        }
                fs.unlinkSync(videoFilePath);
            } else {
                m.reply("Fehler beim Herunterladen des TikTok-Videos.");
            }
            const videoData = result.result;
            const musicUrl = videoData.music;
            const musicFileName = `tiktok_music_${Date.now()}.mp3`;
            const musicFilePath = path.join("./src/TikTok/", musicFileName);
            await axios({ url: musicUrl, responseType: 'arraybuffer' }).then(response => fs.promises.writeFile(musicFilePath, response.data));

            if (fs.existsSync(musicFilePath)) {

              await  Phoenix.sendMessage(
                from,
                {
                  audio:  { url: musicFilePath},
                  fileName: "tiktokaudio.mp3",
                  mimetype: "audio/mpeg",
                },
                { quoted: m }
              );

            } else {
              // Fehler beim Herunterladen des Videos oder keine Videoinformationen gefunden
              m.reply("Fehler beim Herunterladen des TikTok-Videos oder keine Videoinformationen gefunden.");
          }
                  fs.unlinkSync(musicFilePath);
              
            
    }).catch((error) => {
        console.error("Fehler beim Herunterladen des TikTok-Videos:", error);
        m.reply("Ein Fehler ist beim Herunterladen des TikTok-Videos aufgetreten.");
    });
    break;


////////
      




      ///
      case 'yts': case 'ytsearch': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args.join(" ")) return m.reply(`Beispiel : -yts fortnite`)
        let yts = require("youtube-yts")
        let search = await yts(args.join(" "))
        let teks = '```「 Youtube Suchmaschine 」```\n\n Suchbegriff: ' + text + '\n\n'
        let no = 1
        for (let i of search.all) {
          teks += `*ʀᴇꜱᴜʟᴛ ɴᴏ* : ${no++}\n\n*ᴛɪᴛʟᴇ* : ${i.title}\n\n*ᴠɪᴇᴡᴇ* : ${i.views}\n\n*ᴅᴜʀᴀᴛɪᴏɴ* : ${i.timestamp}\n\n*ᴜᴘʟᴏᴀᴅᴇᴅ* : ${i.ago}\n\n*ᴀᴜᴛʜᴏʀ* : ${i.author.name}\n\n*ᴜʀʟ* : ${i.url}\n\n\n---------------------------------------------\n\n\n`
        }
        Phoenix.sendMessage(m.chat, { image: { url: search.all[0].thumbnail }, caption: teks }, { quoted: m })
      }
        break;


      /*
        	
      case 'music': case 'p': case 'play': case 'song': case 'ytplay': {
          if (isBan) return reply(mess.banned);	 			
       if (isBanChat) return reply(mess.bangc);
       const YT=require('./lib/ytdlcore')
       const { isUrl, fetchBuffer } = require('./lib/Function')
      
       if(!text) return Phoenix.sendMessage(from,{text:"Pls enter song name to play!"},{quoted:m})
       let yts = require("@adiwajshing/keyed-db2")
       let search = await yts(text)
       let anu = search.videos[0]
       let buttons = [
       {buttonId: `${prefix}ytad ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
       {buttonId: `${prefix}ytvd ${text}`, buttonText: {displayText: '► Video'}, type: 1}
      
       ]
       let buttonMessage = {
       image: { url: anu.thumbnail },
       caption: `「  Phoenix Youtube Player 2.0  」
      
      ✨ *Title :* ${anu.title}
      
      ⏳ *Duration :* ${anu.timestamp}
      
      📈 *Viewers :* ${anu.views}
      
      📍 *Uploaded :* ${anu.ago}
      
      🎐 *Channel :* ${anu.author.name}
      
      🔗 *Url :* ${anu.url}`,
         
       footer: `${global.BotName}`,
       buttons: buttons,
       headerType: 4,
      
       }
       Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
       break;
      
      */


      /// Normal
      // case 'play': case 'song': case 'music': {
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   const YT=require('./lib/ytdl-core')
      //   let yts = require("youtube-yts")
      //   let search = await yts(text)
      //   let anu = search.videos[0]
      //   const ytmp3play = await YT.mp3(anu.url)

      // await Phoenix.sendMessage(from, {audio: fs.readFileSync(ytmp3play.path),fileName: anu.title + '.mp3',mimetype: 'audio/mpeg',}, {quoted:m})
      // }
      // break;


      case 'play':
      case 'song':
      case 'music': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const YT = require('./lib/ytdl-core');
        const yts = require('youtube-yts');
        const ffmpeg = require('fluent-ffmpeg');
        await loading()
        let search = await yts(text);
        let anu = search.videos[0];
        const ytmp3play = await YT.mp3(anu.url);

        // Fetch the thumbnail URL from the 'anu' object
        let thumbnailUrl = anu.thumbnail;

        await Phoenix.sendMessage(
          from,
          {
            image: { url: thumbnailUrl }, // Include the thumbnail image in the response
            caption: `\n*ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ* *${anu.title}*
┌─────────────           
│ *Dauer* ${anu.timestamp}
│ *ᴠɪᴇᴡs* ${anu.views}
│ *Kanal* ${anu.author.name}
│ *Video ᴜᴘʟᴏᴀᴅᴇᴅ* ${anu.ago}
│ *ᴜʀʟ* ${anu.url}\n
└─────────────`,

          },
          { quoted: m }
        );

        // Send the audio file with the proper 'type' property set to 'audio'
        await Phoenix.sendMessage(from, {
          audio: fs.readFileSync(ytmp3play.path),
          filename: anu.title + '.mp3',
          mimetype: 'audio/mpeg',
          quoted: m,
        });

        // Rest of the code remains unchanged.
        // ...
      }
        break;

      case 'spotify': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!q) return m.reply(`Please provide a query. Beispiel: ${prefix + command} 295`);

        let abuffer = `https://www.guruapi.tech/api/spotifydl?url=${encodeURIComponent(q)}`
        let bbuffer = await fetchJson(`https://www.guruapi.tech/api/spotifyinfo?text=${encodeURIComponent(q)}`)

        let bimg = bbuffer.spty.results.thumbnail
        let bname = bbuffer.spty.results.title
        let burl = bbuffer.spty.results.url;

        await Phoenix.sendMessage(from, {
          audio: { url: abuffer },
          ptt: true,
          filename: 'error.mp3',
          mimetype: 'audio/mpeg',
          contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
              title: "│𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃",
              body: `Now playing: ${bname}`,
              thumbnailUrl: bimg,
              sourceUrl: burl,
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        }, { quoted: m }
        );
      }
        break;


      case 'ytvd': case 'video': case 'ytvideo': case 'ytmp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        
        const YT = require('./lib/ytdl-core')
        let yts = require("youtube-yts")
        let search = await yts(text)
        let anu = search.videos[0]
        const ytmp4play = await YT.mp4(anu.url)
        Phoenix.sendMessage(from, { video: { url: ytmp4play.videoUrl }, mimetype: "video/mp4", caption: anu.title + '*𝐏𝐇𝐎𝐄𝐍𝐈𝐗-ＭＤ*\n*ʏᴛ-ᴠɪᴅᴇᴏ*', }, { quoted: m })
      }

        break;


      /*
      case 'ytmp3': case 'ytmusic':  case 'ytmp4': case 'ytvideo': case 'ytdl':{
        if (isBan) return reply(mess.banned);	 			
      if (isBanChat) return reply(mess.bangc);
      if (!args[0]) return reply(mess.nolink)
      
      const YT=require('./lib/ytdlcore')
      if(!text) return Phoenix.sendMessage(from,{text:"Please provide a valid youtube link!"},{quoted:m})
      let yts = require("@adiwajshing/keyed-db2")
      let search = await yts(text)
      let anu = search.videos[0]
      let buttons = [
      {buttonId: `${prefix}ytad2 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1},
      {buttonId: `${prefix}ytvd2 ${text}`, buttonText: {displayText: '► Video'}, type: 1}
      
      ]
      let buttonMessage = {
      image: { url: anu.thumbnail },
      caption: `「  Phoenix Youtube Downloader 2.0  」
      
      ✨ *Title :* ${anu.title}
      
      ⏳ *Duration :* ${anu.timestamp}
      👀 *Viewers :* ${anu.views}
      📍 *Uploaded :* ${anu.ago}
      🎐 *Channel :* ${anu.author.name}
      🔗 *Url :* ${anu.url}`,
      footer: `${global.BotName}`,
      buttons: buttons,
      headerType: 4,
      
      }
      Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
      break; 
      */


      case 'ytmp3': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const YT = require('./lib/ytdl-core')
        const ytmp3play2 = await YT.mp3(text)

        await Phoenix.sendMessage(from, { document: fs.readFileSync(ytmp3play2.path), fileName: 'PHOENIX-Md_YTmp3_Downloader.mp3', mimetype: 'audio/mpeg', }, { quoted: m })
      }
        break;


      case 'ytvd2': case 'ytmp4': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        const YT = require('./lib/ytdl-core')
        const ytmp4play2 = await YT.mp4(text)
        Phoenix.sendMessage(from, { video: { url: ytmp4play2.videoUrl }, mimetype: "video/mp4", caption: '━━━❬❬🦋 *PHOENIX-BOT* 🦋❭❭ ━━━*', }, { quoted: m })
      }
        break;


      case 'lyrics': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!text) return m.reply(`Comand usage: ${prefix}lyrics Thunder`)
        reply(mess.waiting)
        const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
        const result = await lyricsv2(text).catch(async _ => await lyrics(text))
        m.reply(`
*Title :* ${result.title}
*Author :* ${result.author}
*Url :* ${result.link}

*Lyrics :* ${result.lyrics}

`.trim())
      }
        break;



      //////////////////////////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      ///
      // case 'couplepp': case 'cpp': case 'ppcouple': {
      // if (isBan) return reply(mess.banned);
      // if (isBanChat) return reply(mess.bangc);
      //        reply(mess.waiting)
      //        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
      //        let random = anu[Math.floor(Math.random() * anu.length)]
      //        Phoenix.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m })
      //        Phoenix.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m })
      //    }
      // break;


      case 'couplepp':
      case 'cpp':
      case 'ppcouple': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        reply(mess.waiting);

        let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json');

        for (let i = 0; i < 1; i++) {  // the set of picures.
          let random = anu[Math.floor(Math.random() * anu.length)];

          // Sending the male picture
          await Phoenix.sendMessage(m.chat, { image: { url: random.male }, caption: `For him...` }, { quoted: m });

          // Sending the female picture
          await Phoenix.sendMessage(m.chat, { image: { url: random.female }, caption: `For her...` }, { quoted: m });
        }
      }
        break;


      //
      case 'coffee': case 'kopi': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        /*     let buttons = [
                     {buttonId: `${prefix}coffee`, buttonText: {displayText: '>>'}, type: 1}
                 ]  */
        let buttonMessage = {
          image: { url: 'https://coffee.alexflipnote.dev/random' },
          caption: `Here is your Coffee...`,
          /*   footer: `${BotName}`,
             buttons: buttons,
             headerType: 4  */
        }
        Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;


      //old code of Phoenix button 

      // case 'pinterest': case 'pin': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      // if (!args.join(" ")) return reply("Pls providea Suchbegriff!")
      // try {
      // hx.pinterest(args.join(" ")).then(async(res) => {
      // imgnyee = res[Math.floor(Math.random() * res.length)]
      // /* let buttons = [
      // {buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: '>>'}, type: 1}
      // ] */
      // let buttonMessage = {
      // image: { url: imgnyee },
      // caption:  `Title : ` + args.join(" ") + `\nMedia Url : `+imgnyee,
      // /* footer: `${global.BotName}`,
      // buttons: buttons,
      // headerType: 4, */

      // }
      // Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      // }).catch(_ => _)
      // } catch {
      // reply("Error")
      // }
      // }
      // break;



      ////// Hehe ////// 

      // case 'pinterest': case'pin' : {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!args.join(" ")) return m.reply(`${pushname} Pls provide a Suchbegriff!`)
      // let { pinterest } = require('./lib/scraper')
      // anutrest = await pinterest(text)
      // result = anutrest[Math.floor(Math.random() * anutrest.length)]
      // Phoenix.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
      // }
      // break;


      //
      case 'pinterest':
      case 'pin': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args.join(" ")) return m.reply(`${pushname} Please provide a Suchbegriff!`);
        reply(mess.waiting)
        let { pinterest } = require('./lib/scraper');
        let anutrest = await pinterest(text);
        let results = [];

        // Get multiple random images (let's say 5 images)
        const numImages = 5;
        for (let i = 0; i < numImages && i < anutrest.length; i++) {
          results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
        }

        // Send each image without any caption
        for (let i = 0; i < results.length; i++) {
          Phoenix.sendMessage(m.chat, { image: { url: results[i] } }, { quoted: m });
        }
      }
        break;


      // case 'pinterest':
      // case 'pin': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);

      //   if (!args.join(" ")) return m.reply(`${pushname} Please provide a Suchbegriff!`);
      //   reply(mess.waiting);
      //   let { pinterest } = require('./lib/scraper');
      //   let anutrest = await pinterest(text);
      //   let results = [];

      //   // Get multiple random images (let's say 5 images)
      //   const numImages = 5;
      //   for (let i = 0; i < numImages && i < anutrest.length; i++) {
      //     results.push(anutrest[Math.floor(Math.random() * anutrest.length)]);
      //   }

      //   // Send each image with a common caption
      //   const commonCaption = 'Check out this image from Pinterest By Phoenix';
      //   for (let i = 0; i < results.length; i++) {
      //     Phoenix.sendMessage(m.chat, { image: { url: results[i] }, caption: commonCaption }, { quoted: m });
      //   }
      // }
      // break;



      /////////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      //
      case 'swm': case 'take': case 'stickerwm': case 'steal': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!args.join(" ")) return m.reply(`Like use -take Phoenix|By: Exiqon&Baron`)
        const swn = args.join(" ")
        const pcknm = swn.split("|")[0];
        const atnm = swn.split("|")[1];
        if (m.quoted.isAnimated === true) {
          Phoenix.downloadAndSaveMediaMessage(quoted, "gifee")
          Phoenix.sendMessage(from, { sticker: fs.readFileSync("gifee.webp") }, { quoted: m })
        } else if (/image/.test(mime)) {
          let media = await quoted.download()
          let encmedia = await Phoenix.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else if (/video/.test(mime)) {
          if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds is allowed!')
          let media = await quoted.download()
          let encmedia = await Phoenix.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
          await fs.unlinkSync(encmedia)
        } else {
          m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 seconds is allowed!`)
        }
      }
        break;


      case 'smeme': case 'stickermeme': case 'stickmeme': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        let { TelegraPh } = require('./lib/uploader')
        if (!text) return m.reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (text.includes('|')) return m.reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        if (!/image/.test(mime)) return m.reply(`Send/reply Photo With Caption ${prefix + command} *text*`)
        reply(mess.wait)
        mee = await Phoenix.downloadAndSaveMediaMessage(quoted)
        mem = await TelegraPh(mee)
        meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
        memek = await Phoenix.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
        await fs.unlinkSync(memek)
      }
        break;




        case 'sticker':
            case 'sgif':
            case 's': {
                if (!quoted) return m.reply(`Reply to Video/Image With Caption ${prefix + command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await Phoenix.sendImageAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else if (isQuotedVideo|| /video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
                    let media = await quoted.download()
                    let encmedia = await Phoenix.sendVideoAsSticker(m.chat, media, m, {
                        packname: packname,
                        author: author
                    })
                    await fs.unlinkSync(encmedia)
                } else {
                    return m.reply(`Send Images/Videos With Captions ${prefix + command}\nVideo Duration 1-9 Seconds`)
                }
            }
            break



      ///////////////////////////////////////////////////////////////////////////////////////////////////
      //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      // case 'couple': case 'ship': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      // if (!m.isGroup) return m.reply(`${mess.grouponly}`)


      // let member = participants.map(u => u.id)
      // let orang = member[Math.floor(Math.random() * member.length)]
      // let jodoh = member[Math.floor(Math.random() * member.length)]
      // let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
      // Ohh i see 👀💖...`
      // let menst = [orang, jodoh]
      // let buttons = [
      // { buttonId: '❤️', buttonText: { displayText: 'Congratulations ❤️' }, type: 1 }
      // ]
      // await Phoenix.sendButtonText(m.chat, buttons, jawab, Phoenix.user.name, m, {mentions: menst})
      // }
      // break;


      // case 'soulmate': {
      //   if (isBan) return reply(mess.banned);
      //   if (isBanChat) return reply(mess.bangc);
      // if (!m.isGroup) return m.reply(`${mess.grouponly}`)
      // let member = participants.map(u => u.id)
      // let me = m.sender
      // let jodoh = member[Math.floor(Math.random() * member.length)]
      // let jawab = `👫 Soulmates
      // @${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
      // let ments = [me, jodoh]
      // let buttons = [
      // { buttonId: '❤️', buttonText: { displayText: 'Be my Soulmate ❤️' }, type: 1 }
      // ]
      // await Phoenix.sendButtonText(m.chat, buttons, jawab, Phoenix.user.name, m, {mentions: ments})
      // }
      // break;


      case 'soulmate': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return m.reply(`${mess.grouponly}`);

        let member = participants.map(u => u.id);
        let me = m.sender;
        let jodoh = member[Math.floor(Math.random() * member.length)];

        let message = `👫 Be me Soulmate...\n@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`;
        Phoenix.sendMessage(m.chat, { text: message, mentions: [me, jodoh] }, { quoted: m });
      }
        break;


      case 'handsomecheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return m.reply(`Tag Someone, Beispiel : ${prefix + command} @Exiqon&Baron`)
        const gan = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const teng = gan[Math.floor(Math.random() * gan.length)]
        Phoenix.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })
        break;


      case 'beautifulcheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!text) return m.reply(`Tag Someone, Beispiel : ${prefix + command} @Exiqon&Baron`)
        const can = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const tik = can[Math.floor(Math.random() * can.length)]
        Phoenix.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
        break;



      case 'awesomecheck':
      case 'greatcheck':
      case 'gaycheck':
      case 'cutecheck':
      case 'lesbiancheck':
      case 'hornycheck':
      case 'prettycheck':
      case 'lovelycheck':
      case 'uglycheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        if (!text) return m.reply(`Tag Someone, Beispiel : ${prefix + command} @Exiqon`)
        const sangeh = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
        Phoenix.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAntwort : *${sange}%*` }, { quoted: m })
        break;


      case 'charactercheck':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
 

        if (!text) return m.reply(`Tag Someone, Beispiel : ${prefix + command} @Exiqon`)
        const Phoenixtttt = ['Compassionate', 'Generous', 'Grumpy', 'Forgiving', 'Obedient', 'Good', 'Simp', 'Kind-Hearted', 'patient', 'UwU', 'top, anyway', 'Helpful']
        const taky = Phoenixtttt[Math.floor(Math.random() * Phoenixtttt.length)]
        Phoenix.sendMessage(from, { text: `Character Check : ${q}\nAntwort : *${taky}*` }, { quoted: m })
        break;


      //
      case 'dare':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const dare = [
          "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
          "spill people who make you pause",
          "call crush/pickle now and send ss",
          "drop only emote every time you type on gc/pc for 1 day.",
          "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
          "call ex saying miss",
          "sing the chorus of the last song you played",
          "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
          "Bang on the table (which is at home) until you get scolded for being noisy",
          "Tell random people - I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
          "mention ex's name",
          "make 1 rhyme for the members!",
          "send ur whatsapp chat list",
          "chat random people with gheto language then ss here",
          "tell your own version of embarrassing things",
          "tag the person you hate",
          "Pretending to be possessed, for Beispiel: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
          "change name to *I AM DONKEY* for 24 hours",
          "shout *ma chuda ma chuda ma chuda* in front of your house",
          "snap/post boyfriend photo/crush",
          "tell me your boyfriend type!",
          "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
          "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
          "prank chat ex and say *i love u, please come back.* without saying dare!",
          "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
          "change the name to *I am a child of randi* for 5 hours",
          "type in bengali 24 hours",
          "Use selmon bhoi photo for 3 days",
          "drop a song quote then tag a suitable member for that quote",
          "send voice note saying can i call u baby?",
          "ss recent call whatsapp",
          "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
          "pop to a group member, and say fuck you",
          "Act like a chicken in front of ur parents",
          "Pick up a random book and read one page out loud in vn n send it here",
          "Open your front door and howl like a wolf for 10 seconds",
          "Take an embarrassing selfie and paste it on your profile picture",
          "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
          "Walk on your elbows and knees for as long as you can",
          "sing national anthem in voice note",
          "break;dance for 30 seconds in the sitting room😂",
          "Tell the saddest story you know",
          "make a twerk dance video and put it on status for 5mins",
          "Eat a raw piece of garlic",
          "Show the last five people you texted and what the messages said",
          "put your full name on status for 5hrs",
          "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
          "call ur bestie, bitch",
          "put your photo without filter on ur status for 10mins",
          "say i love oli london in voice note🤣🤣",
          "Send a message to your ex and say I still like you",
          "call Crush/girlfriend/bestie now and screenshot here",
          "pop to one of the group member personal chat and Say you ugly bustard",
          "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
          "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
          "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
          "use any bollywood actor photo as ur pfp for 3 days",
          "put your crush photo on status with caption, this is my crush",
          "change name to I AM GAY for 5 hours",
          "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
          "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
          "slap ur butt hardly send the sound of slap through voice note😂",
          "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
          "shout bravooooooooo and send here through voice note",
          "snap your face then send it here",
          "Send your photo with a caption, i am lesbian",
          "shout using harsh words and send it here through vn",
          "shout you bastard in front of your mom/papa",
          "change the name to i am idiot for 24 hours",
          "slap urself firmly and send the sound of slap through voice note😂",
          "say i love the bot owner Kai through voice note",
          "send your gf/bf pic here",
          "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
          "break;up with your best friend for 5hrs without telling him/her that its a dare",
          "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
          "say i love depak kalal through voice note",
          "write i am feeling horny and put it on status, u can delete it only after 5hrs",
          "write i am lesbian and put it on status, u can delete only after 5hrs",
          "kiss your mommy or papa and say i love you😌",
          "put your father name on status for 5hrs",
          "send abusive words in any grup, excepting this grup, and send screenshot proof here"
        ]
        const Phoenixdareww = dare[Math.floor(Math.random() * dare.length)]
        buffer = await getBuffer(`https://images4.alphacoders.com/101/1016619.jpg`)
        Phoenix.sendMessage(from, { image: buffer, caption: '*You have chosen Dare...*\n\n' + Phoenixdareww }, { quoted: m })
        break;


      case 'truth':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);

        const truth = [
          "Have you ever liked anyone? How long?",
          "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
          "apa ketakutan terbesar kamu?",
          "Have you ever liked someone and felt that person likes you too?",
          "What is the name of your friend's ex-girlfriend that you used to secretly like?",
          "Have you ever stolen money from your father or mom? The reason?",
          "What makes you happy when you're sad?",
          "Ever had a one sided love? if so who? how does it feel bro?",
          "been someone's mistress?",
          "the most feared thing",
          "Who is the most influential person in your life?",
          "what proud thing did you get this year",
          "Who is the person who can make you awesome",
          "Who is the person who has ever made you very happy?",
          "Who is closest to your ideal type of partner here",
          "Who do you like to play with??",
          "Have you ever rejected people? the reason why?",
          "Mention an incident that made you hurt that you still remember",
          "What achievements have you got this year??",
          "What's your worst habit at school??",
          "What song do you sing most in the shower",
          "Have you ever had a near-death experience",
          "When was the last time you were really angry. Why?",
          "Who is the last person who called you",
          "Do you have any hidden talents, What are they",
          "What word do you hate the most?",
          "What is the last YouTube video you watched?",
          "What is the last thing you Googled",
          "Who in this group would you want to swap lives with for a week",
          "What is the scariest thing thats ever happened to you",
          "Have you ever farted and blamed it on someone else",
          "When is the last time you made someone else cry",
          "Have you ever ghosted a friend",
          "Have you ever seen a dead body",
          "Which of your family members annoys you the most and why",
          "If you had to delete one app from your phone, which one would it be",
          "What app do you waste the most time on",
          "Have you ever faked sick to get home from school",
          "What is the most embarrassing item in your room",
          "What five items would you bring if you got stuck on a desert island",
          "Have you ever laughed so hard you peed your pants",
          "Do you smell your own farts",
          "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
          "What is the biggest mistake you have ever made",
          "Have you ever cheated in an exam",
          "What is the worst thing you have ever done",
          "When was the last time you cried",
          "whom do you love the most among ur parents",
          "do u sometimes put ur finger in ur nosetrilðŸ¤£",
          "who was ur crush during the school days",
          "tell honestly, do u like any boy in this grup",
          "have you ever liked anyone? how long?",
          "do you have gf/bf','what is your biggest fear?",
          "have you ever liked someone and felt that person likes you too?",
          "What is the name of your ex boyfriend of your friend that you once liked quietly?",
          "ever did you steal your mothers money or your fathers money",
          "what makes you happy when you are sad",
          "do you like someone who is in this grup? if you then who?",
          "have you ever been cheated on by people?",
          "who is the most important person in your life",
          "what proud things did you get this year",
          "who is the person who can make you happy when u r sad",
          "who is the person who ever made you feel uncomfortable",
          "have you ever lied to your parents",
          "do you still like ur ex",
          "who do you like to play together with?",
          "have you ever stolen big thing in ur life? the reason why?",
          "Mention the incident that makes you hurt that you still remember",
          "what achievements have you got this year?",
          "what was your worst habit at school?",
          "do you love the bot creator Kai?",
          "have you ever thought of taking revenge from ur teacher?",
          "do you like current prime minister of ur country",
          "you non veg or veg",
          "if you could be invisible, what is the first thing you would do",
          "what is a secret you kept from your parents",
          "Who is your secret crush",
          "whois the last person you creeped on social media",
          "If a genie granted you three wishes, what would you ask for",
          "What is your biggest regret",
          "What animal do you think you most look like",
          "How many selfies do you take a day",
          "What was your favorite childhood show",
          "if you could be a fictional character for a day, who would you choose",
          "whom do you text the most",
          "What is the biggest lie you ever told your parents",
          "Who is your celebrity crush",
          "Whats the strangest dream you have ever had",
          "do you play pubg, if you then send ur id number"
        ]
        const Phoenixtruthww = truth[Math.floor(Math.random() * truth.length)]
        buffer = await getBuffer(`https://images2.alphacoders.com/650/650812.jpg`)
        Phoenix.sendMessage(from, { image: buffer, caption: '*You have chosen Truth...*\n' + Phoenixenixtruthww }, { quoted: m })
        break;




      /* ████ ✪ ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ [ NSFW ] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███ ✪ ███ */



      

      case 'mediafire': case 'mediafiredl': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!text) return reply(mess.linkm)
        if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return m.reply(`The link you provided is invalid`)
        const baby1 = await mediafireDl(text)
        if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* ' + util.format(baby1))
        const result4 = `━━━❬❬🦋 *Mediafire Downloader* 🦋❭❭━━━   
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
        m.reply(`${result4}`)
        Phoenix.sendMessage(m.chat, { document: { url: baby1[0].link }, fileName: baby1[0].nama, mimetype: baby1[0].mime }, { quoted: m }).catch((err) => reply(mess.error))
      }
        break;


      // case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
      // case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
      // case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
      // // if (isBan) return reply(mess.banned);	 			
      // // if (isBanChat) return reply(mess.bangc);
      // // if (!m.isGroup) return reply(mess.grouponly);
      // // if (!AntiNsfw) return reply(mess.nonsfw)
      // // try{
      // // reply(mess.waiting)



      // // buffer = `https://fantox-apis.vercel.app/${command}`
      // // Phoenix.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})


      // // // NoHorny = await fetchJson(`https://fantox-apis.vercel.app/${command}`)
      // // // YesHorny = await getBuffer(NoHorny.result)
      // // // Phoenix.sendMessage(from, {image:YesHorny},{quoted:m})
      // // // } catch (e) {error("Error")}	
      // // break;

      // case 'spank':
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      // spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
      // let spbuff = await getBuffer(spankd.data.url)
      // let spgif = await GIFBufferToVideoBuffer(spbuff)   
      //       await Phoenix.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
      //                   return reply('Error!')
      //                                   })
      // break;


      // case 'blowjobgif': case 'bj' :
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      // bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
      // let bjf = await getBuffer(bjd.data.url)
      // let bjif = await GIFBufferToVideoBuffer(bjf)   
      //       await Phoenix.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
      //                   return reply('error..')
      //                                   })
      // break;


      // case 'hentaivid': case 'hentaivideo': {
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      // anu = await hentai()
      // result912 = anu[Math.floor(Math.random(), anu.length)]
      // Phoenix.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `Title : ${result912.title}\nCategory : ${result912.category}\n$Mimetype : ${result912.type}\nViews : ${result912.views_count}\nShares : ${result912.share_count}\nSource : ${result912.link}\nMedia Url : ${result912.video_1}` }, { quoted: m })
      // }
      // break;


      // case 'trap' :
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      // waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
      // /* let trapbot = [
      //   {buttonId: `${prefix}trap`, buttonText: {displayText: `>>`}, type: 1},
      //   ] */
      // let button2Messages = {
      //  image: {url:waifudd.data.url},
      //  caption:  `Here it is...`,
      // /* buttons: trapbot,
      // headerType: 1 */
      // }     
      //           await Phoenix.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
      //                   return('Error!')
      //               })
      // break;


      // case 'hentai-neko' :
      // case 'hneko' :
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      //   waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
      // /* let hnekobot = [
      //   {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
      //   ] */
      // let button3Messages = {
      //  image: {url:waifudd.data.url},
      //  caption:  `Nyaah...`,
      // /* buttons: hnekobot,
      // headerType: 1 */
      // }      
      //           await Phoenix.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
      //                   return('Error!')
      //               })
      // break;


      // case 'hentai-waifu' :
      // case 'hwaifu' :
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)
      //   waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
      // /* let nwaifubot = [
      //   {buttonId: `${prefix + command}`, buttonText: {displayText: `>>`}, type: 1},
      //   ] */
      // let button4Messages = {
      //  image: {url:waifudd.data.url},
      //  caption:  `Here it is...`,
      // /* buttons: nwaifubot,
      // headerType: 1 */
      // }      
      //           await Phoenix.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
      //                   return('Error!')
      //               })
      // break;


      // case 'gasm':
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //   if (!AntiNsfw) return reply(mess.nonsfw)
      // reply(mess.waiting)						
      // waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
      //                      /*    var wbuttsss = [
      //       {buttonId: `${prefix}gasm`, buttonText: {displayText: `>>`}, type: 1},
      //       ] */
      //     let buttonsssMessages = {
      //      image: {url:waifudd.data.url},
      //      caption:  `Here it is...`,
      //    /* footer: `${global.BotName}`,
      //     buttons: wbuttsss,
      //     headerType: 4 */
      //     }     
      //           await Phoenix.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
      //                   return('Error!')
      //               })
      // break;  



      // /* ████ ✪ ███▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ [ Anime Mode ] ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓███ ✪ ███ */


      ///////////////////////////////////////////////////////////////////////////////////////////////////
      ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      //
      case 'smug2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
        /*       var wbuttsss = [
{buttonId: `${prefix}smug2`, buttonText: {displayText: `>>`}, type: 1},
] */
        let button1ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          /*  footer: `${global.BotName}`,
            buttons: wbuttsss,
            headerType: 4 */
        }
        await Phoenix.sendMessage(m.chat, button1ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'foxgirl':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);

        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)

        /* var wbuttsss = [
   {buttonId: `${prefix}foxgirl`, buttonText: {displayText: `>>`}, type: 1},
   ] */
        let button12ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Awoooo...`,
          /* footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4 */
        }
        await Phoenix.sendMessage(m.chat, button12ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'animenom':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
        /*  let xxhnekobot = [
          {buttonId: `${prefix}animenom`, buttonText: {displayText: `>>`}, type: 1},
          ]  */
        let xx1button3Messages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          /*  buttons: xxhnekobot,
          headerType: 1 */
        }
        await Phoenix.sendMessage(m.chat, xx1button3Messages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'waifu3':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
        /*        var wbuttsss = [
{buttonId: `${prefix}waifu3`, buttonText: {displayText: `>>`}, type: 1},
] */
        let button112ssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          /*   footer: `${global.BotName}`,
             buttons: wbuttsss,
             headerType: 4 */
        }
        await Phoenix.sendMessage(m.chat, button112ssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      //
      

      case 'neko2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)

        waifud = await axios.get('https://waifu.pics/api/sfw/neko')
        var wbutsss = [
          { buttonId: `${prefix}neko2`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let buttonssMessage = {
          image: { url: waifud.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbutsss,
          headerType: 4
        }
        await Phoenix.sendMessage(m.chat, buttonssMessage, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'feed':
      case 'meow':
      case 'tickle':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
        var wbuttsss = [
          { buttonId: `${prefix + command}`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let buttonssMessages = {
          image: { url: waifudd.data.url },
          caption: `Here it is...`,
          footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 4
        }
        await Phoenix.sendMessage(m.chat, buttonssMessages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;



      /////////////////////////////////////////////////////////////////////////////////////////////////////////
      /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



      //
      case 'cry': case 'handhold': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);

        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed with themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'nom': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} is eating with themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} is eating with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'hug': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} hugged themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} hugged @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'dance': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} is dancing alone!!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} is dancing with @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      //
      case 'kill': case 'pat': case 'lick': case 'kiss': case 'bite':
      case 'bully': case 'bonk': case 'poke': case 'slap':
      case 'happy':
      case 'cuddle': case 'kick': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed themselves!!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed  @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      case 'yeet':
      case 'wink': case 'smile':
      case 'wave': case 'blush': case 'smug': case 'glomp':
      case 'cringe': case 'highfive': {

        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        var pat = await fetchJson(`https://api.waifu.pics/sfw/${command}`)
        try {
          let messsender = m.sender
          let musers = ``
          try {
            users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'

            ment = [messsender, users]
          } catch {
            users == "none"
            ment = [messsender, m.sender]
          }
          if (users == "none") {
            musers = `@${m.sender.split("@")[0]} ${command}ed at themself!`
            console.log(musers)

          } else {
            const rcpp = `@${users.split("@"[0])}`
            musers = `@${m.sender.split("@")[0]} ${command}ed at @${users.split("@")[0]} `

            console.log(musers)
          }
          const response = await axios.get(pat.url, { responseType: 'arraybuffer' })
          const buffer = Buffer.from(response.data, "utf-8")
          var fetchedgif = await GIFBufferToVideoBuffer(buffer)
          Phoenix.sendMessage(m.chat, { video: fetchedgif, gifPlayback: true, mentions: ment, caption: musers }, { quoted: m })
        } catch (error) {
          console.log(error);
        }
      }
        break;


      /*
      
      case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet':
      case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile':
      case 'wave': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance':
      case 'cringe': case 'cuddle': case 'highfive': case 'handhold': case 'kick':
      
        if (isBan) return reply(mess.banned);	 			
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);						
      resggh = await axios.get(`https://nekos.life/api/v2/img/${command}`)         
      let resffj = await getBuffer(resggh.data.url)
      let resmain = await GIFBufferToVideoBuffer(resffj)   
          await Phoenix.sendMessage(m.chat,{video: resmain, gifPlayback:true},{ quoted:m }).catch(err => {
                      return reply('error..')
                                      })
      break;
      
      */


      case 'megumin':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        ud = await axios.get('https://waifu.pics/api/sfw/megumin')
        /*var wbutsss = [
          {buttonId: `${prefix}megumin`, buttonText: {displayText: `>>`}, type: 1},
               ] */
        let buttonzMessage = {
          image: { url: ud.data.url },
          caption: `Here it is...`,
          /*   footer: `${global.BotName}`,
                 buttons: wbutsss,
            headerType: 4 */
        }
        await Phoenix.sendMessage(m.chat, buttonzMessage, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'awoo':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);

        reply(mess.waiting)
        waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
        /* var wbuttsss = [
          {buttonId: `${prefix}awoo`, buttonText: {displayText: `>>`}, type: 1},
          ] */
        let button1Messages = {
          image: { url: waifudd.data.url },
          caption: `පොඩ්ඩක් හිටපන්කො🤤....`,
          /*  footer: `${global.BotName}`,
          buttons: wbuttsss,
          headerType: 2 */

        }
        await Phoenix.sendMessage(m.chat, button1Messages, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      case 'animewall2': case 'animewallpaper2':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        const { AnimeWallpaper } = require("anime-wallpaper")
        if (!q) return reply('Please enter a seach term!')
        const wall = new AnimeWallpaper();
        const pages = [1, 2, 3, 4];
        const random = pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
          .getAnimeWall4({ title: q, type: "sfw", page: pages })
          .catch(() => null);
        const i = Math.floor(Math.random() * wallpaper.length);
        var walb = [
          { buttonId: `${prefix}animewall2 ${q}`, buttonText: { displayText: `>>` }, type: 1 },
        ]
        let wal = {
          image: { url: wallpaper[i].image },
          caption: `*Suchbegriff :* ${q}`,
          footer: `${global.BotName}`,
          buttons: walb,
          headerType: 4
        }
        await Phoenix.sendMessage(m.chat, wal, { quoted: m }).catch(err => {
          return ('Error!')
        })
        break;


      // case 'anime':
      //   if (isBan) return reply(mess.banned);	 			
      //   if (isBanChat) return reply(mess.bangc);
      //   if (!m.isGroup) return reply(mess.grouponly);
      //     if(!q) return m.reply(`Please proide a Suchbegriff!\n\n*Beispiel:* ${prefix}anime naruto`)
      // reply(mess.waiting)							
      // const { Anime } =require("@shineiichijo/marika")
      //   const client = new Anime();
      //    let anime = await client.searchAnime(q)
      //   let result = anime.data[0];
      //   console.log(result)
      //  let details = `*Title:* ${result.title}\n`;
      //   details += `*Format:* ${result.type}\n`;
      //   details += `*Status:* ${result.status.toUpperCase().replace(/\_/g, " ")}\n`;
      //   details += `*Total episodes:* ${result.episodes}\n`;
      //   details += `*Duration:* ${result.duration}\n`;
      //   details += `*Genres:*\n`;
      //   for (let i = 0; i < result.genres.length; i++) {
      //     details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
      //   }
      //   details += `*Based on:* ${result.source.toUpperCase()}\n`;
      //   details += `*Studios:*\n`;
      //   for (let i = 0; i < result.studios.length; i++) {
      //     details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
      //   }
      //   details += `*Producers:*\n`;
      //   for (let i = 0; i < result.producers.length; i++) {
      //     details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
      //   }
      //   details += `*Premiered on:* ${result.aired.from}\n`;
      //   details += `*Ended on:* ${result.aired.to}\n`;
      //   details += `*Popularity:* ${result.popularity}\n`;
      //   details += `*Favorites:* ${result.favorites}\n`;
      //   details += `*Rating:* ${result.rating}\n`;
      //   details += `*Rank:* ${result.rank}\n\n`;
      //   if (result.trailer.url !== null)
      //     details += `*Trailer:* ${result.trailer.url}\n\n`;
      //   details += `*URL:* ${result.url}\n\n`;
      //   if (result.background !== null)
      //     details += `*Background:* ${result.background}\n\n`;
      //   details += `*Description:* ${result.synopsis.replace(
      //     /\[Written by MAL Rewrite]/g,
      //     ""
      //   )}`
      // Phoenix.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
      // break;


      //
      case 'anime': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        if (!text) return m.reply(`Please provide a Suchbegriff!\n\n*Beispiel:* ${prefix}anime naruto`)

        const malScraper = require('mal-scraper')
        reply(mess.waiting);
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return m.reply(`${p}Could not find your scarch`)
        let animetxt = `
  🎀 *Title: ${anime.title}*
  🎋 *Type: ${anime.type}*
  🎐 *Premiered on: ${anime.premiered}*
  💠 *Total Episodes: ${anime.episodes}*
  📈 *Status: ${anime.status}*
  💮 *Genres: ${anime.genres}
  📍 *Studio: ${anime.studios}*
  🌟 *Score: ${anime.score}*
  💎 *Rating: ${anime.rating}*
  🏅 *Rank: ${anime.ranked}*
  💫 *Popularity: ${anime.popularity}*
  ♦️ *Trailer: ${anime.trailer}*
  🌐 *URL: ${anime.url}*
  ❄ *Description:* ${anime.synopsis}*`
        await Phoenix.sendMessage(m.chat, { image: { url: anime.picture }, caption: animetxt }, { quoted: m })
      }
        break;


      case 'manga':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);

        reply(mess.waiting)
        const { Manga } = require("@shineiichijo/marika")
        const manga = new Manga();
        if (!q) return m.reply(`Please proide a Suchbegriff!\n\n_Beispiel:_ ${prefix}manga naruto`)
        let srh = await manga.searchManga(q)
        let mang = `*Title:* ${srh.data[0].title}\n`;
        mang += `*Status:* ${srh.data[0].status}\n`;
        mang += `*Total Volumes:* ${srh.data[0].volumes}\n`;
        mang += `*Total Chapters:* ${srh.data[0].chapters}\n`;
        mang += `*Genres:*\n`;
        for (let i = 0; i < srh.data[0].genres.length; i++) {
          mang += `\t\t\t\t\t\t\t\t${srh.data[0].genres[i].name}\n`;
        }
        mang += `*Published on:* ${srh.data[0].published.from}\n`;
        mang += `*Score:* ${srh.data[0].scored}\n`;
        mang += `*Popularity:* ${srh.data[0].popularity}\n`;
        mang += `*Favorites:* ${srh.data[0].favorites}\n`;
        mang += `*Authors:*\n`;
        for (let i = 0; i < srh.data[0].authors.length; i++) {
          mang += `\t\t\t\t\t\t\t\t\t${srh.data[0].authors[i].name} (${srh.data[0].authors[0].type})\n`;
        }
        mang += `\n*URL:* ${srh.data[0].url}\n\n`;
        if (srh.data[0].background !== null)
          mang += `*Background:* ${srh.data[0].background}`;
        mang += `*Description:* ${srh.data[0].synopsis.replace(
          /\[Written by MAL Rewrite]/g,
          ""
        )}`;
        Phoenix.sendMessage(m.chat, { image: { url: srh.data[0].images.jpg.large_image_url }, caption: mang }, { quoted: m })
        break;


      case 'waifu':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
        /*var wbuttsssr = [
          {buttonId: `${prefix}waifu`, buttonText: {displayText: `>>`}, type: 1},
          ] */
        let button4Messagess = {
          image: { url: waifuddd.data.url },
          caption: 'More than one waifu will definitely ruin your Laifu!',
          /*buttons: wbuttsssr,
          headerType: 4 */
        }

        await Phoenix.sendMessage(m.chat, button4Messagess, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;


      case 'neko':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
        /*var wbuttsssr = [
          {buttonId: `${prefix}neko`, buttonText: {displayText: `>>`}, type: 1},
          ] */
        let buttonMessagessf = {
          image: { url: waifuddd.data.url },
          caption: 'Nyaa...',
          /*    buttons: wbuttsssr,
              headerType: 2  */
        }

        await Phoenix.sendMessage(m.chat, buttonMessagessf, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;


      case 'loli':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!m.isGroup) return reply(mess.grouponly);
        reply(mess.waiting)
        waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
        /* var wbuttsssr = [
          {buttonId: `${prefix}loli`, buttonText: {displayText: `>>`}, type: 1},
          ] */
        let buttonMessagessfgr = {
          image: { url: waifuddd.data.url },
          caption: 'Dont be a lolicon !',
          /*  buttons: wbuttsssr,
            headerType: 2 */
        }

        await Phoenix.sendMessage(m.chat, buttonMessagessfgr, { quoted: m }).catch(err => {
          return ('error..')
        })
        break;


      ////////////////////////////////////////////////////////////////////////////
      ////////////////////////////////////////////////////////////////////////////



      case 'remove': {

        if (!m.isGroup) return reply(mess.grouponly);
        if (!isBotAdmins) return reply(mess.botadmin);
        if (!isAdmins && !isCreator) return reply(mess.useradmin)
         let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        await Phoenix.groupParticipantsUpdate(m.chat, [users], 'remove')
       }
         break;






      case 'bc': case 'broadcast': case 'bcall': {
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!isCreator) return reply(mess.botowner)
        if (!args.join(" ")) return m.reply(`Please enter some text to broadcast! \n\nBeispiel : ${prefix + command} ${global.OwnerName}`)
        let anu = await store.chats.all().map(v => v.id)
        m.reply(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
        for (let yoi of anu) {
          await sleep(1500)
          let btn = [{
            quickreplyButton: {
              displayText: '💡 Menu 💡',
              id: '-menu'
            }
          }, {
            quickreplyButton: {
              displayText: 'Bot Owner',
              id: '-owner'
            }
          }]
          let txt = `「 *${global.OwnerName}'s Broadcast* 」\n\n${text}`
          Phoenix.send5ButImg(yoi, txt, `${global.BotName}`, BotLogo, btn, Thumb)
        }
        reply('Broadcast Sent !')
      }
        break;




    case 'help': case 'h': case 'menu': case 'list':{
      if (isBan) return reply(mess.banned);	 			
      if (isBanChat) return reply(mess.bangc);     
  const helpmenu = ` 
┌──『•• 🎯 *ᴀʟʟᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
  │⊳  *Uꜱᴇʀ :  ${pushname}* ✅
  │⊳  *Nᴏᴡ-ᴛɪᴍᴇ : ${nowtime}*
  │⊳  *Uhrzeit : ${kaitime}* ⌚
  │⊳  *Datum : ${kaidate}* 📆
  │⊳  *Oᴡɴᴇʀ : ${global.OwnerName}* 👑
  │⊳  *Pʀᴇꜰɪx : 『  ${prefix} 』*  ⚙️
  │⊳  *Laufzeit : ${runtime(process.uptime())}* 💻
  │⊳  *Dᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ Team-Phoenix* 
┬│   
│╰───────────···▸▸
└──────────────···▸▸▸
┌──『•• 🎯 *ᴀʟʟᴍᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
  │⊳ *${prefix}1.1*  *ʙᴏᴛᴍᴇɴᴜ*
  │⊳ *${prefix}1.2*  *ᴏᴡɴᴇʀᴍᴇɴᴜ*
  │⊳ *${prefix}1.3*  *ɢʀᴏᴜᴘᴍᴇɴᴜ*
  │⊳ *${prefix}1.4*  *ᴀɴᴛɪʟɪɴᴋ*
  │⊳ *${prefix}1.5*  *Eᴄᴏɴᴏᴍʏ*
  │⊳ *${prefix}1.6*  *ᴄᴏɴᴠᴇʀᴛ*
  │⊳ *${prefix}1.7*  *ᴅᴏᴡɴʟᴏᴀᴅᴇʀ*
  │⊳ *${prefix}1.8*  *ɢᴀᴍᴇ-ᴍᴇɴᴜ*
  │⊳ *${prefix}1.9*  *Fun-ᴍᴇɴᴜ*
  │⊳ *${prefix}2.0*  *ᴀʟʟᴍᴇɴᴜ 2.0*
┬│
│╰───────────···▸▸
└──────────────···▸▸▸`
        let buttonMessage = {
          video: fs.readFileSync('./system/Phoenix_3.mp4'), gifPlayback: true,
          caption: helpmenu,

          headerType: 4

        }
        Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
      }
        break;

        case '2.0': case 'allmenu': {
          if (isBan) return reply(mess.banned);	 			
          if (isBanChat) return reply(mess.bangc);      
      const helpmenu = ` 
    ┌──『•• 🎯 *ᴀʟʟᴍᴇɴᴜ 2.0* 🎯 ••』──◈
    │╭────────────···▸▸
    ┴│
      │⊳  *Uꜱᴇʀ :  ${pushname}* ✅
      │⊳  *Nᴏᴡ-ᴛɪᴍᴇ : ${nowtime}*  
      │⊳  *Uhrzeit : ${kaitime}*⌚
      │⊳  *Datum : ${kaidate}*📆
      │⊳  *Oᴡɴᴇʀ : ${global.OwnerName}*👑
      │⊳  *Pʀᴇꜰɪx : 『  ${prefix} 』* ⚙️
      │⊳  *Laufzeit : ${runtime(process.uptime())}* 💻
      │⊳  *Dᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ Team-Phoenix* 
    ┬│   
    │╰───────────···▸▸
    └──────────────···▸▸▸
    ┌──『•• 🎯 *ᴀʟʟᴍᴇɴᴜ 2.0 * 🎯 ••』──◈
    │╭────────────···▸▸
    ┴│
    ⬡│▸ ${prefix}ʀᴇᴘᴏ 
    ⬡│▸ ${prefix}ꜱᴄʀɪᴘᴛ
    ⬡│▸ ${prefix}ᴀʟɪᴠᴇ
    ⬡│▸ ${prefix}ꜱᴘᴇᴀᴋ
    ⬡│▸ ${prefix}ꜱᴜᴘᴘᴏʀᴛ
    ⬡│▸ ${prefix}ꜱᴘᴇᴇᴅᴄʜᴇᴄᴋ
    ⬡│▸ ${prefix}ꜱᴛᴀʟᴋ
    ⬡│▸ ${prefix}ꜱᴇᴛᴘʀᴇꜰɪx
    ⬡│▸ ${prefix}ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ  
    ⬡│▸ ${prefix}ᴀᴜᴛᴏ-ꜱᴛᴀᴛᴜꜱ
    ⬡│▸ ${prefix}ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ 
    ⬡│▸ ${prefix}ᴘᴜʙʟɪᴄ
    ⬡│▸ ${prefix}ꜱᴇʟꜰ
    ⬡│▸ ${prefix}ʀᴇꜱᴛᴀʀᴛ
    ⬡│▸ ${prefix}ꜱᴇᴛʙᴏᴛᴘᴘ
    ⬡│▸ ${prefix}ꜱʟᴇᴇᴘ
    ⬡│▸ ${prefix}ᴊᴏɪɴ
    ⬡│▸ ${prefix}ᴘᴏꜱᴛ
    ⬡│▸ ${prefix}ʟɪꜱᴛɢᴄ
    ⬡│▸ ${prefix}ʟɪꜱᴛᴘᴄ
    ⬡│▸ ${prefix}ʟɪꜱᴛᴏɴʟɪɴᴇ 
    ⬡│▸ ${prefix}ʙʀᴏᴀᴅᴄᴀꜱᴛ
    ⬡│▸ ${prefix}ʙʏᴇ
    ⬡│▸ ${prefix}ʙᴀɴɢʀᴏᴜᴘ 
    ⬡│▸ ${prefix}ʙʟᴏᴄᴋ
    ⬡│▸ ${prefix}ᴜɴʙʟᴏᴄᴋ
    ⬡│▸ ${prefix}ʙᴀɴ ᴀᴅᴅ
    ⬡│▸ ${prefix}ʙᴀɴ ᴅᴇʟ
    ⬡│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇ  
    ⬡│▸ ${prefix}ᴅᴇᴍᴏᴛᴇ  
    ⬡│▸ ${prefix}ɢʀᴏᴜᴘ-ᴇᴠᴇɴᴛ  
    ⬡│▸ ${prefix}ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
    ⬡│▸ ${prefix}ɢʀᴏᴜᴘʟɪɴᴋ
    ⬡│▸ ${prefix}ʀᴇᴍᴏᴠᴇ 
    ⬡│▸ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
    ⬡│▸ ${prefix}ꜱᴇᴛɢᴄᴘᴘ
    ⬡│▸ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
    ⬡│▸ ${prefix}ʀᴇᴠᴏᴋᴇ
    ⬡│▸ ${prefix}ᴛᴀɢᴀᴅᴍɪɴꜱ
    ⬡│▸ ${prefix}ᴛᴀɢᴀʟʟ
    ⬡│▸ ${prefix}ʜɪᴅᴇᴛᴀɢ
    ⬡│▸ ${prefix}ɴꜱꜰᴡ 
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ 
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴛ
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋꜰʙ
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋɪɢ
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ
    ⬡│▸ ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ     
    ⬡│▸ ${prefix}ᴀɴᴛɪʟɪɴᴋᴀʟʟ  
    ⬡│▸ ${prefix}ᴅᴀɪʟʏ 
    ⬡│▸ ${prefix}ᴡᴀʟʟᴇᴛ 
    ⬡│▸ ${prefix}ʙᴀɴᴋ
    ⬡│▸ ${prefix}ʙᴀɴᴋᴜᴘɢʀᴀᴅᴇ 
    ⬡│▸ ${prefix}ᴅᴇᴘᴏꜱɪᴛ
    ⬡│▸ ${prefix}ᴡɪᴛʜᴅʀᴀᴡ
    ⬡│▸ ${prefix}ʀᴏʙ / ᴀᴛᴛᴀᴄᴋ 
    ⬡│▸ ${prefix}ᴛʀᴀɴꜱꜰᴇʀ / ɢɪᴠᴇ 
    ⬡│▸ ${prefix}ᴡᴇᴀʟᴛʜ / ʀɪᴛᴜᴀʟ 
    ⬡│▸ ${prefix}ᴛᴛᴛ / ᴛɪᴄᴛᴀᴄᴛᴏᴇ   
    ⬡│▸ ${prefix}ᴛʀᴜᴛʜ
    ⬡│▸ ${prefix}ᴅᴀʀᴇ
    ⬡│▸ ${prefix}ꜱᴘɪɴ / ꜱʟᴏᴛ  
    ⬡│▸ ${prefix}ɢᴀᴍʙʟᴇ / ʟᴏᴛᴛᴇʀʏ
    ⬡│▸ ${prefix}ꜱᴛɪᴄᴋᴇʀ 
    ⬡│▸ ${prefix}ᴛᴏɪᴍɢ
    ⬡│▸ ${prefix}ᴛᴏɢɪꜰ
    ⬡│▸ ${prefix}ᴜʀʟ
    ⬡│▸ ${prefix}ᴛᴏᴍᴘ3
    ⬡│▸ ${prefix}ᴛᴏᴀᴜᴅɪᴏ
    ⬡│▸ ${prefix}ᴇᴍᴏᴊɪᴍɪx 
    ⬡│▸ ${prefix}ꜱᴛᴇᴀʟ
    ⬡│▸ ${prefix}ᴘʟᴀʏ
    ⬡│▸ ${prefix}ꜱᴏɴɢ
    ⬡│▸ ${prefix}ᴠɪᴅᴇᴏ
    ⬡│▸ ${prefix}ʏᴛᴍᴘ3
    ⬡│▸ ${prefix}ʏᴛᴍᴘ4
    ⬡│▸ ${prefix}ᴍᴏᴠɪᴇ
    ⬡│▸ ${prefix}ɢᴏᴏɢʟᴇ
    ⬡│▸ ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
    ⬡│▸ ${prefix}ɪᴍᴀɢᴇ
    ⬡│▸ ${prefix}ꜱᴇᴀʀᴄʜ
    ⬡│▸ ${prefix}ʏᴛᴠɪᴅᴇᴏ
    ⬡│▸ ${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ
    ⬡│▸ ${prefix}ɪɴꜱᴛᴀɢʀᴀᴍ
    ⬡│▸ ${prefix}ꜰᴀᴄᴇʙᴏᴏᴋ
    ⬡│▸ ${prefix}ꜰʙᴍᴘ3
    ⬡│▸ ${prefix}wealth
    ⬡│▸ ${prefix}wealth
    ⬡│▸ ${prefix}ritual
    ⬡│▸ ${prefix}gamble
    ⬡│▸ ${prefix}lottery
    ⬡│▸ ${prefix}slot
    ⬡│▸ ${prefix}spin
    ⬡│▸ ${prefix}reaction
    ⬡│▸ ${prefix}react
    ⬡│▸ ${prefix}reactions
    ⬡│▸ ${prefix}r
    ⬡│▸ ${prefix}limituser
    ⬡│▸ ${prefix}userlimit
    ⬡│▸ ${prefix}limit
    ⬡│▸ ${prefix}film
    ⬡│▸ ${prefix}movie
    ⬡│▸ ${prefix}moviesearch
    ⬡│▸ ${prefix}wallpaper
    ⬡│▸ ${prefix}animewallpaper
    ⬡│▸ ${prefix}animewall
    ⬡│▸ ${prefix}wikimedia
    ⬡│▸ ${prefix}wikiimage
    ⬡│▸ ${prefix}quoteimagexxx
    ⬡│▸ ${prefix}qoutesimagexxx
    ⬡│▸ ${prefix}quoteimage
    ⬡│▸ ${prefix}quotesanime
    ⬡│▸ ${prefix}quoteanime
    ⬡│▸ ${prefix}animequote
    ⬡│▸ ${prefix}animequotes
    ⬡│▸ ${prefix}animestory
    ⬡│▸ ${prefix}chatgpt
    ⬡│▸ ${prefix}ai
    ⬡│▸ ${prefix}gpt
    ⬡│▸ ${prefix}img
    ⬡│▸ ${prefix}imgai
    ⬡│▸ ${prefix}grupsetting
    ⬡│▸ ${prefix}groupsetting
    ⬡│▸ ${prefix}emojimix
    ⬡│▸ ${prefix}ghstalk
    ⬡│▸ ${prefix}githubstalk
    ⬡│▸ ${prefix}github
    ⬡│▸ ${prefix}git
    ⬡│▸ ${prefix}gitclone
    ⬡│▸ ${prefix}git-clone
    ⬡│▸ ${prefix}listpc
    ⬡│▸ ${prefix}listgc
    ⬡│▸ ${prefix}fliptext
    ⬡│▸ ${prefix}toletter
    ⬡│▸ ${prefix}leveling
    ⬡│▸ ${prefix}happymod
    ⬡│▸ ${prefix}modapk
    ⬡│▸ ${prefix}ringtone
    ⬡│▸ ${prefix}volume
    ⬡│▸ ${prefix}tempo
    ⬡│▸ ${prefix}bass
    ⬡│▸ ${prefix}blown
    ⬡│▸ ${prefix}deep
    ⬡│▸ ${prefix}earrape
    ⬡│▸ ${prefix}fast
    ⬡│▸ ${prefix}fat
    ⬡│▸ ${prefix}nightcore
    ⬡│▸ ${prefix}reverse
    ⬡│▸ ${prefix}robot
    ⬡│▸ ${prefix}slow
    ⬡│▸ ${prefix}smooth
    ⬡│▸ ${prefix}tupai
    ⬡│▸ ${prefix}calculator
    ⬡│▸ ${prefix}cal
    ⬡│▸ ${prefix}calculate
    ⬡│▸ ${prefix}toimage
    ⬡│▸ ${prefix}makeimg
    ⬡│▸ ${prefix}toimg
    ⬡│▸ ${prefix}tomp4
    ⬡│▸ ${prefix}makemp4
    ⬡│▸ ${prefix}makevideo
    ⬡│▸ ${prefix}tovideo
    ⬡│▸ ${prefix}toaud
    ⬡│▸ ${prefix}makeaudio
    ⬡│▸ ${prefix}toaudio
    ⬡│▸ ${prefix}tomp3
    ⬡│▸ ${prefix}makemp3
    ⬡│▸ ${prefix}togif
    ⬡│▸ ${prefix}makegif
    ⬡│▸ ${prefix}getgif
    ⬡│▸ ${prefix}translate
    ⬡│▸ ${prefix}ts
    ⬡│▸ ${prefix}trans
    ⬡│▸ ${prefix}gimage
    ⬡│▸ ${prefix}gig
    ⬡│▸ ${prefix}googleimage
    ⬡│▸ ${prefix}apod
    ⬡│▸ ${prefix}google
    ⬡│▸ ${prefix}search
    ⬡│▸ ${prefix}wiki
    ⬡│▸ ${prefix}earthquake
    ⬡│▸ ${prefix}covidinfo
    ⬡│▸ ${prefix}covid
    ⬡│▸ ${prefix}igdl
    ⬡│▸ ${prefix}instagram
    ⬡│▸ ${prefix}instagramreels
    ⬡│▸ ${prefix}igreels
    ⬡│▸ ${prefix}ig
    ⬡│▸ ${prefix}mp4
    ⬡│▸ ${prefix}jpeg
    ⬡│▸ ${prefix}igtv
    ⬡│▸ ${prefix}twitter
    ⬡│▸ ${prefix}td
    ⬡│▸ ${prefix}twitterdl
    ⬡│▸ ${prefix}twittermp3
    ⬡│▸ ${prefix}twitteraudio
    ⬡│▸ ${prefix}twitterxx
    ⬡│▸ ${prefix}twdlxx
    ⬡│▸ ${prefix}twmp4xx
    ⬡│▸ ${prefix}twddlxx
    ⬡│▸ ${prefix}fbdl
    ⬡│▸ ${prefix}fb
    ⬡│▸ ${prefix}fbmp4
    ⬡│▸ ${prefix}fbmp3
    ⬡│▸ ${prefix}facebookmp3
    ⬡│▸ ${prefix}facebookaudio
    ⬡│▸ ${prefix}facebookxx
    ⬡│▸ ${prefix}fbdlxxx
    ⬡│▸ ${prefix}fbmp4xxx
    ⬡│▸ ${prefix}fbxxx
    ⬡│▸ ${prefix}fbddlxx
    ⬡│▸ ${prefix}tiktok
    ⬡│▸ ${prefix}tiktoknowm
    ⬡│▸ ${prefix}ttnowm
    ⬡│▸ ${prefix}tiktokaudio
    ⬡│▸ ${prefix}tiktokmusic
    ⬡│▸ ${prefix}ttaud
    ⬡│▸ ${prefix}yts
    ⬡│▸ ${prefix}ytsearch
    ⬡│▸ ${prefix}music
    ⬡│▸ ${prefix}p
    ⬡│▸ ${prefix}play
    ⬡│▸ ${prefix}song
    ⬡│▸ ${prefix}ytplay
    ⬡│▸ ${prefix}spotify
    ⬡│▸ ${prefix}ytvd
    ⬡│▸ ${prefix}video
    ⬡│▸ ${prefix}ytvideo
    ⬡│▸ ${prefix}ytmp4
    ⬡│▸ ${prefix}ytmp3
    ⬡│▸ ${prefix}ytvd2
    ⬡│▸ ${prefix}ytdl
    ⬡│▸ ${prefix}lyrics
    ⬡│▸ ${prefix}couplepp
    ⬡│▸ ${prefix}cpp
    ⬡│▸ ${prefix}ppcouple
    ⬡│▸ ${prefix}coffee
    ⬡│▸ ${prefix}kopi
    ⬡│▸ ${prefix}pinterest
    ⬡│▸ ${prefix}pin
    ⬡│▸ ${prefix}swm
    ⬡│▸ ${prefix}take
    ⬡│▸ ${prefix}stickerwm
    ⬡│▸ ${prefix}steal
    ⬡│▸ ${prefix}smeme
    ⬡│▸ ${prefix}stickermeme
    ⬡│▸ ${prefix}stickmeme
    ⬡│▸ ${prefix}sgif
    ⬡│▸ ${prefix}sticker
    ⬡│▸ ${prefix}s
    ⬡│▸ ${prefix}soulmate
    ⬡│▸ ${prefix}handsomecheck
    ⬡│▸ ${prefix}beautifulcheck
    ⬡│▸ ${prefix}charactercheck
    ⬡│▸ ${prefix}dare
    ⬡│▸ ${prefix}truth
    ⬡│▸ ${prefix}mediafire
    ⬡│▸ ${prefix}mediafiredl
    ⬡│▸ ${prefix}smug2
    ⬡│▸ ${prefix}foxgirl
    ⬡│▸ ${prefix}animenom
    ⬡│▸ ${prefix}waifu3
    ⬡│▸ ${prefix}crossplay
    ⬡│▸ ${prefix}crosplay
    ⬡│▸ ${prefix}neko2
    ⬡│▸ ${prefix}feed
    ⬡│▸ ${prefix}meow
    ⬡│▸ ${prefix}tickle
    ⬡│▸ ${prefix}cry
    ⬡│▸ ${prefix}handhold
    ⬡│▸ ${prefix}nom
    ⬡│▸ ${prefix}hug
    ⬡│▸ ${prefix}dance
    ⬡│▸ ${prefix}kill
    ⬡│▸ ${prefix}pat
    ⬡│▸ ${prefix}lick
    ⬡│▸ ${prefix}kiss
    ⬡│▸ ${prefix}bite
    ⬡│▸ ${prefix}bully
    ⬡│▸ ${prefix}bonk
    ⬡│▸ ${prefix}poke
    ⬡│▸ ${prefix}slap
    ⬡│▸ ${prefix}happy
    ⬡│▸ ${prefix}cuddle
    ⬡│▸ ${prefix}kick
    ⬡│▸ ${prefix}yeet
    ⬡│▸ ${prefix}wink
    ⬡│▸ ${prefix}smile
    ⬡│▸ ${prefix}wave
    ⬡│▸ ${prefix}blush
    ⬡│▸ ${prefix}smug
    ⬡│▸ ${prefix}glomp
    ⬡│▸ ${prefix}cringe
    ⬡│▸ ${prefix}highfive
    ⬡│▸ ${prefix}megumin
    ⬡│▸ ${prefix}awoo
    ⬡│▸ ${prefix}animewall2
    ⬡│▸ ${prefix}animewallpaper2
    ⬡│▸ ${prefix}anime
    ⬡│▸ ${prefix}manga
    ⬡│▸ ${prefix}waifu
    ⬡│▸ ${prefix}neko
    ⬡│▸ ${prefix}bc
    ⬡│▸ ${prefix}broadcast
    ⬡│▸ ${prefix}bcall
    ⬡│▸ ${prefix}ping
    ⬡│▸ ${prefix}weathe    
    ┬│
    │╰───────────···▸▸
    └──────────────···▸▸▸`
            let buttonMessage = {
              video: fs.readFileSync('./system/Phoenix_3.mp4'), gifPlayback: true,
              caption: helpmenu,
    
              headerType: 4
    
            }
            Phoenix.sendMessage(m.chat, buttonMessage, { quoted: m })
          }
            break;

      case 'alive':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *ᴀʟɪᴠᴇ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
  │⊳  *Uꜱᴇʀ :  ${pushname}* ✅
  │⊳  *Nᴏᴡ-ᴛɪᴍᴇ : ${nowtime}*  
  │⊳  *Uhrzeit : ${kaitime}* ⌚
  │⊳  *Datum : ${kaidate}* 📆
  │⊳  *Oᴡɴᴇʀ : ${global.OwnerName}* 👑
  │⊳  *Pʀᴇꜰɪx : 『  ${prefix} 』*  ⚙️
  │⊳  *Laufzeit : ${runtime(process.uptime())}* 💻
  │⊳  *Dᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ Team-Phoenix* 
┬│   
│╰───────────···▸▸
└──────────────···▸▸▸`)
        }

        break;


      case '1.1': case 'botmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Bᴏᴛ-Mᴇɴᴜ* 🎯 ••』──◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ʀᴇᴘᴏ 
⬡│▸ ${prefix}ꜱᴄʀɪᴘᴛ
⬡│▸ ${prefix}ᴀʟɪᴠᴇ
⬡│▸ ${prefix}ꜱᴘᴇᴀᴋ
⬡│▸ ${prefix}ꜱᴜᴘᴘᴏʀᴛ
⬡│▸ ${prefix}ꜱᴘᴇᴇᴅᴄʜᴇᴄᴋ
⬡│▸ ${prefix}ꜱᴛᴀʟᴋ
⬡│▸ ${prefix}ꜱᴇᴛᴘʀᴇꜰɪx
⬡│▸ ${prefix}ᴀᴜᴛᴏ-ᴛʏᴘɪɴɢ  
⬡│▸ ${prefix}ᴀᴜᴛᴏ-ꜱᴛᴀᴛᴜꜱ
⬡│▸ ${prefix}ᴀᴜᴛᴏ-ʀᴇᴄᴏʀᴅɪɴɢ 
┬│
│╰───────────···▸▸
└──────────────···▸▸▸`)
        }

        break;



      case '1.2': case 'ownermenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Oᴡɴᴇʀ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ᴘᴜʙʟɪᴄ
⬡│▸ ${prefix}ꜱᴇʟꜰ
⬡│▸ ${prefix}ʀᴇꜱᴛᴀʀᴛ
⬡│▸ ${prefix}ꜱᴇᴛʙᴏᴛᴘᴘ
⬡│▸ ${prefix}ꜱʟᴇᴇᴘ
⬡│▸ ${prefix}ᴊᴏɪɴ
⬡│▸ ${prefix}ᴘᴏꜱᴛ
⬡│▸ ${prefix}ʟɪꜱᴛɢᴄ
⬡│▸ ${prefix}ʟɪꜱᴛᴘᴄ
⬡│▸ ${prefix}ʟɪꜱᴛᴏɴʟɪɴᴇ 
⬡│▸ ${prefix}ʙʀᴏᴀᴅᴄᴀꜱᴛ
⬡│▸ ${prefix}ʙʏᴇ
⬡│▸ ${prefix}ʙᴀɴɢʀᴏᴜᴘ 
⬡│▸ ${prefix}ʙʟᴏᴄᴋ
⬡│▸ ${prefix}ᴜɴʙʟᴏᴄᴋ
⬡│▸ ${prefix}ʙᴀɴ ᴀᴅᴅ
⬡│▸ ${prefix}ʙᴀɴ ᴅᴇʟ
┬│
│╰───────────···▸▸
└──────────────···▸▸▸`)
        }

        break;
        
        
        
    case '1.3': case 'groupmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Gʀᴏᴜᴘ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ᴘʀᴏᴍᴏᴛᴇ  
⬡│▸ ${prefix}ᴅᴇᴍᴏᴛᴇ  
⬡│▸ ${prefix}ɢʀᴏᴜᴘ-ᴇᴠᴇɴᴛ  
⬡│▸ ${prefix}ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ
⬡│▸ ${prefix}ɢʀᴏᴜᴘʟɪɴᴋ
⬡│▸ ${prefix}ʀᴇᴍᴏᴠᴇ 
⬡│▸ ${prefix}ꜱᴇᴛɴᴀᴍᴇ
⬡│▸ ${prefix}ꜱᴇᴛɢᴄᴘᴘ
⬡│▸ ${prefix}ꜱᴇᴛᴅᴇꜱᴄ
⬡│▸ ${prefix}ʀᴇᴠᴏᴋᴇ
⬡│▸ ${prefix}ᴛᴀɢᴀᴅᴍɪɴꜱ
⬡│▸ ${prefix}ᴛᴀɢᴀʟʟ
⬡│▸ ${prefix}ʜɪᴅᴇᴛᴀɢ
⬡│▸ ${prefix}ɴꜱꜰᴡ  
┬│
│╰───────────···▸▸
└──────────────···▸▸▸`)
        }

        break;    
        
        
        case '1.4': case 'antilinkmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Aɴᴛɪ-Lɪɴᴋ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋɢᴄ 
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴛ
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋʏᴛᴄʜ
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋꜰʙ
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋɪɢ
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋᴛᴡɪᴛ
⬡│▸  ${prefix}ᴀɴᴛɪᴡᴀᴍᴇ     
⬡│▸  ${prefix}ᴀɴᴛɪʟɪɴᴋᴀʟʟ     
┬│
│╰────────────···▸▸
└───────────────···▸▸▸`)
        }

        break;
        
        
        case '1.5': case 'economymenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Eᴄᴏɴᴏᴍʏ* 🎯 ••』───◈
│╭───────────···▸▸
┴│
⬡│▸  ${prefix}ᴅᴀɪʟʏ 
⬡│▸  ${prefix}ᴡᴀʟʟᴇᴛ 
⬡│▸  ${prefix}ʙᴀɴᴋ
⬡│▸  ${prefix}ʙᴀɴᴋᴜᴘɢʀᴀᴅᴇ 
⬡│▸  ${prefix}ᴅᴇᴘᴏꜱɪᴛ
⬡│▸  ${prefix}ᴡɪᴛʜᴅʀᴀᴡ
⬡│▸  ${prefix}ʀᴏʙ / ᴀᴛᴛᴀᴄᴋ 
⬡│▸  ${prefix}ᴛʀᴀɴꜱꜰᴇʀ / ɢɪᴠᴇ 
⬡│▸  ${prefix}ᴡᴇᴀʟᴛʜ / ʀɪᴛᴜᴀʟ 
┬│
│╰───────────···▸▸
└───────────────···▸▸▸`)
        }

        break;
        
        
        case '':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`│𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃`)
        }

        break;
        
        
        case '1.8': case 'gamesmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *ɢᴀᴍᴇꜱ* 🎯 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}ᴛᴛᴛ / ᴛɪᴄᴛᴀᴄᴛᴏᴇ   
⬡│▸ ${prefix}ᴛʀᴜᴛʜ
⬡│▸ ${prefix}ᴅᴀʀᴇ
⬡│▸ ${prefix}ꜱᴘɪɴ / ꜱʟᴏᴛ  
⬡│▸ ${prefix}ɢᴀᴍʙʟᴇ / ʟᴏᴛᴛᴇʀʏ  
┬│
│╰───────────···▸▸`)
        }

break;
        
        case '1.9': case 'funmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎈 *Fun-Menu* 🎈 ••』───◈
│╭────────────···▸▸
┴│
⬡│▸ ${prefix}stupidcheck  
⬡│▸ ${prefix}uncleancheck
⬡│▸ ${prefix}hotcheck
⬡│▸ ${prefix}smartcheck 
⬡│▸ ${prefix}greatcheck 
⬡│▸ ${prefix}evilcheck
⬡│▸ ${prefix}dogcheck
⬡│▸ ${prefix}coolcheck
⬡│▸ ${prefix}waifucheck
┬│
│╰───────────···▸▸`)
        }

     

        break;
        
        
        case '1.6': case 'convertmenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌──『•• 🎯 *Cᴏɴᴠᴇʀᴛ* 🎯 ••』───◈
│╭─────────────···▸▸
┴│
⬡│▸  ${prefix}ꜱᴛɪᴄᴋᴇʀ 
⬡│▸  ${prefix}ᴛᴏɪᴍɢ
⬡│▸  ${prefix}ᴛᴏɢɪꜰ
⬡│▸  ${prefix}ᴜʀʟ
⬡│▸  ${prefix}ᴛᴏᴍᴘ3
⬡│▸  ${prefix}ᴛᴏᴀᴜᴅɪᴏ
⬡│▸  ${prefix}ᴇᴍᴏᴊɪᴍɪx 
⬡│▸  ${prefix}ꜱᴛᴇᴀʟ
┬│
│╰────────────···▸▸`)
        }

        break;
        
        
        case '':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(``)
        }

        break;
        
        
        case '':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`│𝐏𝐇𝐎𝐄𝐍𝐈𝐗│𝐁𝐎𝐓│𝐕1️⃣ 🌃`)
        }

        break;
        
        
        case '1.7': case 'downloadermenu':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`
┌─『•• 📥 *Dᴏᴡɴʟᴏᴀᴅᴇʀ* 📥 ••』─◈
│╭────────────···▸▸
⬡│▸  ${prefix}ᴘʟᴀʏ
⬡│▸  ${prefix}ꜱᴏɴɢ
⬡│▸  ${prefix}ᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ʏᴛᴍᴘ3
⬡│▸  ${prefix}ʏᴛᴍᴘ4
⬡│▸  ${prefix}ᴍᴏᴠɪᴇ
⬡│▸  ${prefix}ɢᴏᴏɢʟᴇ
⬡│▸  ${prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
⬡│▸  ${prefix}ɪᴍᴀɢᴇ
⬡│▸  ${prefix}ꜱᴇᴀʀᴄʜ
⬡│▸  ${prefix}ʏᴛᴠɪᴅᴇᴏ
⬡│▸  ${prefix}ᴍᴇᴅɪᴀꜰɪʀᴇ
⬡│▸  ${prefix}ɪɴꜱᴛᴀɢʀᴀᴍ
⬡│▸  ${prefix}ꜰᴀᴄᴇʙᴏᴏᴋ
⬡│▸  ${prefix}ꜰʙᴍᴘ3
⬡│▸  ${prefix}ᴛɪᴋᴛᴏᴋ
│╰───────────···▸▸
└──────────────···▸▸▸`)
        }

        break;
        
        
        case '':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`🥲🥲`)
        }

        break;
        
        
        case '':
        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);

          m.reply(`😊`)
        }

        break;
         case "gaycheck-samurai" :
          if (isCmd) {
            if (isBan) return reply(mess.banned);
            if (isBanChat) return reply(mess.bangc);
            m.reply(`Hi *${pushname}*,  Ja Samurai ist Schwul aber sowas ist Völlig normal. :)`)
          }

         break;
        
        case 'ping':
          if (isCmd) {
            if (isBan) return reply(mess.banned);
            if (isBanChat) return reply(mess.bangc);
  
            reply(`*Hi ${pushname}*,  *Pong*  *${latensie.toFixed(4)}* *ms*`)
          }
  
          break;
                 


               
       

      //////search
      case 'weather':
        if (isBan) return reply(mess.banned);
        if (isBanChat) return reply(mess.bangc);
        if (!args[0]) return reply("Enter your location to search weather.")
        myweather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${args.join(" ")}&units=metric&appid=e409825a497a0c894d2dd975542234b0&language=tr`)

        const weathertext = `           🌤 *Weather Report* 🌤  \n\n🔎 *Search Location:* ${myweather.data.name}\n*💮 Country:* ${myweather.data.sys.country}\n🌈 *Weather:* ${myweather.data.weather[0].description}\n🌡️ *Temperature:* ${myweather.data.main.temp}°C\n❄️ *Minimum Temperature:* ${myweather.data.main.temp_min}°C\n📛 *Maximum Temperature:* ${myweather.data.main.temp_max}°C\n💦 *Humidity:* ${myweather.data.main.humidity}%\n🎐 *Wind:* ${myweather.data.wind.speed} km/h\n`
        Phoenix.sendMessage(from, { video: { url: 'https://media.tenor.com/bC57J4v11UcAAAPo/weather-sunny.mp4' }, gifPlayback: true, caption: weathertext }, { quoted: m })

        break;


      // case 'weather':{
      //   if (!text) return reply('Give me Location...')
      //               let wdata = await axios.get(
      //                   `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
      //               );
      //               let textw = ""
      //               textw += `*🗺️Weather of  ${text}*\n\n`
      //               textw += `*Weather:-* ${wdata.data.weather[0].main}\n`
      //               textw += `*Description:-* ${wdata.data.weather[0].description}\n`
      //               textw += `*Avg Temp:-* ${wdata.data.main.temp}\n`
      //               textw += `*Feels Like:-* ${wdata.data.main.feels_like}\n`
      //               textw += `*Pressure:-* ${wdata.data.main.pressure}\n`
      //               textw += `*Humidity:-* ${wdata.data.main.humidity}\n`
      //               textw += `*Humidity:-* ${wdata.data.wind.speed}\n`
      //               textw += `*Latitude:-* ${wdata.data.coord.lat}\n`
      //               textw += `*Longitude:-* ${wdata.data.coord.lon}\n`
      //               textw += `*Country:-* ${wdata.data.sys.country}\n`

      //             Phoenix.sendMessage(
      //                   m.chat, {
      //                       text: textw,
      //                   }, {
      //                       quoted: m,
      //                   }
      //              )
      //              }
      //              break;



      // //  "parse-ms": "^1.1.0",



      ///////////////////////////////////////////////////
      ///funmenu

      case 'stupidcheck': case 'uncleancheck':
      case 'hotcheck': case 'smartcheck':
      case 'greatcheck':
      case 'evilcheck': case 'dogcheck':
      case 'coolcheck':
      case 'waifucheck':
        cantik = body.slice(1)
        const okebnh1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100']
        const Phoenixkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
        Phoenix.sendMessage(m.chat, { text: Phoenixkak }, { quoted: m })
        break;


       
    
      ///////////////////////////////////////////////////
      ///////////////////////////////////////////////////
      
 
      
     
      default:


        if (isCmd) {
          if (isBan) return reply(mess.banned);
          if (isBanChat) return reply(mess.bangc);
          Phoenix.sendMessage(from, { react: { text: "❌", key: m.key } })
          m.reply(`Hey ${pushname} *Dieser Befehl ist nicht Vorhanden... Nutze ${prefix}menu um weitere Befehle zu sehen.*`)

        }


        if (budy.startsWith('=>')) {
          if (!isCreator) return reply(mess.botowner)
          function Return(sul) {
            sat = JSON.stringify(sul, null, 2)
            bang = util.format(sat)
            if (sat == undefined) {
              bang = util.format(sul)
            }
            return reply(bang)
          }
          try {
            reply(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
          } catch (e) {
            Phoenix.sendMessage(from, { image: ErrorPic, caption: String(e) }, { quoted: m })
          }
        }
        if (budy.startsWith('>')) {
          if (!isCreator) return reply(mess.botowner)
          try {
            let evaled = await eval(budy.slice(2))
            if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
            await reply(evaled)
          } catch (err) {
            await Phoenix.sendMessage(from, { image: ErrorPic, caption: String(err) }, { quoted: m })
          }
        }


        if (budy.startsWith('$')) {
          if (!isCreator) return reply(mess.botowner)
          exec(budy.slice(2), (err, stdout) => {
            if (err) return Phoenix.sendMessage(from, { image: ErrorPic, caption: String(err) }, { quoted: m })
            if (stdout) return replyH(stdout)
          })
        }


        if (isCmd && budy.toLowerCase() != undefined) {
          if (m.chat.endsWith('broadcast')) return
          if (m.isBaileys) return
          let msgs = global.db.database
          if (!(budy.toLowerCase() in msgs)) return
          Phoenix.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
        }
    }
  } catch (err) {
    Phoenix.sendMessage(`${ownertag}@s.whatsapp.net`, util.format(err), { quoted: m })
    console.log(err)
  }

}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright(`Update ${__filename}`))
  delete require.cache[file]
  require(file)
})


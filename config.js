const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  " (849) 433-8524,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_02_36_12_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDEwOSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDQ3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODcsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDczLFxuICAgICAgICAzMSxcbiAgICAgICAgMTkwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDYzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDYsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODEsXG4gICAgICAgIDI0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDksXG4gICAgICAgIDM5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMixcbiAgICAgICAgMjA0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyLFxuICAgICAgICAxODcsXG4gICAgICAgIDgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDExLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU5LFxuICAgICAgICA4NixcbiAgICAgICAgMTk3LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyMixcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDQ0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDYyLFxuICAgICAgICAyNixcbiAgICAgICAgMjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTAsXG4gICAgICAgIDU1LFxuICAgICAgICA3OSxcbiAgICAgICAgMjUwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTcyLFxuICAgICAgICA1NCxcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5LFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NSxcbiAgICAgICAgODYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieHhWMzVnZ01QRnd6dUZRd0Nsd1RjUzFsOEZkUTdMOElBV3VLeWpaWWFhcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwibE42M2NVRUdSZ2VJWi0zVVAwcmpvUVwiLFxuICBcInBob25lSWRcIjogXCI2Y2I3ODM0ZS02MmM3LTRjNWEtODE5YS1jYTk0YjY5ZDUwOTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIzLFxuICAgICAgMTA4LFxuICAgICAgOTAsXG4gICAgICA5NSxcbiAgICAgIDEzNyxcbiAgICAgIDgyLFxuICAgICAgMjA4LFxuICAgICAgNzgsXG4gICAgICA3NSxcbiAgICAgIDE1NyxcbiAgICAgIDMyLFxuICAgICAgMjUxLFxuICAgICAgMzcsXG4gICAgICAyOCxcbiAgICAgIDIzOSxcbiAgICAgIDE0MCxcbiAgICAgIDIyNSxcbiAgICAgIDc5LFxuICAgICAgMTg3LFxuICAgICAgMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTYxLFxuICAgICAgNzksXG4gICAgICAxNzYsXG4gICAgICAyMDUsXG4gICAgICA1NSxcbiAgICAgIDIwMSxcbiAgICAgIDc5LFxuICAgICAgOTUsXG4gICAgICAxNDgsXG4gICAgICAxODAsXG4gICAgICAxODEsXG4gICAgICAyMjAsXG4gICAgICA3MSxcbiAgICAgIDIyNCxcbiAgICAgIDI0LFxuICAgICAgMTg1LFxuICAgICAgMTQ3LFxuICAgICAgOTcsXG4gICAgICAyMlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xMVzZka0ZFS1c3N3JvR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTUxDd2lwUmFVcUprUjJWaHNWOGdPUUZidkJ2eDBMSjlIVmdzYkRoN2xVRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJzSGVyTnJXMmx1Y1lWYnJyUWtmSWNYaVhtMVVKbjVtMDNKVlBUdlVXRmdURUNNS2lEMHlCQVpwRG9kc1dCQ01pb2hZZm9UY2taY2JsQXJHU0lnSzlDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJBQUtJNDAwdFFSV3BIYXpWS2NHazlzNUhXZXNpU3R2YlhSYjZZMERhUlAvMjR6bjFIS0J3WW5CK1ZsS2VDdVAwMDhQSGpCb3NqcUtPSFdvSG4xSGFqZz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjE4NDk0MzM4NTI0OjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZqC8J2ahPCdmbHwnZm38J2ZsC4u4oCiLlwiLFxuICAgIFwibGlkXCI6IFwiMTI2OTM0MDE3MTQ3MDE2OjlAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODQ5NDMzODUyNDo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDA1NzM4MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUgvUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSF9fQy5qc29uIjogIntcImtleURhdGFcIjpcInIyR2I1WjVFOTYvYU55VkFXdGIrK0pOYzJNZkpGaU54ZVoyYkg0UVpOeWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDU1NTE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTMwMTI1NTcxXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSF9fRS5qc29uIjogIntcImtleURhdGFcIjpcIkQrYktUbEhRMnlrWHIwRkhMUk5hcVlxYXN0eDJybWgvMjhhZDhuOUx0VDA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDU1NTE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzOTMwMTYzNjE5XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSF9fRy5qc29uIjogIntcImtleURhdGFcIjpcIlFaVncvTGM4Um1DM24vUFlQNU1TMzlZUCtleURyS1Q4Q0FpTlV3MlFxVEU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDU1NTE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSF9fSC5qc29uIjogIntcImtleURhdGFcIjpcIk44TUE0VXk1ZW03NUV2K2NpYjNPakREMlY0d1QvUXVURis2RVp5d0xkMjQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDU1NTE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkzODgxMTM0MVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhfX0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVcXlLYjFBNlFVZ213L2FyU2FvTDFHcEhidkVIL05VWDZiQkN6UTFNQnhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzM5NDQwOTgzNTJcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIX19KLmpzb24iOiAie1wia2V5RGF0YVwiOlwibWlNSkZlMUtjN20xRExTUTMvMlV3TG0wYmlGKzdEemRCckhndVpTUXk5cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTMwNTU1MTg0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMzOTY4NTI1NTcwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSF9fSy5qc29uIjogIntcImtleURhdGFcIjpcIkJzM1VEOWFLZkRxb1RabU5SNTUrc05WaFlaNGpOd3YxTzVoOGZkNnRsMVE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTUzMDU1NTE4NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk2ODU4NDY2MlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhfX0wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJhcXI4MkdGdWYyNlptR0M0eXJ2SWFPK01MN3hjbXNEV1E3cy9CdndVYjlZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk2ODYyMzI2OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhfX04uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ4RlJiUE5WaURieGtma1pRZXBFN0lKcGw5dU5KN3pIeTBBMDZCK2FCa0R3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk2ODc1NjE2NVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUhfX1AuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJpVjFSb1JReHFGQjRJYjRPSUxkUlMvdmpEZmkyVkcyWXhpaXg2NEE1NEt3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAyNDIyNDMzOVwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVVBQUhfX0QuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJnYkJFTlJac3BRZXZ4QlM3bFAvbjdHQk1Od0I5RDNodVBxbmNNM2RlVzM4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkzMDE1OTIyMFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQVVBQUhfX0YuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIzd3BoQTYzWnF0aTVzQ1VYMXlsMVNVQXVXK3dJdDhQZU5YVkxZRUtXYllBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDVdfSxcInRpbWVzdGFtcFwiOlwiMTczMzkzMDIzNzY1OFwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWdBQUhfX00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPYnZrK2lxVXpwMUlQVTMvOWdQa0ZGRm84VTFEeTQvUWVMcVZtL0VhYTAwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDhdfSxcInRpbWVzdGFtcFwiOlwiMTczMzk2ODYzNzA5NlwifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQWdBQUhfX08uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJJZ3dxRVdCYkZXNzRzQVNOMXRqTi83T1BmdjR0a2J3eitWMzg5T3lld2FVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1MzA1NTUxODYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDhdfSxcInRpbWVzdGFtcFwiOlwiMTczNDAyMTc3MTAzNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

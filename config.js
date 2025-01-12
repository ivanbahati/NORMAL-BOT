const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VVXZOqOBT8L9lHvSuIoFg1VQsoyKiIoghu3YcAASKfQwKKU/73LcaZmnnYe3f2LRWSPp3uPodXkBeYoCVqwfQVlBVuIEXdkrYlAlMg12GIKtAHAaQQTAHRTsQMr1ZdFoZq5KYY8EfjVCaj1WgWS3T+THJP8wcDKYuewL0PytpLsf8bwEHkhZKz8b0sKLlQY4jZ3gbp8DTL2AtkZnadhMVBjhP3XDyBe4cIcYXzaF7GKEMVTJeoNSGuvkc/0XG4rhJm7eXVsiWOR5tKCeSFNn6p6axnCMoqttWhWmbu9+gHoh4o4kUY385shi7CLpSod7CMnd5cY9eoDciiSLcPB2n7oE9wlKNAD1BOMW2/r/vCPrdjV0kTaHHzfTC4tnF4Y6qzoS/nMDmyoiUcB1f/emC+RzyNefs6D5ZWNMCOLiI7ZlSrcmJNKy1Drfg8iAvBnr3c5sxX4mb1kZXk/+i+nN/swzgRNS8d4shrZH+35ou6qCdNzzIjhRWGkL+E0YD9ZmyEY2mGdC/x8ooGRl3pB2OSVEmvhuebqWE5Uc8Y86vFcfdFd0jr6ncsT4MbobtbY69UPgl4bRkM5JUtoQuypa098KR6BT1nO3d8IUq46+x01crb80myvLZQeRnuDL03Khdnr1Qm+2PNnna7oyw9vb0oQa0egCl774MKRZjQClJc5N3ehOsDGDQW8itE39QFOl8OrQXBE7HKLy7n2LSNyp3gnnkd7oyZmOUW4yaneu+RJ9AHZVX4iBAULDChRdWuESEwQgRM//7ZBzm60odvXTWO7YMQV4Qe8rpMCxh8mPrxEfp+UefUanNf6RaoAlPmcxtRivOIdDLWOaz8GDdIiSElYBrClKB7HwSowT7q8IDlXMsmVJ+3Rbsg9ZljhTxeXjrKcZE/joxEMQyFcfiDEUP+x0gY+z9Ejud/DCcjNhCgP0YTDvQBfm+Z7s4vHSzbszmgbeTNTJMKM39jJRt976fhS/LmwkN6VKEATGlVoz7woJ/U5b5IUP4b3GMupwtOujD2jEugYakbGi3ksGYHly+4D0vB9PVzTClF0OEpnDsznec96IPsLYG4e/mQH7HMSBBEnhlN2b/In5dOR1iWf+aIgj7IYXcY/CFLxkzfd3XeTegQAkQhTkkHbjbnW7reThDSGsl1JUuSlpLUBePDtI/wP9IVnka+njRksBG0Xm9jLl3RGsb04ka1cOVP0gFvd6cX27g4xb+BgCnQ5u36qLHJi5KxXuxqZmW1G1qvs/OaqQ9MuVs1K04iJOkxuJ0daOo76jN0STaY7y6hkor23HkuZBpTjRtvzBktirkUPXXVHuH5WsyJwuzqr2x3pwr+PDEMIQhCCb7srWPTG0FW09dDD9sNoZG6kvJrI24MqLaJwpPhy/yiY8dTtYI15X1YuTK6bpezTLk82vJtLKTv4xi/dczre9RCjN6m27sL/2XWZ+iZe/8LxPu4/EWwZGeIFsrzamze6rhpzuc2Mw+08HxNX9UEHbeqnsyPMN37qgDu9599UKaQhkWVdT+FzIOgD1JIqPTZtHucIUJhVoIpO+YEnudGY/b+Dw/sgffpBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.CHATBOT || 'no',
    CHATBOT1 : process.env.AUDIO_CHATBOT || 'yes',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});






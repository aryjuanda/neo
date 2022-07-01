// CREATED BY LEXXY
const fs = require('fs')
const chalk = require('chalk')

// OTHERS
global.owner = ['6281368669741', '6281368669741']
global.premium = ['6281368669741']
global.number = '6281368669741'
global.botname = 'VannBot-MD'
global.packname = 'Vann-MD'
global.author = 'By VannBot--!'
global.emailowner = 'iVannTR8@gmail.com'
global.websiteowner = 'https://v7vann.jimdofree.com'
global.region = 'Indonesia'
global.sessionName = "session"
global.prefa = ['!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.simbol = "➭"
global.rkyt = []

// BIARIN:v
global.creator = '© Created By VannBotz Official'

// MESSAGE
global.mess = {
error: 'Error',
success: '✓ Success',
admin: 'Fitur Khusus Admin Group!',
botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
owner: 'Fitur Khusus Owner Bot',
group: 'Fitur Digunakan Hanya Untuk Group!',
private: 'Fitur Digunakan Hanya Untuk Private Chat!',
bot: 'Fitur Khusus Pengguna Nomor Bot',
wait: 'Loading...',
endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}

// LIMIT
global.limitawal = {
premium: "Infinity",
free: 20
}

// MEDIA
global.image = fs.readFileSync("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL7sGqMrPrl14HNbijFDrxIi7MWmMGSASnBCM0pbszeYlgj5-0E526Ds&s=10")
global.thumbnail = fs.readFileSync("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL7sGqMrPrl14HNbijFDrxIi7MWmMGSASnBCM0pbszeYlgj5-0E526Ds&s=10")
global.qris = fs.readFileSync("./settings/media/qris.jpg")
global.scimg = fs.readFileSync("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL7sGqMrPrl14HNbijFDrxIi7MWmMGSASnBCM0pbszeYlgj5-0E526Ds&s=10")
global.mnuimg = fs.readFileSync("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL7sGqMrPrl14HNbijFDrxIi7MWmMGSASnBCM0pbszeYlgj5-0E526Ds&s=10")
global.sewimg = fs.readFileSync("./settings/media/sewa.jpg")
global.rulsimg = fs.readFileSync("./settings/media/rules.jpg")
global.fitimg = fs.readFileSync("./settings/media/list.jpg")

//BATAS
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})

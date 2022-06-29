/**
 - Hati Hati Ntar Error
**/

exports.rules = (prefix, I, pushname) => {
return `
1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok saya chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan NEO-MD
😖🙏
`
}

var SK = '⊳'
var SB = '•'
var HB = '❑'
var K1 = '『'
var K2 = '』'
var YR = '⇒'
var BF = '_'
var P4 = '*'
var GK = '➛'
var HS =`*───╼[ _ALL MENU_  ]╾───*`
var H1 =`╭─╼⭓「`
var H2 =`」`
var H3 =`${global.simbol}`
var DR =`*──────────────────*`
var H4 =`└─────────⭓`

var monospace = '```'

exports.help = (prefix, l) => {
	return `
${DR}
${HS}
${DR}

${H1} *Others Menu* ${H2}
│${H3} #sc
│${H3} #script
│${H3} #sourcecode
│${H3} #rules
│${H3} #menu
│${H3} #ping
│${H3} #listpc
│${H3} #speed
│${H3} #runtime
│${H3} #listgc
│${H3} #listonline
${H4}

${H1} *Owner Menu* ${H2}
│${H3} #owner
│${H3} #join
│${H3} #leave
│${H3} #creategc
│${H3} #block
│${H3} #cowner
│${H3} #unblock
│${H3} #bc
│${H3} #bcgc
${H4}

${H1} *Store Menu* ${H2}
│${H3} #list
│${H3} #dellist key
│${H3} #addlist key@produk
│${H3} #update key@produk
│${H3} #proses @tag produk
│${H3} #done @tag produk
${H4}

${H1} *Group Menu* ${H2}
│${H3} #kick
│${H3} #add
│${H3} #promote
│${H3} #demote
│${H3} #setname
│${H3} #setdesc
│${H3} #setppgrup
│${H3} #tagall
│${H3} #hidetag
│${H3} #vote
│${H3} #upvote
│${H3} #devote
│${H3} #cekvote
│${H3} #delvote
│${H3} #group
│${H3} #editinfo
│${H3} #antilink
${H4}

${H1} *Search Menu* ${H2}
│${H3} #loli
│${H3} #neko
│${H3} #wibu
│${H3} #anime
│${H3} #tahta
│${H3} #teksto
│${H3} #waifu
│${H3} #ssweb
${H4}

${H1} *Download Menu* ${H2}
│${H3} #play
│${H3} #ytplay
│${H3} #ytmp3
│${H3} #ytmp4
│${H3} #tiktok
│${H3} #pinterest
│${H3} #mediafire
│${H3} #tiktokaudio
${H4}

${H1} *Fun Menu* ${H2}
│${H3} #jadian
│${H3} #jodohku
│${H3} #tictactoe
│${H3} #delttt
│${H3} #family100
│${H3} #tebak
│${H3} #math
│${H3} #suitpvp
│${H3} #halah
│${H3} #hilih
│${H3} #huluh
│${H3} #heleh
│${H3} #holoh
${H4}

${H1} *Database Menu* ${H2}
│${H3} #listcmd
│${H3} #setcmd
│${H3} #addmsg
│${H3} #getmsg
│${H3} #delmsg
│${H3} #listmsg
${H4}

${H1} *Converter Menu* ${H2}
│${H3} #sticker
│${H3} #style
│${H3} #toimage
│${H3} #emojimix
│${H3} #tovideo
│${H3} #tomp3
│${H3} #bass
│${H3} #blown
│${H3} #deep 
│${H3} #earrape 
│${H3} #fast 
│${H3} #fat
│${H3} #nightcore 
│${H3} #reverse 
│${H3} #robot 
│${H3} #slow 
│${H3} #smooth 
│${H3} #tupai
${H4}

${H1} *Random Sticker* ${H2}
│${H3} #bucinp
│${H3} #bucinstick
│${H3} #gura
│${H3} #gurastick
│${H3} #doge
│${H3} #dogestick
│${H3} #patrik
│${H3} #patrick
${H4}

${H1} *Sticker Anime* ${H2}
│${H3} #cry
│${H3} #kill
│${H3} #hug
│${H3} #pat
│${H3} #lick
│${H3} #kiss
│${H3} #bite
│${H3} #yeet
│${H3} #neko
│${H3} #bully
│${H3} #bonk
│${H3} #wink
│${H3} #poke
│${H3} #nom
│${H3} #slap
│${H3} #smile
│${H3} #wave
│${H3} #awoo
│${H3} #blush
│${H3} #smug
│${H3} #glomp
│${H3} #happy
│${H3} #dance
│${H3} #cringe
│${H3} #highfive
│${H3} #shinobu
│${H3} #megumin
│${H3} #handhold
${H4}

${H1} *Primbon Menu* ${H2}
│${H3} #nomerhoki
│${H3} #nomorhoki
│${H3} #artimimpi
│${H3} #tafsirmimpi
│${H3} #ramalanjodoh
│${H3} #ramaljodoh
│${H3} #ramalanjodohbali
│${H3} #ramaljodohbali
│${H3} #suamiistri
│${H3} #ramalancinta
│${H3} #ramalcinta
│${H3} #artinama
│${H3} #kecocokannama
│${H3} #cocoknama
│${H3} #kecocokanpasangan
│${H3} #cocokpasangan
│${H3} #pasangan
│${H3} #jadianpernikahan
│${H3} #jadiannikah
│${H3} #sifatusaha
│${H3} #rejeki
│${H3} #rezeki
│${H3} #pekerjaan
│${H3} #kerja
│${H3} #ramalannasib
│${H3} #ramalnasib
│${H3} #nasib
│${H3} #potensipenyakit
│${H3} #penyakit
│${H3} #artitarot
│${H3} #tarot
│${H3} #fengshui
│${H3} #haribaik
│${H3} #harisangar
│${H3} #taliwangke
│${H3} #harinaas
│${H3} #harisial
│${H3} #nagahari
│${H3} #harinaga
│${H3} #arahrejeki
│${H3} #arahrezeki
│${H3} #peruntungan
│${H3} #weton
│${H3} #wetonjawa
│${H3} #sifat
│${H3} #karakter
│${H3} #keberuntungan
│${H3} #memancing
│${H3} #masasubur
${H4}

${H1} *Canvas Menu* ${H2}
│${H3} #glitch3 text1|text2
│${H3} #herryp text1|text2
│${H3} #potter text1|text2
│${H3} #heryy text1|text2
│${H3} #graf text1|text2
│${H3} #grafiti text1|text2
│${H3} #graffiti text1|text2
${H4}

${H1} *Maker Menu* ${H2}
│${H3} #3dbox nama
│${H3} #water nama
│${H3} #drapwater nama
│${H3} #lion2 nama
│${H3} #lionn nama
│${H3} #cute nama
│${H3} #paper nama
│${H3} #papercut nama
│${H3} #transformer nama
│${H3} #fomer nama
│${H3} #trans nama
│${H3} #neon nama
│${H3} #devil nama
│${H3} #neondevil nama
│${H3} #stone nama
│${H3} #3dstone nama
│${H3} #thun nama
│${H3} #thunder nama
${H4}

${H1} *Textpro Menu* ${H2}
│${H3} #candy 
│${H3} #christmas 
│${H3} #3dchristmas 
│${H3} #sparklechristmas
│${H3} #deepsea 
│${H3} #scifi 
│${H3} #rainbow 
│${H3} #waterpipe 
│${H3} #spooky 
│${H3} #pencil 
│${H3} #circuit 
│${H3} #discovery 
│${H3} #metalic 
│${H3} #fiction 
│${H3} #demon 
│${H3} #transformer 
│${H3} #berry 
│${H3} #thunder 
│${H3} #magma 
│${H3} #3dstone 
│${H3} #neonlight 
│${H3} #glitch 
│${H3} #harrypotter 
│${H3} #brokenglass
│${H3} #papercut 
│${H3} #watercolor
│${H3} #multicolor 
│${H3} #neondevil 
│${H3} #underwater 
│${H3} #graffitibike
│${H3} #snow 
│${H3} #cloud 
│${H3} #honey 
│${H3} #ice 
│${H3} #fruitjuice 
│${H3} #biscuit 
│${H3} #wood 
│${H3} #chocolate 
│${H3} #strawberry 
│${H3} #matrix 
│${H3} #blood 
│${H3} #dropwater 
│${H3} #toxic 
│${H3} #lava 
│${H3} #rock 
│${H3} #bloodglas 
│${H3} #hallowen 
│${H3} #darkgold 
│${H3} #joker 
│${H3} #wicker
│${H3} #firework 
│${H3} #skeleton 
│${H3} #blackpink 
│${H3} #sand 
│${H3} #glue 
│${H3} #1917 
│${H3} #leaves
${H4}

*NeoBotz-MD@^1.0.0*\n${monospace}Simple Bot WhatsApp With Baileys Multi Device${monospace}`
}
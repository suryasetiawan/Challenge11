const readline = require('readline');
const fs = require('fs');
const tanya = JSON.parse(fs.readFileSync('data.json', 'utf8'))
const rl = readline.createInterface({
   

    input: process.stdin,
    output: process.stdout,
    prompt: 'Tebakan > '

});
let hitung = 0;
console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya !');
console.log('Pertanyaan : ' + tanya[hitung].definition);

rl.prompt();

rl.on('line', (jawaban) => {
    if (jawaban.trim().toLowerCase() == tanya[hitung].term.toLowerCase()) {
        console.log('Selamat Jawaban Anda Benar !');
        hitung++
    } else {
        console.log('wkwkwkwk, Anda Kurang Beruntung');
    }
    if (hitung < tanya.length) {
        console.log('Pertanyaan :' + tanya[hitung].definition);

    } else {
        console.log('Hore Kamu Menang');
        rl.close()
    }
    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);

});

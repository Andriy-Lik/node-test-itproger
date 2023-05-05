// Вызов операционной системы
// const os = require('os');
// let res = os.platform();
// console.log(res);



// Простые функции
// const my_math = require('./my_math');
// let res1 = my_math.add(4, 5);
// let res2 = my_math.minus(5, 7);
// console.log(`Res1: ${res1}, Res2: ${res2}`);



// Создание файлов (синхронная)
// const fs = require('fs');

// let result = fs.readFileSync('some.txt', 'utf-8', );

// console.log(result);

// fs.writeFileSync('some.txt', result + '\nHello World!');



// Создание файлов (асинхронная)
// const fs = require('fs');

// fs.readFile('some.txt', 'utf-8', (err, data) => {
//     fs.writeFile('some.txt', data + '\nSome text', (err, data) => {
//         console.log('Усе працює!');
//     });
// });



// Создание удаление папок
// const fs = require('fs');

// Создание папки
// fs.mkdirSync('text-files');

// Создание папки и файла с текстом
// fs.mkdir('text-files', () => {
//     fs.writeFile('./text-files/some.txt', 'Hello', () => {});
// })

// Удаление файла и папки
// fs.unlink('./text-files/some.txt', () => {
//     fs.rmdir('./text-files', () => {})
// })



// Работа с HTTP запросами
// const http = require('http');
// const fs = require('fs');

// let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});

//     if(req.url == '/')
//         fs.createReadStream('./templates/index.html').pipe(res);
//     else if(req.url == '/about')
//         fs.createReadStream('./templates/about.html').pipe(res);
//     else
//         fs.createReadStream('./templates/error.html').pipe(res);
// });

// const PORT = 3000;
// const HOST = 'localhost';

// server.listen(PORT, HOST, () => {
//     console.log(`Сервер запущен: http://${HOST}:${PORT}`);
// });



// Работа с библиотекой Express.js
const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/user/:username', (req, res) => {
    let data = { username: req.params.username, hobbies: [ 'Football', 'Skate', 'Basketball' ] }
    res.render('user', data)
})

app.post('/check-user', (req, res) => {
    let username = req.body.username
    if(username == "")
        return res.redirect('/')
    else
        return res.redirect('/user/' + username)
})

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Server started: http://localhost:${PORT}`);
})
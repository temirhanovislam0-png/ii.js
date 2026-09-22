const express = require('express'); // подключили библиотеку Express
const app = express () // запустили Express 

const PORT = 3000; //обозначили порт для дальнейшего запуска

app.get("/", (req , res)=> { //создаем get запрос для получения главной страницы
    res.send("Главная страница")//отправляем клиенту ответ respons
})
app.get("/about", (req , res)=> { //создаем get запрос для получения главной страницы
    res.send("О нас")//отправляем клиенту ответ respons
})
app.get("/contact", (req , res)=> { //создаем get запрос для получения главной страницы
    res.send("Наш номер: 89287654321")//отправляем клиенту ответ respons
})
app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send(`Товар с id: ${req.params.id}`)
    
})
app.get('/phone/:number',(req , res)=>{
    console.log(req.params);
    res.send(`Ваш номер телефона: ${req.params.number}`)
})
app.listen(PORT, ()=>{ //настраиваем сервер на чем он будет запущен
    console.log(`Сервер успешно запушен по адресу: 127.0.0.1:${PORT}`);
    
})




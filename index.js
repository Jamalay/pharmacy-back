const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

app.use(require('./routes/medications.route'));
app.use(require('./routes/categories.route'));
app.use(require('./routes/users.route'));
app.use(require('./routes/carts.route'))

mongoose.connect('mongodb+srv://Mans:0987@cluster0.5dbeerg.mongodb.net/back-pharmacy?retryWrites=true&w=majority')
    .then(() => console.log('Подключение к серверу MongoDB выполнена успешна'))
    .catch(() => console.log('Ошибка при подключении к серверу MongoDB'))


app.listen(3000, () => {
    console.log('Сервер запущен!');
})
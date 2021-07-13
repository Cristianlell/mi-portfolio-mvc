const express = require('express');
const app = express();
const indexRouter = require('./routes/main')
app.use(express.static('public'));

app.use('/', indexRouter);

// Servidor
app.listen(3000, ()=>{
console.log('Servidor funcionando');
});
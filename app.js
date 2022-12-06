//Requiring module
const express = require('express')
const mysql = require('mysql2');
const connect = require('./conexao.js');


// Creating express object const app = express();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.delete('/clientes/:user_id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("delete from cliente where user_id="+ req.params.user_id, res);
})

app.post('/clientes/', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("insert into cliente (nome) value('"+req.body.nome+"')", res);

})

app.put('/clientes/:user_id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery("update cliente set nome='"+req.body.nome+"' where user_id="+req.params.user_id, res);
})

// Handling GET request 
app.get('/', (req, res) => {
    res.send('Há uma API ' + 'rodando neste servidor')
res.end() })

app.get('/clientes/:user_id', (req, res) =>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    return connect.execSQLQuery('select * from cliente where user_id='+ req.params.user_id, res);

})
//Port number
const PORT = process.env.PORT ||5000;

// Server Setup 
app.listen(PORT,console.log(`Server started on port ${PORT}`))
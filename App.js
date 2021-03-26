const express = require('express');
const app = express();
const sql = require('mssql');
const http = require('http');
const tedious = require('tedious');
const hostname = '127.0.0.1';
const port = 8000;


app.listen(port, hostname, () => {
    console.log(`server is running on port ${port}`);
})

const data = null;
const username = "sa";
const password = "44Gorkles^";
const connectionString = "mssql://"+username+":"+password+"@localhost:1433";

var Connection = tedious.Connection;
var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: username,
            password: password,
        }
    },
    options: {
        port: 1433,
        //encrypt: false,
    }
};

var conn = new Connection(config);
conn.on('connect', function(err){
    console.log('connected');
});

conn.connect();

// (async () => {
//     try {
//         await sql.connect(connectionString);
//         const result = await sql.query(`SELECT * FROM test`);
//         const data = await result;
//         console.dir(result);
//     } catch (e) {
//         console.log("error:", e.message);
//     }
// })();

app.get('/test', (req, res) => {
    return res.status(200).send({
        success: 'true',
        message: 'users',
        data: data,
    })
})


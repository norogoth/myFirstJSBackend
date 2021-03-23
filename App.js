
const express = require('express');
const sql = require('mssql');

async () => {
    try {
        await sql.connect('mssql://sa:44Grunkles^@localhost:1433');
        const result = await sql.query`select * from test`
        console.dir(result);
    } catch (e) {
        e.printStackTrace();        
    }
}
import express from 'express'
import mysql from 'mysql2/promise'

const app = express()

const client = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'fastpassword'
})

const response = await client.query('SELECT 1 + 1')
console.log(response)

app.listen(3000)
console.log('Server om port 3000')

// Creo msql:
// docker run --name projectmsql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=fastpassword mysql

// RESPUESTA POR CONSOLA:
// next@rases:~/docker-mysql-fazt$ node server.js 
// file:///home/next/docker-mysql-fazt/server.js:14
// console-log(response)
// ^

// ReferenceError: log is not defined
//     at file:///home/next/docker-mysql-fazt/server.js:14:1
//     at process.processTicksAndRejections (node:internal/process/task_queues:95:5)

// Node.js v18.16.0
// next@rases:~/docker-mysql-fazt$ node server.js 
// [
//   [ { '1 + 1': 2 } ],
//   [
//     ColumnDefinition {
//       _buf: <Buffer 01 00 00 01 01 1b 00 00 02 03 64 65 66 00 00 00 05 31 20 2b 20 31 00 0c 3f 00 03 00 00 00 08 81 00 00 00 00 05 00 00 03 fe 00 00 02 00 02 00 00 04 01 ... 10 more bytes>,
//       _clientEncoding: 'utf8',
//       _catalogLength: 3,
//       _catalogStart: 10,
//       _schemaLength: 0,
//       _schemaStart: 14,
//       _tableLength: 0,
//       _tableStart: 15,
//       _orgTableLength: 0,
//       _orgTableStart: 16,
//       _orgNameLength: 0,
//       _orgNameStart: 23,
//       characterSet: 63,
//       encoding: 'binary',
//       name: '1 + 1',
//       columnLength: 3,
//       columnType: 8,
//       type: 8,
//       flags: 129,
//       decimals: 0
//     }
//   ]
// ]
// Server om port 3000

// //////////////////////////////////
// //////////////////////////////////

// Creo mongodb:
//  docker run --name,e mymongo -p 27017:27017 mongo
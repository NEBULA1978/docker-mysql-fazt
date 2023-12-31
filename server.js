import express from 'express'
import mysql from 'mysql2/promise'
import mongoose from 'mongoose'

const app = express()

const client = mysql.createPool({
    host:'localhost',
    port:3306,
    user:'root',
    password:'fastpassword'
})

const response = await client.query('SELECT 1 + 1')
console.log(response)

// MOGODEB
const mongoConnection= await mongoose.connect(
    "mongodb://localhost:27017/twitchdb"
)

console.log(mongoConnection.connection.db.databaseName)

app.listen(3000)
console.log('Server om port 3000')

// Crear un nuevo usuario en la base de datos MySQL
// app.post('/mysql/users', async (req, res) => {
//     try {
//         const { username, email } = req.body;
//         await client.query('INSERT INTO users (username, email) VALUES (?, ?)', [username, email]);
//         res.status(201).send('User created');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error creating user');
//     }
// });

// // Obtener todos los usuarios de la base de datos MySQL
// app.get('/mysql/users', async (req, res) => {
//     try {
//         const [users] = await client.query('SELECT * FROM users');
//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error fetching users');
//     }
// });

// // Actualizar información de un usuario en la base de datos MySQL
// app.put('/mysql/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { username, email } = req.body;
//         await client.query('UPDATE users SET username = ?, email = ? WHERE id = ?', [username, email, id]);
//         res.send('User updated');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error updating user');
//     }
// });

// // Eliminar un usuario de la base de datos MySQL
// app.delete('/mysql/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await client.query('DELETE FROM users WHERE id = ?', [id]);
//         res.send('User deleted');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error deleting user');
//     }
// });


// // Crear un nuevo usuario en la base de datos MongoDB
// app.post('/mongodb/users', async (req, res) => {
//     try {
//         const { username, email } = req.body;
//         const newUser = new User({ username, email });
//         await newUser.save();
//         res.status(201).send('User created');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error creating user');
//     }
// });

// // Obtener todos los usuarios de la base de datos MongoDB
// app.get('/mongodb/users', async (req, res) => {
//     try {
//         const users = await User.find();
//         res.json(users);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error fetching users');
//     }
// });

// // Actualizar información de un usuario en la base de datos MongoDB
// app.put('/mongodb/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { username, email } = req.body;
//         await User.findByIdAndUpdate(id, { username, email });
//         res.send('User updated');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error updating user');
//     }
// });

// // Eliminar un usuario de la base de datos MongoDB
// app.delete('/mongodb/users/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await User.findByIdAndDelete(id);
//         res.send('User deleted');
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Error deleting user');
//     }
// });

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
//  docker run --name mymongo -p 27017:27017 mongo
// Instalo:
// npm i mongoose

// SALIDA POR CONSOLA:
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
// twitchdb
// Server om port 3000

// En localhost:
// It looks like you are trying to access MongoDB over HTTP on the native driver port.

// http://localhost:3306/
// I���
// 8.1.0�	���NBI{0AX�ےےے�ےك����������`\+Fe6Or~�caching_sha2_password�!��ے„#08S01Got packets out of order
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
let mhs = require('./controller/mahasiswa')
app.use(bodyParser.urlencoded({extended : true}))

app.get('/mahasiswa', mhs.getmhs)

app.post('/mahasiswa', mhs.postmhs)

app.put('/mahasiswa/:index', mhs.updatemhs)

app.delete('/mahasiswa/:index', mhs.deletemhs)

app.get('/mahasiswa/:index', mhs.getmhsidx)


app.listen(3000, () => console.log(`Example app listening on port 3000`))
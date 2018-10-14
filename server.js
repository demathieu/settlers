var express = require('express');
var app = express();
var fs = require("fs");
const {Client} = require('pg');

//const connectionString = process.env.DATABASE_URL || 'postgres://188.166.92.64:5432/virtualsettlers';



app.get('/listUsers', function (req, res) {
    const client = new Client({
        user: '',
        host: '188.166.92.64',
        database: 'virtualsettlers',
        password: '',
        port: 5432,
      })

      client.connect()
  
    const text =  'select * from settlements where ownerid = $1';
    const values = ['4'];

    var resultaat = client.query(text, values, (err, result) => {
        if (err) {
        console.log(err.stack)
        } 
        res.json(result.rows);
        client.end();
    })

    
    
    res.send();
})


function readDB(){
    
}

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})

//'select * from settlements where ownerid="4"' 

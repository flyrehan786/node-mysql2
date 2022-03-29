let mysql2 = require('mysql2');
let http = require('http');
let connection = mysql2.createPool({
  host:"localhost",
  user: "root",
  password: "root",
  database: "db"
});
let server = http.createServer(async (req,res) => {
  if(req.url === '/'){
    let result = await connection.execute('show tables');
    console.log('result');
    console.log(result);
  }
})

server.listen(2000);


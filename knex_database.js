// const mysql=require("mysql")
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE mydata", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });




// const mysql=require("mysql")
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Pooja@123"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query("CREATE DATABASE knex_login", function (err, result) {
//     if (err) throw err;
//     console.log("Database created");
//   });
// });


knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    return knex.schema.createTable('users', function(t) {
      t.increments('id').primary();
      t.string('first_name', 100);
      t.string('last_name', 100);
      t.text('bio');
    });
  }
});
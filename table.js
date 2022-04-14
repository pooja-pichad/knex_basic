const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Pooja@123',
        database: 'mydata'
    }
  })

  //
//has tables;
  //Checks for a table's existence by tableName, resolving with a boolean to signal if the table exists.


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


knex.schema.renameTable('users', 'old_users').then(()=>{
    console.log("renamed")
}).catch(()=>{
    console.log("not rename ")
})

knex.schema.dropTableIfExists("old_users").then(()=>{
    console.log("droptable successfully")
}).catch(()=>{
    console.log("not drop")
})


//drop column

knex.schema.table('pinki', function (table) {
    table.dropColumn('name');
    table.string('first_name');
    table.string('last_name');
  }).then(()=>{
      console.log("drop column successfully")
  }).catch(()=>{
      console.log("not")
  })
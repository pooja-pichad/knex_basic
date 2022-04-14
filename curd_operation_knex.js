const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Pooja@123',
        database: 'mydata'
    }
})
knex.schema.createTable('cars', (table) => {
    table.increments("id")
    table.string('name')
    table.integer('price')
}).then(() => console.log("table created"))
    .catch((err) => { console.log("already exist") })



// insert

const cars = [
    { name: 'Audi', price: 52642 },
    { name: 'Mercedes', price: 57127 },
    { name: 'Skoda', price: 9000 },
    { name: 'Volvo', price: 29000 },
    { name: 'Bentley', price: 350000 },
    { name: 'Citroen', price: 21000 },
    { name: 'Hummer', price: 41400 },
    { name: 'Volkswagen', price: 21600 },
]

knex('cars').insert(cars).then(() => console.log("data inserted"))
    .catch((err) => { console.log("already inserted") })



r
//Knex.js selecting all rows

//We select all rows with the select function. This time we have chosen the table with the from function.
// Then we go through the returned array of rows and print the three fields.



knex.from('cars').select("*")
    .then((rows) => {
        for (row of rows) {
            console.log("selet all elements ",` ${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( "already selected") })



//**select from where */

//The SQL WHERE clause is used to define the condition to be met for the rows to be returned.



knex.from('cars').select("name", "price").where('price', '>', '50000')
    .then((rows) => {
        for (row of rows) {
            console.log("select from where ",`${row['name']} ${row['price']}`);
        }
    })
    .catch((err) => { console.log( "you are not select perticular element")})


//select OREDER BY
//We can order data with orderBy function.



knex.from('cars').select('name', 'price').orderBy('price', 'desc')
    .then((rows) => {
        for (row of rows) {
            console.log("oder element ",`${row['name']} ${row['price']}`);
        }
    }).catch((err) => { console.log( "you does not order any elemnet")})






knex('cars')
    .where('published_date', '<', 2000)
    .update({
      status: 'archived',
      thisKeyIsSkipped: undefined
    })


// remane the table

// knex.schema.renameTable('cars', 'old_users').then(()=>{
//         console.log("renamed")
//     }).catch(()=>{
//         console.log("not rename ")
//     })    

//drop the tables

// knex.schema.dropTableIfExists("old_users").then(()=>{
//     console.log("droptable successfully")
// }).catch(()=>{
//     console.log("not drop")
// })

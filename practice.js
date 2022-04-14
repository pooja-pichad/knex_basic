const knex=require("knex")({
    client:"mysql",
    connection:{
        host:"127.0.0.1",
        user:"root",
        password:"Pooja@123",
        database:"myname"
    }
})

// knex.schema.createTable('user',(table)=>{
//    table.string("pooja")
// }).then(()=>{
//     console.log("pooja")
// }).catch((err)=>{
//     console.log(err)
// })

knex('cars').insert(cars).then(()=>{
    console.log("")
}).catch((err)=>{
    console.log("")
})
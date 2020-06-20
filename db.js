const  sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./casa_criativa.db')

db.serialize(function(){

db.run( 
    `CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            img TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT
            );
    `)


const query = `
INSERT INTO ideas(
    img,
    title,
    category,
    description,
    link
) VALUES(?,?,?,?,?);
`
const values =[
"https://image.flaticon.com/icons/svg/2729/2729007.svg", 
"Cursos de Programação",
"Estudo",
"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
"http://rocketseat.com.br"
]

db.run(query,values, function(err){
    if (err) return console.log(err)

    console.log(this)
})    

})
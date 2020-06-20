//Usando Express
const express = require("express")
const server = express()


const ideas = [
    {   img:"https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category:"Estudo",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"http://rocketseat.com.br"
    },
    {   img:"https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category:"Saúde",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"http://rocketseat.com.br"
    },
    {   img:"https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category:"Mentalidade",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"http://rocketseat.com.br"
    },
    {   img:"https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category:"Família",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"http://rocketseat.com.br"
    },


]

//Definindo a pasta public para o __dirname
server.use(express.static("public"))
//Configurando o Nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views",{
    express: server,
    nocache: true , 
})


//Rotas da aplicação e funcionalidades
server.get("/", function(req,res){
    
    const reversedIdeas = [...ideas].reverse()
    
    let lastIdeas = []
    for(idea of reversedIdeas){
        if(lastIdeas.length <2){
            lastIdeas.push(idea)
        }
    }
    return res.render("index.html", {ideas: lastIdeas})
})

server.get("/ideias", function(req,res){
   
    const reversedIdeas = [...ideas].reverse()
   
    return res.render("ideias.html", {ideas: reversedIdeas})
})








server.listen(3000)
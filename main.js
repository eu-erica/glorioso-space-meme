const fs = require("fs")

fs.readFile("./arq1.txt" function(error, value){
    if(error){
    console.log("deu ruim", error.menssage)
    return
    }
    console.log(´conteudo: ${value})
})


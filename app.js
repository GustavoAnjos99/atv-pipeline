const { default: axios } = require("axios")
const express = require("express")
const app = express()

app.get("/cep_fetch/:cep", async (req, res) => {
    try {
        const cep = req.params.cep 
        const infoCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => response.json())
        res.json(infoCEP)
        console.log(infoCEP)
    } catch {
        console.log("Erro ao pequisar por cep [FETCH]")
    }
})

app.get("/cep_axios/:cep", async (req, res) => {
    try {
        const cep = req.params.cep 
        const infoCEP = await axios.request({
            method: "GET",
            url: `https://viacep.com.br/ws/${cep}/json/`
        })
        res.json(infoCEP.data)
    } catch {
        console.log("Erro ao pequisar por cep [AXIOS]")
    }
})


app.listen(3000, () => {
    console.log("SERVIDOR RODANDO NA PORTA 3000")
})
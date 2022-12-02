const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/getname", (req, res) => {
    res.send("Kanokwan Doungkeaw")
})

app.get("/getprofile", (req, res) => {
    let data = {
        name: "Kanokwan Doungkeaw",
        age: 20,
        apocalypse: "Be You. Do You. For You.",
        detail: "Six years of high school, science-mathematics, learning python programming, circuit connection, resulting in an interest in technology, Programming and choose to study in the field of technology.",
    }
    res.send(data)
})

app.get("/getabout", (req, res) => {
    let data = {
        name: "Kanokwan Doungkeaw",
        age: 20,
        email: "Kanokwan.doun@bumail.net",
        address: "Thailand",
    }
    res.send(data)
})

app.get("/getproject", (req, res) => {
    let data = {
        project_name: "Cup sleeves",
        project_description: "ออกแบบคัพสลิปของโปรเจคคาเฟ่วันเกิดคิมฮันบิน",
    }
    res.send(data)
})

app.get("/getcontact", (req, res) => {
    let data = {
        address: "Thailand",
        email: "Kanokwan.doun@bumail.net",
        phone_number: "0878953592",
    }
    res.send(data)
})

app.listen(3000, () => {
    console.log("Start server at port 3000.")
})
const express = require('express')
const app = express()

app.get('/api', (req, res)=>{
    res.json( {"users": ["userOne", "userTwo", "userThree"]} )
})

let puerto = 5000
app.listen(puerto, () => {
    console.log(`Server started at http://localhost:${puerto}`)
})
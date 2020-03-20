const express = require('express')

const app = express()

app.get('/', (req, res) => res.status(200).json({ date: new Date() }))

app.listen(3000, () => console.log('It is running!'))

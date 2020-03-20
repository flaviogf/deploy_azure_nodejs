const express = require('express')

const app = express()

const port = process.env.PORT || 3000

app.get('/', (req, res) => res.status(200).json({ date: new Date() }))

app.listen(port, () => console.log(`It is running at port: ${port}!`))

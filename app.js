const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	  res.send('Hello from my remote server!, I wan try add womething first')
})

app.listen(port, () => {
	  console.log(`Example app listening at http://localhost:${port}`)
})

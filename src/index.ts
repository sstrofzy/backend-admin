const express = require('express')
const app = express()

const port = process.env.PORT || 4000

app.get('/', (req: any, res: any) => {
    res.send('x')
})

app.listen(port, () => {
    console.log(`Server is running, ${port}`)
} )
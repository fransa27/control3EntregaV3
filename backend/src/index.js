const koa = require('koa')
const bodyParser = require('koa-body')
const router = require('./routes/index.js')
var cors = require('@koa/cors');//agregado

const app = new koa()
const port = 4000



app.use(cors()); //agregado
app.use(bodyParser({ multipart: true, urlencoded: true }))
app.use(router.routes())


app.listen(4000, () => {
    console.log(`Server is running on port ${port}`)
})

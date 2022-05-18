const express = require("express")
const userRouter = require("./routes/user.routes")
const postRouter = require("./routes/post.routes")

const PORT = process.env.PORT || 8080

// создадим из express сервер
const app = express()
app.use(express.json())
// url по которому router будет отрабатывать
app.use('/api', userRouter)
app.use('/api', postRouter)

// заставим сервер слушать порт
app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`))

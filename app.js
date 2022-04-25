const express = require('express')
const cors = require('cors')
// const userRouter = require('./routers/userRouter')
const userToData = require('./controller-layer/members-controller')
const membersRouter = require('./controller-layer/members-controller')
// const moviesRouter = require('./controller-layer/members-controller')
const server = express()

require('./configs/database');
server.use(cors())
server.use(express.json())
// server.use('/api/users' , userRouter)
// server.use('/api/members' , membersRouter)
server.use('api/users', userToData)
server.use('/api/members1' , membersRouter)
server.use('/api/subscribes' , membersRouter)

// server.use('/api/movies' , membersRouter)
server.use('/api' , membersRouter)


server.listen(8000 , () => console.log('On Air!'))
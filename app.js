
const express = require("express")
const app = express()

const cors = require("cors")
const {graphqlHTTP} = require("express-graphql")

const PORT =  process.env.PORT || 8080

const schema = require('./schemas')

app.use(cors())

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true,
}))


app.listen(PORT, () => { 
    console.log("Server listening on port: " + PORT)
})

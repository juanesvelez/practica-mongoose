const mongoose = require('mongoose')

const uri = 'mongodb+srv://juanesvelezm:ZxcVbnM2020!@cluster0-uydvd.azure.mongodb.net/mongoose?retryWrites=true&w=majority'

mongoose.connect(uri ,{
    useUnifiedTopology: true,
    useNewUrlParser: true,

})

mongoose.connection.on('open', _ =>{
    console.log('Database is connected to ', uri)
})

mongoose.connection.on('error', err => {
    console.log(err)
})
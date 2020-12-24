import express from 'express'
import mongoose from 'mongoose'
 


// App config
const app = express();
const port = process.env.PORT || 8001
const connection_url = `mongodb+srv://admin:gm2m8fOhr0JSqbnj@cluster0.btxcm.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares

// Db config
mongoose.connect(connection_url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})



//API endpoints
app.get('/',(req,res)=>{
    res.status(200).send('Hey Gublu');
})

// Listener
app.listen(port,()=>console.log(`listening on localhost:${port}`));

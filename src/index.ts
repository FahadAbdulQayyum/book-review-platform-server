import express from 'express';
import cors from 'cors';
import { mongoose } from './config';


const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(cors());

// const db = mongoose.connection;

// db.on('error', (err) => {
//     console.log('err', err);
// });

// db.on('open', async () => {
//     console.log('Db is running!')
// });

// app.get('/', (req, res) => {
//     res.send(`Running on Port ${PORT}`)
// })

// app.use('/', require('./routes'))

app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
})
import express from 'express'
import cors from 'cors'
import supervisors from './routes/supervisors.js';


const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', '*'),
    next();
});



app.get('/api/supervisors', (req, res) => supervisors(req, res));


app.listen(8080, console.log('server started'))


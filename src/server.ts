import express from 'express';
import dotenv from "dotenv"
import { mongodb } from './configs/db/db';
import compeny_rotes from './routes/commen/compeny_rotes'

const app = express();
const port = 3000;
dotenv.config()

app.use(express.json())
app.use('/api/compenys',compeny_rotes)

mongodb()



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});   
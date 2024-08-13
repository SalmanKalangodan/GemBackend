import express from 'express';
import dotenv from "dotenv"
import { mongodb } from './configs/db/db';
import compeny_rotes from './routes/compeny/super_admin/compeny_rotes'
import { errorHandler } from './middlewares/error/error_handler';
import cors from 'cors'
dotenv.config()

const app = express();

const port = process.env.PORT || 3000

app.use(cors({

}))

app.use(express.json())
app.use('/api/companies',compeny_rotes)

app.use(errorHandler)
mongodb()



app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});   
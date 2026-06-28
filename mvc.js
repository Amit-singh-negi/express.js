import express from'express'

import path from 'path'
import { fileURLToPath } from 'url';
import { handleUsers } from './controller/userController.js';
const app=express();

const __filename=fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);


app.set('views',path.join(__dirname, 'adminViews'))
app.set('view engine','ejs')
app.get('/user',handleUsers)
app.listen(3300)
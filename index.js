import express from 'express';
import path from 'path';
import hbs from 'hbs';

//problem line
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers'

//running fine if comment this line out
//Error: require() of ES Module

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

hbs.registerPartials(path.join(__dirname, 'views/partials'));

app.get('/', (req, res) => {
    res.render('home')
});

export default app;

//เทส $ vercel dev
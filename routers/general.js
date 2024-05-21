import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.query);
    const { q, w } = req.query;
    res.render('home', { q,w })
});

export default router;
const express = require('express')
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(201).send(req.body);
});

module.exports = router
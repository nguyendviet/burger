var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

router.get('/', (req, res)=>{
    burger.all((data)=>{
        var bugerObj = {
            burgers: data
        };

        console.log(bugerObj);
        res.render('index', bugerObj);
    });
});

// router.post(// to do);

// router.put(// to do);

// router.delete(// to do);

module.exports = router;

const burgerOrm = require('../models/burger');
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', async function(req, res){
  let burgers = await burgerOrm.getAllBurgers();
  console.log('[get /]', burgers);
  res.render('index', { burgers });
});

router.post('/api/burger', async function(req, res) {
  let result = await burgerOrm.addBurger(req.body.name);
  // reload page
  res.redirect("/"); 
});

router.put('/api/burger/:id', async function(req, res) {
  let result = await burgerOrm.setBurgerToDevoured(req.params.id);
  // reload page
  res.redirect("/"); 
});

module.exports = router;
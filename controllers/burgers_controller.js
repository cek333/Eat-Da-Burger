const burgerOrm = require('../models/burger');
const express = require('express');
const router = express.Router();

// Home page route
router.get('/', async function(req, res){
  let burgers = await burgerOrm.getAllBurgers();
  // console.log('[get /]', burgers);
  res.render('index', { burgers });
});

router.post('/api/burger', async function(req, res) {
  // console.log('[post /api/burger]', req.body);
  let result = await burgerOrm.addBurger(req.body.name);
  // console.log(`[post /api/burger] insertId=${result.insertId}`);
  // reload page
  res.redirect("/"); 
});

router.put('/api/burger/:id', async function(req, res) {
  // console.log(`[put /api/burger] id=${req.params.id}`);
  let result = await burgerOrm.setBurgerToDevoured(req.params.id);
  //console.log('[put /api/burger/:id]', result);
  res.json({ message: `${result.changedRows} updated!`}); 
});

router.delete('/api/burger/:id', async function(req, res) {
  let result = await burgerOrm.deleteBurger(req.params.id);
  res.json({message: `${req.params.id} deleted!`});
});
module.exports = router;
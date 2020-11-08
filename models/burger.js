const orm = require('../config/orm');

// Burger ORM operations. Note: All functions return promises.
function getAllBurgers() {
  return orm.selectAll('burgers');
}

function addBurger(name) {
  return orm.insertOne('burgers', { burger_name: name });
}

function setBurgerToDevoured(id) {
  return orm.updateOne('burgers', { devoured: true }, { id });
}

module.exports = { getAllBurgers, addBurger, setBurgerToDevoured };
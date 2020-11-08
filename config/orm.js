const db = require('./connection');

// Generic ORM operations

// selectAll(string)
function selectAll(table) {
  return db.query('SELECT * FROM ??', [table]);
}

// selectOne(string, obj-with-key-val-pair)
function selectOne(table, condition) {
  return db.query('SELECT * FROM ?? WHERE ?', [table, condition]);
}

// insertOne(string, obj-with-key-val-pairs)
function insertOne(table, fieldValMap) {
  return db.query('INSERT INTO ?? SET ?', [table, fieldValMap]);
}

// updateOne(string, obj-with-key-val-pairs, obj-with-key-val-pair)
function updateOne(table, fieldValMap, condition) {
  return db.query('UPDATE ?? SET ? WHERE ?', [table, fieldValMap, condition]);
}

// deleteOne(string, obj-with-key-val-pair)
function deleteOne(table, condition) {
  return db.query('DELETE FROM ?? WHERE ?', [table, condition]);
}

// close db connection
function close() {
  return db.close()
}

module.exports = { selectAll, selectOne, insertOne, updateOne, deleteOne, close };
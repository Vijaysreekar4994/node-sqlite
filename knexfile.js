const knex = require("knex");

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "ellipsys_test_db.db3",
  },
  useNullAsDefault: true,
});

module.exports = connectedKnex;

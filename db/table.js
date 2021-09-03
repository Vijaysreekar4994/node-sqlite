const knex = require("../knexfile");

function getAll() {
  return knex("oa_trf_src").select("*");
}

function getOne(id) {
  return knex("oa_trf_src").where("id", id);
}

function replaceValue(id, exp) {
  return knex("oa_trf_src").where("id", id).replace(exp);
}

module.exports = {
  getAll,
  replaceValue,
  getOne,
};

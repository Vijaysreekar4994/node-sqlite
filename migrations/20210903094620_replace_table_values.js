exports.up = function (knex) {
  knex.schema.createTable("oa_trf_src_red", (tbl) => {
    tbl.CAST(replace("", ".", ""), AS, INTEGER) > 0;
  });
};

exports.down = function (knex) {};

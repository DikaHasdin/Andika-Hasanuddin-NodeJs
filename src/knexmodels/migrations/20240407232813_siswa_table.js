/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('siswas', (table) => {
    table.integer("nis").primary()
    table.string("namaSisw")
    table.date("tanggalLahir")
    table.string("jenisKelamin")
    table.timestamps()
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('siswas')
};

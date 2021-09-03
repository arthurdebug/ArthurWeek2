
exports.up = function(knex) {
    return knex.schema.createTable("links", (table) => {
        table.increments();
        table.string("title");
        table.string("url");
        table.timestamps(false, true);
      }).then(() => {
        return knex.schema.createTable("tags", (table) => {
        table.increments();
        table.string("name");
      });})
      .then(() => {return knex.schema.createTable("links_tags", (table) => {
        table.increments();
        table.integer("link_id").unsigned();
        table.foreign("link_id").references("links.id");
        table.integer("tag_id").unsigned();
        table.foreign("tag_id").references("tags.id");
        table.timestamps(false, true);
      });})
};

exports.down = function(knex) {
    return knex.schema.dropTable("links_tags").then(() => {
        return knex.schema.dropTable("tags").then(() => {
            return knex.schema.dropTable("links")})})
};

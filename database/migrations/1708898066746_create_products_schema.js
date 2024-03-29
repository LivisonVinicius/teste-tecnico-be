"use strict";

const Schema = use("Schema");

class ProductsTableSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.text("description");
      table.text("category");
      table.decimal("price", 10, 2).notNullable();
      table.datetime("deleted_at").nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsTableSchema;

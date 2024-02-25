"use strict";

const Schema = use("Schema");

class ProductsTableSchema extends Schema {
  up() {
    this.create("products", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.text("description");
      table.decimal("price", 10, 2).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = ProductsTableSchema;

"use strict";

const Schema = use("Schema");

class AddressesTableSchema extends Schema {
  up() {
    this.create("addresses", (table) => {
      table.increments();
      table
        .integer("client_id")
        .unsigned()
        .references("id")
        .inTable("clients")
        .onDelete("CASCADE");
      table.string("country").notNullable();
      table.string("state").notNullable();
      table.string("city").notNullable();
      table.string("street").notNullable();
      table.string("number").notNullable();
      table.string("complement");
      table.timestamps();
    });
  }

  down() {
    this.drop("addresses");
  }
}

module.exports = AddressesTableSchema;

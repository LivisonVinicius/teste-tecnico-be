"use strict";

const Schema = use("Schema");

class PhonesTableSchema extends Schema {
  up() {
    this.create("phones", (table) => {
      table.increments();
      table
        .integer("client_id")
        .unsigned()
        .references("id")
        .inTable("clients")
        .onDelete("CASCADE");
      table.string("phone_number").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("phones");
  }
}

module.exports = PhonesTableSchema;

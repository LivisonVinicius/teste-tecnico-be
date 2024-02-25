const Schema = use("Schema");

class ClientsTableSchema extends Schema {
  up() {
    this.create("clients", (table) => {
      table.increments();
      table.string("name").notNullable();
      table.string("cpf").notNullable().unique();
      table.timestamps();
    });
  }

  down() {
    this.drop("clients");
  }
}

module.exports = ClientsTableSchema;

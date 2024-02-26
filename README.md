Teste Técnico para Back-End da Be - Documentação

Este documento descreve a solução desenvolvida para o Teste Técnico de Back-End da Be. A solução consiste em uma API RESTful conectada a um banco de dados MySQL, desenvolvida utilizando o framework Adonis (Node.js).

Configuração do Projeto
Pré-requisitos
Antes de iniciar, certifique-se de ter o Node.js e o MySQL instalados em sua máquina.

Instalação
Clone o repositório do projeto do GitHub:
```
git clone https://github.com/LivisonVinicius/teste-tecnico-be.git
```
Acesse o diretório do projeto:
```
cd nome-do-projeto
```
Instale as dependências do projeto:
```
npm install
```
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, incluindo as credenciais do banco de dados.

Configuração do Banco de Dados
Crie o banco de dados no terminado do MySQL e com o mesmo nome colocado no .env do DB_DATABASE

Execute as migrações para criar as tabelas no banco de dados:
```
node ace migration:run
```

Uso da API
Uso da API
A API possui as seguintes rotas:

Usuários
Cadastro de Usuário (signup)
Método HTTP: POST
Endpoint: /signup
Descrição: Cadastra um novo usuário no sistema.
Corpo da Requisição: Deve incluir o email e a senha do usuário.
Exemplo de corpo da requisição:
```
{
  "username": "exemplo22",
  "email": "exemplo5@example.com",
  "password": "senha123"
}
```

Login (login)
Método HTTP: POST
Endpoint: /login
Descrição: Realiza o login de um usuário cadastrado.
Corpo da Requisição: Deve incluir o email e a senha do usuário.
Exemplo de corpo da requisição:
```
{
  "email": "usuario@exemplo.com",
  "password": "senha123"
}
```

Clientes
Listar Todos os Clientes Cadastrados (index)
Método HTTP: GET
Endpoint: /clients
Descrição: Retorna uma lista com todos os clientes cadastrados no sistema, incluindo apenas os dados principais.
Autenticação: Token JWT no cabeçalho da requisição.
Detalhar um Cliente e suas Vendas (show)
Método HTTP: GET
Endpoint: /clients/:id
Descrição: Retorna os detalhes de um cliente, incluindo suas vendas mais recentes.
Autenticação: Token JWT no cabeçalho da requisição.
Adicionar um Cliente (store)
Método HTTP: POST
Endpoint: /clients
Descrição: Adiciona um novo cliente ao sistema.
Corpo da Requisição: Deve incluir os dados do cliente.
Exemplo de corpo da requisição:

```
{
  "name": "Nome do Cliente",
  "cpf": "123.456.789-10"
}

```
Editar um Cliente (update)
Método HTTP: PUT
Endpoint: /clients/:id
Descrição: Edita os dados de um cliente existente no sistema.
Corpo da Requisição: Deve incluir os novos dados do cliente.
Exemplo de corpo da requisição:

```
{
  "name": "Novo Nome do Cliente",
  "cpf": "987.654.321-00"
}
```
Excluir um Cliente e suas Vendas (delete)
Método HTTP: DELETE
Endpoint: /clients/:id
Descrição: Exclui um cliente e todas as suas vendas associadas do sistema.
Autenticação: Token JWT no cabeçalho da requisição.
Produtos
Listar Todos os Produtos Cadastrados (index)
Método HTTP: GET
Endpoint: /products
Descrição: Retorna uma lista com todos os produtos cadastrados no sistema, incluindo apenas os dados principais, ordenados alfabeticamente.
Autenticação: Token JWT no cabeçalho da requisição.
Detalhar um Produto (show)
Método HTTP: GET
Endpoint: /products/:id
Descrição: Retorna os detalhes de um produto específico.
Autenticação: Token JWT no cabeçalho da requisição.

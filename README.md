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

Criei um arquivo de thunder client com todas as requisições já prontas que são alternativa ao trabalho manual de cópia de endereço e bodies de teste do README

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

Endpoint: /client

Descrição: Retorna uma lista com todos os clientes cadastrados no sistema, incluindo apenas os dados principais.

Autenticação: Token JWT no cabeçalho da requisição.


Detalhar um Cliente e suas Vendas (show)

Método HTTP: GET

Endpoint: /client/:id

Descrição: Retorna os detalhes de um cliente, incluindo suas vendas mais recentes.

Autenticação: Token JWT no cabeçalho da requisição.


Adicionar um Cliente (store)

Método HTTP: POST

Endpoint: /client

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

Endpoint: /client/:id

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

Endpoint: /client/:id

Descrição: Exclui um cliente e todas as suas vendas associadas do sistema.

Autenticação: Token JWT no cabeçalho da requisição.


Produtos

Listar Todos os Produtos Cadastrados (index)

Método HTTP: GET

Endpoint: /product

Descrição: Retorna uma lista com todos os produtos cadastrados no sistema, incluindo apenas os dados principais, ordenados alfabeticamente.

Autenticação: Token JWT no cabeçalho da requisição.


Detalhar um Produto (show)

Método HTTP: GET

Endpoint: /product/:id

Descrição: Retorna os detalhes de um produto específico.

Autenticação: Token JWT no cabeçalho da requisição.


Criar um Produto (Store)

Descrição: Esta rota permite criar um novo produto no sistema.

Método HTTP: POST

URL: /product

Parâmetros do Corpo (Body): Os dados do produto a serem criados, incluindo nome, descrição, categoria e preço.

Autenticação: Requer autenticação do usuário.

Exemplo de Corpo (Body) da Requisição:

```
{
  "name": "Produto Novo",
  "description": "Descrição do Produto Novo",
  "category": "Categoria do Produto",
  "price": 19.99
}
```
Resposta de Sucesso:

Código: 201 (Created)
Corpo da Resposta:

```
{
  "message": "Produto criado com sucesso.",
  "product": {
    "id": 1,
    "name": "Produto Novo",
    "description": "Descrição do Produto Novo",
    "category": "Categoria do Produto",
    "price": 19.99,
    "created_at": "2024-02-29T12:00:00.000Z",
    "updated_at": "2024-02-29T12:00:00.000Z"
  }
}
```
Possíveis Erros:
Código: 400 (Bad Request)
Mensagem: Erro ao criar o produto. Verifique se todos os campos necessários foram fornecidos e se estão corretos.

Código: 401 (Unauthorized)
Mensagem: Não autorizado. Acesso negado. É necessário estar logado para acessar esta rota.

Código: 500 (Internal Server Error)
Mensagem: Erro interno do servidor. Entre em contato com o administrador do sistema para obter assistência.


Editar um Produto (Update)

Descrição: Esta rota permite editar os detalhes de um produto existente no sistema.

Método HTTP: PUT

URL: /api/products/:id

Parâmetros do Corpo (Body): Os novos dados do produto a serem atualizados, incluindo nome, descrição, categoria e preço.

Autenticação: Requer autenticação do usuário.

Exemplo de Corpo (Body) da Requisição:

```
{
  "name": "Novo Nome do Produto",
  "description": "Nova Descrição do Produto",
  "category": "Nova Categoria do Produto",
  "price": 24.99
}
```

Resposta de Sucesso:

Código: 200 (OK)

Corpo da Resposta:
```
{
  "message": "Produto atualizado com sucesso.",
  "product": {
    "id": 1,
    "name": "Novo Nome do Produto",
    "description": "Nova Descrição do Produto",
    "category": "Nova Categoria do Produto",
    "price": 24.99,
    "created_at": "2024-02-29T12:00:00.000Z",
    "updated_at": "2024-02-29T12:30:00.000Z"
  }
}
```
Possíveis Erros: (mesmos erros que na criação)

Exclusão Lógica de um Produto (Delete)

Descrição: Esta rota permite marcar um produto como excluído no sistema, realizando uma exclusão lógica.

Método HTTP: DELETE

URL: /product/:id

Autenticação: Requer autenticação do usuário.

Resposta de Sucesso:

Código: 200 (OK)

Corpo da Resposta:

```
{
  "message": "Produto excluído com sucesso."
}
```
Possíveis Erros: (mesmos erros que na criação)

Vendas

Registrar Venda de 1 Produto a 1 Cliente (Store)

Descrição: Esta rota permite registrar uma venda de um produto a um cliente específico.

Método HTTP: POST

URL: /sale

Parâmetros do Corpo (Body): Os detalhes da venda, incluindo o ID do cliente, o ID do produto, a quantidade, o preço unitário e o preço total.


Observações e Limitações


Durante o desenvolvimento deste projeto, encontrei algumas limitações que gostaria de destacar:

Implementação do JWT Token

Devido a restrições de tempo e à utilização de uma versão ultrapassada do framework Adonis, não consegui implementar completamente a autenticação com JWT (JSON Web Tokens). Embora a lógica para a autenticação esteja pronta e documentada, a aplicação real do token JWT não foi realizada. Isso ocorreu devido à necessidade de atualizar para uma versão mais recente do Adonis, o que demandaria mais tempo e alterações significativas na estrutura do projeto. Assim, a autenticação JWT não está funcionando como esperado, e as rotas protegidas não estão sendo devidamente autenticadas.

Limitações na Versão do Adonis

O projeto foi desenvolvido utilizando uma versão mais antiga do framework Adonis. Como resultado, algumas funcionalidades mais recentes podem não estar disponíveis ou podem exigir modificações significativas para serem implementadas. Por exemplo, a ausência de determinados métodos e funcionalidades pode afetar a maneira como as consultas ao banco de dados são realizadas e como os modelos são manipulados.

Melhorias Futuras

Para melhorar este projeto, uma possível abordagem seria atualizar para a versão mais recente do Adonis e implementar a autenticação JWT de acordo com as práticas recomendadas. Além disso, seria necessário revisar e refatorar partes do código para garantir compatibilidade e eficiência com a versão mais recente do framework.
Melhorias no banco de dados com uma imagem melhor do projeto que está sendo desenvolvido, como produtos vendidos, usuário já existentes, utilização de seed para popular o banco de dados e implementação de testes.

Observações

Implementação Incompleta:

Devido a restrições de tempo, algumas funcionalidades não foram totalmente implementadas ou testadas. Isso inclui:
Tratamento completo de erros para casos de unauthorize ou validação de corpo de requisição inadequado.

Possíveis melhorias na segurança, como validação adicional de entrada ou tratamento de exceções mais robusto.

Casos de teste adicionais para garantir a estabilidade e a confiabilidade do sistema em todas as situações.

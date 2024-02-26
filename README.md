Teste Técnico para Back-End da Be - Documentação
Este documento descreve a solução desenvolvida para o Teste Técnico de Back-End da Be. A solução consiste em uma API RESTful conectada a um banco de dados MySQL, desenvolvida utilizando o framework Adonis (Node.js).

Configuração do Projeto
Pré-requisitos
Antes de iniciar, certifique-se de ter o Node.js e o MySQL instalados em sua máquina.

Instalação
Clone o repositório do projeto do GitHub:
```
git clone <link-do-repositorio>
```
Acesse o diretório do projeto:
bash
Copy code
cd nome-do-projeto
Instale as dependências do projeto:
bash
Copy code
npm install
Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e configure as variáveis de ambiente necessárias, incluindo as credenciais do banco de dados.

Configuração do Banco de Dados
Execute as migrações para criar as tabelas no banco de dados:
bash
Copy code
node ace migration:run
Uso da API

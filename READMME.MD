
# Curso: ORM com Node.js - Desenvolvendo uma API com Sequelize e SQLite e Curso: ORM com Node.js: avançando nas funcionalidades do Sequelize

Este repositório contém os códigos desenvolvidos durante os cursos realizados na plataforma Alura sobre ORM com Node.js e Sequelize. O objetivo é construir e aprimorar uma API utilizando o Sequelize para gerenciar o banco de dados SQLite, seguindo boas práticas de desenvolvimento back-end.

## Plataforma

- **Alura**

## Cursos

### 1. ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite

Neste curso, foram explorados os seguintes conceitos:

#### Introdução ao ORM e Sequelize

- O que são ORMs e por que são utilizados no desenvolvimento back-end.
- Diferenças entre utilizar SQL diretamente em um código JavaScript e usar métodos de um ORM.
- Uso do `sequelize-cli` para gerar a base do projeto.
- Configuração do Sequelize e conexão com a base de dados.

#### Modelos e Mapeamento de Dados

- Criação e automação de modelos com o `sequelize-cli`.
- Tipos de dados SQL e adaptação pelo Sequelize.
- Migrações para mudanças rastreáveis no banco de dados.
- Uso de seeds para popular o banco com dados de teste.

#### Padrão MVC e Organização do Projeto

- Implementação do padrão MVC (Model-View-Controller).
- Controllers para gerenciar requisições HTTP e rotas organizadas.
- Camada de serviços (Services) para separar a lógica de negócio.
- Herança de classe para reaproveitar métodos entre Controllers e Services.

#### Associações e Relacionamentos Entre Tabelas

- Métodos do Sequelize para criar relações entre tabelas.
- Diferenças entre associações em migrações e entre modelos.
- Padrões de relacionamento (1:1, 1:n, n:m) e como aplicá-los.

#### Funcionalidades Implementadas

- **CRUD Completo:** Operações de Create, Read, Update e Delete em diversas entidades.
- **Associações de Tabelas:** Relacionamento entre modelos.
- **Migrações e Seeds:** Automação da criação de tabelas e popular o banco com dados de teste.

### 2. ORM com Node.js: avançando nas funcionalidades do Sequelize

Neste curso, foram abordados tópicos mais avançados:

#### Estrutura do Projeto e Soft Delete

- Estrutura do projeto para refletir camadas da aplicação.
- Implementação de soft delete com Sequelize.
- Criação de novas migrações para alterações específicas usando `queryInterface`.

#### Escopos e Validações

- Uso de escopos de modelo para abstração de lógicas comuns em consultas.
- Criação de escopos de associação padrão e específicos.
- Métodos built-in de validação do Sequelize e implementação de validações refinadas.
- Diferença entre validação e constraint.

#### Refatoração e Métodos Avançados

- Trabalhando com métodos “mixin” gerados a partir das associações.
- Criação de escopos de associação diversos.
- Utilização de `findOne` para buscar registros por qualquer coluna.
- Refatoração do código para finders genéricos e funções auxiliares.

#### Operadores e Consultas Diretas

- Uso de operadores de comparação.
- Utilização de query params.
- Métodos avançados como `findAndCountAll`.
- Execução de consultas SQL diretamente com Sequelize.

#### Transações

- Garantia da integridade das operações com transações.
- Implementação de transações gerenciadas com Sequelize.

## Tecnologias Utilizadas

- **Node.js**
- **Express**
- **SQLite**
- **Sequelize**

## Como Executar o Código

1. Clone o repositório:

   ```bash
   git clone https://github.com/MatheusRFilho/Aprendendo-sqlite-e-sequelime
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd nome-do-repositorio
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Execute as migrações e seeds:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

5. Execute o código:

   ```bash
   npm start
   ```

## Autor

- **Matheus Filho** - [LinkedIn](https://www.linkedin.com/in/matheus-filho-90015917a/) - [GitHub](https://github.com/MatheusRFilho)

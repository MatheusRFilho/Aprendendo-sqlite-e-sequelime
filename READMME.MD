
# Curso: ORM com Node.js - Desenvolvendo uma API com Sequelize e SQLite

Este repositório contém os códigos desenvolvidos durante o curso **ORM com Node.js: desenvolvendo uma API com Sequelize e SQLite**, realizado na plataforma Alura. O objetivo do curso foi construir uma API do zero utilizando o ORM Sequelize para conectar e gerenciar o banco de dados SQLite, seguindo boas práticas de desenvolvimento back-end.

## Plataforma

- **Alura**

## Tópicos Abordados

Neste curso, foram explorados os seguintes conceitos:

### Introdução ao ORM e Sequelize

- O que são ORMs e os motivos pelos quais são utilizados no desenvolvimento back-end.
- Diferenças entre utilizar SQL diretamente em um código JavaScript e utilizar métodos de um ORM para fazer a mesma tarefa.
- Como utilizar o `sequelize-cli`, ferramenta de linha de comando do Sequelize, para gerar a base de um projeto como ponto de partida.
- Instalação e configuração do Sequelize através dos arquivos próprios de configuração.
- Uso do Sequelize para conectar a API a uma base de dados.

### Modelos e Mapeamento de Dados

- O que são modelos e como eles representam e mapeiam dados de tabelas no banco de dados.
- Automação da criação de modelos com o `sequelize-cli`.
- Tipos de dados em SQL e como o Sequelize adapta esses tipos para diferentes bancos de dados.
- Conceito de migrações em ORMs e como utilizá-las para fazer mudanças rastreáveis e incrementais no banco de dados.
- Uso de seeds para popular o banco com dados de teste através do `sequelize-cli`.

### Padrão MVC e Organização do Projeto

- O que é o padrão de arquitetura MVC (Model-View-Controller) e a função de cada uma das suas camadas.
- Implementação de controllers para gerenciar requisições HTTP e organizar rotas em arquivos separados.
- Função da camada de serviços (Services) e como utilizá-la para separar a lógica de negócio.
- Como aplicar herança de classe para reaproveitar métodos entre Controllers e Services.

### Associações e Relacionamentos Entre Tabelas

- Como utilizar métodos do Sequelize para associar modelos e criar relações entre tabelas.
- Diferenças entre associações em migrações e associações entre modelos.
- Padrões de relacionamento entre entidades (1:1, 1:n, n:m) e como identificar e aplicar o relacionamento adequado para cada caso.

### Avançando com o Sequelize

- Como usar herança de classe para adicionar Services e Controllers sem duplicar métodos de CRUD.
- Utilização de métodos especiais criados com associações para adicionar funcionalidades avançadas à API.

## Estrutura do Código

O código está organizado seguindo o modelo MVC, com a utilização do Sequelize para interagir com o banco de dados SQLite.

### Funcionalidades Implementadas

- **CRUD Completo:** Implementação das operações de Create, Read, Update e Delete em diversas entidades da aplicação.
- **Associações de Tabelas:** Relacionamento entre modelos utilizando os padrões 1:1, 1:n e n:m.
- **Migrações e Seeds:** Automação da criação de tabelas e população do banco de dados com dados de teste.

### Exemplos de Uso

#### Listar Todos as pessoas


```javascript
router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));
```

#### Criar uma Nova Pessoa

```javascript
router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
```

#### Associar matriculas a uma pessoa

```javascript
router.post('/pessoas/:estudanteId/matriculas', (req, res) => matriculaController.criaNovo(req, res));
```

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

4. Crie um arquivo chamada database.sqlite na raiz do projeto.

5. Execute as migrações e seeds:

   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

6. Execute o código:

   ```bash
   npm start
   ```

## Autor

- **Matheus Filho** - [LinkedIn](https://www.linkedin.com/in/matheus-filho-90015917a/) - [GitHub](https://github.com/MatheusRFilho)
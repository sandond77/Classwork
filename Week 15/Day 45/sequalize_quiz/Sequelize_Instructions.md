* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?

    Sequelize is a promise-based ORM for Node.js v4 and up. It supports the dialects PostgreSQL, MySQL, SQLite and MSSQL and features solid transaction support, relations, read replication and more.

  	- Answer: What advantages does it offer?

Pros of ORM:
- Portable: ORM is used so that you write your structure once and ORM layer will handle the final statement that is   suitable for the configured DBMS. This is an excellent advantage as simple operation like limit is added as 'limit 0,100' at the end of select statement in MySQL, while it is 'select top 100 from table' in MS SQL.
- Nesting of data: in case of relationships, the ORM layer will pull the data automatically for you.
- Single language: you don't to know SQL language to deal the database only your development language.
  Adding is like modifying: most ORM layers treat adding new data (SQL insert) and updating data (SQL Update) in the same way, these makes writing and maintaining code a piece of cake.
- Uses js
- Works with major databases like MySQL, PostGres, SQLite, MsSql
- Abstracts the complexity of writing SQL queries 
- Easy to test
- Offers support for syncing databases
- Validation, restricts to specific forms of data


Cons of ORM
Slow: if you compare the performance between writing raw SQL or using ORM, you will find raw much faster as there is no translation layer.
Tuning: if you know SQL language and your default DBMS well, then you can use your knowledge to make queries faster but this is not the same when using ORM.
Complex Queries: some ORM layers have limitations especially when executing queries so sometimes you will find yourself writing raw SQL.
Studying: in case you are working in a big data project and you are not happy with the performance, you will find yourself studying the ORM layer so that you can minimize the DBMS hits.

  	- Answer: How do I install it? How do I incorporate it into my app?
// Using NPM
$ npm install sequelize

# And one of the following:
$ npm install pg pg-hstore
$ npm install mysql2
$ npm install sqlite3
$ npm install tedious // MSSQL

const Sequelize = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'|'sqlite'|'postgres'|'mssql',

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


  	- Answer: What the heck is a Sequelize model? What role will it play?

A Model represents a table in the database. Sometimes you might also see it referred to as model, or simply as factory. This class should not be instantiated directly, it is created using sequelize.define, and already created models can be loaded using sequelize.import. ITS A MYSQL SCHEMA SUCKAS



  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 

      var table = sequelize.define("table",{
        Country: {Sequalize.STRING},
        PhoneCode: {Sequalize.INTEGER},
        Capital: {Sequalize.STRING},
        IndepedenceYear: {Sequalize.INTEGER}
        },
        {
          freezeTableName: true
          })

  		- How would I query for all the records where the Independence Year was less than 50 years ago?

      var Op = Sequelize.Op;

      table.findAll({ 
        where: {
          IndependenceYear: {
            $gt: new Date().getFullYear() - 50
          }
        }
        .then(function(results){
        console.log(results)
        })

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

      table.findAll({
        offset:2,
        limit: 2,
        order: [(sequalize.col('IndependenceYear'),'DESC')]
        })

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? '
    
  ```

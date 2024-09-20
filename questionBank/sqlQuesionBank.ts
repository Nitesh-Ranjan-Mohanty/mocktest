interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  example?: string;
}

export const sqlQuestions: Question[] = [
  {
    id: 1,
    question: "What does SQL stand for?",
    options: [
      "Structured Query Language",
      "Simple Query Language",
      "Sequential Query Language",
      "Standard Query Language",
    ],
    answer: "Structured Query Language",
    explanation:
      "SQL stands for Structured Query Language, which is used for managing and manipulating relational databases.",
    topic: "sql",
    example: "SELECT * FROM users;",
  },
  {
    id: 2,
    question: "What is a primary key in SQL?",
    options: [
      "A unique identifier for a record",
      "A foreign key reference",
      "An indexed column",
      "A data type",
    ],
    answer: "A unique identifier for a record",
    explanation:
      "A primary key is a column or a set of columns that uniquely identifies each record in a table.",
    topic: "sql",
    example: "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100));",
  },
  {
    id: 3,
    question: "Which SQL statement is used to retrieve data from a database?",
    options: ["GET", "SELECT", "RETRIEVE", "PICK"],
    answer: "SELECT",
    explanation: "The SELECT statement is used to query data from a database.",
    topic: "sql",
    example: "SELECT * FROM users;",
  },
  {
    id: 4,
    question: "What is a foreign key?",
    options: [
      "A key that uniquely identifies a record",
      "A key that links two tables together",
      "A primary key in another table",
      "A type of index",
    ],
    answer: "A key that links two tables together",
    explanation:
      "A foreign key is a column or a set of columns in one table that refers to the primary key in another table, establishing a relationship between the two.",
    topic: "sql",
    example:
      "CREATE TABLE orders (id INT PRIMARY KEY, user_id INT, FOREIGN KEY (user_id) REFERENCES users(id));",
  },
  {
    id: 5,
    question: "What SQL clause is used to filter records?",
    options: ["WHERE", "FILTER", "HAVING", "SELECT"],
    answer: "WHERE",
    explanation:
      "The WHERE clause is used to specify conditions that filter which records to retrieve.",
    topic: "sql",
    example: "SELECT * FROM users WHERE age > 18;",
  },
  {
    id: 6,
    question: "What is the purpose of the GROUP BY clause?",
    options: [
      "To sort records",
      "To group records that have the same values in specified columns",
      "To filter records",
      "To join tables",
    ],
    answer: "To group records that have the same values in specified columns",
    explanation:
      "The GROUP BY clause is used in collaboration with aggregate functions to group the result set by one or more columns.",
    topic: "sql",
    example: "SELECT COUNT(*), country FROM users GROUP BY country;",
  },
  {
    id: 7,
    question: "Which SQL statement is used to insert new records into a table?",
    options: ["INSERT INTO", "ADD RECORD", "PUT", "CREATE"],
    answer: "INSERT INTO",
    explanation:
      "The INSERT INTO statement is used to add new records to a table.",
    topic: "sql",
    example: "INSERT INTO users (name, age) VALUES ('Alice', 25);",
  },
  {
    id: 8,
    question: "What SQL command is used to delete records from a table?",
    options: ["DELETE FROM", "REMOVE", "DROP", "CLEAR"],
    answer: "DELETE FROM",
    explanation:
      "The DELETE FROM statement is used to remove records from a table based on specified conditions.",
    topic: "sql",
    example: "DELETE FROM users WHERE name = 'Alice';",
  },
  {
    id: 9,
    question: "What is the function of the ORDER BY clause?",
    options: [
      "To sort the result set",
      "To filter records",
      "To group records",
      "To specify columns",
    ],
    answer: "To sort the result set",
    explanation:
      "The ORDER BY clause is used to sort the result set in either ascending or descending order based on one or more columns.",
    topic: "sql",
    example: "SELECT * FROM users ORDER BY age DESC;",
  },
  {
    id: 10,
    question: "What is an aggregate function?",
    options: [
      "A function that performs a calculation on a set of values",
      "A function that returns a single value",
      "A function that aggregates data from multiple tables",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "Aggregate functions perform calculations on a set of values and return a single value, often used in conjunction with GROUP BY.",
    topic: "sql",
    example: "SELECT AVG(age) FROM users;",
  },
  {
    id: 11,
    question: "Which SQL keyword is used to prevent duplicate records?",
    options: ["DISTINCT", "UNIQUE", "DIFFERENT", "ONLY"],
    answer: "DISTINCT",
    explanation:
      "The DISTINCT keyword is used to return only distinct (different) values in a result set.",
    topic: "sql",
    example: "SELECT DISTINCT country FROM users;",
  },
  {
    id: 12,
    question: "What is a JOIN in SQL?",
    options: [
      "A way to combine rows from two or more tables",
      "A method to filter records",
      "A way to group records",
      "A way to order records",
    ],
    answer: "A way to combine rows from two or more tables",
    explanation:
      "A JOIN operation is used to combine rows from two or more tables based on a related column between them.",
    topic: "sql",
    example:
      "SELECT users.name, orders.amount FROM users JOIN orders ON users.id = orders.user_id;",
  },
  {
    id: 13,
    question: "What is a subquery?",
    options: [
      "A query within another query",
      "A temporary table",
      "An indexed query",
      "A data type",
    ],
    answer: "A query within another query",
    explanation:
      "A subquery is a query nested inside another query, often used to provide values to the main query.",
    topic: "sql",
    example: "SELECT name FROM users WHERE id IN (SELECT user_id FROM orders);",
  },
  {
    id: 14,
    question: "What is the purpose of the HAVING clause?",
    options: [
      "To filter records after grouping",
      "To sort records",
      "To join tables",
      "To specify conditions before grouping",
    ],
    answer: "To filter records after grouping",
    explanation:
      "The HAVING clause is used to filter records after a GROUP BY operation has been performed.",
    topic: "sql",
    example:
      "SELECT country, COUNT(*) FROM users GROUP BY country HAVING COUNT(*) > 10;",
  },
  {
    id: 15,
    question: "What does the COUNT() function do?",
    options: [
      "Counts the number of rows",
      "Counts unique values",
      "Counts non-null values",
      "All of the above",
    ],
    answer: "All of the above",
    explanation:
      "The COUNT() function can count the total number of rows, unique values, or non-null values in a specified column.",
    topic: "sql",
    example: "SELECT COUNT(*) FROM users;",
  },
  {
    id: 16,
    question: "What is normalization in databases?",
    options: [
      "Organizing data to reduce redundancy",
      "Creating indexes",
      "Improving performance",
      "All of the above",
    ],
    answer: "Organizing data to reduce redundancy",
    explanation:
      "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity.",
    topic: "sql",
    example: "Creating separate tables for related data.",
  },
  {
    id: 17,
    question: "What is an index in SQL?",
    options: [
      "A performance optimization technique",
      "A unique key",
      "A type of data type",
      "A primary key",
    ],
    answer: "A performance optimization technique",
    explanation:
      "An index is a database object that improves the speed of data retrieval operations on a table.",
    topic: "sql",
    example: "CREATE INDEX idx_user_name ON users(name);",
  },
  {
    id: 18,
    question: "What is the purpose of the LIMIT clause?",
    options: [
      "To restrict the number of records returned",
      "To filter records",
      "To sort records",
      "To group records",
    ],
    answer: "To restrict the number of records returned",
    explanation:
      "The LIMIT clause is used to specify the maximum number of records to return in a query result.",
    topic: "sql",
    example: "SELECT * FROM users LIMIT 10;",
  },
  {
    id: 19,
    question: "What is a view in SQL?",
    options: ["A virtual table", "A stored procedure", "A trigger", "An index"],
    answer: "A virtual table",
    explanation:
      "A view is a virtual table based on the result of a SELECT query, allowing for simplified access to complex queries.",
    topic: "sql",
    example: "CREATE VIEW user_view AS SELECT name, age FROM users;",
  },
  {
    id: 20,
    question: "What is the difference between UNION and UNION ALL?",
    options: [
      "UNION removes duplicates, UNION ALL does not",
      "UNION returns unique rows, UNION ALL returns all rows",
      "Both are the same",
      "None of the above",
    ],
    answer: "UNION removes duplicates, UNION ALL does not",
    explanation:
      "The UNION operator combines the results of two or more SELECT statements, removing duplicates, while UNION ALL includes all records.",
    topic: "sql",
    example: "SELECT name FROM users UNION SELECT name FROM admins;",
  },
  {
    id: 21,
    question: "What does the EXISTS operator do?",
    options: [
      "Checks for the existence of rows",
      "Checks for non-null values",
      "Checks for duplicates",
      "Checks for data types",
    ],
    answer: "Checks for the existence of rows",
    explanation:
      "The EXISTS operator is used to test for the existence of any record in a subquery.",
    topic: "sql",
    example:
      "SELECT * FROM users WHERE EXISTS (SELECT * FROM orders WHERE orders.user_id = users.id);",
  },
  {
    id: 22,
    question: "What is a stored procedure?",
    options: [
      "A set of SQL statements stored in the database",
      "A temporary table",
      "An index",
      "A data type",
    ],
    answer: "A set of SQL statements stored in the database",
    explanation:
      "A stored procedure is a group of SQL statements that can be executed as a single unit, improving performance and security.",
    topic: "sql",
    example: "CREATE PROCEDURE my_procedure AS BEGIN SELECT * FROM users; END;",
  },
  {
    id: 23,
    question: "What is a trigger in SQL?",
    options: [
      "A stored procedure that automatically runs on certain events",
      "An index",
      "A data type",
      "A virtual table",
    ],
    answer: "A stored procedure that automatically runs on certain events",
    explanation:
      "A trigger is a special type of stored procedure that automatically executes in response to specific events on a table, such as INSERT, UPDATE, or DELETE.",
    topic: "sql",
    example:
      "CREATE TRIGGER my_trigger AFTER INSERT ON users FOR EACH ROW BEGIN INSERT INTO audit_table VALUES (NEW.id); END;",
  },
  {
    id: 24,
    question: "What does the COALESCE function do?",
    options: [
      "Returns the first non-null value",
      "Returns the maximum value",
      "Returns the minimum value",
      "Returns the average",
    ],
    answer: "Returns the first non-null value",
    explanation:
      "The COALESCE function takes a list of values and returns the first non-null value in that list.",
    topic: "sql",
    example: "SELECT COALESCE(name, 'No Name') FROM users;",
  },
  {
    id: 25,
    question: "What is the difference between DELETE and TRUNCATE?",
    options: [
      "DELETE removes specific rows, TRUNCATE removes all rows",
      "DELETE cannot be rolled back, TRUNCATE can",
      "Both are the same",
      "DELETE is faster than TRUNCATE",
    ],
    answer: "DELETE removes specific rows, TRUNCATE removes all rows",
    explanation:
      "The DELETE statement removes specific rows based on a condition, while TRUNCATE removes all rows from a table and resets any identity columns.",
    topic: "sql",
    example: "DELETE FROM users WHERE age < 18; TRUNCATE TABLE users;",
  },
];

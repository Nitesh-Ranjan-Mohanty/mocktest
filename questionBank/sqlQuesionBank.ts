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
      "Standard Query Language",
      "Simple Query Language",
      "Structured Queue Language",
    ],
    answer: "Structured Query Language",
    explanation:
      "SQL stands for Structured Query Language. It is a language used for managing and manipulating databases.",
    topic: "sql",
    example: "",
  },
  {
    id: 2,
    question: "What is a primary key in SQL?",
    options: [
      "A unique identifier for each record in a table",
      "A foreign key in a table",
      "A column that allows null values",
      "A duplicate key in a table",
    ],
    answer: "A unique identifier for each record in a table",
    explanation:
      "A primary key is a column or group of columns that uniquely identifies each row in a table. It cannot contain NULL values and must be unique.",
    topic: "sql",
    example: "CREATE TABLE Students (ID int PRIMARY KEY, Name varchar(255));",
  },
  {
    id: 3,
    question: "What is the purpose of a foreign key in SQL?",
    options: [
      "To establish a relationship between two tables",
      "To act as a primary key",
      "To store temporary data",
      "To index a table",
    ],
    answer: "To establish a relationship between two tables",
    explanation:
      "A foreign key is a column or group of columns in a table that creates a link between the data in two tables by referencing the primary key of another table.",
    topic: "sql",
    example:
      "CREATE TABLE Orders (OrderID int, CustomerID int, FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID));",
  },
  {
    id: 4,
    question: "What is a JOIN in SQL?",
    options: [
      "A method to combine rows from two or more tables",
      "A way to delete data from a table",
      "A function to find duplicate data",
      "A method to create a new table",
    ],
    answer: "A method to combine rows from two or more tables",
    explanation:
      "A JOIN clause is used to combine rows from two or more tables based on a related column between them.",
    topic: "sql",
    example:
      "SELECT Customers.CustomerID, Orders.OrderID FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
  },
  {
    id: 5,
    question: "What is a UNION in SQL?",
    options: [
      "A method to combine the results of two SELECT queries",
      "A command to delete data",
      "A type of index",
      "A way to group data",
    ],
    answer: "A method to combine the results of two SELECT queries",
    explanation:
      "The UNION operator is used to combine the result-set of two or more SELECT statements. Each SELECT must have the same number of columns in the result-set with the same data types.",
    topic: "sql",
    example: "SELECT City FROM Customers UNION SELECT City FROM Suppliers;",
  },
  {
    id: 6,
    question: "What is a subquery in SQL?",
    options: [
      "A query inside another query",
      "A primary query",
      "A method to delete data",
      "A data type",
    ],
    answer: "A query inside another query",
    explanation:
      "A subquery is a query inside another query, often used to return data that will be used in the main query.",
    topic: "sql",
    example:
      "SELECT * FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE Amount > 100);",
  },
  {
    id: 7,
    question: "What is the difference between `WHERE` and `HAVING` in SQL?",
    options: [
      "WHERE is used before grouping, HAVING is used after grouping",
      "HAVING filters rows, WHERE groups rows",
      "WHERE is used for sorting, HAVING is for filtering",
      "HAVING works on individual rows, WHERE works on groups",
    ],
    answer: "WHERE is used before grouping, HAVING is used after grouping",
    explanation:
      "`WHERE` is used to filter rows before grouping, while `HAVING` is used to filter groups after the `GROUP BY` clause.",
    topic: "sql",
    example:
      "SELECT COUNT(CustomerID), Country FROM Customers WHERE Country != 'USA' GROUP BY Country HAVING COUNT(CustomerID) > 5;",
  },
  {
    id: 8,
    question: "What does `SELECT *` do in SQL?",
    options: [
      "Selects all columns from a table",
      "Selects unique rows from a table",
      "Selects columns matching a pattern",
      "Selects a single row from a table",
    ],
    answer: "Selects all columns from a table",
    explanation: "`SELECT *` retrieves all columns from a table.",
    topic: "sql",
    example: "SELECT * FROM Customers;",
  },
  {
    id: 9,
    question: "What is the purpose of the `GROUP BY` clause?",
    options: [
      "To group rows that have the same values into summary rows",
      "To filter data",
      "To delete data",
      "To sort data",
    ],
    answer: "To group rows that have the same values into summary rows",
    explanation:
      "The `GROUP BY` clause groups rows that have the same values in specified columns into summary rows, like aggregates (COUNT, SUM, AVG).",
    topic: "sql",
    example:
      "SELECT COUNT(CustomerID), Country FROM Customers GROUP BY Country;",
  },
  {
    id: 10,
    question: "What is a SQL `VIEW`?",
    options: [
      "A virtual table based on the result of a query",
      "A table that stores temporary data",
      "A type of JOIN",
      "A command to insert data",
    ],
    answer: "A virtual table based on the result of a query",
    explanation:
      "A SQL VIEW is a virtual table that is based on the result of a query. It does not store the data itself but shows data from other tables.",
    topic: "sql",
    example:
      "CREATE VIEW CustomerOrders AS SELECT Customers.Name, Orders.OrderID FROM Customers INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
  },
  {
    id: 11,
    question: "What does the `DISTINCT` keyword do in SQL?",
    options: [
      "Removes duplicate rows from the result set",
      "Sorts the result set",
      "Counts the number of rows",
      "Groups rows with the same values",
    ],
    answer: "Removes duplicate rows from the result set",
    explanation:
      "The `DISTINCT` keyword is used in a `SELECT` statement to remove duplicate rows and return only unique values.",
    topic: "sql",
    example: "SELECT DISTINCT Country FROM Customers;",
  },
  {
    id: 12,
    question: "What is the purpose of the `LIMIT` clause in SQL?",
    options: [
      "To limit the number of rows returned by a query",
      "To delete rows",
      "To group rows",
      "To update rows",
    ],
    answer: "To limit the number of rows returned by a query",
    explanation:
      "The `LIMIT` clause is used to specify the number of rows to return in a query result.",
    topic: "sql",
    example: "SELECT * FROM Customers LIMIT 5;",
  },
  {
    id: 13,
    question: "What is the purpose of the `ORDER BY` clause?",
    options: [
      "To sort the result set in ascending or descending order",
      "To group rows",
      "To delete rows",
      "To limit rows",
    ],
    answer: "To sort the result set in ascending or descending order",
    explanation:
      "The `ORDER BY` clause is used to sort the result set by one or more columns, either in ascending (`ASC`) or descending (`DESC`) order.",
    topic: "sql",
    example: "SELECT * FROM Customers ORDER BY LastName ASC;",
  },
  {
    id: 14,
    question: "What does `NULL` represent in SQL?",
    options: [
      "A missing or undefined value",
      "An empty string",
      "A number zero",
      "A space character",
    ],
    answer: "A missing or undefined value",
    explanation:
      "`NULL` in SQL represents a missing or undefined value. It is not the same as zero or an empty string.",
    topic: "sql",
    example: "SELECT * FROM Customers WHERE Email IS NULL;",
  },
  {
    id: 15,
    question: "What is the difference between `INNER JOIN` and `OUTER JOIN`?",
    options: [
      "INNER JOIN returns only matching rows, OUTER JOIN returns all rows with matching or NULL values",
      "INNER JOIN returns all rows, OUTER JOIN returns only matching rows",
      "INNER JOIN groups rows, OUTER JOIN limits rows",
      "INNER JOIN sorts rows, OUTER JOIN filters rows",
    ],
    answer:
      "INNER JOIN returns only matching rows, OUTER JOIN returns all rows with matching or NULL values",
    explanation:
      "`INNER JOIN` returns only rows with matching values in both tables, while `OUTER JOIN` returns all rows from one or both tables, with `NULL` for non-matching rows.",
    topic: "sql",
    example:
      "SELECT Customers.CustomerID, Orders.OrderID FROM Customers LEFT OUTER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;",
  },
  {
    id: 16,
    question: "What is a `TRIGGER` in SQL?",
    options: [
      "A stored procedure that is automatically executed in response to an event",
      "A method to delete data",
      "A type of key",
      "A method to create views",
    ],
    answer:
      "A stored procedure that is automatically executed in response to an event",
    explanation:
      "A `TRIGGER` is a special type of stored procedure that automatically runs in response to certain events on a particular table or view, such as INSERT, UPDATE, or DELETE.",
    topic: "sql",
    example:
      "CREATE TRIGGER after_insert_customers AFTER INSERT ON Customers FOR EACH ROW BEGIN INSERT INTO CustomerAudit(CustomerID, Action) VALUES (NEW.CustomerID, 'INSERT'); END;",
  },
];


## **SQL Mastery Roadmap**  
### **Phase 1: Foundations of SQL**  
1. **Introduction to SQL**  
   - What is SQL?  
   - Importance of SQL in databases  
   - Types of SQL (DDL, DML, DQL, DCL, TCL)  
   - Overview of relational databases (RDBMS vs NoSQL)  

2. **SQL Data Types & Database Structure**  
   - Common data types (INTEGER, VARCHAR, DATE, etc.)  
   - Tables, columns, rows, and relationships  
   - Primary keys and foreign keys  
   - Constraints (NOT NULL, UNIQUE, CHECK, DEFAULT)  

3. **Basic SQL Queries**  
   - `SELECT` statement  
   - Filtering data using `WHERE`  
   - Sorting results using `ORDER BY`  
   - Limiting output using `LIMIT`  

4. **SQL Functions & Expressions**  
   - Mathematical operations (`SUM()`, `AVG()`, `COUNT()`)  
   - String operations (`UPPER()`, `LOWER()`, `CONCAT()`)  
   - Date functions (`NOW()`, `DATEADD()`, `DATEDIFF()`)  

---

### **Phase 2: Intermediate SQL**  
5. **Joins & Relationships Between Tables**  
   - Inner Join vs Outer Join (LEFT, RIGHT, FULL)  
   - Cross Joins and Self Joins  
   - Real-world applications of joins  

6. **Grouping & Aggregation**  
   - `GROUP BY` and `HAVING`  
   - Aggregation functions in depth (`MIN()`, `MAX()`, `AVG()`)  
   - Practical use cases in analytics  

7. **Subqueries & Derived Tables**  
   - Nested Queries (`EXISTS`, `IN`, `ANY`, `ALL`)  
   - Common mistakes in subqueries  
   - Optimization techniques  

8. **Modifying Data (DML Commands)**  
   - `INSERT INTO`, `UPDATE`, `DELETE`  
   - Transactions & Rollbacks  
   - Common pitfalls and best practices  

---

### **Phase 3: Advanced SQL & Optimization**  
9. **Views, Indexes, and Performance Optimization**  
   - Why use Views?  
   - Indexing strategies (`B-Trees`, `Hash Indexes`)  
   - Query optimization techniques  

10. **Stored Procedures & Functions**  
   - Creating Stored Procedures  
   - User-defined Functions (UDFs)  
   - Performance considerations  

11. **Advanced Querying Techniques**  
   - CTEs (Common Table Expressions)  
   - Window Functions (`ROW_NUMBER()`, `RANK()`, `LAG()`)  
   - Recursive Queries  

12. **SQL Security & Access Control**  
   - User roles & privileges  
   - Preventing SQL injection  
   - Best security practices  

---

### **Phase 4: Real-World Applications & Expert-Level Mastery**  
13. **Building a Full-Fledged Database System**  
   - Case Study: Designing a Database for an E-commerce Platform  
   - Normalization & Denormalization  
   - Best practices in schema design  

14. **Big Data & SQL**  
   - Working with Large Datasets  
   - SQL in Data Warehouses (`Snowflake`, `BigQuery`)  
   - SQL vs NoSQL in Big Data  

15. **Expert Insights & Industry Best Practices**  
   - Query tuning & performance debugging  
   - Handling edge cases in SQL  
   - Common SQL mistakes and how to avoid them  

—

## **Lesson 1: Introduction to SQL**  

### **What is SQL?**  
SQL (**Structured Query Language**) is a powerful language used to interact with **relational databases**. It allows you to:  
✅ Retrieve data efficiently  
✅ Modify and delete records  
✅ Manage database structures  
✅ Enforce security and access controls  

**Real-World Example:**  
Imagine an e-commerce website like Amazon. SQL is used to:  
- Retrieve product details when a customer searches  
- Store user orders and payment transactions  
- Manage user accounts and authentication  

---

### **Why is SQL Important?**  
✔️ **Universally Used:** SQL is the standard for databases like MySQL, PostgreSQL, SQL Server, and Oracle.  
✔️ **High Demand:** Almost every company relies on databases, making SQL an essential skill.  
✔️ **Data Analysis & Reporting:** SQL is used in **business intelligence** to generate reports from large datasets.  

---

### **Types of SQL Statements**  
SQL is divided into five major categories:

| Category | Description | Commands |
|----------|------------|----------|
| **DDL (Data Definition Language)** | Defines database structure | `CREATE`, `ALTER`, `DROP` |
| **DML (Data Manipulation Language)** | Modifies data | `INSERT`, `UPDATE`, `DELETE` |
| **DQL (Data Query Language)** | Retrieves data | `SELECT` |
| **DCL (Data Control Language)** | Manages user permissions | `GRANT`, `REVOKE` |
| **TCL (Transaction Control Language)** | Controls transactions | `COMMIT`, `ROLLBACK` |

✅ **Example:**  
If we have a **"Customers"** table, here’s how different SQL statements interact with it:  

```sql
-- DDL: Creating a table
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,
    Name VARCHAR(100),
    Email VARCHAR(100) UNIQUE
);

-- DML: Inserting data
INSERT INTO Customers (CustomerID, Name, Email)
VALUES (1, 'John Doe', 'john@example.com');

-- DQL: Retrieving data
SELECT * FROM Customers;

-- DCL: Granting access
GRANT SELECT ON Customers TO 'user123';

-- TCL: Committing a transaction
COMMIT;
```

---

### **How Databases Store Data**  
Databases store data in a structured **table format**, similar to Excel.  

| CustomerID | Name       | Email             |  
|------------|-----------|-------------------|  
| 1          | John Doe  | john@example.com  |  
| 2          | Jane Doe  | jane@example.com  |  

- Each **row** represents a **record**.  
- Each **column** represents a **field**.  

---

### **Key Components of a Relational Database**  
1. **Tables:** Store data in rows and columns  
2. **Primary Key:** Uniquely identifies each row  
3. **Foreign Key:** Links data between tables  
4. **Indexes:** Speed up searches  
5. **Constraints:** Ensure data integrity  

✅ **Example:**  
A `CustomerID` in an **Orders** table can reference the **Customers** table:  

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

---

### **Common SQL Mistakes Beginners Make (and How to Avoid Them)**  
❌ Forgetting the `WHERE` clause in `DELETE` statements  
✅ **Always specify conditions** to avoid deleting all records:  

```sql
DELETE FROM Customers WHERE CustomerID = 1;  -- ✅ Correct
DELETE FROM Customers;  -- ❌ Dangerous: Deletes all records!
```

❌ Using `SELECT *` instead of selecting specific columns  
✅ Select only necessary columns to improve performance:  

```sql
SELECT Name, Email FROM Customers;  -- ✅ Better
SELECT * FROM Customers;  -- ❌ Avoid unless needed
```

---

### **Exercise: Hands-on Practice**  
1️⃣ What SQL statement would you use to create a table called **Products** with columns `ProductID`, `ProductName`, and `Price`?  
2️⃣ Write an SQL query to insert a new product into the **Products** table.  
3️⃣ Retrieve all records from the **Products** table.  

Try writing the queries, and I’ll review them! Next, we’ll dive into **SQL Data Types and Constraints**.

—

# **Lesson 2: SQL Data Types & Constraints**  

Now that you understand the basics of SQL and how data is structured in tables, it's time to learn about **data types and constraints**, which ensure data integrity and efficiency.  

---

## **1. SQL Data Types**  

Every column in a table has a **data type**, defining what kind of data it can store. Choosing the right data type is crucial for database performance and accuracy.  

### **Common SQL Data Types**  

| Category       | Data Type      | Description |
|---------------|---------------|-------------|
| **Numeric**   | `INT`          | Whole numbers (e.g., 1, 100, -50) |
|               | `DECIMAL(p,s)` | Exact decimal numbers (e.g., 99.99) |
|               | `FLOAT`        | Approximate decimal numbers |
| **String/Text** | `VARCHAR(n)`  | Variable-length text (e.g., names, emails) |
|               | `CHAR(n)`      | Fixed-length text (e.g., country codes) |
|               | `TEXT`         | Large text data (e.g., articles, descriptions) |
| **Date/Time** | `DATE`         | Stores only date (YYYY-MM-DD) |
|               | `DATETIME`     | Stores date & time |
|               | `TIME`         | Stores only time (HH:MM:SS) |
| **Boolean**   | `BOOLEAN`      | Stores `TRUE` or `FALSE` (1 or 0) |

✅ **Example:** Creating a `Products` table with different data types:

```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,    -- Whole number
    ProductName VARCHAR(100),     -- Variable-length text
    Price DECIMAL(10,2),          -- Decimal with 10 digits, 2 after decimal
    StockQuantity INT,            -- Whole number
    CreatedAt DATETIME            -- Date and time
);
```

### **Choosing the Right Data Type**  
✅ Use `VARCHAR(n)` instead of `TEXT` if you know the max length (better performance).  
✅ Use `DECIMAL` for money values instead of `FLOAT` to avoid rounding errors.  
✅ Use `BOOLEAN` instead of `INT` for true/false values.  

---

## **2. SQL Constraints**  

**Constraints** enforce rules on the data to maintain **accuracy and integrity**.  

### **Common SQL Constraints**  

| Constraint    | Description |
|--------------|-------------|
| `PRIMARY KEY` | Ensures each row has a unique identifier |
| `FOREIGN KEY` | Establishes relationships between tables |
| `NOT NULL`    | Prevents empty (NULL) values in a column |
| `UNIQUE`      | Ensures values in a column are unique |
| `CHECK`       | Restricts values in a column based on a condition |
| `DEFAULT`     | Assigns a default value if no value is provided |

✅ **Example:** Enforcing constraints in the `Customers` table:

```sql
CREATE TABLE Customers (
    CustomerID INT PRIMARY KEY,            -- Unique identifier
    Name VARCHAR(100) NOT NULL,            -- Name cannot be empty
    Email VARCHAR(100) UNIQUE,             -- Ensures no duplicate emails
    Age INT CHECK (Age >= 18),             -- Age must be 18 or older
    CreatedAt DATETIME DEFAULT NOW()       -- Auto-assigns the current time
);
```

---

## **3. Primary Keys & Foreign Keys**  

### **Primary Key (`PRIMARY KEY`)**  
A **Primary Key** uniquely identifies each record in a table. It must be:  
✅ **Unique** (No duplicates)  
✅ **Not NULL** (Cannot be empty)  

✅ **Example:**  
```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100)
);
```

---

### **Foreign Key (`FOREIGN KEY`)**  
A **Foreign Key** links two tables, ensuring referential integrity.  

✅ **Example:** The `Orders` table references the `Customers` table:  

```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    OrderDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);
```

---

## **4. Common Mistakes & Best Practices**  

❌ **Using `FLOAT` for money values (causes rounding errors)**  
✅ Use `DECIMAL(10,2)` instead:  
```sql
Price DECIMAL(10,2)  -- ✅ Correct
```

❌ **Forgetting `NOT NULL` when a field is mandatory**  
✅ Always enforce `NOT NULL` for required fields:  
```sql
Email VARCHAR(100) NOT NULL  -- ✅ Ensures every customer has an email
```

❌ **Not using constraints properly**  
✅ Always define constraints to maintain data integrity.  

---

## **5. Exercise: Hands-on Practice**  

### **Try writing these SQL statements:**  
1️⃣ Create a `Users` table with the following fields:  
   - `UserID` (Primary Key, Integer)  
   - `Username` (Unique, Variable-length text)  
   - `Password` (Not NULL, Variable-length text)  
   - `Age` (Must be 18 or older)  
   - `CreatedAt` (Should default to the current date and time)  

2️⃣ Insert at least **two users** into the table.  

3️⃣ Retrieve all users from the table.  

---
# **Lesson 3: Basic SQL Queries (`SELECT`, `WHERE`, `ORDER BY`)**  

Now that you've learned about **data types and constraints**, it's time to **query data** using SQL.  

---

## **1. Retrieving Data with `SELECT`**  

The `SELECT` statement is used to **fetch data** from a database.  

✅ **Syntax:**  
```sql
SELECT column1, column2 FROM table_name;
```

✅ **Example:**  
```sql
SELECT Name, Email FROM Customers;
```

### **Fetching All Columns**  
Use `*` to select **all columns** (not recommended for large datasets).  

```sql
SELECT * FROM Customers;
```

---

## **2. Filtering Data with `WHERE`**  

Use `WHERE` to **filter results** based on a condition.  

✅ **Syntax:**  
```sql
SELECT column1, column2 FROM table_name
WHERE condition;
```

✅ **Example:** Get customers whose **age is greater than 25**:  
```sql
SELECT Name, Email FROM Customers
WHERE Age > 25;
```

✅ **Example:** Get orders placed on `2024-02-01`:  
```sql
SELECT * FROM Orders
WHERE OrderDate = '2024-02-01';
```

### **Comparison Operators in SQL**  

| Operator | Description |
|----------|------------|
| `=`      | Equal to   |
| `!=` or `<>` | Not equal to |
| `>`      | Greater than |
| `<`      | Less than |
| `>=`     | Greater than or equal to |
| `<=`     | Less than or equal to |

✅ **Example:** Find customers who are NOT from "India":  
```sql
SELECT * FROM Customers WHERE Country <> 'India';
```

---

## **3. Using `AND`, `OR`, and `NOT` for Multiple Conditions**  

- **`AND`**: All conditions must be **true**.  
- **`OR`**: At least one condition must be **true**.  
- **`NOT`**: Negates a condition.  

✅ **Example:** Get customers who are **older than 25 AND from the USA**:  
```sql
SELECT * FROM Customers
WHERE Age > 25 AND Country = 'USA';
```

✅ **Example:** Get customers who are **from India OR the USA**:  
```sql
SELECT * FROM Customers
WHERE Country = 'India' OR Country = 'USA';
```

✅ **Example:** Get customers who are **NOT from the USA**:  
```sql
SELECT * FROM Customers
WHERE NOT Country = 'USA';
```

---

## **4. Sorting Data with `ORDER BY`**  

Use `ORDER BY` to **sort results** in **ascending (ASC) or descending (DESC) order**.  

✅ **Syntax:**  
```sql
SELECT column1, column2 FROM table_name
ORDER BY column1 ASC|DESC;
```

✅ **Example:** Sort customers **by age in ascending order**:  
```sql
SELECT Name, Age FROM Customers
ORDER BY Age ASC;
```

✅ **Example:** Sort orders **by price in descending order**:  
```sql
SELECT * FROM Orders
ORDER BY Price DESC;
```

---

## **5. Common Mistakes & Best Practices**  

❌ **Using `SELECT *` in large datasets**  
✅ Specify required columns for **better performance**:  
```sql
SELECT Name, Email FROM Customers;  -- ✅ Better
```

❌ **Forgetting `WHERE` in `DELETE` or `UPDATE` queries**  
✅ Always specify a condition:  
```sql
DELETE FROM Customers WHERE CustomerID = 1;  -- ✅ Safe
DELETE FROM Customers;  -- ❌ Dangerous: Deletes ALL customers!
```

❌ **Using `ORDER BY` on a non-indexed column**  
✅ **Index columns** you frequently sort on to improve speed.  

---

## **6. Exercise: Hands-on Practice**  

1️⃣ Write an SQL query to **select all users** from the `Users` table, sorted **by `CreatedAt` in descending order**.  
2️⃣ Retrieve customers from the `Customers` table who are **older than 30 and live in India**.  
3️⃣ Select **products priced between 100 and 500** from the `Products` table.  

Write your queries, and I’ll review them before moving to **aggregate functions (`COUNT`, `SUM`, `AVG`, etc.)**!

—

# **Lesson 4: Aggregate Functions (`COUNT`, `SUM`, `AVG`, `MAX`, `MIN`)**  

Now that you know how to retrieve and filter data, let's dive into **aggregate functions**—which allow you to perform calculations on multiple rows of data.  

---

## **1. What Are Aggregate Functions?**  

Aggregate functions perform operations on a set of values and return a **single value**.  

| Function | Description |
|----------|------------|
| `COUNT()` | Counts the number of rows |
| `SUM()` | Calculates the total sum of values |
| `AVG()` | Computes the average value |
| `MAX()` | Finds the highest value |
| `MIN()` | Finds the lowest value |

---

## **2. `COUNT()`: Counting Rows**  

Use `COUNT()` to get the **total number of rows** in a table or a specific column.  

✅ **Example:** Count the total number of customers:  
```sql
SELECT COUNT(*) FROM Customers;
```

✅ **Example:** Count how many customers are from **India**:  
```sql
SELECT COUNT(*) FROM Customers WHERE Country = 'India';
```

✅ **Example:** Count the number of unique email addresses (ignores duplicates):  
```sql
SELECT COUNT(DISTINCT Email) FROM Customers;
```

---

## **3. `SUM()`: Calculating Total Values**  

Use `SUM()` to **add up all values** in a column.  

✅ **Example:** Get the **total revenue** from all orders:  
```sql
SELECT SUM(Price) FROM Orders;
```

✅ **Example:** Get the **total stock** of products:  
```sql
SELECT SUM(StockQuantity) FROM Products;
```

---

## **4. `AVG()`: Calculating Average Values**  

Use `AVG()` to find the **average (mean) value** of a numeric column.  

✅ **Example:** Get the **average price** of products:  
```sql
SELECT AVG(Price) FROM Products;
```

✅ **Example:** Get the **average age** of customers:  
```sql
SELECT AVG(Age) FROM Customers;
```

---

## **5. `MAX()` & `MIN()`: Finding the Highest & Lowest Values**  

- `MAX()` returns the **largest** value in a column.  
- `MIN()` returns the **smallest** value in a column.  

✅ **Example:** Get the **most expensive product price**:  
```sql
SELECT MAX(Price) FROM Products;
```

✅ **Example:** Get the **cheapest product price**:  
```sql
SELECT MIN(Price) FROM Products;
```

✅ **Example:** Get the **oldest customer’s age**:  
```sql
SELECT MAX(Age) FROM Customers;
```

✅ **Example:** Get the **youngest customer’s age**:  
```sql
SELECT MIN(Age) FROM Customers;
```

---

## **6. Using Aggregate Functions with `GROUP BY`**  

The `GROUP BY` clause groups rows with the same values and applies aggregate functions.  

✅ **Example:** Count the number of customers **per country**:  
```sql
SELECT Country, COUNT(*) FROM Customers
GROUP BY Country;
```

✅ **Example:** Get the **total revenue per customer**:  
```sql
SELECT CustomerID, SUM(Price) FROM Orders
GROUP BY CustomerID;
```

✅ **Example:** Get the **average age per country**:  
```sql
SELECT Country, AVG(Age) FROM Customers
GROUP BY Country;
```

---

## **7. Using `HAVING` to Filter Aggregated Data**  

`HAVING` is used with `GROUP BY` to **filter grouped results** (since `WHERE` doesn’t work with aggregate functions).  

✅ **Example:** Show only countries with **more than 5 customers**:  
```sql
SELECT Country, COUNT(*) FROM Customers
GROUP BY Country
HAVING COUNT(*) > 5;
```

✅ **Example:** Show customers whose **total purchases exceed $1000**:  
```sql
SELECT CustomerID, SUM(Price) FROM Orders
GROUP BY CustomerID
HAVING SUM(Price) > 1000;
```

✅ **Example:** Show products with an **average price greater than $50**:  
```sql
SELECT ProductCategory, AVG(Price) FROM Products
GROUP BY ProductCategory
HAVING AVG(Price) > 50;
```

---

## **8. Common Mistakes & Best Practices**  

❌ **Using `WHERE` instead of `HAVING` with aggregate functions**  
✅ **Use `HAVING` for aggregated values**:  
```sql
SELECT Country, COUNT(*) FROM Customers
GROUP BY Country
HAVING COUNT(*) > 10;  -- ✅ Correct

SELECT Country, COUNT(*) FROM Customers
WHERE COUNT(*) > 10;  -- ❌ Error
```

❌ **Forgetting to use `GROUP BY` when using aggregate functions with other columns**  
✅ Every **non-aggregated** column must be in `GROUP BY`:  
```sql
SELECT Country, AVG(Age) FROM Customers
GROUP BY Country;  -- ✅ Correct

SELECT Country, AVG(Age) FROM Customers;  
-- ❌ Error: "Country" must be in GROUP BY
```

---

## **9. Exercise: Hands-on Practice**  

1️⃣ Count the **total number of orders** in the `Orders` table.  
2️⃣ Find the **most expensive product** in the `Products` table.  
3️⃣ Get the **average age of customers** from the `Customers` table.  
4️⃣ Retrieve the **total revenue generated per customer** from the `Orders` table.  
5️⃣ Show only customers who have spent **more than $5000 in total purchases**.  

---

# **Lesson 5: SQL Joins (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`)**  

Now that you know how to **retrieve and aggregate data**, it's time to **combine data from multiple tables** using **Joins**.  

---

# **Lesson 5: SQL Joins (`INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, `FULL JOIN`)**  

Now that you know how to **retrieve and aggregate data**, it's time to **combine data from multiple tables** using **Joins**.  

---

## **1. What Are Joins?**  

A **JOIN** is used to combine rows from two or more tables **based on a related column** (usually a primary-foreign key relationship).  

### **Types of Joins**  

| Join Type     | Description |
|--------------|------------|
| `INNER JOIN` | Returns matching rows from both tables |
| `LEFT JOIN`  | Returns all rows from the left table and matching rows from the right table |
| `RIGHT JOIN` | Returns all rows from the right table and matching rows from the left table |
| `FULL JOIN`  | Returns all rows from both tables, with NULLs where there is no match |

---

## **2. `INNER JOIN`: Only Matching Records**  

An `INNER JOIN` returns only the rows that have **matching values** in both tables.  

✅ **Example:** Get customer names and their orders  
```sql
SELECT Customers.CustomerID, Customers.Name, Orders.OrderID, Orders.Price
FROM Customers
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

### **How It Works?**  
- Only customers **who have placed an order** appear in the result.  
- Customers with **no orders are excluded**.  

✅ **Example Table Results**  

| CustomerID | Name  | OrderID | Price |
|------------|------|---------|--------|
| 1          | John  | 101     | 200   |
| 2          | Alice | 102     | 150   |
| 3          | Bob   | 103     | 500   |

---

## **3. `LEFT JOIN`: All Left Table + Matching Right Table**  

A `LEFT JOIN` returns **all rows from the left table**, even if there’s **no match in the right table**. Unmatched right-side rows return `NULL`.  

✅ **Example:** Get all customers, even those with no orders  
```sql
SELECT Customers.CustomerID, Customers.Name, Orders.OrderID, Orders.Price
FROM Customers
LEFT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

✅ **Example Table Results**  

| CustomerID | Name  | OrderID | Price |
|------------|------|---------|--------|
| 1          | John  | 101     | 200   |
| 2          | Alice | 102     | 150   |
| 3          | Bob   | 103     | 500   |
| 4          | Emma  | NULL    | NULL  |

➡️ **Emma has no orders, but still appears with `NULL` values for the Order table.**  

---

## **4. `RIGHT JOIN`: All Right Table + Matching Left Table**  

A `RIGHT JOIN` returns **all rows from the right table**, even if there’s **no match in the left table**. Unmatched left-side rows return `NULL`.  

✅ **Example:** Get all orders, even if the customer is missing  
```sql
SELECT Customers.CustomerID, Customers.Name, Orders.OrderID, Orders.Price
FROM Customers
RIGHT JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

✅ **Example Table Results**  

| CustomerID | Name  | OrderID | Price |
|------------|------|---------|--------|
| 1          | John  | 101     | 200   |
| 2          | Alice | 102     | 150   |
| 3          | Bob   | 103     | 500   |
| NULL       | NULL  | 104     | 300   |

➡️ **Order `104` exists but has no corresponding customer, so `CustomerID` and `Name` are `NULL`.**  

---

## **5. `FULL JOIN`: All Data from Both Tables**  

A `FULL JOIN` returns **all records from both tables**, with `NULL` for missing matches.  

✅ **Example:** Get all customers and orders, even if there's no match  
```sql
SELECT Customers.CustomerID, Customers.Name, Orders.OrderID, Orders.Price
FROM Customers
FULL JOIN Orders ON Customers.CustomerID = Orders.CustomerID;
```

✅ **Example Table Results**  

| CustomerID | Name  | OrderID | Price |
|------------|------|---------|--------|
| 1          | John  | 101     | 200   |
| 2          | Alice | 102     | 150   |
| 3          | Bob   | 103     | 500   |
| 4          | Emma  | NULL    | NULL  |
| NULL       | NULL  | 104     | 300   |

➡️ **Both unmatched customers (`Emma`) and unmatched orders (`104`) are included.**  

---

## **6. Joining More Than Two Tables**  

✅ **Example:** Get orders with customer and product details  
```sql
SELECT Customers.Name, Orders.OrderID, Products.ProductName, Orders.Price
FROM Orders
INNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID
INNER JOIN Products ON Orders.ProductID = Products.ProductID;
```

➡️ This **joins 3 tables**, ensuring we get:
- The **customer’s name** from `Customers`
- The **order details** from `Orders`
- The **product name** from `Products`  

---

## **7. Common Mistakes & Best Practices**  

❌ **Forgetting `ON` Condition**  
✅ Always define the relationship:  
```sql
SELECT * FROM Customers 
INNER JOIN Orders;  -- ❌ Error: Missing ON condition

SELECT * FROM Customers 
INNER JOIN Orders ON Customers.CustomerID = Orders.CustomerID;  -- ✅ Correct
```

❌ **Using `INNER JOIN` when `LEFT JOIN` is needed**  
✅ Use `LEFT JOIN` if you want to keep all records from one table.  

❌ **Joining without indexes**  
✅ **Indexes** improve performance when joining large tables.  

---

## **8. Exercise: Hands-on Practice**  

1️⃣ Write a query to **get all employees and their department names**, even if they don’t belong to a department.  
2️⃣ Retrieve **all orders and the names of customers who placed them**.  
3️⃣ Get a list of **all products and their orders**, even if they haven’t been ordered.  
4️⃣ Find **all departments and the employees working in them**, including departments with no employees.  
5️⃣ Show **all customers and orders**, even if the customer has not placed any orders.  

---

# **Lesson 6: Subqueries and Nested Queries**  

Now that you understand **joins**, let’s move on to **subqueries**—queries inside queries.  

---

## **1. What Is a Subquery?**  

A **subquery** is a query inside another query. It helps fetch data in a step-by-step manner, often when joins aren't practical.  

✅ **Example:** Find customers who have placed an order  
```sql
SELECT Name FROM Customers 
WHERE CustomerID IN (SELECT CustomerID FROM Orders);
```

### **Types of Subqueries**  

| Type | Description |
|------|------------|
| Scalar Subquery | Returns a **single value** |
| Multi-row Subquery | Returns **multiple values** |
| Correlated Subquery | Dependent on the outer query |

---

## **2. Scalar Subqueries (Returns One Value)**  

A scalar subquery returns **a single value** and can be used like a column.  

✅ **Example:** Find customers who spent the most  
```sql
SELECT Name FROM Customers 
WHERE CustomerID = (SELECT CustomerID FROM Orders ORDER BY Price DESC LIMIT 1);
```

---

## **3. Multi-row Subqueries (Returns Multiple Values)**  

These return **multiple rows**, often used with `IN`, `ANY`, or `ALL`.  

✅ **Example:** Find customers from countries where orders were placed  
```sql
SELECT Name FROM Customers 
WHERE Country IN (SELECT DISTINCT Country FROM Orders);
```

✅ **Example:** Find products that are more expensive than **any** order  
```sql
SELECT ProductName FROM Products 
WHERE Price > ANY (SELECT Price FROM Orders);
```

---

## **4. Correlated Subqueries (Row-by-Row Processing)**  

A **correlated subquery** depends on the outer query, running once per row.  

✅ **Example:** Find customers who spent more than **the average order price**  
```sql
SELECT Name FROM Customers 
WHERE CustomerID IN (
    SELECT CustomerID FROM Orders 
    WHERE Price > (SELECT AVG(Price) FROM Orders)
);
```

---

## **5. Common Mistakes & Best Practices**  

❌ **Using a multi-row subquery with `=`**  
✅ Use `IN` instead of `=`:  
```sql
SELECT Name FROM Customers 
WHERE CustomerID = (SELECT CustomerID FROM Orders);  -- ❌ Error

SELECT Name FROM Customers 
WHERE CustomerID IN (SELECT CustomerID FROM Orders);  -- ✅ Correct
```

❌ **Using a correlated subquery when a join is better**  
✅ Use joins for efficiency when possible.  

---

## **6. Exercise: Hands-on Practice**  

1️⃣ Find products that **have been ordered at least once**.  
2️⃣ Retrieve **customers who have spent more than $1000**.  
3️⃣ Get a list of **employees who are managers (have subordinates)**.  
4️⃣ Find the **most expensive product** using a subquery.  
5️⃣ Show **departments where at least one employee earns above the company’s average salary**.  

---

# **Lesson 7: Window Functions (`RANK`, `ROW_NUMBER`, `LEAD`, `LAG`)**  

Now that you’ve mastered **subqueries**, let’s explore **window functions**, which allow you to perform calculations across a set of rows **without collapsing them into a single result** (like `GROUP BY` does).  

---

## **1. What Are Window Functions?**  

Unlike **aggregate functions** (which return one result per group), **window functions** return a value for each row **while considering other rows in the result set**.  

✅ **Example:** Assign a rank to each customer based on their total spending  
```sql
SELECT CustomerID, Name, SUM(Price) AS TotalSpent,
       RANK() OVER (ORDER BY SUM(Price) DESC) AS Rank
FROM Orders
JOIN Customers ON Orders.CustomerID = Customers.CustomerID
GROUP BY CustomerID, Name;
```

---

## **2. `ROW_NUMBER()`: Assigns a Unique Row Number**  

✅ **Example:** Number orders for each customer  
```sql
SELECT CustomerID, OrderID, Price, 
       ROW_NUMBER() OVER (PARTITION BY CustomerID ORDER BY Price DESC) AS RowNum
FROM Orders;
```
➡️ Each customer’s orders are numbered **from highest to lowest price**.  

| CustomerID | OrderID | Price | RowNum |
|------------|---------|--------|--------|
| 1          | 101     | 500    | 1      |
| 1          | 102     | 200    | 2      |
| 2          | 103     | 400    | 1      |

---

## **3. `RANK()`: Ranks with Gaps for Ties**  

✅ **Example:** Rank employees by salary  
```sql
SELECT EmployeeID, Name, Salary, 
       RANK() OVER (ORDER BY Salary DESC) AS Rank
FROM Employees;
```
➡️ If two employees have the **same salary**, they get the **same rank**, but the next rank **skips a number**.

| EmployeeID | Name  | Salary | Rank |
|------------|------|--------|------|
| 1          | John  | 80000  | 1    |
| 2          | Alice | 75000  | 2    |
| 3          | Bob   | 75000  | 2    |
| 4          | Emma  | 70000  | 4    |

---

## **4. `DENSE_RANK()`: Ranks Without Skipping**  

✅ **Example:** Assign dense ranks  
```sql
SELECT EmployeeID, Name, Salary, 
       DENSE_RANK() OVER (ORDER BY Salary DESC) AS DenseRank
FROM Employees;
```
➡️ Unlike `RANK()`, **no gaps** in ranking.

| EmployeeID | Name  | Salary | DenseRank |
|------------|------|--------|-----------|
| 1          | John  | 80000  | 1         |
| 2          | Alice | 75000  | 2         |
| 3          | Bob   | 75000  | 2         |
| 4          | Emma  | 70000  | 3         |

---

## **5. `LEAD()` and `LAG()`: Access Next/Previous Rows**  

✅ **Example:** Compare current and previous month sales  
```sql
SELECT Month, Sales,
       LAG(Sales) OVER (ORDER BY Month) AS PrevMonthSales,
       LEAD(Sales) OVER (ORDER BY Month) AS NextMonthSales
FROM Revenue;
```

| Month | Sales | PrevMonthSales | NextMonthSales |
|-------|-------|---------------|---------------|
| Jan   | 1000  | NULL          | 1500          |
| Feb   | 1500  | 1000          | 2000          |
| Mar   | 2000  | 1500          | NULL          |

---

## **6. `NTILE(n)`: Divides Data Into Equal Buckets**  

✅ **Example:** Divide employees into 4 salary groups  
```sql
SELECT EmployeeID, Name, Salary, 
       NTILE(4) OVER (ORDER BY Salary DESC) AS Quartile
FROM Employees;
```
➡️ Divides employees into **4 salary quartiles**.

---

## **7. Common Mistakes & Best Practices**  

❌ **Forgetting `PARTITION BY` when needed**  
✅ Use `PARTITION BY` to reset ranking per group  
```sql
RANK() OVER (PARTITION BY Department ORDER BY Salary DESC) -- ✅ Correct
```

❌ **Using `ROW_NUMBER()` instead of `RANK()` for ranking**  
✅ Use `RANK()` when handling ties.  

---

## **8. Exercise: Hands-on Practice**  

1️⃣ Rank **products by price**, handling ties properly.  
2️⃣ Number **each employee within their department**.  
3️⃣ Compare **current and previous order prices** for each customer.  
4️⃣ Divide employees into **salary quartiles** using `NTILE(4)`.  

---

# **Lesson 8: Common Table Expressions (CTEs) & Recursive Queries**  

In this lesson, we'll explore **Common Table Expressions (CTEs)** and **recursive queries**, two powerful tools that simplify complex SQL queries and make them more readable.

---

## **1. What Is a Common Table Expression (CTE)?**  

A **Common Table Expression (CTE)** is a temporary result set defined within the execution scope of a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` statement. It helps break down complex queries into simpler, reusable parts.

The basic syntax is:  
```sql
WITH CTE_Name AS (
    -- Query to define the CTE
    SELECT column1, column2
    FROM table
    WHERE condition
)
-- Main query using the CTE
SELECT column1, column2
FROM CTE_Name;
```

### **Why Use CTEs?**
- Simplifies complex queries
- Increases readability
- Reusable within the query
- Can improve performance in certain cases

---

## **2. Basic CTE Example**  

Let’s start with a simple CTE to make the query cleaner.

✅ **Example:** Get employees with salaries above the average  
```sql
WITH AvgSalary AS (
    SELECT AVG(Salary) AS AvgSalary FROM Employees
)
SELECT EmployeeID, Name, Salary
FROM Employees, AvgSalary
WHERE Salary > AvgSalary.AvgSalary;
```

In this case, we defined the average salary as a CTE and used it in the main query.

---

## **3. CTEs for Multiple Uses**  

You can use **multiple CTEs** in a single query.  
```sql
WITH DeptAvg AS (
    SELECT Department, AVG(Salary) AS AvgSalary
    FROM Employees
    GROUP BY Department
),
HighEarners AS (
    SELECT EmployeeID, Name, Salary, Department
    FROM Employees
    WHERE Salary > 100000
)
SELECT e.Name, e.Department, e.Salary, d.AvgSalary
FROM HighEarners e
JOIN DeptAvg d ON e.Department = d.Department;
```
Here, we have two CTEs: one for average salaries and another for high earners, and we use both in the final query.

---

## **4. Recursive CTEs**  

A **recursive CTE** is a CTE that refers to itself. It's useful for hierarchical or recursive data, like organizational structures or bill-of-materials.

### **Syntax of Recursive CTE:**

```sql
WITH RECURSIVE CTE_Name AS (
    -- Base case (non-recursive query)
    SELECT column1, column2
    FROM table
    WHERE condition

    UNION ALL

    -- Recursive case (referencing CTE itself)
    SELECT column1, column2
    FROM table
    JOIN CTE_Name ON table.column = CTE_Name.column
)
SELECT * FROM CTE_Name;
```

### **Example: Recursive Query for Employee Hierarchy**  
Let’s say we have an `Employees` table with columns: `EmployeeID`, `Name`, and `ManagerID` (where `ManagerID` is the ID of the employee’s manager).

The goal is to list all employees under a specific manager.

```sql
WITH RECURSIVE EmployeeHierarchy AS (
    -- Base case: Select the manager
    SELECT EmployeeID, Name, ManagerID
    FROM Employees
    WHERE ManagerID IS NULL  -- Assuming NULL means top-level manager

    UNION ALL

    -- Recursive case: Select employees under the manager
    SELECT e.EmployeeID, e.Name, e.ManagerID
    FROM Employees e
    JOIN EmployeeHierarchy eh ON e.ManagerID = eh.EmployeeID
)
SELECT * FROM EmployeeHierarchy;
```
This query will return the **entire hierarchy of employees**, starting with the top-level manager and recursively getting their subordinates.

---

## **5. Common Mistakes & Best Practices**  

❌ **Not understanding recursion depth**  
Recursive CTEs can result in infinite loops if not properly controlled. Always make sure there’s a **clear stopping condition** in the recursive part.

✅ **Tip:** Use `LIMIT` or a `WHERE` condition to prevent excessive recursion in certain cases.

❌ **Overusing CTEs in complex queries**  
CTEs are great for readability but can impact performance when overused or used in large datasets.

✅ **Tip:** Consider temporary tables for large and complex datasets where performance is critical.

---

## **6. Exercise: Hands-on Practice**  

1️⃣ Create a CTE that returns **employees earning above the average salary** and then filter out employees who have the same salary as the highest-paid employee.  
2️⃣ Using a recursive CTE, find **all employees under a specific manager**, including subordinates at multiple levels.  
3️⃣ Combine **multiple CTEs** in one query to find employees whose salary is above the department average and who also have more than one direct report.  

---

# **Lesson 9: Triggers and Stored Procedures**

In this lesson, we'll explore **Triggers** and **Stored Procedures**, two advanced features in SQL that allow you to automate tasks and encapsulate logic in the database.

---

## **1. What Are Triggers?**

A **Trigger** is a special type of stored procedure that is automatically executed (or fired) when specific database events occur. Triggers can be set to run before or after an **INSERT**, **UPDATE**, or **DELETE** statement is executed.

### **Syntax of Triggers:**

```sql
CREATE TRIGGER trigger_name
{ BEFORE | AFTER } { INSERT | UPDATE | DELETE }
ON table_name
FOR EACH ROW
BEGIN
    -- Trigger logic here
END;
```

### **Types of Triggers:**
- **BEFORE Triggers**: Fired before the action (e.g., `INSERT`, `UPDATE`, `DELETE`) is executed.
- **AFTER Triggers**: Fired after the action is executed.

---

## **2. Example of a Trigger (AFTER INSERT)**

Suppose we have a `Products` table and an `Audit` table to track changes made to the `Products` table. We can use a **trigger** to automatically insert a record into the `Audit` table whenever a new product is added.

```sql
CREATE TRIGGER AfterProductInsert
AFTER INSERT
ON Products
FOR EACH ROW
BEGIN
    INSERT INTO Audit (Action, ProductID, ActionDate)
    VALUES ('INSERT', NEW.ProductID, NOW());
END;
```

In this example:
- **`AFTER INSERT`**: The trigger will fire after a new row is inserted into the `Products` table.
- **`NEW.ProductID`**: Refers to the `ProductID` of the newly inserted row.

---

## **3. Example of a Trigger (BEFORE UPDATE)**

Let’s say you want to ensure that the price of a product never goes below a certain value. You can create a **BEFORE UPDATE** trigger to check the price before it's updated.

```sql
CREATE TRIGGER BeforeProductUpdate
BEFORE UPDATE
ON Products
FOR EACH ROW
BEGIN
    IF NEW.Price < 10 THEN
        SET NEW.Price = 10;  -- Set price to 10 if it's less than 10
    END IF;
END;
```

In this example:
- **`NEW.Price`**: Refers to the price value that will be used after the update (not the original one).
- The trigger will prevent any product price from being updated to less than 10.

---

## **4. What Are Stored Procedures?**

A **Stored Procedure** is a set of SQL statements that can be executed as a single unit. Stored procedures allow you to encapsulate repetitive tasks or business logic in the database, making it easier to manage and execute.

### **Syntax of Stored Procedures:**

```sql
CREATE PROCEDURE procedure_name (parameters)
BEGIN
    -- Procedure logic here
END;
```

### **Advantages of Stored Procedures:**
- Reusability: Store common queries and logic.
- Security: Encapsulate complex operations to avoid exposing sensitive data.
- Performance: Reduce the amount of data sent between the application and database.

---

## **5. Example of a Simple Stored Procedure**

Let’s say you need a procedure to update the price of a product. You can write a stored procedure like this:

```sql
CREATE PROCEDURE UpdateProductPrice(IN ProductID INT, IN NewPrice DECIMAL)
BEGIN
    UPDATE Products
    SET Price = NewPrice
    WHERE ProductID = ProductID;
END;
```

To call this procedure:

```sql
CALL UpdateProductPrice(101, 19.99);
```

This will update the price of the product with `ProductID = 101` to `19.99`.

---

## **6. Example of a Stored Procedure with Multiple Statements**

A stored procedure can include **multiple SQL statements**. For example, let’s write a procedure to **increase the price of all products by 10%**.

```sql
CREATE PROCEDURE IncreasePrices()
BEGIN
    UPDATE Products
    SET Price = Price * 1.10;

    INSERT INTO Audit (Action, ActionDate)
    VALUES ('PRICE UPDATE', NOW());
END;
```

---

## **7. Common Mistakes & Best Practices**

❌ **Not handling errors in triggers**  
Triggers should have proper error handling to prevent unwanted outcomes. Always use appropriate checks or `BEGIN...EXCEPTION` in stored procedures.

✅ **Best Practice:** Avoid writing **complex logic in triggers**. Triggers should only handle simple validation or logging, and logic-heavy operations should be placed in stored procedures.

❌ **Overusing triggers**  
Having too many triggers can slow down the performance of your database, especially for large tables. Try to keep triggers simple and avoid overuse.

---

## **8. Exercise: Hands-on Practice**

1️⃣ Create a trigger that **logs every update** on the `Products` table, including the old price, new price, and timestamp.  
2️⃣ Write a stored procedure to **decrease the price of all products** in a specific category by 20%.  
3️⃣ Create a stored procedure that **inserts a new product** only if the `Price` is greater than 0. If the price is 0 or less, raise an error.

---

# **Lesson 10: Advanced SQL Concepts (Optimization & Indexing)**

In this lesson, we will cover two critical concepts for advanced SQL users: **Query Optimization** and **Indexing**. These concepts are key to improving the performance of SQL queries, especially in large databases.

---

## **1. Query Optimization**

**Query Optimization** is the process of improving the performance of a SQL query by reducing the amount of time and resources it takes to execute. Efficient queries are crucial when dealing with large datasets or complex operations.

### **Key Optimization Techniques:**

### **1.1. Use SELECT Only for Necessary Columns**

Instead of using `SELECT *`, always specify the columns you need. This minimizes the data fetched, reducing the load on the database.

#### Example:
```sql
-- Less efficient
SELECT * FROM Employees;

-- More efficient
SELECT EmployeeID, Name, Salary FROM Employees;
```

---

### **1.2. Use WHERE Clause Efficiently**

Ensure that the `WHERE` clause filters data as much as possible before performing any joins or aggregations.

#### Example:
```sql
-- Inefficient: Filtering happens after the join
SELECT e.EmployeeID, e.Name, d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE e.Salary > 50000;

-- Efficient: Filter as early as possible
SELECT e.EmployeeID, e.Name, d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID AND e.Salary > 50000;
```

Filtering data before performing joins reduces the amount of data being processed.

---

### **1.3. Use JOINs Instead of Subqueries**

Subqueries (especially correlated subqueries) can be slow. Whenever possible, use `JOINs` instead, as they are generally more efficient.

#### Example:
```sql
-- Inefficient subquery
SELECT Name, Salary
FROM Employees
WHERE DepartmentID IN (
    SELECT DepartmentID
    FROM Departments
    WHERE Location = 'New York'
);

-- Efficient join
SELECT e.Name, e.Salary
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE d.Location = 'New York';
```

---

### **1.4. Avoid Using Functions in WHERE Clause**

Using functions on columns in the `WHERE` clause (like `UPPER()`, `LOWER()`, `DATE()`, etc.) can prevent the database from using indexes effectively. It’s best to avoid them, or if necessary, move the function logic outside the query.

#### Example:
```sql
-- Inefficient query
SELECT Name FROM Employees
WHERE LOWER(Name) = 'john doe';

-- Efficient query
SELECT Name FROM Employees
WHERE Name = 'John Doe';
```

---

### **1.5. LIMIT the Results**

When you don’t need all the rows, use `LIMIT` (or `FETCH FIRST`) to restrict the number of rows returned. This reduces the workload on the database.

#### Example:
```sql
SELECT * FROM Employees
ORDER BY Salary DESC
LIMIT 10;
```

This query only returns the top 10 highest-paid employees.

---

## **2. Indexing**

**Indexes** are special data structures used to speed up the retrieval of rows from a database table. Indexes work by creating a quick lookup table that can be used for faster searches.

### **2.1. What Is an Index?**

An **Index** is created on one or more columns of a table. It allows the database to find rows faster based on the indexed columns. Think of it like an index in a book — instead of reading through the entire book, you can go directly to the relevant section.

#### Example:
```sql
CREATE INDEX idx_employee_name
ON Employees (Name);
```

This index will speed up searches for employees by their name.

---

### **2.2. Types of Indexes:**

#### 2.2.1. **Single-Column Index**

An index on a single column, often used when you frequently search by that column.

```sql
CREATE INDEX idx_employee_id
ON Employees (EmployeeID);
```

#### 2.2.2. **Composite Index**

An index that covers multiple columns. It's useful when you often perform searches or join operations based on multiple columns.

```sql
CREATE INDEX idx_employee_dept_salary
ON Employees (DepartmentID, Salary);
```

#### 2.2.3. **Unique Index**

A **unique index** enforces uniqueness for values in a column, ensuring no duplicates exist.

```sql
CREATE UNIQUE INDEX idx_unique_employee_id
ON Employees (EmployeeID);
```

---

### **2.3. When to Use Indexes**

Indexes are particularly helpful when:
- You have frequent `SELECT` queries that filter on specific columns.
- You are joining tables on certain columns.
- You use `ORDER BY` on specific columns frequently.

However, **too many indexes** can slow down `INSERT`, `UPDATE`, and `DELETE` operations since each index needs to be updated as well.

---

### **2.4. Query Execution Plan**

A **Query Execution Plan** shows how SQL Server or other DBMS executes your query. It helps you identify inefficient operations, like full table scans, which could be optimized with proper indexing.

You can view the execution plan by using the `EXPLAIN` keyword in front of your query.

```sql
EXPLAIN SELECT * FROM Employees WHERE Name = 'John Doe';
```

The output will show whether the database uses an index or performs a full table scan.

---

## **3. Common Mistakes & Best Practices**

❌ **Not analyzing query performance**  
Always analyze the performance of your queries using **EXPLAIN** or a similar tool before and after adding indexes or making changes.

✅ **Best Practice:** Index columns that are often used in `WHERE`, `JOIN`, or `ORDER BY` clauses, but avoid over-indexing.

❌ **Over-indexing**  
Having too many indexes can negatively impact `INSERT`, `UPDATE`, and `DELETE` performance, as the database has to maintain the indexes.

✅ **Best Practice:** Periodically review and drop unused indexes. Use **`SHOW INDEX`** or **`pg_indexes`** (for PostgreSQL) to find all indexes in your database.

---

## **4. Exercise: Hands-on Practice**

1️⃣ Write a query to **optimize** a slow query using proper `JOIN` and `WHERE` clause ordering.  
2️⃣ Create an **index** on the `DepartmentID` column of the `Employees` table and test its impact on query performance.  
3️⃣ Write a query to **analyze** the query execution plan for a complex query and suggest improvements.  
4️⃣ Add a **composite index** on `Salary` and `DepartmentID` for better performance when filtering by salary and department.

---

# **Lesson 11: Advanced Data Types & Transactions**

In this lesson, we will delve into **advanced data types** and **transactions** in SQL, which are crucial for working with complex data and ensuring data integrity during multiple operations.

---

## **1. Advanced Data Types**

SQL databases support various advanced data types that allow you to store and manipulate more complex data structures beyond the basic numeric, string, and date types.

### **1.1. JSON Data Type**

The **JSON** data type is used to store **JavaScript Object Notation (JSON)** data. Many modern databases (like PostgreSQL and MySQL) offer built-in support for storing and querying JSON data.

#### Example:
```sql
CREATE TABLE Employees (
    EmployeeID INT PRIMARY KEY,
    Name VARCHAR(100),
    Details JSON
);

INSERT INTO Employees (EmployeeID, Name, Details)
VALUES (1, 'John Doe', '{"Age": 30, "Department": "Sales"}');
```

You can also query specific elements within the JSON data.

#### Query:
```sql
SELECT Name, Details->>'Department' AS Department
FROM Employees
WHERE Details->>'Age' = '30';
```

---

### **1.2. XML Data Type**

The **XML** data type is used to store XML data. It's especially useful when dealing with data that needs to conform to a specific structure (e.g., data in XML format).

#### Example:
```sql
CREATE TABLE Products (
    ProductID INT PRIMARY KEY,
    ProductInfo XML
);

INSERT INTO Products (ProductID, ProductInfo)
VALUES (101, '<Product><Name>Gadget</Name><Price>19.99</Price></Product>');
```

You can query specific XML elements using the **XML functions** in SQL.

#### Query:
```sql
SELECT ProductInfo.value('(/Product/Name)[1]', 'VARCHAR(100)') AS ProductName
FROM Products
WHERE ProductID = 101;
```

---

### **1.3. ENUM Data Type**

An **ENUM** data type allows you to store a predefined set of values, making it useful for columns that represent fixed options, like days of the week, status codes, or roles.

#### Example:
```sql
CREATE TABLE Orders (
    OrderID INT PRIMARY KEY,
    OrderStatus ENUM('Pending', 'Shipped', 'Delivered') NOT NULL
);

INSERT INTO Orders (OrderID, OrderStatus)
VALUES (1, 'Pending');
```

This ensures that only valid values are entered for `OrderStatus`.

---

### **1.4. Spatial Data Types**

For geographic or geometric data, SQL databases support **spatial data types** such as **POINT**, **LINESTRING**, and **POLYGON**. These types are used to store location-based data, such as coordinates or shapes.

#### Example (PostgreSQL with PostGIS extension):
```sql
CREATE TABLE Locations (
    LocationID SERIAL PRIMARY KEY,
    Location GEOMETRY(Point, 4326)
);

INSERT INTO Locations (Location)
VALUES (ST_SetSRID(ST_MakePoint(-73.9857, 40.7484), 4326));
```

You can then query spatial data, such as finding locations near a specific point.

#### Query:
```sql
SELECT LocationID
FROM Locations
WHERE ST_DWithin(Location, ST_SetSRID(ST_MakePoint(-73.9857, 40.7484), 4326), 500);
```

This query checks if the location is within 500 meters of the given point.

---

## **2. Transactions**

A **Transaction** is a sequence of one or more SQL operations that are treated as a single unit. Transactions are essential for ensuring **data integrity**. They ensure that all operations are completed successfully; if one operation fails, all others are rolled back.

### **2.1. ACID Properties**

Transactions are governed by the **ACID** properties:

- **Atomicity**: All operations in a transaction are completed successfully, or none are.
- **Consistency**: The database starts and ends in a consistent state.
- **Isolation**: Transactions are isolated from each other, preventing interference.
- **Durability**: Once a transaction is committed, its changes are permanent.

---

### **2.2. Transaction Syntax**

To begin, commit, and roll back transactions, you use the following commands:

- **BEGIN TRANSACTION**: Starts a transaction.
- **COMMIT**: Saves changes made in the transaction.
- **ROLLBACK**: Undoes all changes made in the transaction.

#### Example:

```sql
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 100
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 100
WHERE AccountID = 2;

COMMIT;  -- If everything is successful, commit the transaction.
```

If something goes wrong during the updates, you can use `ROLLBACK` to undo both updates.

```sql
BEGIN TRANSACTION;

UPDATE Accounts
SET Balance = Balance - 100
WHERE AccountID = 1;

UPDATE Accounts
SET Balance = Balance + 100
WHERE AccountID = 2;

-- Something goes wrong, so we roll back the changes
ROLLBACK;
```

---

### **2.3. Isolation Levels**

SQL supports different **isolation levels** for transactions, which control how the operations of one transaction are isolated from others. The four isolation levels are:

1. **READ UNCOMMITTED**: Allows dirty reads (reading uncommitted data).
2. **READ COMMITTED**: Only committed data is readable.
3. **REPEATABLE READ**: Ensures that data read during a transaction cannot change during the transaction.
4. **SERIALIZABLE**: The highest isolation level, ensuring no other transactions can access the data being read.

You can set the isolation level using the `SET TRANSACTION ISOLATION LEVEL` command.

#### Example:
```sql
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
-- SQL operations here
COMMIT;
```

---

### **2.4. Common Mistakes & Best Practices**

❌ **Not using transactions when modifying multiple tables**  
If your query affects multiple tables, always use transactions to ensure data integrity. Without transactions, if one query fails, the changes made by previous queries will be committed, leading to inconsistent data.

✅ **Best Practice:** Always use transactions for operations that modify multiple records or tables. Use `COMMIT` to save changes and `ROLLBACK` to undo changes if something goes wrong.

❌ **Leaving transactions open**  
Always commit or roll back your transactions after completing them. Open transactions can lock tables and affect performance.

✅ **Best Practice:** Ensure that you close transactions as soon as possible by using `COMMIT` or `ROLLBACK` to prevent locking issues.

---

## **3. Exercise: Hands-on Practice**

1️⃣ Create a table that stores **JSON data** for user preferences, and write a query to extract specific preferences (e.g., `theme` or `language`).  
2️⃣ Write a transaction that **transfers money** from one account to another, ensuring the transaction is atomic.  
3️⃣ Create a table that stores **XML data** for products, and query specific attributes of a product using XML functions.  
4️⃣ Use **spatial data types** to store and query location information for a set of stores.

---

# **Lesson 12: Performance Tuning and Advanced Queries**

In this lesson, we'll focus on **performance tuning** and advanced query techniques to help you optimize SQL queries for large-scale applications and data. We'll cover **window functions**, **common table expressions (CTEs)**, **query optimization**, and **indexes**.

---

## **1. Window Functions**

Window functions allow you to perform calculations across a set of table rows related to the current row. Unlike aggregate functions, window functions do not collapse the result set, and you can still see the individual rows.

### **1.1. Syntax of Window Functions**

A window function is typically used with the **OVER()** clause, which defines the window (or the subset of data) that the function will operate over.

#### Basic Example:
```sql
SELECT EmployeeID, Name, Salary, 
       AVG(Salary) OVER (PARTITION BY Department) AS AvgDepartmentSalary
FROM Employees;
```
In this query:
- `AVG(Salary)` is the window function.
- `PARTITION BY Department` divides the data into partitions (departments in this case), and the `AVG` function computes the average salary for each department.

### **1.2. Types of Window Functions**
- **Aggregate Functions**: `SUM()`, `AVG()`, `COUNT()`, `MAX()`, `MIN()`, etc.
- **Ranking Functions**: `ROW_NUMBER()`, `RANK()`, `DENSE_RANK()`, `NTILE()`.
- **Analytic Functions**: `LEAD()`, `LAG()`, `FIRST_VALUE()`, `LAST_VALUE()`.

#### Example using `ROW_NUMBER()`:
```sql
SELECT EmployeeID, Name, Department,
       ROW_NUMBER() OVER (PARTITION BY Department ORDER BY Salary DESC) AS Rank
FROM Employees;
```
This query assigns a rank to each employee within their department based on their salary (highest salary gets rank 1).

---

## **2. Common Table Expressions (CTEs)**

A **Common Table Expression (CTE)** is a temporary result set that you can reference within a `SELECT`, `INSERT`, `UPDATE`, or `DELETE` query. CTEs improve query readability and organization, especially for complex queries.

### **2.1. Syntax of CTE**

The CTE is defined using the `WITH` keyword, followed by the CTE name and the query that generates the temporary result set.

#### Basic Example:
```sql
WITH DepartmentAvgSalary AS (
    SELECT Department, AVG(Salary) AS AvgSalary
    FROM Employees
    GROUP BY Department
)
SELECT e.Name, e.Salary, d.AvgSalary
FROM Employees e
JOIN DepartmentAvgSalary d
ON e.Department = d.Department
WHERE e.Salary > d.AvgSalary;
```
This query first computes the average salary per department using the CTE and then selects employees whose salary is higher than the department average.

---

## **3. Query Optimization**

SQL query optimization is essential to make sure that queries execute efficiently, especially when dealing with large datasets.

### **3.1. Using Indexes**

An **index** is a data structure that improves the speed of data retrieval operations on a database table. Indexes are crucial for improving the performance of SELECT queries, especially when querying large tables.

#### Example of creating an index:
```sql
CREATE INDEX idx_salary ON Employees (Salary);
```

Indexes improve the performance of `SELECT` queries by allowing faster data retrieval. However, they can slow down `INSERT`, `UPDATE`, and `DELETE` operations, as the index needs to be updated whenever the data changes.

### **3.2. Optimizing Queries with Joins**

When joining multiple tables, make sure to:
- **Use appropriate indexes** on columns involved in joins.
- **Use inner joins** when possible, as they are more efficient than outer joins.

#### Example:
```sql
SELECT e.Name, e.Salary, d.DepartmentName
FROM Employees e
JOIN Departments d ON e.DepartmentID = d.DepartmentID
WHERE e.Salary > 50000;
```
In this case, ensure that there's an index on the `DepartmentID` column in both `Employees` and `Departments` tables.

### **3.3. Avoiding Subqueries in SELECT Clauses**

While subqueries can be useful, they are often inefficient, especially when used in `SELECT` clauses. It's generally better to use `JOIN` or `CTEs` instead of subqueries in the `SELECT` part of the query.

#### Inefficient Subquery:
```sql
SELECT Name, (SELECT MAX(Salary) FROM Employees) AS MaxSalary
FROM Employees;
```

#### Optimized Query with `JOIN`:
```sql
WITH MaxSalary AS (SELECT MAX(Salary) AS MaxSalary FROM Employees)
SELECT Name, MaxSalary
FROM Employees, MaxSalary;
```

### **3.4. Using EXPLAIN for Query Analysis**

The `EXPLAIN` keyword helps analyze how a query is executed by the database and gives insights into the query's performance.

#### Example:
```sql
EXPLAIN SELECT Name, Salary FROM Employees WHERE Salary > 50000;
```
This will provide the execution plan, showing how the database engine will retrieve the data (e.g., using an index scan, table scan, etc.).

---

## **4. Advanced Query Techniques**

### **4.1. Self Joins**

A **self join** is a query where a table is joined with itself. This is useful when you have hierarchical or relational data within the same table.

#### Example:
```sql
SELECT e1.Name AS Employee, e2.Name AS Manager
FROM Employees e1
LEFT JOIN Employees e2 ON e1.ManagerID = e2.EmployeeID;
```
This query returns employees along with their managers, assuming each employee has a `ManagerID` that refers to another employee's `EmployeeID`.

---

### **4.2. Pivoting Data**

Pivoting is the process of converting row data into column data. Some databases support **PIVOT** and **UNPIVOT** operations, but you can also achieve pivoting with conditional aggregation.

#### Example:
```sql
SELECT 
    Department,
    SUM(CASE WHEN Gender = 'Male' THEN Salary ELSE 0 END) AS MaleSalary,
    SUM(CASE WHEN Gender = 'Female' THEN Salary ELSE 0 END) AS FemaleSalary
FROM Employees
GROUP BY Department;
```
This query aggregates salaries by gender for each department, effectively "pivoting" the data.

---

## **5. Exercise: Hands-on Practice**

1️⃣ Use **window functions** to calculate the rank of employees in each department based on their salary.  
2️⃣ Write a **CTE** to find employees whose salary is above the average salary of their department.  
3️⃣ Optimize a query that retrieves a list of employees with their department names, ensuring indexes and joins are used efficiently.  
4️⃣ Implement a **self join** to find employees who work in the same department as their managers.  
5️⃣ Write a query to **pivot** the employee data by department and gender, showing the total salary for each combination.

---

# **Lesson 13: Security and Backup Strategies for SQL Databases**

In this lesson, we will explore how to secure your SQL databases and implement robust backup strategies to ensure data integrity and availability. These concepts are essential for managing production environments.

---

## **1. Database Security**

Ensuring the security of your SQL database involves protecting it from unauthorized access, data breaches, and malicious attacks. Here are some key security practices:

### **1.1. User Authentication and Authorization**

**Authentication** ensures that only authorized users can access the database, while **authorization** defines what actions a user can perform once authenticated.

- **Authentication Methods:**
  - **Password-based Authentication**: Users authenticate with a username and password.
  - **Multi-Factor Authentication (MFA)**: Adds an extra layer of security by requiring additional credentials (e.g., SMS code or authenticator app).

- **Authorization:**  
  - Assign specific **roles** to users (e.g., `Admin`, `User`, `Read-Only`) based on their responsibilities.
  - **GRANT** and **REVOKE** privileges to control what each user can do.
  - Example:
    ```sql
    -- Granting SELECT permission on Employees table to the user
    GRANT SELECT ON Employees TO user_name;
    
    -- Revoking DELETE permission
    REVOKE DELETE ON Employees FROM user_name;
    ```

### **1.2. Encryption**

Encryption protects sensitive data from unauthorized access. Two main types of encryption can be used:

- **Data-at-rest encryption**: Encrypts the data stored in the database.
- **Data-in-transit encryption**: Encrypts data while it’s being transmitted between the client and the server.

Most modern databases provide built-in support for encryption (e.g., Transparent Data Encryption in SQL Server, MySQL, etc.).

### **1.3. SQL Injection Prevention**

SQL Injection is a type of attack where malicious SQL code is inserted into a query to manipulate the database. To prevent SQL injection:
- **Use Prepared Statements** and **Parameterized Queries**. This separates user inputs from the query logic and prevents malicious data from being executed.
  
Example of a prepared statement:
```sql
SELECT * FROM Employees WHERE Department = ?;
```
In application code:
```python
cursor.execute("SELECT * FROM Employees WHERE Department = ?", (user_input,))
```

### **1.4. Auditing and Monitoring**

Auditing tracks user activities, helping identify potential security risks or unauthorized actions. Common practices include:
- Enabling **audit logs** to record database operations.
- Setting up **alerts** to monitor suspicious activities (e.g., failed login attempts or permission changes).

---

## **2. Backup Strategies**

A solid backup strategy is crucial to ensure the availability and integrity of data. Here are key components:

### **2.1. Types of Backups**

- **Full Backup**: A complete backup of the entire database.
- **Incremental Backup**: Only the data that has changed since the last backup is backed up. It is faster but requires a full backup for recovery.
- **Differential Backup**: Backs up the data that has changed since the last full backup.
  
Each type has its own use case, and they can be combined for efficiency and safety.

### **2.2. Backup Frequency**

The frequency of backups depends on the size of the database and how critical the data is:
- **Daily Full Backups**: For smaller databases or low-risk systems.
- **Weekly Full Backups + Daily Incremental Backups**: For larger systems that require more frequent updates.

### **2.3. Backup Storage Locations**

Storing backups in multiple locations improves redundancy. Common options include:
- **Local Storage**: Backup on the same machine (fast, but vulnerable to machine failure).
- **Offsite Storage**: Storing backups at a different physical location or cloud storage (e.g., AWS S3, Google Cloud Storage).
- **Cloud Backup Solutions**: Many managed services offer automatic backups with built-in redundancy.

### **2.4. Automated Backups**

Set up automated backups to reduce the risk of human error and ensure consistency. Most modern databases (MySQL, PostgreSQL, SQL Server) allow scheduling backups using cron jobs, SQL Server Agent, or other tools.

For example, scheduling a backup in MySQL using `cron`:
```bash
0 2 * * * mysqldump -u root -p database_name > /path/to/backups/backup.sql
```

### **2.5. Backup Testing**

Regularly test your backups to ensure they can be restored. A backup is only as good as its ability to be recovered when needed. Simulate a disaster recovery scenario by restoring backups periodically.

---

## **3. Disaster Recovery Planning**

A **Disaster Recovery Plan (DRP)** outlines steps to take if the database becomes corrupted, compromised, or lost. A good DRP includes:
- Regular **backups** of both data and configuration settings.
- A plan for restoring from backups (both manual and automated steps).
- A plan for dealing with security breaches, including how to isolate the compromised database and restore data from an earlier secure point.

### **3.1. Backup Retention Policy**

- **Retention period**: Keep backups for a predefined period (e.g., 30 days, 90 days, etc.) based on legal and business requirements.
- After the retention period, older backups should be deleted or archived to keep storage costs manageable.

---

## **4. Best Practices**

Here are some best practices to follow for database security and backups:
- **Use Role-Based Access Control (RBAC)** to limit access based on user roles.
- **Use encryption** for both data-at-rest and data-in-transit.
- **Regularly update** your database software to patch vulnerabilities.
- **Monitor database activity** with automated tools.
- **Automate backups** and ensure backup logs are created.
- **Test your backups** regularly to confirm they can be restored.
- **Store backups** in multiple locations, preferably in the cloud or offsite storage.

---

## **5. Exercise: Hands-on Practice**

1️⃣ **Create a user** with specific privileges (e.g., `SELECT` access to the `Employees` table but no `INSERT` or `UPDATE` privileges).  
2️⃣ **Encrypt** sensitive columns in a table (e.g., Social Security numbers or passwords).  
3️⃣ **Perform a backup** of a sample database and simulate a restoration.  
4️⃣ Implement a **backup retention policy** by keeping backups for 30 days and deleting older ones.  
5️⃣ **Test SQL injection** vulnerabilities in a sample application, and fix them using prepared statements.

---

# **Lesson 14: Final Project**

In this final lesson, we’ll put everything you've learned into practice by creating a complete SQL database system. The project will cover everything from database design, advanced SQL queries, security, performance optimization, backup strategies, and more.

---

## **1. Capstone Project: Building a Complete SQL Database System**

### **Project Overview**

You will design and implement a comprehensive SQL database system for a **Library Management System**. This system will handle books, patrons, staff, and borrowing processes, with features like user authentication, data integrity, and reporting.

### **Steps for the Project:**

1. **Database Design**
   - Design an **Entity-Relationship Diagram (ERD)**.
   - Identify the tables and relationships.
     - **Books**: Stores information about the books.
     - **Patrons**: Stores information about library members.
     - **Staff**: Stores information about the library staff.
     - **Loans**: Tracks book loans, including borrow date and return date.
   - Define the **primary keys** and **foreign keys**.
   - Normalize the database to at least 3NF.

2. **Create the Database Schema**
   - Implement the tables and their relationships in SQL.
   - Example:
     ```sql
     CREATE TABLE Books (
         BookID INT PRIMARY KEY,
         Title VARCHAR(255) NOT NULL,
         Author VARCHAR(255),
         Genre VARCHAR(100),
         YearPublished INT
     );

     CREATE TABLE Patrons (
         PatronID INT PRIMARY KEY,
         Name VARCHAR(255) NOT NULL,
         Email VARCHAR(255),
         Phone VARCHAR(15)
     );

     CREATE TABLE Loans (
         LoanID INT PRIMARY KEY,
         PatronID INT,
         BookID INT,
         LoanDate DATE,
         ReturnDate DATE,
         FOREIGN KEY (PatronID) REFERENCES Patrons(PatronID),
         FOREIGN KEY (BookID) REFERENCES Books(BookID)
     );
     ```

3. **Implement Advanced SQL Queries**
   - Create **complex queries** to generate reports and insights from the database, such as:
     - List of all books that are currently on loan.
     - Patrons who have borrowed books over the last month.
     - Total number of books by genre.
     - Staff members who processed the most loans.
   - Example query:
     ```sql
     SELECT p.Name, COUNT(l.LoanID) AS TotalLoans
     FROM Patrons p
     JOIN Loans l ON p.PatronID = l.PatronID
     WHERE l.LoanDate > '2025-01-01'
     GROUP BY p.Name
     ORDER BY TotalLoans DESC;
     ```

4. **User Authentication and Authorization**
   - Implement user roles such as Admin, Staff, and Patron.
   - Admins can manage books and patrons, while staff can manage loans.
   - Example of creating a staff user:
     ```sql
     CREATE USER 'staff_user'@'localhost' IDENTIFIED BY 'password123';
     GRANT SELECT, INSERT, UPDATE ON Loans TO 'staff_user'@'localhost';
     GRANT SELECT ON Books, Patrons TO 'staff_user'@'localhost';
     ```

5. **Backup Strategy**
   - Set up a backup strategy for the database. Automate daily full backups and incremental backups.
   - Example (using MySQL):
     ```bash
     # Full backup
     mysqldump -u root -p library_db > /path/to/backup/library_db_full_$(date +%F).sql
     
     # Incremental backup
     mysqldump -u root -p --single-transaction --flush-logs --incremental --master-data=2 library_db > /path/to/backup/library_db_incremental_$(date +%F).sql
     ```

6. **Database Security**
   - Ensure that only authorized users can access sensitive data (e.g., patrons' personal information).
   - Encrypt sensitive columns, like the **Email** or **Phone** fields in the **Patrons** table.
   - Use **prepared statements** for any application interacting with the database.

7. **Performance Optimization**
   - Add **indexes** on columns that are frequently queried, such as `PatronID` in the **Loans** table.
   - Monitor query performance and optimize slow-running queries.
     ```sql
     CREATE INDEX idx_patron_id ON Loans(PatronID);
     ```

8. **Testing and Deployment**
   - Test all the features thoroughly (CRUD operations, user access, and backup/restore).
   - Deploy your database to a local or cloud server for live use.
   - Implement an automated restore process to recover from disasters.

---

## **2. Expert Tips for Building a Robust Database**

- **Database Normalization**: Always aim for 3NF (Third Normal Form) to minimize data redundancy and improve consistency. If performance is critical, consider denormalization.
  
- **Use Foreign Keys and Constraints**: Ensure referential integrity by using foreign keys to maintain relationships between tables. Always set constraints like `NOT NULL`, `UNIQUE`, and `CHECK` where applicable to enforce data integrity.
  
- **Security Best Practices**: Use strong passwords and encrypted connections (SSL/TLS). Limit the privileges of users according to the **least privilege principle** (i.e., give users the least amount of access necessary to perform their tasks).
  
- **Optimize Queries**: For complex queries, always check if you need an index, and avoid using **SELECT ***. Explicitly define the columns you need to retrieve.
  
- **Backup Strategies**: Use both full and incremental backups for efficiency. Store backups in multiple locations, such as cloud storage, for added security. Test backup restores regularly.

- **Disaster Recovery**: Always have a disaster recovery plan (DRP) that includes timely and reliable backup processes, and practice restoring backups to ensure you can recover from failure scenarios.



---



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

## **1. What Are Joins?**  

A **JOIN** is used to combine rows from two or more tables **based on a related column** (usually a primary-foreign key relation

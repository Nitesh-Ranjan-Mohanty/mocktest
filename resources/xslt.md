# XSLT Tutorial: From Basics to Advanced

## Table of Contents
1. [Introduction to XSLT](#introduction)
2. [Basic Concepts](#basic-concepts)
3. [XSLT Structure and Syntax](#structure-and-syntax)
4. [Templates and Pattern Matching](#templates)
5. [XPath Expressions](#xpath)
6. [Flow Control](#flow-control)
7. [Functions and Operators](#functions)
8. [Advanced Topics](#advanced-topics)

## Introduction {#introduction}

XSLT (eXtensible Stylesheet Language Transformations) is a language for transforming XML documents into other XML documents, HTML, plain text, or other formats. This tutorial will guide you through XSLT concepts from basic to advanced levels.

### Prerequisites
- Basic understanding of XML
- XML editor or XSLT processor
- Understanding of markup languages

## Basic Concepts {#basic-concepts}

### Sample XML Document
Let's use this XML throughout our examples:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="cooking">
        <title>Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <price>30.00</price>
    </book>
    <book category="children">
        <title>Harry Potter</title>
        <author>J.K. Rowling</author>
        <price>29.99</price>
    </book>
</bookstore>
```
This XML represents a small catalog of books in a bookstore, each with details such as category, title, author, and price.

#### XML Structure Breakdown

- The root element is "< bookstore >", which contains all book records.
- Each "< book >" element represents a book and has an attribute for category to categorize the book.
- Inside each "< book >", there are the following child elements:
  - "< title >" : The title of the book.
  - "< author >" : The author of the book.
  - "< price >" : The price of the book.

### Basic XSLT Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <!-- transformation rules go here -->
    </xsl:template>
</xsl:stylesheet>
```

This XML is an XSLT (Extensible Stylesheet Language Transformations) document, used to transform XML data into other formats like HTML, plain text, or another XML structure.

#### XSLT Structure Breakdown

- The XML declaration "< ?xml version="1.0" encoding="UTF-8"? >" defines the XML version and encoding.
- The root element is "< xsl:stylesheet >", which includes a version attribute and declares the XML namespace for XSLT ("xmlns:xsl="http://www.w3.org/1999/XSL/Transform").
- Inside "< xsl:stylesheet >", there’s an "< xsl:template >" element with a "match="/"" attribute, indicating that this template applies to the root node of the XML document. This is where transformation rules are defined, specifying how each part of the source XML should be transformed into the target format.

## Structure and Syntax {#structure-and-syntax}

### Simple HTML Transformation
```xml
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <body>
                <h1>My Bookstore</h1>
                <table border="1">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Price</th>
                    </tr>
                    <xsl:for-each select="bookstore/book">
                        <tr>
                            <td><xsl:value-of select="title"/></td>
                            <td><xsl:value-of select="author"/></td>
                            <td><xsl:value-of select="price"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
```


#### 1. **XML Declaration:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
```
- This is the XML declaration that specifies the version of XML (1.0) and the character encoding (UTF-8) used in the document.
- It’s a standard declaration for all XML documents to define how they are encoded.

#### 2. **XSLT Stylesheet Declaration:**
```xml
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
```
- The `<xsl:stylesheet>` element marks the beginning of the XSLT document.
- `version="1.0"` specifies that this XSLT stylesheet is using version 1.0.
- `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"` declares the XML namespace for XSLT. This ensures that elements prefixed with `xsl:` (like `<xsl:template>`) are recognized as XSLT elements.

#### 3. **Template Matching the Root:**
```xml
<xsl:template match="/">
```
- This is the key part of the XSLT transformation. It defines a **template** that matches the root node of the input XML (`/`).
- The match attribute `/` indicates that this template will apply to the root of the XML document. Essentially, it's saying "start the transformation here."

#### 4. **HTML Structure:**
```xml
<html>
    <body>
        <h1>My Bookstore</h1>
```
- This generates the HTML structure where the transformed content will be placed.
- The `<h1>` tag creates a top-level header that says "My Bookstore." This header will be shown at the top of the resulting HTML page.

#### 5. **Creating the Table:**
```xml
<table border="1">
    <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Price</th>
    </tr>
```
- Here, we are creating an HTML table with a border (`border="1"`).
- Inside the `<table>`, the first row is defined with `<tr>` (table row) and three header columns (`<th>` for Title, Author, and Price). These headers will label the columns of the table.

#### 6. **Iterating Over the Books:**
```xml
<xsl:for-each select="bookstore/book">
    <tr>
        <td><xsl:value-of select="title"/></td>
        <td><xsl:value-of select="author"/></td>
        <td><xsl:value-of select="price"/></td>
    </tr>
</xsl:for-each>
```
- `<xsl:for-each select="bookstore/book">`: This is a loop that iterates over each `<book>` element inside the `<bookstore>` element.
- Inside the loop:
  - `<xsl:value-of select="title"/>`: This extracts the text content of the `<title>` element from each `<book>` and places it inside a `<td>` (table data) cell.
  - Similarly, `<xsl:value-of select="author"/>` and `<xsl:value-of select="price"/>` are used to extract and display the author and price of each book in their respective cells.
- The loop ensures that for each `<book>`, a new row is created in the table.

#### 7. **Closing HTML Tags:**
```xml
</table>
    </body>
</html>
```
- After the `<xsl:for-each>` loop has processed all books, the table is closed with `</table>`.
- The body of the HTML (`</body>`) and the entire HTML document (`</html>`) are closed, completing the transformation.

#### How the XSLT Transformation Works:
1. **Match Root (`/`)**: The template matches the root of the XML document (`<bookstore>`), which is the starting point for the transformation.
2. **Generate HTML**: It starts creating an HTML document with a header "My Bookstore".
3. **Create Table**: It generates a table with the headers "Title", "Author", and "Price".
4. **Loop Over Books**: The `<xsl:for-each>` iterates over each `<book>` element inside the `<bookstore>`, and for each book, it creates a new row in the table displaying the book’s title, author, and price.
5. **Complete HTML**: The table is completed and the rest of the HTML document is closed.

#### Example XML Input:
For this XSLT to work, your input XML should look like this:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<bookstore>
    <book category="cooking">
        <title>Everyday Italian</title>
        <author>Giada De Laurentiis</author>
        <price>30.00</price>
    </book>
    <book category="children">
        <title>Harry Potter</title>
        <author>J.K. Rowling</author>
        <price>29.99</price>
    </book>
</bookstore>
```

#### Example Output HTML:
When you apply this XSLT to the above XML, you’ll get the following HTML output:

```html
<html>
    <body>
        <h1>My Bookstore</h1>
        <table border="1">
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>Everyday Italian</td>
                <td>Giada De Laurentiis</td>
                <td>30.00</td>
            </tr>
            <tr>
                <td>Harry Potter</td>
                <td>J.K. Rowling</td>
                <td>29.99</td>
            </tr>
        </table>
    </body>
</html>
```




## Templates and Pattern Matching {#templates}

### Basic Template Matching
```xml
<xsl:template match="book">
    <div class="book">
        <h2><xsl:value-of select="title"/></h2>
        <p>By: <xsl:value-of select="author"/></p>
    </div>
</xsl:template>
```

Here's a breakdown of the code:

- `<xsl:template match="book">`: This defines a template that matches `<book>` elements in the XML. When the XML contains a `<book>` element, this template will be applied.
  
- `<div class="book">`: This creates a `<div>` element in the HTML output with a class of `"book"`, which is commonly used for styling purposes in CSS.

- `<h2><xsl:value-of select="title"/></h2>`: This extracts the value of the `<title>` element within the `<book>` and displays it as a heading (`<h2>`).

- `<p>By: <xsl:value-of select="author"/></p>`: This extracts the value of the `<author>` element and displays it inside a paragraph (`<p>`) with the text "By: ".

This template assumes that the XML has a structure like this:

```xml
<library>
    <book>
        <title>Book Title</title>
        <author>Author Name</author>
    </book>
    <!-- Other book elements -->
</library>
```

When the XSLT is applied to this XML, it will transform each `<book>` element into an HTML block like:

```html
<div class="book">
    <h2>Book Title</h2>
    <p>By: Author Name</p>
</div>
```

This is a basic example of using XSLT for transforming XML data into a more readable or usable HTML format.

### Named Templates
**named templates** in XSLT used to create reusable and modular transformations.

Here's an explanation of how it works:

```xml
<xsl:template name="formatPrice">
    <xsl:param name="price"/>
    $<xsl:value-of select="format-number($price, '#.00')"/>
</xsl:template>
```

- **`<xsl:template name="formatPrice">`**: This defines a named template called `"formatPrice"`. Named templates are like functions in programming—they allow you to reuse the same logic in multiple places in your XSLT.
  
- **`<xsl:param name="price"/>`**: This is a parameter definition. The template takes an argument called `price`, which will be passed when the template is called.

- **`$<xsl:value-of select="format-number($price, '#.00')"/>`**: Inside the template, we use the `format-number()` function to format the `price` value. The pattern `#.00` ensures the price is formatted with two decimal places (e.g., `12.50`).

#### Calling the Named Template:

```xml
<xsl:call-template name="formatPrice">
    <xsl:with-param name="price" select="price"/>
</xsl:call-template>
```

- **`<xsl:call-template name="formatPrice">`**: This calls the previously defined `formatPrice` template.
  
- **`<xsl:with-param name="price" select="price"/>`**: This passes the `price` element from the XML as a parameter to the `formatPrice` template. The `select="price"` part indicates that the value of the `price` element in the XML document will be passed as the argument.

#### Example Usage:

If you have an XML document like this:

```xml
<product>
    <name>Product Name</name>
    <price>25.99</price>
</product>
```

And apply the XSLT, the output will look like:

```html
$25.99
```

In this case, the `formatPrice` template is used to format the `price` element into a more readable and properly formatted string (in this case, prefixed with a dollar sign and ensuring two decimal places).

#### Summary:
- **Named templates** allow you to define reusable code in XSLT.
- Parameters (`<xsl:param>`) are used to pass values into templates.
- `<xsl:call-template>` is used to invoke named templates, and `<xsl:with-param>` is used to provide the input parameters.

This technique is useful for breaking down complex transformations into smaller, reusable components. 

## XPath Expressions {#xpath}

XPath (XML Path Language) is a query language used to navigate and select nodes or values within an XML document. It allows you to traverse an XML document's structure and extract specific information based on a variety of conditions.

### Key Concepts of XPath:
1. **Nodes**: XPath works with XML nodes, which are elements, attributes, text, comments, etc.
2. **Paths**: XPath uses a path-like syntax to refer to elements in an XML document, similar to the way file paths refer to locations in a file system.

### Syntax:
- **Relative Path**: Refers to elements relative to the current node.
  Example: `book/title` (selects the `title` element inside the `book` element).
- **Absolute Path**: Starts from the root node and follows a defined path to the target element.
  Example: `/library/book/title` (selects the `title` element inside the `book` element, which is inside the `library` root element).
- **Wildcard `*`**: Selects all elements.
  Example: `//book/*` (selects all child elements of all `book` elements).
- **Predicates**: Used to filter nodes based on conditions.
  Example: `//book[price > 30]` (selects books where the price is greater than 30).
- **Axes**: Allow you to navigate nodes in relation to the current node (e.g., `parent`, `child`, `ancestor`, `descendant`).
  Example: `//book/ancestor::library` (selects the `library` ancestor of any `book` element).

### Common XPath Operators:
- `//`: Selects nodes from the entire document.
- `.`: Refers to the current node.
- `@`: Refers to an attribute.
  Example: `//@category` (selects all `category` attributes).
- `[]`: Used for filtering with conditions.
  Example: `//book[@category='fiction']` (selects books with a `category` attribute of "fiction").

XPath is commonly used with XSLT (Extensible Stylesheet Language Transformations), XML querying, and in programming languages for parsing XML documents.

Here are some basic XPath examples that demonstrate how to select nodes in XML documents:

1. **Select all books:**
   ```xml
   <xsl:for-each select="//book">
       <!-- Code to process each book -->
   </xsl:for-each>
   ```
   This selects all `<book>` elements in the XML document, regardless of their location.

2. **Select books with price > 30:**
   ```xml
   <xsl:for-each select="//book[price > 30]">
       <!-- Code to process books with price greater than 30 -->
   </xsl:for-each>
   ```
   This selects all `<book>` elements that have a `<price>` child element with a value greater than 30.

3. **Select the first book:**
   ```xml
   <xsl:value-of select="//book[1]/title"/>
   ```
   This selects the title of the first `<book>` element in the document.

4. **Select books by attribute:**
   ```xml
   <xsl:for-each select="//book[@category='cooking']">
       <!-- Code to process books with category='cooking' -->
   </xsl:for-each>
   ```
   This selects all `<book>` elements that have a `category` attribute with the value "cooking".

These are just basic XPath examples used within XSLT templates to traverse and select XML data for transformation or extraction.

### Advanced XPath
**Advanced XPath** refers to more complex and powerful features of XPath that allow for fine-grained navigation and selection of nodes within an XML document. While basic XPath allows you to select elements using simple paths, advanced XPath utilizes axes, functions, and operators to target nodes more precisely, providing greater flexibility for querying and navigating XML data.

#### Key Concepts of Advanced XPath:

1. **Axes**: Axes specify the direction of navigation relative to the current node, allowing you to traverse XML nodes in various ways.

   Some important axes include:
   - **`ancestor`**: Selects all ancestors of the current node (e.g., parent, grandparent).
     - Example: `ancestor::bookstore` (selects all ancestors of type `bookstore`).
   - **`following-sibling`**: Selects all siblings that follow the current node.
     - Example: `following-sibling::book[1]` (selects the first `book` element that follows the current node).
   - **`preceding`**: Selects all nodes that come before the current node in the document.
     - Example: `preceding::book[1]` (selects the first `book` element that precedes the current node).
   - **`child`**: Selects child nodes of the current node (this is the default when using `/`).
     - Example: `child::title` (selects the `title` child of the current node).
   - **`descendant`**: Selects all descendants (children, grandchildren, etc.) of the current node.
     - Example: `descendant::author` (selects all `author` descendants of the current node).
   - **`parent`**: Selects the parent node of the current node.
     - Example: `parent::bookstore` (selects the parent `bookstore` of the current node).
   - **`self`**: Refers to the current node.
     - Example: `self::book` (selects the current `book` node).

2. **Predicates**: These are conditions enclosed in square brackets `[]` that filter nodes based on specific criteria.
   - Example: `//book[price > 30]` selects all `book` elements where the price is greater than 30.
   - Predicates can be used with any axis (e.g., `ancestor::bookstore[price > 30]`).

3. **Wildcards (`*`)**: The wildcard `*` can be used to select any element node.
   - Example: `//book/*` selects all child elements of the `book` element.

4. **Functions**: XPath provides a variety of built-in functions for more advanced operations.
   - **`position()`**: Returns the position of a node in a node-set.
     - Example: `//book[position() = 1]` selects the first `book` element.
   - **`last()`**: Returns the last element in a node-set.
     - Example: `//book[last()]` selects the last `book` element.
   - **`text()`**: Selects the text content of a node.
     - Example: `//book/title/text()` selects the text inside the `title` element of each `book`.

5. **Logical Operators**: You can use logical operators (`and`, `or`) to combine conditions in predicates.
   - Example: `//book[price > 30 and @category='fiction']` selects all `book` elements where the price is greater than 30 and the category is "fiction".

6. **Absolute and Relative Paths**:
   - **Absolute path** starts from the root node (`/`), and specifies the full path to the desired node.
     - Example: `/library/book/title` selects the `title` of the first `book` inside the `library`.
   - **Relative path** starts from the current context node and allows more flexible, partial selection.
     - Example: `book/title` selects the `title` of all `book` elements.

#### Why Use Advanced XPath?
Advanced XPath enables more precise querying and manipulation of XML documents, particularly when dealing with complex or nested structures. It's especially useful in contexts like:
- **XSLT** (for transforming XML documents into other formats like HTML).
- **XML querying** (in databases or APIs).
- **Testing and validation** (e.g., using XPath to check specific values or structures in XML documents).
  
By leveraging XPath axes, predicates, and functions, you can fine-tune your searches, target specific parts of XML documents, and handle various hierarchical relationships in the data.

Below is a list that includes examples for the **Ancestor Axis** and the **Following-Sibling Axis**, along with the other common advanced XPath axes.

#### 1. **Ancestor Axis:**
   The **ancestor axis** selects all ancestor elements of the current node, starting from the immediate parent up to the root of the document.

   **Example:**
   ```xml
   <xsl:value-of select="ancestor::bookstore"/>
   ```
   - **Explanation**: This selects the closest `bookstore` ancestor of the current node. If the current node is a `book`, it will select the `bookstore` element that contains the `book`.

#### 2. **Following-Sibling Axis:**
   The **following-sibling axis** selects all sibling elements that come after the current node in the same parent.

   **Example:**
   ```xml
   <xsl:value-of select="following-sibling::book[1]/title"/>
   ```
   - **Explanation**: This selects the `title` of the first `book` element that follows the current node. If the current node is a `book`, it will select the `title` of the next `book` element.

#### 3. **Parent Axis:**
   The **parent axis** selects the parent of the current node.

   **Example:**
   ```xml
   <xsl:value-of select="parent::bookstore"/>
   ```
   - **Explanation**: This selects the `bookstore` element that is the parent of the current node. If the current node is a `book`, it will select the `bookstore` element that contains the `book`.

#### 4. **Child Axis:**
   The **child axis** selects the child nodes of the current node. This is the default when using `/`.

   **Example:**
   ```xml
   <xsl:value-of select="child::book"/>
   ```
   - **Explanation**: This selects all `book` child elements of the current node. If the current node is a `bookstore`, it will select all the `book` elements inside it.

#### 5. **Descendant Axis:**
   The **descendant axis** selects all descendants (children, grandchildren, etc.) of the current node.

   **Example:**
   ```xml
   <xsl:value-of select="descendant::author"/>
   ```
   - **Explanation**: This selects all `author` elements that are descendants of the current node. If the current node is a `bookstore`, it will find all `author` elements within any `book` or other descendants.

#### 6. **Self Axis:**
   The **self axis** refers to the current node itself.

   **Example:**
   ```xml
   <xsl:value-of select="self::book"/>
   ```
   - **Explanation**: This selects the `book` element itself if the current node is a `book`. It can be used when you need to explicitly refer to the current node.

#### 7. **Ancestor-or-Self Axis:**
   The **ancestor-or-self axis** selects all ancestors of the current node, including the node itself.

   **Example:**
   ```xml
   <xsl:value-of select="ancestor-or-self::bookstore"/>
   ```
   - **Explanation**: This selects the `bookstore` element and all its ancestors. If the current node is already a `bookstore`, it will select the current `bookstore` as well.

#### 8. **Descendant-or-Self Axis:**
   The **descendant-or-self axis** selects all descendants of the current node, including the node itself.

   **Example:**
   ```xml
   <xsl:value-of select="descendant-or-self::book"/>
   ```
   - **Explanation**: This selects the `book` element itself and all its descendants. If the current node is a `book`, it will select it; if the current node is a parent of a `book`, it will select all `book` elements within the current node.

#### 9. **Following Axis:**
   The **following axis** selects all nodes that appear after the current node in the document, excluding any descendants.

   **Example:**
   ```xml
   <xsl:value-of select="following::book[1]/title"/>
   ```
   - **Explanation**: This selects the `title` of the first `book` element that follows the current node in the document. If the current node is a `book`, it will return the title of the next `book`.

#### 10. **Preceding Axis:**
   The **preceding axis** selects all nodes that come before the current node in the document.

   **Example:**
   ```xml
   <xsl:value-of select="preceding::book[1]/title"/>
   ```
   - **Explanation**: This selects the `title` of the first `book` element that precedes the current node. If the current node is a `book`, it will return the title of the `book` that comes before it.

#### 11. **Preceding-Sibling Axis:**
   The **preceding-sibling axis** selects all sibling nodes that come before the current node on the same level.

   **Example:**
   ```xml
   <xsl:value-of select="preceding-sibling::book[1]/title"/>
   ```
   - **Explanation**: This selects the `title` of the first `book` element that precedes the current node on the same level. If the current node is a `book`, it will return the title of the `book` element that comes before it.


### Summary of Advanced XPath Axes:

- **`ancestor`**: Selects all ancestors (parent, grandparent, etc.).
- **`parent`**: Selects the parent of the current node.
- **`child`**: Selects the children of the current node.
- **`descendant`**: Selects all descendants (children, grandchildren, etc.).
- **`self`**: Selects the current node itself.
- **`ancestor-or-self`**: Selects all ancestors and the node itself.
- **`descendant-or-self`**: Selects all descendants and the node itself.
- **`following`**: Selects all nodes after the current node in the document (excluding descendants).
- **`preceding`**: Selects all nodes before the current node in the document.
- **`following-sibling`**: Selects all sibling nodes that come after the current node.
- **`preceding-sibling`**: Selects all sibling nodes that come before the current node.

These axes are essential for navigating complex XML structures, providing a flexible way to filter and select the nodes based on their relationships to other nodes.
## Flow Control {#flow-control}

### Conditional Processing
```xml
<xsl:template match="book">
    <div>
        <xsl:if test="price > 30">
            <span class="expensive">Expensive!</span>
        </xsl:if>
        
        <xsl:choose>
            <xsl:when test="price > 30">
                <span class="high">High Price</span>
            </xsl:when>
            <xsl:when test="price > 20">
                <span class="medium">Medium Price</span>
            </xsl:when>
            <xsl:otherwise>
                <span class="low">Low Price</span>
            </xsl:otherwise>
        </xsl:choose>
    </div>
</xsl:template>
```

### Sorting
```xml
<xsl:for-each select="bookstore/book">
    <xsl:sort select="price" data-type="number" order="descending"/>
    <!-- content -->
</xsl:for-each>
```

## Functions and Operators {#functions}

### String Functions
```xml
<!-- String manipulation -->
<xsl:value-of select="concat(author, ' - ', title)"/>
<xsl:value-of select="substring(title, 1, 10)"/>
<xsl:value-of select="translate(title, 'abcde', 'ABCDE')"/>
```

### Numeric Functions
```xml
<!-- Numeric operations -->
<xsl:value-of select="sum(//book/price)"/>
<xsl:value-of select="count(//book)"/>
<xsl:value-of select="round(price * 1.1)"/>
```

## Advanced Topics {#advanced-topics}

### Keys
```xml
<!-- Define key -->
<xsl:key name="book-by-category" match="book" use="@category"/>

<!-- Use key -->
<xsl:for-each select="key('book-by-category', 'cooking')">
    <!-- content -->
</xsl:for-each>
```

### Variables and Parameters

1. **Global Variable**:
   ```xml
   <xsl:variable name="tax-rate" select="0.1"/>
   ```
   - Declared at the global scope (outside any specific template or function).
   - Available throughout the XSLT stylesheet.
   - In this case, `tax-rate` represents a constant tax rate of `10%` (0.1).

2. **Local Variable**:
   ```xml
   <xsl:template match="book">
       <xsl:variable name="price-with-tax" select="price * (1 + $tax-rate)"/>
       <p>Price with tax: <xsl:value-of select="$price-with-tax"/></p>
   </xsl:template>
   ```
   - Declared within a specific template, `match="book"`.
   - Only available within the scope of the `<xsl:template>` where it is defined.
   - The variable `price-with-tax` is calculated using the value of the `price` element (assumed to exist within the matched `book` node) and the global `$tax-rate`.

#### Summary:
- **Global Variables**: Defined at the top-level and are accessible throughout the stylesheet.
- **Local Variables**: Defined within a template or function and only accessible within that context.
- **Scope**:
  - Global variables have a broader scope.
  - Local variables have a restricted, specific scope.


### Modes
```xml
<!-- Template with mode -->
<xsl:template match="book" mode="summary">
    <p><xsl:value-of select="title"/></p>
</xsl:template>

<xsl:template match="book" mode="detailed">
    <div>
        <h3><xsl:value-of select="title"/></h3>
        <p>Author: <xsl:value-of select="author"/></p>
        <p>Price: <xsl:value-of select="price"/></p>
    </div>
</xsl:template>

<!-- Apply templates with mode -->
<xsl:apply-templates select="//book" mode="summary"/>
```

### Working with Namespaces
```xml
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:my="http://example.com/ns">
    
    <xsl:template match="my:element">
        <xsl:value-of select="my:child"/>
    </xsl:template>
</xsl:stylesheet>
```

### Document() Function
```xml
<!-- Loading external XML -->
<xsl:variable name="external-data" select="document('external.xml')"/>
<xsl:template match="/">
    <xsl:for-each select="$external-data//item">
        <!-- process external data -->
    </xsl:for-each>
</xsl:template>
```

### Custom Functions (XSLT 2.0+)
```xml
<xsl:function name="my:calculateTotal">
    <xsl:param name="price"/>
    <xsl:param name="quantity"/>
    <xsl:value-of select="$price * $quantity"/>
</xsl:function>
```

### Error Handling
```xml
<xsl:template match="book">
    <xsl:try>
        <xsl:value-of select="price div quantity"/>
        <xsl:catch>
            <xsl:message>Error: Invalid calculation</xsl:message>
        </xsl:catch>
    </xsl:try>
</xsl:template>
```

## Best Practices

1. **Modular Design**
   - Break down complex transformations into smaller templates
   - Use named templates for reusable code
   - Organize templates logically

2. **Performance Optimization**
   - Use keys for faster lookups
   - Minimize the use of complex XPath expressions
   - Avoid unnecessary template calls

3. **Maintainability**
   - Comment your code
   - Use meaningful variable and template names
   - Follow consistent formatting

4. **Debug Techniques**
   - Use `xsl:message` for debugging
   - Test templates in isolation
   - Validate input and output XML

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

### Basic XPath Examples
```xml
<!-- Select all books -->
<xsl:for-each select="//book">

<!-- Select books with price > 30 -->
<xsl:for-each select="//book[price > 30]">

<!-- Select the first book -->
<xsl:value-of select="//book[1]/title"/>

<!-- Select books by attribute -->
<xsl:for-each select="//book[@category='cooking']">
```

### Advanced XPath
```xml
<!-- Ancestor axis -->
<xsl:value-of select="ancestor::bookstore"/>

<!-- Following-sibling axis -->
<xsl:value-of select="following-sibling::book[1]/title"/>

<!-- Preceding axis -->
<xsl:value-of select="preceding::book[1]/title"/>
```

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
```xml
<!-- Global variable -->
<xsl:variable name="tax-rate" select="0.1"/>

<!-- Local variable -->
<xsl:template match="book">
    <xsl:variable name="price-with-tax" select="price * (1 + $tax-rate)"/>
    <p>Price with tax: <xsl:value-of select="$price-with-tax"/></p>
</xsl:template>
```

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

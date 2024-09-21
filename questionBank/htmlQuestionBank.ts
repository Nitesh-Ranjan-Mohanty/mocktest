interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    topic: string;
    example?: string;
  }
  
  export const htmlQuestions: Question[] = [
    {
      "id": 1,
      "question": "What does HTML stand for?",
      "options": [
        "Hypertext Markup Language",
        "Hypertext Machine Language",
        "Hightext Markup Language",
        "Hyperlink and Text Markup Language"
      ],
      "answer": "Hypertext Markup Language",
      "explanation": "HTML stands for Hypertext Markup Language, which is the standard markup language for documents designed to be displayed in a web browser.",
      "topic": "html",
      "example": "<!DOCTYPE html>"
    },
    {
      "id": 2,
      "question": "Which HTML element is used to define the title of a document?",
      "options": [
        "<head>",
        "<title>",
        "<meta>",
        "<body>"
      ],
      "answer": "<title>",
      "explanation": "The <title> element is used within the <head> section of an HTML document to define the title that appears in the browser's title bar or tab.",
      "topic": "html",
      "example": "<title>My Web Page</title>"
    },
    {
      "id": 3,
      "question": "Which tag is used to create a hyperlink in HTML?",
      "options": [
        "<link>",
        "<a>",
        "<href>",
        "<url>"
      ],
      "answer": "<a>",
      "explanation": "The <a> (anchor) tag is used to create hyperlinks, allowing users to click and navigate to other web pages.",
      "topic": "html",
      "example": "<a href='https://www.example.com'>Click Here</a>"
    },
    {
      "id": 4,
      "question": "What is the purpose of the <meta> tag in HTML?",
      "options": [
        "To define a header",
        "To provide metadata about the document",
        "To link CSS styles",
        "To create a list"
      ],
      "answer": "To provide metadata about the document",
      "explanation": "The <meta> tag is used to specify metadata such as character set, author, and viewport settings for responsive design.",
      "topic": "html",
      "example": "<meta charset='UTF-8'>"
    },
    {
      "id": 5,
      "question": "Which tag is used to define an unordered list?",
      "options": [
        "<ol>",
        "<ul>",
        "<li>",
        "<list>"
      ],
      "answer": "<ul>",
      "explanation": "The <ul> tag is used to create an unordered list, typically displayed with bullet points.",
      "topic": "html",
      "example": "<ul><li>Item 1</li><li>Item 2</li></ul>"
    },
    {
      "id": 6,
      "question": "Which attribute is used to specify an image's source in HTML?",
      "options": [
        "src",
        "href",
        "alt",
        "link"
      ],
      "answer": "src",
      "explanation": "The 'src' attribute in the <img> tag specifies the URL of the image to be displayed.",
      "topic": "html",
      "example": "<img src='image.jpg' alt='Description'>"
    },
    {
      "id": 7,
      "question": "What does the <br> tag do?",
      "options": [
        "Creates a line break",
        "Creates a paragraph",
        "Creates a header",
        "Creates a link"
      ],
      "answer": "Creates a line break",
      "explanation": "The <br> tag is an empty tag that produces a line break in the text, forcing subsequent content to appear on a new line.",
      "topic": "html",
      "example": "Line 1<br>Line 2"
    },
    {
      "id": 8,
      "question": "Which tag is used to define a table in HTML?",
      "options": [
        "<table>",
        "<tab>",
        "<thead>",
        "<tr>"
      ],
      "answer": "<table>",
      "explanation": "The <table> tag is used to create a table in HTML, and it can contain <tr>, <th>, and <td> elements.",
      "topic": "html",
      "example": "<table><tr><td>Cell</td></tr></table>"
    },
    {
      "id": 9,
      "question": "What is the purpose of the <form> element?",
      "options": [
        "To create a table",
        "To create a hyperlink",
        "To collect user input",
        "To define a list"
      ],
      "answer": "To collect user input",
      "explanation": "The <form> element is used to create a form for user input, allowing the collection of data such as text, selections, and buttons.",
      "topic": "html",
      "example": "<form action='submit.php'><input type='text'></form>"
    },
    {
      "id": 10,
      "question": "What does the <iframe> tag do?",
      "options": [
        "Creates an inline frame",
        "Creates a table",
        "Creates a form",
        "Creates a division"
      ],
      "answer": "Creates an inline frame",
      "explanation": "The <iframe> tag is used to embed another HTML page within the current page, allowing for inline frame content.",
      "topic": "html",
      "example": "<iframe src='page.html'></iframe>"
    },
    {
      "id": 11,
      "question": "Which HTML element is used to define a footer for a document?",
      "options": [
        "<footer>",
        "<bottom>",
        "<section>",
        "<aside>"
      ],
      "answer": "<footer>",
      "explanation": "The <footer> element is used to define a footer for a document or section, typically containing copyright information or links.",
      "topic": "html",
      "example": "<footer>© 2024 My Website</footer>"
    },
    {
      "id": 12,
      "question": "What is the purpose of the <head> tag?",
      "options": [
        "To define the main content",
        "To contain metadata and links",
        "To define a footer",
        "To create a navigation bar"
      ],
      "answer": "To contain metadata and links",
      "explanation": "The <head> tag contains metadata, links to stylesheets, scripts, and other information not displayed directly on the page.",
      "topic": "html",
      "example": "<head><link rel='stylesheet' href='styles.css'></head>"
    },
    {
      "id": 13,
      "question": "Which tag is used to define a block of code?",
      "options": [
        "<code>",
        "<pre>",
        "<script>",
        "<block>"
      ],
      "answer": "<pre>",
      "explanation": "The <pre> tag is used to display preformatted text, preserving both spaces and line breaks.",
      "topic": "html",
      "example": "<pre>Code here</pre>"
    },
    {
      "id": 14,
      "question": "What is the purpose of the alt attribute in images?",
      "options": [
        "To provide a text alternative",
        "To specify the image size",
        "To link to another page",
        "To define image style"
      ],
      "answer": "To provide a text alternative",
      "explanation": "The alt attribute provides a text description of an image for accessibility and displays when the image cannot be loaded.",
      "topic": "html",
      "example": "<img src='image.jpg' alt='Description'>"
    },
    {
      "id": 15,
      "question": "Which HTML element is used for the largest heading?",
      "options": [
        "<h1>",
        "<h2>",
        "<h3>",
        "<h4>"
      ],
      "answer": "<h1>",
      "explanation": "<h1> defines the largest heading in HTML, and <h6> defines the smallest.",
      "topic": "html",
      "example": "<h1>This is a Heading</h1>"
    },
    {
      "id": 16,
      "question": "What is the purpose of the <div> tag?",
      "options": [
        "To create a list",
        "To group block elements",
        "To define a table",
        "To create a hyperlink"
      ],
      "answer": "To group block elements",
      "explanation": "The <div> tag is a block-level element used to group other elements and apply styles or scripts to them collectively.",
      "topic": "html",
      "example": "<div><p>Paragraph inside a div.</p></div>"
    },
    {
      "id": 17,
      "question": "What does the <span> tag do?",
      "options": [
        "Creates a block of text",
        "Creates an inline container",
        "Creates a table cell",
        "Creates a header"
      ],
      "answer": "Creates an inline container",
      "explanation": "The <span> tag is an inline element used to group inline elements for styling purposes without breaking the flow of text.",
      "topic": "html",
      "example": "<span style='color:red;'>Red text</span>"
    },
    {
      "id": 18,
      "question": "Which attribute is used to specify the destination URL in a hyperlink?",
      "options": [
        "link",
        "href",
        "src",
        "target"
      ],
      "answer": "href",
      "explanation": "The 'href' attribute in the <a> tag specifies the URL of the page the link goes to.",
      "topic": "html",
      "example": "<a href='https://www.example.com'>Link</a>"
    },
    {
      "id": 19,
      "question": "What is the purpose of the <strong> tag?",
      "options": [
        "To create a strong emphasis",
        "To create a bold text",
        "To create a link",
        "To create a header"
      ],
      "answer": "To create a strong emphasis",
      "explanation": "The <strong> tag is used to indicate that the text is of strong importance, typically displayed as bold.",
      "topic": "html",
      "example": "<strong>Important Text</strong>"
    },
    {
      "id": 20,
      "question": "What does the <audio> tag do?",
      "options": [
        "Embeds audio content",
        "Embeds video content",
        "Creates a hyperlink",
        "Creates a list"
      ],
      "answer": "Embeds audio content",
      "explanation": "The <audio> tag is used to embed sound content in HTML documents.",
      "topic": "html",
      "example": "<audio controls><source src='audio.mp3' type='audio/mpeg'></audio>"
    },
    {
      "id": 21,
      "question": "Which tag is used to create a checkbox in a form?",
      "options": [
        "<input type='text'>",
        "<input type='radio'>",
        "<input type='checkbox'>",
        "<input type='button'>"
      ],
      "answer": "<input type='checkbox'>",
      "explanation": "The <input type='checkbox'> tag is used to create a checkbox that allows users to make a binary choice.",
      "topic": "html",
      "example": "<input type='checkbox' name='subscribe'> Subscribe"
    },
    {
      "id": 22,
      "question": "What does the <script> tag do?",
      "options": [
        "Defines a section",
        "Links to a CSS file",
        "Embeds JavaScript code",
        "Defines metadata"
      ],
      "answer": "Embeds JavaScript code",
      "explanation": "The <script> tag is used to embed or reference JavaScript code in an HTML document.",
      "topic": "html",
      "example": "<script src='script.js'></script>"
    },
    {
      "id": 23,
      "question": "What is the purpose of the <link> tag?",
      "options": [
        "To create a hyperlink",
        "To link external resources",
        "To define a table",
        "To create a section"
      ],
      "answer": "To link external resources",
      "explanation": "The <link> tag is used to link to external resources like stylesheets.",
      "topic": "html",
      "example": "<link rel='stylesheet' href='styles.css'>"
    },
    {
      "id": 24,
      "question": "What is the purpose of the <blockquote> tag?",
      "options": [
        "To define a short quotation",
        "To define a long quotation",
        "To create a list",
        "To create a link"
      ],
      "answer": "To define a long quotation",
      "explanation": "The <blockquote> tag is used to define a section that is quoted from another source, typically displayed as indented text.",
      "topic": "html",
      "example": "<blockquote>This is a quote.</blockquote>"
    },
    {
      "id": 25,
      "question": "Which tag is used to define an ordered list?",
      "options": [
        "<ul>",
        "<ol>",
        "<li>",
        "<list>"
      ],
      "answer": "<ol>",
      "explanation": "The <ol> tag is used to create an ordered list, typically displayed with numbers.",
      "topic": "html",
      "example": "<ol><li>First Item</li><li>Second Item</li></ol>"
    }
  ]
  
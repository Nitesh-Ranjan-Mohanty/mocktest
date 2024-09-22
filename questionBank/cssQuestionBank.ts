interface Question {
    id: number;
    question: string;
    options: string[];
    answer: string;
    explanation: string;
    topic: string;
    example?: string;
  }

export const cssQuestions: Question[] = [
    {
      "id": 1,
      "question": "What does CSS stand for?",
      "options": [
        "Cascading Style Sheets",
        "Creative Style System",
        "Colorful Style Sheets",
        "Cascading Simple Sheets"
      ],
      "answer": "Cascading Style Sheets",
      "explanation": "CSS stands for Cascading Style Sheets, which is a stylesheet language used for describing the presentation of a document written in HTML or XML.",
      "topic": "css",
      "example": "body { background-color: blue; }"
    },
    {
      "id": 2,
      "question": "Which property is used to change the font of an element?",
      "options": [
        "font-family",
        "font-weight",
        "text-font",
        "font-style"
      ],
      "answer": "font-family",
      "explanation": "The 'font-family' property specifies the font for an element.",
      "topic": "css",
      "example": "p { font-family: Arial, sans-serif; }"
    },
    {
      "id": 3,
      "question": "How do you apply a class to an HTML element?",
      "options": [
        "<element classname='.classname'>",
        "<element class='classname'></element>",
        "<element className=classname>",
        "<element><class='classname'>"
      ],
      "answer": "<element class='classname'></element>",
      "explanation": "To apply a class to an HTML element, you use the 'class' attribute.",
      "topic": "css",
      "example": "<div class='container'></div>"
    },
    {
      "id": 4,
      "question": "What is the correct CSS syntax to change the text color of all <h1> elements to blue?",
      "options": [
        "h1 {text-color: blue;}",
        "h1 {color: blue;}",
        "h1 {text: blue;}",
        "h1 {font-color: blue;}"
      ],
      "answer": "h1 {color: blue;}",
      "explanation": "The correct property to change the text color is 'color'.",
      "topic": "css",
      "example": "h1 { color: blue; }"
    },
    {
      "id": 5,
      "question": "Which CSS property controls the spacing between elements?",
      "options": [
        "padding",
        "margin",
        "spacing",
        "border-spacing"
      ],
      "answer": "margin",
      "explanation": "The 'margin' property controls the spacing outside of an element.",
      "topic": "css",
      "example": "div { margin: 20px; }"
    },
    {
      "id": 6,
      "question": "How do you create a comment in CSS?",
      "options": [
        "// this is a comment",
        "# this is a comment",
        "/* this is a comment */",
        "<!-- this is a comment -->"
      ],
      "answer": "/* this is a comment */",
      "explanation": "CSS comments are written with /* and */.",
      "topic": "css",
      "example": "/* This is a comment */"
    },
    {
      "id": 7,
      "question": "What is the default value of the position property?",
      "options": [
        "relative",
        "absolute",
        "fixed",
        "static"
      ],
      "answer": "static",
      "explanation": "The default value for the 'position' property is 'static'.",
      "topic": "css",
      "example": "div { position: static; }"
    },
    {
      "id": 8,
      "question": "Which of the following is a valid CSS selector?",
      "options": [
        "#id",
        ".class",
        "element",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "All options are valid CSS selectors.",
      "topic": "css",
      "example": "div, .class, #id { color: red; }"
    },
    {
      "id": 9,
      "question": "How can you make a list not display bullets?",
      "options": [
        "list-style-type: none;",
        "list: none;",
        "none-style: bullets;",
        "list-style: no-bullets;"
      ],
      "answer": "list-style-type: none;",
      "explanation": "To remove bullets from a list, use 'list-style-type: none;'.",
      "topic": "css",
      "example": "ul { list-style-type: none; }"
    },
    {
      "id": 10,
      "question": "What is the z-index used for?",
      "options": [
        "To set the position of elements",
        "To control the stacking order of elements",
        "To define the font size",
        "To set the opacity of an element"
      ],
      "answer": "To control the stacking order of elements",
      "explanation": "The 'z-index' property specifies the stack order of elements.",
      "topic": "css",
      "example": "div { z-index: 10; }"
    },
    {
      "id": 11,
      "question": "How do you select an element with id 'header'?",
      "options": [
        ".header",
        "#header",
        "header",
        "*header"
      ],
      "answer": "#header",
      "explanation": "The '#' symbol is used to select an element by its id.",
      "topic": "css",
      "example": "#header { color: green; }"
    },
    {
      "id": 12,
      "question": "What does the float property do?",
      "options": [
        "It positions an element",
        "It hides an element",
        "It moves an element to the left or right",
        "It makes an element invisible"
      ],
      "answer": "It moves an element to the left or right",
      "explanation": "The 'float' property is used to position an element to the left or right of its container.",
      "topic": "css",
      "example": ".float-left { float: left; }"
    },
    {
      "id": 13,
      "question": "Which CSS property controls the text size?",
      "options": [
        "font-size",
        "text-size",
        "font-style",
        "text-font"
      ],
      "answer": "font-size",
      "explanation": "The 'font-size' property controls the size of the text.",
      "topic": "css",
      "example": "p { font-size: 16px; }"
    },
    {
      "id": 14,
      "question": "How do you set a background color for an element?",
      "options": [
        "background-color: red;",
        "bg-color: red;",
        "background: red;",
        "Both A and C"
      ],
      "answer": "Both A and C",
      "explanation": "Both 'background-color' and 'background' can be used to set the background color.",
      "topic": "css",
      "example": "div { background-color: red; }"
    },
    {
      "id": 15,
      "question": "Which property is used to change the list style?",
      "options": [
        "list-style",
        "list-type",
        "list-format",
        "list-design"
      ],
      "answer": "list-style",
      "explanation": "The 'list-style' property is used to set the style of list items.",
      "topic": "css",
      "example": "ul { list-style: square; }"
    },
    {
      "id": 16,
      "question": "What is the purpose of the @media rule?",
      "options": [
        "To apply styles for different screen sizes",
        "To import stylesheets",
        "To define variables",
        "To comment out CSS"
      ],
      "answer": "To apply styles for different screen sizes",
      "explanation": "@media rules allow you to apply CSS styles based on the media type and conditions.",
      "topic": "css",
      "example": "@media (max-width: 600px) { body { background-color: lightblue; } }"
    },
    {
      "id": 17,
      "question": "Which CSS property controls the opacity of an element?",
      "options": [
        "opacity",
        "transparency",
        "visibility",
        "filter"
      ],
      "answer": "opacity",
      "explanation": "The 'opacity' property specifies the transparency level of an element.",
      "topic": "css",
      "example": "div { opacity: 0.5; }"
    },
    {
      "id": 18,
      "question": "What is the box model?",
      "options": [
        "A way to define element styles",
        "A layout model for elements",
        "A model for element dimensions",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "The box model describes the rectangular boxes generated for elements, including margins, borders, padding, and content.",
      "topic": "css",
      "example": "div { margin: 10px; padding: 10px; border: 1px solid black; }"
    },
    {
      "id": 19,
      "question": "Which property is used to set the space between the content and the border of an element?",
      "options": [
        "padding",
        "margin",
        "border",
        "spacing"
      ],
      "answer": "padding",
      "explanation": "The 'padding' property creates space between the content of an element and its border.",
      "topic": "css",
      "example": "div { padding: 20px; }"
    },
    {
      "id": 20,
      "question": "How do you make a font bold in CSS?",
      "options": [
        "font-weight: bold;",
        "font-style: bold;",
        "text-weight: bold;",
        "font: bold;"
      ],
      "answer": "font-weight: bold;",
      "explanation": "The 'font-weight' property is used to specify the weight (or boldness) of the font.",
      "topic": "css",
      "example": "p { font-weight: bold; }"
    },
    {
      "id": 21,
      "question": "What is a CSS preprocessor?",
      "options": [
        "A tool for adding features to CSS",
        "A CSS framework",
        "A library for CSS animations",
        "None of the above"
      ],
      "answer": "A tool for adding features to CSS",
      "explanation": "A CSS preprocessor, like SASS or LESS, extends CSS with additional features.",
      "topic": "css",
      "example": "$primary-color: blue;"
    },
    {
      "id": 22,
      "question": "What is the purpose of the transition property?",
      "options": [
        "To animate changes to CSS properties",
        "To set the duration of an animation",
        "To create hover effects",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "The 'transition' property allows you to change property values smoothly (over a given duration).",
      "topic": "css",
      "example": "div { transition: background-color 0.5s ease; }"
    },
    {
      "id": 23,
      "question": "What is the use of the display property?",
      "options": [
        "To control how an element is displayed",
        "To set an element's visibility",
        "To specify an element's position",
        "To change font styles"
      ],
      "answer": "To control how an element is displayed",
      "explanation": "The 'display' property defines how an element is displayed on the web page.",
      "topic": "css",
      "example": "div { display: block; }"
    },
    {
      "id": 24,
      "question": "What is the difference between 'em' and 'rem' units?",
      "options": [
        "'em' is relative to the font size of the element, 'rem' is relative to the root font size",
        "'rem' is relative to the element's width, 'em' is relative to the viewport",
        "'em' and 'rem' are the same",
        "'em' is always larger than 'rem'"
      ],
      "answer": "'em' is relative to the font size of the element, 'rem' is relative to the root font size",
      "explanation": "'em' units are relative to the font size of their closest parent, while 'rem' units are relative to the root (html) font size.",
      "topic": "css",
      "example": "p { font-size: 2em; }"
    },
    {
      "id": 25,
      "question": "Which of the following is a valid CSS color value?",
      "options": [
        "rgba(255, 0, 0, 0.5)",
        "#FF0000",
        "red",
        "All of the above"
      ],
      "answer": "All of the above",
      "explanation": "All options represent valid CSS color values.",
      "topic": "css",
      "example": "div { color: rgba(255, 0, 0, 0.5); }"
    }
  ];
  
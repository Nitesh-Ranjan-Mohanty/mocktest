interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  topic: string;
  example?: string;
}

export const webPackQuestions: Question[] = [
  {
    id: 1,
    question: "What is Webpack?",
    options: [
      "A module bundler for JavaScript applications",
      "A JavaScript framework",
      "A CSS preprocessor",
      "A type of database",
    ],
    answer: "A module bundler for JavaScript applications",
    explanation:
      "Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.",
    topic: "webpack",
    example: "webpack --config webpack.config.js",
  },
  {
    id: 2,
    question: "What are entry points in Webpack?",
    options: [
      "The starting point for building the dependency graph",
      "Files to be output",
      "Plugins to be used",
      "Configurations for loaders",
    ],
    answer: "The starting point for building the dependency graph",
    explanation:
      "Entry points are the files where Webpack starts the bundling process and builds the dependency graph from.",
    topic: "webpack",
    example: "entry: './src/index.js'",
  },
  {
    id: 3,
    question: "What is a loader in Webpack?",
    options: [
      "A transformation tool for files",
      "A plugin for optimizing builds",
      "A way to manage entry points",
      "A type of dependency",
    ],
    answer: "A transformation tool for files",
    explanation:
      "Loaders in Webpack transform files into modules as they are added to your dependency graph, allowing you to process files like CSS and images.",
    topic: "webpack",
    example:
      "module: { rules: [{ test: /.css$/, use: ['style-loader', 'css-loader'] }] }",
  },
  {
    id: 4,
    question: "What is a plugin in Webpack?",
    options: [
      "A way to extend Webpack's functionality",
      "A type of loader",
      "An entry point",
      "A dependency",
    ],
    answer: "A way to extend Webpack's functionality",
    explanation:
      "Plugins in Webpack are used to perform a wider range of tasks such as bundle optimization, asset management, and environment variable injection.",
    topic: "webpack",
    example:
      "plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })]",
  },
  {
    id: 5,
    question: "What is the purpose of 'output' in Webpack?",
    options: [
      "To specify where to emit the bundled files",
      "To define entry points",
      "To manage loaders",
      "To configure plugins",
    ],
    answer: "To specify where to emit the bundled files",
    explanation:
      "The 'output' property in Webpack configuration specifies the location and naming convention for the bundled files.",
    topic: "webpack",
    example:
      "output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') }",
  },
  {
    id: 6,
    question: "What is the purpose of 'devServer' in Webpack?",
    options: [
      "To provide a local development server",
      "To optimize production builds",
      "To manage dependencies",
      "To handle styles",
    ],
    answer: "To provide a local development server",
    explanation:
      "'devServer' is a configuration option that allows you to set up a local development server with live reloading and other useful features.",
    topic: "webpack",
    example: "devServer: { contentBase: './dist', hot: true }",
  },
  {
    id: 7,
    question: "What is the purpose of 'mode' in Webpack?",
    options: [
      "To set the build mode as development or production",
      "To define entry points",
      "To manage loaders",
      "To configure plugins",
    ],
    answer: "To set the build mode as development or production",
    explanation:
      "The 'mode' option in Webpack specifies whether you are building for development or production, affecting optimizations applied during the build.",
    topic: "webpack",
    example: "mode: 'development'",
  },
  {
    id: 8,
    question: "What is code splitting in Webpack?",
    options: [
      "The process of splitting code into separate bundles",
      "Combining multiple files into one",
      "Managing dependencies",
      "Optimizing images",
    ],
    answer: "The process of splitting code into separate bundles",
    explanation:
      "Code splitting is a feature in Webpack that allows you to split your code into smaller bundles that can be loaded on demand, improving load times.",
    topic: "webpack",
    example:
      "import(/* webpackChunkName: 'my-chunk' */ './myModule').then(module => { /* ... */ });",
  },
  {
    id: 9,
    question: "What is tree shaking in Webpack?",
    options: [
      "The process of removing unused code",
      "The method of optimizing images",
      "Combining multiple files into one",
      "Managing dependencies",
    ],
    answer: "The process of removing unused code",
    explanation:
      "Tree shaking is a feature in Webpack that allows you to eliminate dead code from your bundles, reducing their size and improving performance.",
    topic: "webpack",
    example: "import { usedFunction } from './module';",
  },
  {
    id: 10,
    question: "What is 'resolve' in Webpack?",
    options: [
      "Configuration for module resolution",
      "Managing loaders",
      "Defining entry points",
      "Setting output options",
    ],
    answer: "Configuration for module resolution",
    explanation:
      "'resolve' allows you to configure how modules are resolved, such as setting up aliases or specifying file extensions.",
    topic: "webpack",
    example: "resolve: { extensions: ['.js', '.jsx'] }",
  },
  {
    id: 11,
    question: "What does 'webpack-cli' do?",
    options: [
      "Provides a command-line interface for Webpack",
      "Handles development server",
      "Manages plugins",
      "Configures loaders",
    ],
    answer: "Provides a command-line interface for Webpack",
    explanation:
      "'webpack-cli' is a tool that provides a command-line interface to run Webpack commands, making it easier to build your projects.",
    topic: "webpack",
    example: "npx webpack-cli --config webpack.config.js",
  },
  {
    id: 12,
    question: "What is 'webpack.config.js'?",
    options: [
      "The configuration file for Webpack",
      "A loader",
      "A plugin",
      "A module",
    ],
    answer: "The configuration file for Webpack",
    explanation:
      "'webpack.config.js' is the default configuration file for Webpack, where you define entry points, output, loaders, and plugins.",
    topic: "webpack",
    example:
      "module.exports = { entry: './src/index.js', output: { filename: 'bundle.js', path: path.resolve(__dirname, 'dist') } };",
  },
  {
    id: 13,
    question: "What is a 'bundle' in Webpack?",
    options: [
      "A single file containing all the modules",
      "A type of plugin",
      "A configuration option",
      "A method for managing dependencies",
    ],
    answer: "A single file containing all the modules",
    explanation:
      "A bundle in Webpack is the output file that contains all the modules and their dependencies, ready for use in the browser.",
    topic: "webpack",
    example: "The output bundle is typically JavaScript, such as 'bundle.js'.",
  },
  {
    id: 14,
    question: "What is the purpose of 'source maps' in Webpack?",
    options: [
      "To map the code back to the original source",
      "To optimize images",
      "To manage loaders",
      "To define entry points",
    ],
    answer: "To map the code back to the original source",
    explanation:
      "Source maps are used in Webpack to map the bundled code back to the original source code, making debugging easier.",
    topic: "webpack",
    example: "devtool: 'source-map'",
  },
  {
    id: 15,
    question: "What does 'babel-loader' do?",
    options: [
      "Transpiles JavaScript files using Babel",
      "Manages assets",
      "Handles CSS files",
      "Optimizes images",
    ],
    answer: "Transpiles JavaScript files using Babel",
    explanation:
      "'babel-loader' is a loader that allows you to transpile JavaScript files using Babel, enabling the use of modern JavaScript syntax.",
    topic: "webpack",
    example: "module: { rules: [{ test: /.js$/, use: 'babel-loader' }] }",
  },
  {
    id: 16,
    question: "What is the purpose of the 'devtool' property?",
    options: [
      "To configure source maps",
      "To manage entry points",
      "To set output options",
      "To configure plugins",
    ],
    answer: "To configure source maps",
    explanation:
      "'devtool' is used to configure how source maps are generated, affecting the ability to debug your code.",
    topic: "webpack",
    example: "devtool: 'inline-source-map'",
  },
  {
    id: 17,
    question: "What is the 'publicPath' in Webpack?",
    options: [
      "The base path for all assets in the application",
      "The entry point",
      "The output file name",
      "The location of the configuration file",
    ],
    answer: "The base path for all assets in the application",
    explanation:
      "'publicPath' specifies the base path for all assets in the application, affecting how they are resolved in the browser.",
    topic: "webpack",
    example: "output: { publicPath: '/assets/' }",
  },
  {
    id: 18,
    question: "What is 'hot module replacement'?",
    options: [
      "A feature that allows updating modules in a running application without a full reload",
      "An optimization technique",
      "A method for managing dependencies",
      "A way to bundle code",
    ],
    answer:
      "A feature that allows updating modules in a running application without a full reload",
    explanation:
      "Hot module replacement (HMR) is a feature that allows modules to be updated at runtime without a full refresh, improving development speed.",
    topic: "webpack",
    example: "HotModuleReplacementPlugin is used in the plugins array.",
  },
  {
    id: 19,
    question: "What does 'resolve.alias' do?",
    options: [
      "Creates shortcuts for module paths",
      "Manages loaders",
      "Defines entry points",
      "Sets output options",
    ],
    answer: "Creates shortcuts for module paths",
    explanation:
      "'resolve.alias' allows you to create shortcuts for module paths, making imports easier and cleaner.",
    topic: "webpack",
    example:
      "resolve: { alias: { '@components': path.resolve(__dirname, 'src/components/') } }",
  },
  {
    id: 20,
    question: "What is the 'externals' option in Webpack?",
    options: [
      "Defines which dependencies to exclude from the bundle",
      "Manages loaders",
      "Configures plugins",
      "Sets output options",
    ],
    answer: "Defines which dependencies to exclude from the bundle",
    explanation:
      "'externals' allows you to exclude certain dependencies from your bundle, such as libraries that are expected to be available globally.",
    topic: "webpack",
    example: "externals: { react: 'React' }",
  },
  {
    id: 21,
    question: "What does 'optimization.splitChunks' do?",
    options: [
      "Configures how chunks are split in the bundle",
      "Defines entry points",
      "Sets output options",
      "Manages loaders",
    ],
    answer: "Configures how chunks are split in the bundle",
    explanation:
      "'optimization.splitChunks' allows you to specify how chunks are split, enabling better caching and performance.",
    topic: "webpack",
    example: "optimization: { splitChunks: { chunks: 'all' } }",
  },
  {
    id: 22,
    question: "What is the purpose of 'file-loader'?",
    options: [
      "To manage image and font files in Webpack",
      "To optimize JavaScript",
      "To configure plugins",
      "To manage loaders",
    ],
    answer: "To manage image and font files in Webpack",
    explanation:
      "'file-loader' is a loader that allows you to import image and font files, copying them to the output directory.",
    topic: "webpack",
    example:
      "module: { rules: [{ test: /.(png|jpg|gif|svg)$/, use: 'file-loader' }] }",
  },
  {
    id: 23,
    question: "What is 'css-loader' used for?",
    options: [
      "To manage CSS files in Webpack",
      "To optimize JavaScript",
      "To handle images",
      "To configure plugins",
    ],
    answer: "To manage CSS files in Webpack",
    explanation:
      "'css-loader' is a loader that allows you to import CSS files into your JavaScript files.",
    topic: "webpack",
    example: "module: { rules: [{ test: /.css$/, use: 'css-loader' }] }",
  },
  {
    id: 24,
    question: "What is the 'HtmlWebpackPlugin'?",
    options: [
      "A plugin that simplifies the creation of HTML files to serve Webpack bundles",
      "A loader for HTML files",
      "A configuration option",
      "A dependency manager",
    ],
    answer:
      "A plugin that simplifies the creation of HTML files to serve Webpack bundles",
    explanation:
      "HtmlWebpackPlugin is a plugin that generates an HTML file to serve your Webpack bundles, automatically including all necessary script tags.",
    topic: "webpack",
    example: "new HtmlWebpackPlugin({ template: './src/index.html' })",
  },
  {
    id: 25,
    question: "What is the difference between 'npm run build' and 'npm start'?",
    options: [
      "'npm run build' creates a production bundle; 'npm start' runs a development server",
      "'npm run build' is for testing; 'npm start' is for production",
      "'npm run build' runs a development server; 'npm start' creates a production bundle",
      "'npm run build' installs dependencies; 'npm start' builds the project",
    ],
    answer:
      "'npm run build' creates a production bundle; 'npm start' runs a development server",
    explanation:
      "'npm run build' typically generates a production-ready bundle, while 'npm start' runs a development server for testing.",
    topic: "webpack",
    example: "npm run build && npm start",
  },
];

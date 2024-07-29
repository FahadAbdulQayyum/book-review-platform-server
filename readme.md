# Book-Review-Platform-Server

production url: https://book-review-platform-server.vercel.app/

**Book-Review-Platform-Server** is a backend service built with Node.js and TypeScript. It provides API endpoints and handles authentication, data management, and other server-side functionalities.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The Server project is designed to handle the backend operations for your application. It includes features like:

- **User Authentication**: Using JWT and bcrypt.
- **Data Management**: Interacting with a database using Mongoose.
- **Environment Configuration**: Managed with dotenv.

## Installation

To set up the Server project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/FahadAbdulQayyum/book-review-platform-server.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd server
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

## Usage

To run the server in development mode with live reloading:

```bash
npm run dev
or
nodemon
```

To build the TypeScript code and run the server in production mode:

```bash
npm run build
npm start
```

## Scripts

- **`build`**: Compiles TypeScript code into JavaScript using `npx tsc`.
- **`start`**: Runs the built code from the `dist` directory using Node.js.
- **`dev`**: Starts the server with `nodemon` for development, which watches for changes in the `src` directory.

## Dependencies

- **@types/bcrypt**: TypeScript definitions for `bcrypt`.
- **@types/cookie-parser**: TypeScript definitions for `cookie-parser`.
- **@types/cors**: TypeScript definitions for `cors`.
- **@types/jsonwebtoken**: TypeScript definitions for `jsonwebtoken`.
- **@types/mongoose**: TypeScript definitions for `mongoose`.
- **bcrypt**: Library for hashing passwords.
- **concurrently**: Run multiple commands concurrently.
- **cookie-parser**: Middleware to parse cookies.
- **cors**: Middleware to enable CORS.
- **dotenv**: Loads environment variables from a `.env` file.
- **express**: Web framework for Node.js.
- **jsonwebtoken**: Library for handling JSON Web Tokens.
- **nodemon**: Library for running and automate the server running when detects changes.

### Dev Dependencies

- **@types/express**: TypeScript definitions for `express`.
- **@types/node**: TypeScript definitions for Node.js.
- **typescript**: TypeScript language support.

## Development

Ensure you have Node.js and npm installed. The project uses TypeScript for type safety and `nodemon` for development convenience. Use `npm run dev` to start the server in development mode with automatic restarts.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please open an issue or submit a pull request. Ensure that your code adheres to the existing style and passes all linting checks.

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for more details.

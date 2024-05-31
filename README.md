# Express Backend with TypeScript, PostgreSQL, Sequelize ORM, and Passport.js

## Introduction

[REgister-Login] is a backend application built with Express.js and TypeScript, leveraging PostgreSQL as the database and Sequelize ORM for database management. It also incorporates authentication functionality using Passport.js with the Local Strategy. This project aims to provide a solid foundation for building robust and secure backend APIs.

## Features

- **User Authentication**: Implement authentication features with Passport.js, allowing users to register, login, and access protected routes.
- **Database Management**: Utilize Sequelize ORM to interact with the PostgreSQL database, including defining models, executing migrations, and performing CRUD operations.
- **Input Validation**: Implement data validation to ensure the integrity and security of user input, preventing common security vulnerabilities.
- **Error Handling**: Implement robust error handling to provide informative error messages and enhance the user experience.
- **Scalability and Maintainability**: Employ TypeScript for static typing, enhancing code maintainability and scalability.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js and npm
- PostgreSQL
- TypeScript

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/cyusasnave/register-login.git
   ```
2. Install dependencies:
    ```bash
    cd register-login
    npm install
    ```
3. Set up environment variables:
   Create a .env file in the root directory and configure environment variables based on the .env.example file.

4. Run Migrations:
    
    Execute Sequelize migrations to set up the database schem
    ```bash
    npm run migrate:reset
    ```
5. Start the Server:
    Run the application
     ```bash
     npm run dev
     ```
     
## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues for any improvements or features you'd like to see.

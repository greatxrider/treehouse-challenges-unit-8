# treehouse-challenges-unit-8
This is a collection of the exercises and challenges from the Unit 8 of TreeHouse.
# SQL Library Manager

## Overview
Working with databases — storing, retrieving, updating, and deleting information — is an important software developer skill. In this project, you'll create a web application for listing, adding, updating, and deleting books in a library application, using JavaScript, Node.js, Express, Pug, and the SQL ORM Sequelize.

## Table of Contents
- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Project Description
The SQL Library Manager is a web application that allows users to manage a collection of books. Users can:
- List all books in the library
- Add new books to the library
- Update details of existing books
- Delete books from the library

The application uses a SQL database to store book information and Sequelize as the ORM to interact with the database. The front-end is built using Pug templates.

## Technologies Used
- **JavaScript**: The primary programming language used for both front-end and back-end development.
- **Node.js**: A JavaScript runtime used for building the server-side application.
- **Express**: A web application framework for Node.js, used to build the server and handle routing.
- **Pug**: A template engine for Node.js, used to render dynamic HTML pages.
- **Sequelize**: An ORM for Node.js, used to interact with the SQL database.
- **SQLite**: A lightweight, disk-based SQL database used for development and testing.

## Installation
To install and run the project locally, follow these steps:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/sql-library-manager.git
    cd sql-library-manager
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the database:**
    ```sh
    npx sequelize-cli db:migrate
    ```

4. **Start the application:**
    ```sh
    npm start
    ```

The application will be running on `http://localhost:3000`.

## Usage
Once the application is running, you can perform the following actions:

- **View all books:** Navigate to `http://localhost:3000/books` to see a list of all books in the library.
- **Add a new book:** Click on the "New Book" button and fill out the form to add a new book.
- **Update a book:** Click on a book title to view its details, then click the "Edit" button to update the book's information.
- **Delete a book:** Click on a book title to view its details, then click the "Delete" button to remove the book from the library.

## Features
- **CRUD Operations:** Create, Read, Update, and Delete books in the library.
- **Search Functionality:** Search for books by title or author.
- **Pagination:** View books in paginated format for easier navigation.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request. Follow these steps to contribute:

1. **Fork the repository:**
    ```sh
    git fork https://github.com/your-username/sql-library-manager.git
    ```

2. **Create a new branch:**
    ```sh
    git checkout -b feature/your-feature-name
    ```

3. **Make your changes and commit them:**
    ```sh
    git commit -m "Add your commit message"
    ```

4. **Push to the branch:**
    ```sh
    git push origin feature/your-feature-name
    ```

5. **Create a pull request:** Go to the repository on GitHub and create a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
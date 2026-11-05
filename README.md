# Campus Event Registration System

## Project Overview
A command-line application developed using JavaScript
(Node.js) for managing student registrations in
university campus workshops.

## Features
- Register students for campus workshops
- Validate required input fields
- Prevent duplicate registration numbers
- Display all registered participants
- Search registrations by registration number
- Display clear success and error messages

## Technologies Used
- JavaScript (Node.js)
- Visual Studio Code
- Git
- GitHub

## Project Structure
campus-event-registration/
│
├── src/
│   ├── app.js
│   ├── registration.js
│   └── registrationManager.js
│
├── README.md
└── .gitignore

## Module Description

### app.js
Handles user input, output, and command-line menu.

### registration.js
Defines the Registration class and stores student details.

### registrationManager.js
Handles registration, validation, duplicate checking,
listing, and searching.

## Design Principles
The project follows Separation of Concerns.

Abstraction hides implementation details, while
modularity separates responsibilities into independent
files. This improves readability, maintainability,
reusability, and testing.

## How to Run
1. Install Node.js.
2. Open the project in VS Code.
3. Open the terminal.
4. Run:

   node src/app.js

## Testing
The application will be tested for:
- Valid registration
- Missing required fields
- Duplicate registration numbers
- Listing registrations
- Searching existing and missing records
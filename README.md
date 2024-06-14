# Habit Tracker

## Hosted URL : https://habit-tracker-6puz.onrender.com

Habit Tracker is a web application designed to help users track their daily habits. Users can add habits, mark them as completed or not completed for each day, and view their habits either on a daily or weekly basis.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [License](#license)

## Features

- **Daily and Weekly Views:** View habits either for today or in a weekly format.
- **Add, Update, Delete Habits:** Users can add new habits, update their status for each day, and delete habits they no longer wish to track.
- **Responsive UI:** Built using Bootstrap for a responsive and user-friendly interface.
- **MongoDB Integration:** Data stored in MongoDB for persistence.

## Technologies Used

- **Node.js:** JavaScript runtime environment
- **Express.js:** Web application framework for Node.js
- **MongoDB:** NoSQL database for storing habit data
- **Mongoose:** MongoDB object modeling for Node.js
- **Bootstrap:** Front-end framework for styling
- **EJS:** Embedded JavaScript for server-side templating
- **dotenv:** Loads environment variables from a .env file
- **morgan:** HTTP request logger middleware for Node.js

## Getting Started

### Prerequisites

- Node.js and npm installed globally on your machine
- MongoDB installed and running locally or accessible via a cloud service (like MongoDB Atlas)
- Code editor (e.g., VS Code, Sublime Text)

### Installation

Clone the repository:

     git clone https://github.com/Sam-hh/Habit-Tracker.git
     cd habit-tracker

Install dependencies:

    npm install

### Environment Variables

Create a .env file in the root directory with the following variables:

    MONGODB_URL=your_mongodb_connection_string
    PORT=3000

Replace your_mongodb_connection_string with your MongoDB connection string.

### Running the Application

Start the application using npm:

    npm start

The application will start at http://localhost:3000.

## Usage

1. Adding a Habit: Navigate to the homepage and use the form to add a new habit.
2. Updating Habit Status: Click on the status icon next to each habit to mark it as done, not done, or reset.
3. Deleting a Habit: Click on the trash icon to delete a habit.

## Folder Structure

- app/: Contains db.js for MongoDB connection setup.
- models/: Defines Mongoose schema in habitModel.js.
- routes/: Configures Express routes in routes.js.
- controller/: Implements controller functions in habitController.js.
- views/: Stores EJS templates for rendering HTML.
- assets/: Holds static assets such as CSS stylesheets (css/style.css) and images (images/).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

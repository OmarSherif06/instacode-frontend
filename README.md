# InstaCode Frontend

InstaCode is a simple web-based application that allows users to generate code snippets using AI. This repository contains the frontend built with React.

## Features

- Input text prompt to generate code
- Display generated code with a copy button
- Handles slower response times and displays a warning
- Responsive design with a dark theme

## Installation

To run the frontend locally, follow these steps:

1. Clone the repository:

   ```sh
   git clone https://github.com/omarsherif06/instacode-frontend.git
   cd instacode-frontend

    Install dependencies:
   ```

npm install

Start the development server:

    npm start

The app will be available at http://localhost:3000/.
Configuration

Ensure that the backend API is running and update the fetch request URL in App.js if needed:

const response = await fetch("https://omarsherif06.pythonanywhere.com/generate", {
method: "POST",
body: input,
});

Deployment

To build the project for production, run:

npm run build

This will generate an optimized build in the build/ directory, which can be deployed to services like Vercel, Netlify, or GitHub Pages.
Technologies Used

    React

    JavaScript (ES6+)

    CSS (responsive design)

License

This project is open-source and available under the MIT License.
Author

Developed by Omar Sherif.
Contributing

Feel free to submit issues or pull requests to improve the project!

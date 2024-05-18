Rentify is a full-stack property management application built with Node.js, Express, MongoDB, and React. It allows users to register, log in, manage properties, and interact with other users for property transactions.

# Features
1. User Authentication: Users can register with their details (firstName, lastName, email, phoneNumber, password) and log in securely using JWT authentication.
2. Property Management: Logged-in users (sellers) can add, update, delete properties, view their properties, and receive notifications when buyers show interest.
3. Buyer Interaction: Buyers can view available properties, express interest in properties, and contact sellers.
4. Pagination: Property listing pages support pagination for better user experience.
5. Email Notifications: Sellers are notified via email when a buyer expresses interest in their property.
6. Responsive Design: The frontend is built using React with Material-UI components for a responsive and modern UI.

# Installation
Clone the repository:

bash
git clone https://github.com/tyagiashmit4/Rentify

# Navigate to the project directory:
bash
cd rentify

# Install dependencies for both the server and client:
bash
cd server
npm install
cd ../client
npm install

# Set up environment variables:

Create a .env file in the server directory.

MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USERNAME=your_email_username
EMAIL_PASSWORD=your_email_password

# Start the development server:

bash
cd ../server
npm start

# Start the React development server:

bash
cd ../client
npm start

# Access the application in your browser at http://localhost:3000.

# API Routes
/api/auth/register: POST - Register a new user.
/api/auth/login: POST - User login, returns JWT token.
/api/properties: GET - Get all properties, POST - Add a new property.
/api/properties/:id: PUT - Update a property, DELETE - Delete a property.
/api/properties/:id/like: POST - Like a property.
/api/properties/:id/interested: POST - Express interest in a property.

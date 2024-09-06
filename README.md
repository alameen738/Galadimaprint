GaladimaPrint

GaladimaPrint is an e-commerce platform offering printing services and office stationery sales in Nigeria. The platform provides a seamless shopping experience, allowing users to browse products, add items to their cart, and securely process payments using Stripe.
Table of Contents

    Introduction
    Features
    Technology Stack
    Prerequisites
    Installation Guide
    Usage Instructions
    API Documentation
    Testing
    Deployment
    Challenges and Solutions
    Future Improvements
    License

Introduction

GaladimaPrint is designed to cater to small and medium-sized businesses in Nigeria by offering a simple yet powerful platform for purchasing office supplies and printing services. Users can register on the platform, browse the product catalog, add items to their cart, manage their orders, and process payments using the secure Stripe gateway.

This platform is built with a modern technology stack, ensuring high performance, security, and scalability, while maintaining ease of use.
Features

    User Authentication: Secure user registration and login using JSON Web Tokens (JWT).
    Product Management: Browse a wide selection of products, including printing services and office supplies.
    Shopping Cart: Add, update, or remove items from the cart.
    Order Management: View order history and order details for registered users.
    Payment Gateway: Integration with Stripe for secure payment processing.
    Responsive Design: Mobile-friendly interface for optimal user experience across devices.

Technology Stack
Frontend:

    React.js: Modern JavaScript framework for building dynamic user interfaces.
    Tailwind CSS: Utility-first CSS framework for styling.

Backend:

    Node.js (Express.js): Backend framework for handling API requests and business logic.
    MongoDB (Mongoose): NoSQL database for managing products, users, and orders.
    Stripe API: Payment gateway integration for processing credit card transactions.

Additional Tools:

    JWT (JSON Web Tokens): Secure authentication and session management.
    Docker: Containerization for easy deployment and scalability.

Prerequisites

Ensure the following software is installed before proceeding:

    Node.js (v12.x or higher)
    MongoDB (either locally or via a cloud provider such as MongoDB Atlas)
    Stripe Account for payment integration
    Docker (optional, for containerization)

Installation Guide

Follow these steps to set up the project on your local machine:
Step 1: Clone the Repository

bash

git clone https://github.com/your-username/GaladimaPrint.git
cd GaladimaPrint

Step 2: Backend Setup

    Navigate to the backend directory and install dependencies:

    bash

cd backend
npm install

Set up environment variables by creating a .env file in the backend directory:

bash

touch .env

Add the following variables:

bash

MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key

Start the backend server:

bash

    npm start

Step 3: Frontend Setup

    Navigate to the frontend directory and install dependencies:

    bash

cd ../frontend
npm install

Start the frontend development server:

bash

    npm start

    Open your browser and navigate to http://localhost:3000 to access the application.

Usage Instructions
User Flow:

    Registration: New users can register on the platform to create an account.
    Browse Products: Users can explore available products and services, add them to the cart, and view detailed product information.
    Shopping Cart: Users can manage their cart, update product quantities, and remove items.
    Checkout: Users can proceed to the checkout, where they can enter payment information and finalize the order using Stripe.
    Order History: After successfully placing an order, users can view their order history.

API Documentation

The GaladimaPrint API follows a RESTful architecture. Below is a summary of the available endpoints:
User Authentication

    POST /api/users/register: Register a new user.
    POST /api/users/login: Log in an existing user and retrieve a JWT token.

Product Management

    GET /api/products: Retrieve a list of all available products.
    GET /api/products/
    : Retrieve detailed information about a specific product.
    POST /api/products: Add a new product (Admin only).

Order Management

    POST /api/orders: Create a new order.
    GET /api/orders/
    : Retrieve order history for a specific user.

Testing

To ensure the stability and correctness of the codebase, tests have been implemented for both the frontend and backend.
Running Backend Tests:

    Navigate to the backend directory.
    Run tests using Jest:

    bash

    npm test

Running Frontend Tests:

    Navigate to the frontend directory.
    Run tests using React Testing Library:

    bash

    npm test

Deployment

GaladimaPrint can be deployed using popular cloud platforms like Heroku, Netlify, or DigitalOcean.
Backend Deployment (Heroku):

    Create a Heroku application:

    bash

heroku create

Push the code to Heroku:

bash

git push heroku master

Set environment variables on Heroku:

bash

    heroku config:set MONGO_URI=your_mongodb_uri STRIPE_SECRET_KEY=your_stripe_secret_key

Frontend Deployment (Netlify):

    Push the frontend directory to a repository on GitHub.
    Deploy to Netlify via their dashboard or CLI:

    bash

    netlify deploy

Challenges and Solutions
Key Challenges:

    Stripe Integration: Managing secure payment processing while ensuring PCI compliance.
    Mobile Responsiveness: Ensuring a seamless user experience across all device types.
    Session Persistence: Implementing secure token management for user sessions.

Solutions:

    Leveraged Stripe SDK for secure payment processing and error handling.
    Used Tailwind CSS to implement a responsive design.
    Implemented JWT tokens for secure user authentication and session persistence.

Future Improvements

    Admin Dashboard: Implement a dashboard for managing products and tracking sales.
    Email Notifications: Send order confirmation emails to users.
    Product Reviews: Enable users to leave reviews for purchased products.
    Multi-Currency Support: Extend the platform to support multiple currencies.

License

This project is licensed under the MIT License. See the LICENSE file for details.

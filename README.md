## InnerNote

A monolithic full-stack journaling app designed to demonstrate end-to-end authentication and security


##Tech Stack

- Node.js
- PostgreSQL (current deployed version is in MySQL)

- React.js
- TypeScript

- Material UI


##Features

- Face API integration for biometric authentication
- JWT-based token authentication and password hashing
- RESTful APIs for notes management


## Architecture

Monolithic fullstack architecture where React frontend is built and served as static files by an Express server, which also
exposes REST API endpoints connected to a MySQL database.



## Setup

1. Clone the repository

git clone https://github.com/aparn-gupta/facial_recognition-backend.git

2. Install dependencies

npm install

3. Create .env file

cp .env.example .env

4. Setup database

Run the schema file:

mysql -u root -p database/faceapi.sql

(Schema file contains sample data and users for testing biometric authentication, with  bcrypt-hashed dummy credentials. User can sign in first to create their own account)

5. Start server

npm run dev


## Live Demo:

https://innernote.vercel.app/


## Notes

A small practice project built during my early learning phase. The implementation focuses on basic API usage for biometric authentication and fundamental auth workflow.
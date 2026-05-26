# Travel Package Management System

A simple REST API project built using Node.js and Express.js for managing travel packages.

---

# Features

- Add Package
- Get All Packages
- Get Package By ID
- Update Package
- Delete Package
- Search Package By Location

---

# Technologies Used

- Node.js
- Express.js

---

# Project Structure

BUILD-API
│
├── controllers
│   └── apiController.js
│
├── routes
│   └── apiRoute.js
│
├── package.json
├── package-lock.json
├── server.js
│
└── node_modules

---

# Installation

## Step 1: Clone Project

git clone https://github.com/your-username/build-api.git

## Step 2: Open Project Folder

cd BUILD-API

## Step 3: Install Dependencies

npm install

---

# Run Project

node server.js

---

# Server Running

Server running on port 5000

---

# Base URL

http://localhost:5000

---

# API Endpoints

## 1. Add Package

Method: POST

URL:
http://localhost:5000/packages

Request Body:

{
  "id": 3,
  "packageName": "Kerala Tour",
  "location": "Kerala",
  "days": 7,
  "price": 25000
}

---

## 2. Get All Packages

Method: GET

URL:
http://localhost:5000/packages

---

## 3. Get Package By ID

Method: GET

URL:
http://localhost:5000/packages/1

---

## 4. Update Package

Method: PUT

URL:
http://localhost:5000/packages/1

Request Body:

{
  "price": 30000
}

---

## 5. Delete Package

Method: DELETE

URL:
http://localhost:5000/packages/1

---

## 6. Search Package By Location

Method: GET

URL:
http://localhost:5000/packages/search?location=Goa

---

# Example Package Data

{
  "id": 1,
  "packageName": "Goa Vacation",
  "location": "Goa",
  "days": 5,
  "price": 15000
}

---

# Example Output

{
  "message": "Package added successfully",
  "data": {
    "id": 3,
    "packageName": "Kerala Tour",
    "location": "Kerala",
    "days": 7,
    "price": 25000
  }
}

---

# Author

Nandini Chavan

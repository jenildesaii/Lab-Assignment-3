Express CRUD API

Project Overview

This is a simple Express.js application that demonstrates CRUD operations using a JSON file as a database. The project consists of three JavaScript files and a JSON data file.

Folder Structure

Main Root Folder
│-- app1.js  # Displays group names
│-- app2.js  # Displays JSON data in the browser
│-- app3.js  # Implements CRUD operations using Express
│-- package.json  # Project dependencies
│-- package-lock.json  # Dependency lock file
│-- data
│   ├── data.json  # JSON data file


app1.js - Display Group Names

URL: http://localhost:3000/

app2.js - Fetch JSON Data

URL: http://localhost:3001/data

app3.js - CRUD Operations

URL: http://localhost:3002/movies


1. Create Data

Method: POST

URL: http://localhost:3002/movies

Body: (JSON)

{ "id": 7, "name": "actor" }

2. Update Data

Method: PUT

URL: http://localhost:3002/movies/7

Body: (JSON)

{ "name": "Updated movie" }

3. Delete Data

Method: DELETE

URL: http://localhost:3002/movie/7

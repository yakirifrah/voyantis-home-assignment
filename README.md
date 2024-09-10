# Queue Manager

A full-stack application that manages and displays message queues using React for the frontend and Node.js for the backend. The client provides a user interface for managing queues and messages, while the server handles API requests and data management.

## Features

- **REST API** for managing message queues:
  - Add messages to queues.
  - Retrieve messages from queues with optional timeout.
- **Web Interface**:
  - Displays all available queues.
  - Shows the number of messages in each queue.
  - Allows users to select a queue and fetch messages.

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express

## API Endpoints

### POST `/api/{queue_name}`

- **Description**: Add a new message to the specified queue.
- **Request Body**: JSON object representing the message.
- **Response**:
  - `200 OK`: Message successfully added to the queue.

### GET `/api/{queue_name}?timeout={ms}`

- **Description**: Retrieve the next message from the specified queue.
- **Query Parameters**:
  - `timeout` (optional): Time to wait for a message in milliseconds. Default is 10 seconds.
- **Response**:
  - `200 OK`: Returns the next message in the queue.
  - `204 No Content`: No message available after the timeout has elapsed.

## Installation

1. **Clone the Repository:**

   ```bash
   git clone 
```

### Client Instructions

2. **Navigate to the Client Directory:**
   cd frontend

3. **Install Dependencies:**
   yarn install

4. **Run the Development Server:**
   yarn start
   

### Server Instructions
   1. **Navigate to the Server Directory:**
   cd backend

   2. **Install Dependencies:**
      yarn install

   3. **Run the Development Server:**
   yarn start

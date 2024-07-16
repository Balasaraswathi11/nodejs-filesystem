# Node.js File System API

This project implements a Node.js API using Express to handle file system operations. It includes endpoints to create text files with timestamps and to retrieve all files from a specified folder.

## Dependencies

- **Express**: Handles HTTP requests and routes.
- **path**: Provides utilities for working with file and directory paths.
- **cors**: Middleware to enable Cross-Origin Resource Sharing.
- **fs**: Core Node.js module for file system operations.
- **date-fns**: Third-party library for date formatting.

  ## API Endpoints

### Home (`/`)

- **Description**: Displays information about the available API endpoints.
- **Method**: `GET`
- **Response**: HTML content with details about `/write` and `/read` endpoints.

### Write File (`/write`)

- **Description**: Creates a new text file with a timestamp in the `"Timestamp"` folder.
- **Method**: `GET`
- **File Name Format**: `YYYYMMDD_HHmm.txt`
- **Response**: Confirmation message indicating the file creation status.

### Read All Files (`/read`)

- **Description**: Retrieves a list of all text files in the `"Timestamp"` folder.
- **Method**: `GET`
- **Response**: JSON array containing the names of all files in the folder.

## Error Handling

- **File Operations**:
  - Catches errors during file creation and reading.
  - Logs errors to the console and sends `500 Internal Server Error` responses.

- ## Server Setup

- **Port**: Runs on port `5000`.
- **Logging**: Outputs server running message to the console.




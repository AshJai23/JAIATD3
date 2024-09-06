# REAL-TIME CYBER THREAT DETECTION AND AUTOMATED RESPONSE

## Overview

This project includes a Python script (`loggen.py`) and a Node.js server (`index.js` and `app.js`) designed to handle file uploads, process and analyze data, and provide various functionalities through API endpoints.

## Features

- **File Upload and Analysis**: Upload files and analyze them using VirusTotal API.
- **MITRE ATT&CK Integration**: Extract MITRE ATT&CK techniques from VirusTotal reports.
- **URL Domain Check**: Check the safety of a domain using VirusTotal.
- **Chat Integration**: Interact with OpenAI's GPT-3.5-turbo and Bing Search API for chat functionalities.
- **Conversation History**: Keep track of and retrieve conversation history.

## Prerequisites

- **Node.js**: Make sure Node.js is installed.
- **Python**: Ensure Python is installed along with the required libraries.
- **Python Libraries**: `requests`, `pandas`, `matplotlib`, `joblib`, `catboost`
- **Environment Variables**: API keys and configurations

## Installation

### Python Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AshJai23/JAIATD3.git
   cd JAIATD3
   ```

2. Install required Python packages:
   ```bash
   pip install -r requirements.txt
   ```

### Node.js Setup

1. Install Node.js dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file in the root directory and add the necessary environment variables:
   ```env
   OPENAI_API_KEY=<your-openai-api-key>
   BING_API_KEY1=<your-bing-api-key>
   VIRUSTOTAL_API_KEY=<your-virustotal-api-key>
   ```

## Usage

### Running the Server

1. Start the Node.js server:
   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:4000`.

### Python Script

To run `loggen.py`, ensure you have the necessary API keys and configurations set up in the script or environment.

### API Endpoints

- **POST `/upload`**: Upload a file for analysis. Returns MITRE ATT&CK techniques from VirusTotal.
- **POST `/process-file-from-uploads`**: Process a file from the uploads directory and return MITRE ATT&CK techniques.
- **POST `/domaincheck`**: Check the safety of a domain using VirusTotal.
- **POST `/chat`**: Interact with the chat system using OpenAI and Bing Search.
- **POST `/details`**: Retrieve details of a specific conversation from the history.

### Example Requests

#### Upload File

```bash
curl -X POST http://localhost:4000/upload -F "file=@/path/to/file"
```

#### Domain Check

```bash
curl -X POST http://localhost:4000/domaincheck -H "Content-Type: application/json" -d '{"url": "example.com"}'
```

#### Chat

```bash
curl -X POST http://localhost:4000/chat -H "Content-Type: application/json" -d '{"conversation": [{"role": "user", "content": "Tell me about security"}]}'
```

## Contributing

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b main
   ```
3. Commit your changes:
   ```bash
   git commit -am 'Add new feature'
   ```
4. Push to the branch:
   ```bash
   git push origin main
   ```
5. Create a new Pull Request.

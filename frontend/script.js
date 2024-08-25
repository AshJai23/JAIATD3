// Event listener for sending a message to the AI model
document.getElementById('send-button').addEventListener('click', async () => {
    const userInput = document.getElementById('user-input').value;
    if (!userInput) return;

    // Add user message to chat window
    appendMessage('User', userInput);

    // Call backend to get response
    try {
        const response = await getModelResponse(userInput);
        appendMessage('Bot', response);
    } catch (error) {
        console.error('Error fetching model response:', error);
        appendMessage('Bot', 'Sorry, there was an error.');
    }

    // Clear the input field
    document.getElementById('user-input').value = '';
});

// Event listener for fetching MITRE info
document.getElementById('get-mitre-info-button').addEventListener('click', async () => {
    const mitreQuery = document.getElementById('mitre-query').value;
    if (!mitreQuery) return;

    try {
        const response = await getMitreInfo(mitreQuery);
        appendMessage('MITRE Info', response);
    } catch (error) {
        console.error('Error fetching MITRE info:', error);
        appendMessage('MITRE Info', 'Sorry, there was an error.');
    }
});

// Event listener for fetching D3FEND info
document.getElementById('get-d3fend-info-button').addEventListener('click', async () => {
    const d3fendQuery = document.getElementById('d3fend-query').value;
    if (!d3fendQuery) return;

    try {
        const response = await getD3fendInfo(d3fendQuery);
        appendMessage('D3FEND Info', response);
    } catch (error) {
        console.error('Error fetching D3FEND info:', error);
        appendMessage('D3FEND Info', 'Sorry, there was an error.');
    }
});

// Function to fetch model response from the server
async function getModelResponse(input) {
    try {
        const response = await fetch('http://localhost:3000/api/get-response', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ prompt: input }), // Updated to match server expectation
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.response; // Updated to match server's response field
    } catch (error) {
        console.error('Error in getModelResponse:', error);
        return 'Sorry, there was an error.';
    }
}

// Function to fetch MITRE info from the server
async function getMitreInfo(query) {
    try {
        const response = await fetch('http://localhost:3000/api/get-mitre-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }), // Send query as payload
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.reply; // Adjust this based on the server's response
    } catch (error) {
        console.error('Error in getMitreInfo:', error);
        return 'Sorry, there was an error.';
    }
}

// Function to fetch D3FEND info from the server
async function getD3fendInfo(query) {
    try {
        const response = await fetch('http://localhost:3000/api/get-d3fend-info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }), // Send query as payload
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data.reply; // Adjust this based on the server's response
    } catch (error) {
        console.error('Error in getD3fendInfo:', error);
        return 'Sorry, there was an error.';
    }
}

// Function to append messages to the chat window
function appendMessage(sender, text) {
    const chatWindow = document.getElementById('chat-window');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;  // Scroll to bottom
}

document.addEventListener('DOMContentLoaded', function() {
    const chatLog = document.getElementById('chat-log');
    const userInput = document.getElementById('user-input');
  
    userInput.addEventListener('keydown', function(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleUserInput();
      }
    });
  
    function handleUserInput() {
      const userMessage = userInput.value;
      userInput.value = '';
      appendMessage('user', userMessage);
  
      const response = generateBotResponse(userMessage);
      setTimeout(function() {
        appendMessage('bot', response);
      }, 500);
    }
  
    function appendMessage(sender, message) {
      const messageElement = document.createElement('div');
      messageElement.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
      messageElement.textContent = message;
      chatLog.appendChild(messageElement);
      chatLog.scrollTop = chatLog.scrollHeight;
    }
  
    function generateBotResponse(userMessage) {
      const lowerCaseMessage = userMessage.toLowerCase();
  
      if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
        return 'Hello! How can I assist you today?';
      } else if (lowerCaseMessage.includes('weather')) {
        return 'The weather is great today!';
      } else if (lowerCaseMessage.includes('hobby') || lowerCaseMessage.includes('hobbies')) {
        return 'I enjoy chatting and learning new things!';
      } else if (lowerCaseMessage.includes('food')) {
        return 'I am a chatbot, so I don\'t eat, but I can help you find recipes!';
      } else if (lowerCaseMessage.includes('goodbye') || lowerCaseMessage.includes('bye')) {
        return 'Goodbye! Have a nice day!';
      } else {
        return 'I\'m sorry, I didn\'t understand that. Can you please rephrase?';
      }
    }
  });
  
const socket = io('http://localhost:3000');

const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');

let name = prompt('What is your name');
// console.log(name)
appendMessage('You joined')
socket.emit('new-user', name);

socket.on('user-connected', name => {
    appendMessage(`${name} joined`)
})

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    if(message !== ""){
        appendMessage(`You : ${message}`);
    }
})

function appendMessage(message) {
    const messageElement = document.createElement('div'); // <div></div>
    messageElement.innerText = message; // <div>message</div>
    messageContainer.append(messageElement);
}
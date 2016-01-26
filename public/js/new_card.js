'use strict';
function newCard(user) {
    var text = document.getElementById('textbox').value;
    console.log(text);
    XMLHttpGetCard(user, text);
    updateCard(user, text);
    console.log(1);
}

//Starts the application with this data set
function XMLHttpInitCard(user, text) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST','/api/fetch');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({message: user, username: text}));
}
//Updates the current data set.
function XMLHttpGetCard(user, text) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST','/api/update');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({message: user, username: text}));
    console.log(1);
}
function updateCard(user, text) {
    var messages = document.getElementById('messages');
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML= '<div class="text">' + text + '</div><div class="user"><div class="name">'+user+'</div></div>';
    messages.appendChild(card);
    console.log(messages);
}

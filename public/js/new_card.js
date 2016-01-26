'use strict';
function newCard(user) {
    var textbox = document.getElementById('textbox');
    var text = textbox.value;
    XMLHttpGetCard(user, text);
    load();
    var messages = document.getElementById('messages');
    messages.removeChild(messages.firstElementChild);
    textbox.value='';

}

//Starts the application with this data set

//Updates the current data set.
function XMLHttpGetCard(user, text) {
    var xhttp = new XMLHttpRequest();
    xhttp.open('POST','/api/update');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send(JSON.stringify({message: user, username: text}));

}
function updateCard(user, text) {
    var myNode = document.getElementById('messages');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }

    var messages = document.getElementById('messages');
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML= '<div class="text">' + text + '</div><div class="user"><div class="name">'+user+'</div></div>';
    messages.appendChild(card);

}

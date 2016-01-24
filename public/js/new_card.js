'use strict';
function newCard(user) {
    var messages = document.getElementById('messages');
    var text = document.getElementById('textbox').value;
    
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML= '<div class="text">' + text + '</div><div class="user"><div class="name">'+user+'</div></div>';
    messages.appendChild(card);
}

'use strict';
function newCard() {
    var messages = document.getElementById('messages');
    var card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML= '<div class="text">afsfasdfdfsadfsdfsafd</div><div class="user"><div class="name">changjef</div></div>';
    messages.appendChild(card);
}

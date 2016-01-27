function load() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var object = JSON.parse(xhttp.responseText).reverse();
            for (var i in object) {
                updateCard(object[i].cards.message, object[i].cards.username);
        
            }

        }
    }
    xhttp.open('POST','/api/fetch');
    xhttp.send();

    
};

function reload() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var object = JSON.parse(xhttp.responseText).reverse();
            var messages = document.getElementsByClassName('card');

            for (var i in object) {
                console.log(messages[i]);
                messages[i].lastElementChild.firstChild.innerHTML = object[i].cards.message;
                messages[i].firstElementChild.innerHTML = object[i].cards.username;
            }


        }
    }
    xhttp.open('POST','/api/fetch');
    xhttp.send();

}

load();
setInterval(reload, 2000);
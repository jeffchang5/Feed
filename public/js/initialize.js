function load() {
    var messages = document.getElementById("messages");
    while (messages.firstChild) {
        messages.removeChild(myNode.firstChild);
    }
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            var object = JSON.parse(xhttp.responseText);
            for (var i in object) {
                updateCard(object[i].cards.message, object[i].cards.username);
        
            }

        }
    }
    xhttp.open('POST','/api/fetch');
    xhttp.send();
    
};
var messages = document.getElementById("messages");
while (messages.firstChild) {
    messages.removeChild(myNode.firstChild);
}
load();
setInterval(load, 2000);
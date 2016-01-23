function loginCard (event) {
    if (event != null) {
        var doc = document.getElementsByTagName('body')[0];
        doc.style.visibility = 'hidden';
        if (event == 'register') {
            console.log('register');
            var register = document.createElement('form');
            register.setAttribute("method", "POST");
            register.action = '/api/register';
            register.innerHTML = '<div id = "form_text">Full Name:<br><input type="text" name="username" <br>Password:<br><input type="password" name="password"></div><button type ="submit">Register</button>';
            register.style.visibility='visible';
            doc.appendChild(register);
            
            
            
        }
        else {
            var login = document.createElement('form');
            login.action = '/api/login';
            login.setAttribute("method", "POST");
            login.innerHTML = '<div id = "form_text">Full Name:<br><input type="text" name="username" <br>Password:<br><input type="password" name="password"></div><button type ="submit" >Login</button>';
            login.style.visibility='visible';
            doc.appendChild(login);
        }
    }
}
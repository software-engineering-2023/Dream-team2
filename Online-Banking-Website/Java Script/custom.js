// admin - banker - user

// let username = document.getElementById('username').value;

// let password = document.getElementById('password').value;

let admin = {
    username: "admin",
    password: "123456"
}

let banker = {
    username: "banker",
    password: "456789"
}

let user = {
    username: "user",
    password: "123456"
}

function login() {
    let username = document.getElementById('username').value;

    let password = document.getElementById('password').value;
    
    let redirectLink = document.getElementById("redirectLink");

    if ((admin.username == username && admin.password == password)) {
        redirectLink.setAttribute("href", "admin_dashboard.html");
        redirectLink.click();

    } else if ((banker.username == username && banker.password == password)) {
        redirectLink.setAttribute("href", "banker_dashboard.html");
        redirectLink.click();

    } else if ((user.username == username && user.password == password)) {
        redirectLink.setAttribute("href", "home.html");
        redirectLink.click();

    } else {
        alert('Invalid Data');
    }
}

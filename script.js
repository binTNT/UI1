const layout = [
    'home.html',
    'product.html',
    'contact.html',
    'cart.html',
]

const load_screen = (index) => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("main-screen").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "./layout/views/" + layout[index], true);
    xhttp.send();
    loadmenu();
}

const loadmenu = () => {

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("menu-id").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "./layout/header/menu1.html", true);
    xhttp.send();
}

const formlogin = () => {
    document.getElementById('login-form').style.display = 'block';
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("login-form").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "./layout/form/login.html", true);
    xhttp.send()
}

const register_ = () => {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("login-form").innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", "./layout/form/signin.html", true);
    xhttp.send()
}

const cancellogin = () => {
    document.getElementById('login-form').style.display = 'none'
}

const show_menu = () => {
    var check = document.getElementById('show-menu-id').style.display;
    if (check == 'block') {
        document.getElementById('show-menu-id').style.display = 'none';
    } else {
        document.getElementById('show-menu-id').style.display = 'block';
    }
}
function start() {
    const URL_CATCHES = "http://localhost:3030/data/catches/"

    const homeLink = document.getElementById('home');
    const logoutLink = document.getElementById('logout');
    const loginLink = document.getElementById('login');
    const registerLink = document.getElementById('register');

    if (!sessionStorage.getItem('accessToken')) {
        logoutLink.setAttribute('style', 'display:none')
    }
    else {
        logoutLink.setAttribute('style', 'display:inline-block')
        loginLink.setAttribute('style', 'display:none');
        registerLink.setAttribute('style', 'display:none')
    }
    
}

start();
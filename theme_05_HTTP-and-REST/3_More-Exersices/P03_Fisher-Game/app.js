function solve() {
    const URL_LOGIN = "http://localhost:3030/users/login";

    const selectors = {
        homeBtn: document.getElementById("home"),
        loginBtn: document.getElementById("login"),
        logOutBtn: document.getElementById("logout"),
        userInfo: document.querySelector('nav>p>span'),

        pageMainContainer: document.querySelector("main"),
        viewsContainer: document.getElementById("views"),

        registerForm: document.getElementById("register-view"),
        loginContainer: document.getElementById("login-view"),
        loginForm: document.querySelector("form#login"),
        loginFormBtn: document.querySelector("#login button"),
        homeContainer: document.getElementById("home-view"),
        homeMain: document.getElementById("main"),
        homeAsside: document.querySelector("#home-view aside"),
    }

    selectors.viewsContainer.style.display = "none";
    selectors.logOutBtn.style.display = "none";
    let activeNavBtn = selectors.homeBtn;
    selectors.homeBtn.addEventListener("click", homeHandler);
    selectors.loginBtn.addEventListener("click", loginHandler);

    function homeHandler() {
        changeActiveNavBtn(selectors.homeBtn);
        selectors.pageMainContainer.innerHTML = "";
        const homeLoadParagraph = createElement("p", selectors.pageMainContainer,);
        createElement("a", homeLoadParagraph, "Click to load cathes")
        selectors.pageMainContainer.appendChild
        selectors.pageMainContainer.appendChild(selectors.homeContainer);
    }

    function loginHandler() {
        changeActiveNavBtn(this);
        selectors.pageMainContainer.innerHTML = "";
        selectors.loginContainer.style.display = "flex";
        selectors.pageMainContainer.appendChild(selectors.loginContainer);
        const userData = sessionStorage.getItem("userData");
        //The sessionStorage object let you store key/value pairs in the browser.
        //Save Data to Session Storage:  sessionStorage.setItem("key", "value");
        //Read Data from Session Storage: let lastname = sessionStorage.getItem("key");
        //Remove Data from Session Storage: sessionStorage.removeItem("key");
        //Remove All (Clear session Storage): sessionStorage.clear();
        if (userData) {
            selectors.userInfo = userData;
        } else {
            selectors.userInfo = "guest";
        }
        console.log(selectors.loginForm)
        selectors.loginFormBtn.addEventListener("click", loginSubmitHandler);
    }

    function loginSubmitHandler(e) {
        e.preventDefault();

        const formData = new FormData(selectors.loginForm);
        //the FormData object will be populated with the form's (HTML <form> element) current keys/values
        // using the name property of each element for the keys and their submitted value for the values.
        const email = formData.get("email");
        const password = formData.get("password");
        if (!email || !password) {
            return alert("All fields are required");
        }

        const payLoad = JSON.stringify({ email, password });
        const httpHeaders = {
            method: "POST",
            body: payLoad
        }

        fetch(URL_LOGIN, httpHeaders)
            .then((res) => res.json())
            //{
            // "email": "george@abv.bg",
            // "username": "George",
            // "_id": "847ec027-f659-4086-8032-5173e2f9c93a",
            // "accessToken": "07b92424a0759b4eebb8f9f88c3f93f924d1380c427613dde842ffa7e865c469"
            // }
            .then((data) => {
                const accessToken = data.accessToken;
                if (accessToken) {
                    const userData = JSON.stringify({
                        accessToken,
                        username: data.email,
                        user_id: data._id
                    });
                    sessionStorage.setItem("userData", userData);
                    homeHandler();
                    // window.location.pathname = '/08_JS-FRONT-END\theme_05_HTTP-and-REST\3_More-Exersices\P03_Fisher-Game';
                    //window.location object can be used to get the current page address (URL) and 
                    //to redirect the browser to a new page
                    //window.location.pathname returns the path and filename of the current page
                } else {
                    throw new Error('No access token provided by server');
                }
            })
            .catch((err) => {
                if (err.message) {
                    return alert(err.message);
                } else {
                    err.text().then(e => alert(JSON.parse(e).message));
                }
            })
    }

    function changeActiveNavBtn(btn) {
        activeNavBtn.classList.remove("active");
        activeNavBtn = btn;
        activeNavBtn.classList.add("active");
    }

    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.innerHTML = content;
        } else if (content && (type !== "input" || type !== "textarea")) {
            htmlElement.textContent = content;
        } else if (content && (type === "input" || type === "textarea")) {
            htmlElement.value = input;
        }

        if (classes && classes.length > 0) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        //{src: "link", href: "http..."}
        if (attributes) {
            for (const key in attributes) {
                htmlElement.setAttribute(key, attributes[key]);
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }

}

solve();
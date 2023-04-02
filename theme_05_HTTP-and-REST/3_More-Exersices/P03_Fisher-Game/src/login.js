async function login() {
    const LOGIN_URL = "http://localhost:3030/users/login";
    const loginForm = document.querySelector("#login");

    
    loginForm.addEventListener("submit", loginHandler);

    async function loginHandler(e) {
        e.preventDefault(); //the default action that belongs to the event will not occur
        let loginData = new FormData(e.target);
        //FormData object represent HTML <form> data.
        // FormData automatically captures <form> fields
        //fetch, can accept a FormData object as a body
        //more: https://javascript.info/formdata
        console.log(loginData);
        let userInfo = {
            email: loginData.get("email"),
            password: loginData.get("password")
        }

        let httpHeaders = {
            method: "POST",
            body: JSON.stringify(userInfo)
        }

        try {
            let rsp = await fetch(LOGIN_URL, httpHeaders);
            let data = await rsp.json();
            sessionStorage.setItem("accessToken", data["accessToken"]);
            sessionStorage.setItem('id', data['_id']);
        } catch (err) {
            console.log(err)
        }


    }
}

login();
import axios from 'axios'
import $ from "jquery";

export const register = newUser => {
    return axios
        .post('api/user/register', newUser, {
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            console.log(response)
        })
        .catch(err => {
            console.log(err)
        })
}

export const login = user => {
    return axios
        .post(
            'api/user/login',
            {
                email: user.email,
                password: user.password
            }
        )
        .then(response => {
            console.log(response);
            return response;
            // console.log("Mr mendes")
            // localStorage.setItem('usertoken', response.data.auth_token)
            // return response.data.token
        })
        .then(json => {
            if (json.data.success) {
                alert("Login Successful!");
                const { name, id, email, auth_token } = json.data.data;

                let userData = {
                name,
                id,
                email,
                auth_token,
                timestamp: new Date().toString()
                };
                let appState = {
                    isLoggedIn: true,
                    user: userData
                };
                // save app state with user date in local storage
                // localStorage["appState"] = JSON.stringify(appState);
                console.log("Mr Mendes is here");
                // console.log(localStorage["appState"]);
                // this.setState({
                //     isLoggedIn: appState.isLoggedIn,
                //     user: appState.user
                // });
                localStorage.setItem('usertoken', appState)
                console.log("Mr Mendes is here 2");
                console.log(`Bearer ${localStorage.usertoken}`)
            } else alert("Login Failed!");

            $("#login-form button")
                .removeAttr("disabled")
                .html("Login");
        })
        .catch(err => {
            console.log(err)
        })
}

export const getProfile = () => {
    return axios
        .get('api/profile', {
            headers: { Authorization: `Bearer ${localStorage.usertoken}` }
        })
        .then(response => {
            console.log(response)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
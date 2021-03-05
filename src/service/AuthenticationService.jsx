// AuthenticationService.jsx
// following https://www.springboottutorial.com/spring-boot-react-full-stack-with-spring-security-basic-and-jwt-authentication
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'
// export const USER_FIRST_AND_LAST_SESSION_ATTIRBUTE = 'user'

class AuthenticationService {

    creatAccount(newAccount) {
        console.log("create account")
        return axios.post(`${url}/new/user`, newAccount)
    }

    executeJwtAuthenticationService(username, password) {
        console.log(username);
        return axios.post(`${url}/authenticate`, {
            username,
            password
        })
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username)
        console.log(this.createJWTToken(token))
        // this.setupAxiosInterceptors(this.createJWTToken(token))
        localStorage.setItem("JWT", this.createJWTToken(token))
        console.log("stored ", this.createJWTToken(token))
        console.log("and it's right here ", localStorage.getItem("JWT"))

    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }

    logout() {
        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return false
        return true
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        if (user === null) return ''
        return user
    }

    // setupAxiosInterceptors(token) {
    //     axios.interceptors.request.use(
    //         (config) => {
    //             if (this.isUserLoggedIn()) {
    //                 config.headers.authorization = token
    //                 console.log(config.headers.authorization)
    //             }
    //             return config
    //         }
    //     )
    // }

    getLoggedInUsersNameFirstLast() {
        return axios.get(`${url}/users/name`, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
        })
    }

    // registerFirstAndLastName(name) {
    //     sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, name)
    // }

    // getLoggedInUsersNameFirstLastFromStored() {
    //     let user = sessionStorage.getItem(USER_FIRST_AND_LAST_SESSION_ATTIRBUTE)
    //     if (user === null) return ''
    //     return user
    // }

}

export default new AuthenticationService()
// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const USER = 'user'
const PASSWORD = 'password'
const SHOW_API_URL = `${BUDGET_API_URL}/show/${USER}`

class ShowService {

    retrieveAllShows(name) {
        console.log('executed service')
        return axios.get(`${SHOW_API_URL}/get/all`,
            { headers: { authorization: 'Basic ' + window.btoa(USER + ":" + PASSWORD) } }
        );
    }
}

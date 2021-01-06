// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const SHOW_API_URL = `${url}/show`

class ShowService {

    retrieveAllShows() {
        return axios.get(`${SHOW_API_URL}/get/all/user`,
        );
    }
}

export default new ShowService()
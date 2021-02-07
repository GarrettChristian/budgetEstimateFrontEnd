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

    retrieveShow(id) {
        return axios.get(`${SHOW_API_URL}/get`, { params: {
            id: id
          }},
        );
    }

    createNewShow(show) {
        return axios.post(`${SHOW_API_URL}/add/new`, show,
        );
    }
}

export default new ShowService()
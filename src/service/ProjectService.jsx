// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const SHOW_API_URL = `${url}/show`

class ProjectService {

    retrieveAllProjects() {
        return axios.get(`${SHOW_API_URL}/get/all/user`, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
          }
        );
    }

    retrieveProject(id) {
        console.log("look here it is?? ", localStorage.getItem("JWT"))
        return axios.get(`${SHOW_API_URL}/get`, { params: {
            id: id
          }}, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
          }
        );
    }

    createNewProject(show) {
        return axios.post(`${SHOW_API_URL}/add/new`, show, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
          }
        );
    }
}

export default new ProjectService()
// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const PROJECT_API_URL = `${url}/project`

class ProjectService {

    retrieveAllProjects() {
        return axios.get(`${PROJECT_API_URL}/get/all/user`, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
          }
        );
    }

    retrieveProject(id) {
        console.log("look here it is?? ", localStorage.getItem("JWT"))
        let config = {
          headers: {'Authorization': localStorage.getItem("JWT")},
          params: {
            id: id
          },
        }

        return axios.get(`${PROJECT_API_URL}/get`, config);
    }

    createNewProject(show) {
        return axios.post(`${PROJECT_API_URL}/add/new`, show, {
            headers: {
              'Authorization':  localStorage.getItem("JWT")
            }
          }
        );
    }
}

export default new ProjectService()
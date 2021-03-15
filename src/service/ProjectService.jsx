// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const PROJECT_API_URL = `${url}/project`

class ProjectService {

  retrieveAllProjects() {
      return axios.get(`${PROJECT_API_URL}/get/all/user`, {
          headers: {
            'Authorization': localStorage.getItem("JWT")
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

  createNewProject(project) {
      return axios.post(`${PROJECT_API_URL}/add/new`, project, {
          headers: {
            'Authorization':  localStorage.getItem("JWT")
          }
        }
      );
  }

  createNewUnit(unit) {
    return axios.post(`${PROJECT_API_URL}/unit/new`, unit, {
        headers: {
          'Authorization':  localStorage.getItem("JWT")
        }
      }
    );
  }

  retrieveUnitOverview(projectId) {
    console.log("artist " + projectId)
    let config = {
      headers: {'Authorization': localStorage.getItem("JWT")},
      params: {
        projectId: projectId
      },
    }

    return axios.get(`${PROJECT_API_URL}/unit/get/overview`, config);
  }

  retrieveUnit(unitId, projectId) {
    let config = {
      headers: {'Authorization': localStorage.getItem("JWT")},
      params: {
        unitId: unitId,
        projectId: projectId
      },
    }

    return axios.get(`${PROJECT_API_URL}/unit/get`, config);
  }

}

export default new ProjectService()
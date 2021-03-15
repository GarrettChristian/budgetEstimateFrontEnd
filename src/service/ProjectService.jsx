// ShowService.jsx
import axios from 'axios'
import { config } from './Constants'

var url = config.url.API_URL

const PROJECT_API_URL = `${url}/project`

class ProjectService {

  retrieveAllProjects() {
      return axios.get(`${PROJECT_API_URL}/get/all/user`, {
          headers: {
            Authorization: localStorage.getItem("JWT")
          }
        }
      );
  }

  retrieveProject(id) {
      console.log("look here it is?? ", localStorage.getItem("JWT"))
      let config = {
        headers: {Authorization: localStorage.getItem("JWT")},
        params: {
          id: id
        },
      }

      return axios.get(`${PROJECT_API_URL}/get`, config);
  }

  createNewProject(project) {
    let config = {
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.post(`${PROJECT_API_URL}/add/new`, project, config);
  }

  // STAFF

  retrieveStaff(projectId) {
    let config = {
      params: {
        projectId: projectId
      },
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.get(`${PROJECT_API_URL}/staff/all`, config);
  }

  addStaffToProject(username, projectId, owner) {
    let config = {
      params: {
        username: username,
        projectId: projectId,
        owner: owner
      },
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.post(`${PROJECT_API_URL}/staff/new`, {}, config);
  }

  isOwner(projectId) {
    let config = {
      params: {
        projectId: projectId
      },
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.get(`${PROJECT_API_URL}/owner`, config);
  }

  // UNIT

  createNewUnit(unit) {
    return axios.post(`${PROJECT_API_URL}/unit/new`, unit, {
        headers: {
          Authorization:  localStorage.getItem("JWT")
        }
      }
    );
  }

  retrieveUnitOverview(projectId) {
    let config = {
      params: {
        projectId: projectId
      },
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.get(`${PROJECT_API_URL}/unit/get/overview`, config);
  }

  retrieveUnit(unitId, projectId) {
    let config = {
      params: {
        unitId: unitId,
        projectId: projectId
      },
      headers: {Authorization: localStorage.getItem("JWT")},
    }

    return axios.get(`${PROJECT_API_URL}/unit/get`, config);
  }

}

export default new ProjectService()
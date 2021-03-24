// Constants.js
// following: https://medium.com/@a.carreras.c/development-and-production-variables-for-react-apps-c04af8b430a5

const production = {
    url: {
        API_URL: "https://thea-budget-estimate.herokuapp.com" // TODO fix
    }
};

const dev = {
    url: {
        API_URL: "http://localhost:8080"
    }
};

export const config = process.env.NODE_ENV === "development" ? dev: production;
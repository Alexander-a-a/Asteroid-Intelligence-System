class CadService {
  constructor(db) {
    this.axios = require("axios");
  }

  async initCas() {
    try {

        const response = this.axios.get("https://ssd-api.jpl.nasa.gov/cad.api");

        const data = response.data;

        if (!data) {
            const err = new Error("No data found");
            err.httpStatus = 404;
            err.code = "APP_NOT_FOUND";
            throw err;
        }

        const apiData = data.data;


        if (!Array.isArray(apiData) || apiData.length === 0) {
        const err = new Error("No data found");
        err.httpStatus = 404;
        err.code = "APP_NOT_FOUND";
        throw err;
      }

    } catch (err) {
      err.httpStatus = err.httpStatus || 500;
      err.code = err.code || "APP_INTERNAL";
      throw err;
    }
  }
}

module.exports = CadService;
class CadService {
  constructor(db) {
    this.axios = require("axios");
  }

  async initCas() {
    try {

      const response = await this.axios.get("https://ssd-api.jpl.nasa.gov/cad.api");

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



      const rows = apiData.map((row) => {
        const designation = row[0];
        const dateRaw = row[3];
        const distance = parseFloat(row[4]);
        const min_distance = parseFloat(row[5]);
        const max_distance = parseFloat(row[6]);
        const velocity = parseFloat(row[7]);

        const dateObj = new Date(dateRaw)

        if (!designation) {
          return null;
        }

        if (isNaN(dateObj.getTime())) {
          return null;
        }

        const closeApproachDate = dateObj.toISOString();

        if (isNaN(distance)) {
          return null;
        }

        if (isNaN(min_distance)) {
          return null;
        }

        if (isNaN(max_distance)) {
          return null;
        }

        if (isNaN(velocity)) {
          return null;
        }

        return { designation, closeApproachDate, distance, min_distance, max_distance, velocity };
      });


      const cleanRows = rows.filter(row => row != null)

      return cleanRows;

    } catch (err) {
      err.httpStatus = err.httpStatus || 500;
      err.code = err.code || "APP_INTERNAL";
      throw err;
    }
  }
}

module.exports = CadService;
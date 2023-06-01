import axios from "axios";
import jwtDecode from "jwt-decode";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

  static token = "";

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** get companies matches search term*/
  static async getCompanies(nameLike) {
    const res = await this.request(`companies/`, { nameLike });
    return res.companies;
  }

  /** get jobs matches search term */
  static async getJobs(title) {
    const res = await this.request(`jobs/`, { title });
    return res.jobs;
  }

  /**
   * Makes a POST request to backend with the signup form data and returns the
   * token if signup was successful
   *
   * throws up the error message string if unsuccessful
   *
   * @param {object} data { username, password, firstName, lastName, email }
   * @returns {string} token
   */
  static async signup(data) {
    try {
      const res = await this.request(`auth/register`, data, "post");
      return res.token;
    } catch (err) {
      throw err[0];
    }
  }

/**
 * Makes a POST request to backend with the login data and returns the
 * token if login was successful
 *
 * throws up the error message string if unsuccessful
 *
 * @param {object} data { username, password }
 * @returns {string} token
 */
  static async login(data) {
    try {
      const res = await this.request(`auth/token`, data, "post");
      return res.token;
    } catch (err) {
      throw err[0];
    }
  }

  /**
   * If a token has been set, returns the user as object via GET request
   * to the backend, decoding the username in the currently stored token
   * @returns {object}
   */
  static async getUser() {
    if (!this.token) {
      return null;
    }

    const decoded = jwtDecode(this.token); //TODO: refactor the username to a param
    const username = decoded.username;
    const res = await this.request(`users/${username}`);
    return res.user;
  }
}

export default JoblyApi;
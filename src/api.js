import axios from "axios";


const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
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
   * get user data of the given username
   * @returns {object}
   */
  static async getUser(username) {
    const res = await this.request(`users/${username}`);
    return res.user;
  }
/**
 * update the user Profile for the login user and updated input value
 *@return {object}
 */
  static async updateUserProfile(data,username){
    const res = await this.request(`users/${username}`, data, "patch");
    return res.user;
  }
}

export default JoblyApi;
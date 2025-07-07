class ApiClient {
  constructor() {
    this.baseUrl = "http://localhost:3000/api/v1";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }

  async customFetch(endpoint, options = {}) {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const headers = { ...this.defaultHeaders, ...options.headers };

      const config = {
        ...options,
        headers,
        credentials: "include",
      };

      const response = await fetch(url, config);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("API Error", error);
      throw error;
    }
  }

  // Auth endpoints
  async Signup(name, email, password) {
    const data = await this.customFetch("/users/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
    });

    return data;
  }

  async Login(email, password) {
    return this.customFetch("/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });
  }

  async Me() {
    return this.customFetch("/users/me");
  }
}

const apiClient = new ApiClient();

export default apiClient;

function requestErrorResolver(error) {
    if (error.response) {
      return Promise.reject({ error: error.response.data.error });
    } else if (error.request) {
      return Promise.reject({ error: "Network error" });
    } else {
      return Promise.reject({ error: "Request setup error" });
    }
}

export { requestErrorResolver };

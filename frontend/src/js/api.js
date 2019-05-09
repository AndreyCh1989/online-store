export default {
  async get (url) {
    return this.rest('GET', url, null)
  },

  async delete (url) {
    return this.rest('DELETE', url, null)
  },

  async post (url, data) {
    return this.rest('POST', url, data)
  },

  async put (url, data) {
    return this.rest('PUT', url, data)
  },

  async rest (type, url, data) {
    const req = {
      method: type
    }
    if (data) {
      req['headers'] = {
        'Content-Type': 'application/json'
      }
      req['body'] = JSON.stringify(data)
    }

    return fetch(url, req)
      .then(result => result.json())
      .catch(error => {
        console.log(error)
      })
  }
}

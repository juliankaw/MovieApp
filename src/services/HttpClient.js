function client(endpoint, customConfig = {}) {
  const config = {
    method: 'GET',
    ...customConfig,
  }
  return window
    .fetch(`http://www.omdbapi.com/${endpoint}&apikey=8ce8db98`, config)
    .then(async (response) => {
      const data = await response.json()
      if (response.ok) {
        return data
      }
      return Promise.reject(data)
    })
}

export { client }

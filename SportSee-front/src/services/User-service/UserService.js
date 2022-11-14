/**
 * @param {string} endpoint api endpoint
 * @returns {Promise} data
 */

const httpGet = async (endpoint) => {
  try {
    const response = await fetch(endpoint)
    return await response.json()
  } catch (error) {
    console.log(error)
    throw Error(error)
  }
}

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id
 */
const getUserById = (id) => {
  return httpGet(`/user/${id}`)
}

/**
 * @param {number} id
 */
const getUserActivityById = (id) => {
  return httpGet(`/user/${id}/activity`)
}

/**
 * @param {number} id
 */
const getUserAverageSessionById = (id) => {
  return httpGet(`/user/${id}/average-sessions`)
}

/**
 * @param {number} id
 */
const getUserPerformanceById = (id) => {
  return httpGet(`/user/${id}/performance`)
}
export { getUserById, getUserActivityById, getUserAverageSessionById, getUserPerformanceById }

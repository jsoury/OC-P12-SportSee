const {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} = require('../../mock/data')

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id
 */
const getUserById = (id) =>
  new Promise((resolve) => {
    resolve({ data: USER_MAIN_DATA.filter((user) => user.id === parseInt(id)).shift() })
  })

/**
 * @param {number} id
 */
const getUserActivityById = (id) =>
  new Promise((resolve) => {
    resolve({
      data: USER_ACTIVITY.filter((userActivity) => userActivity.userId === parseInt(id)).shift(),
    })
  })

/**
 * @param {number} id
 */
const getUserAverageSessionById = (id) =>
  new Promise((resolve) => {
    resolve({
      data: USER_AVERAGE_SESSIONS.filter(
        (userActivity) => userActivity.userId === parseInt(id)
      ).shift(),
    })
  })

/**
 * @param {number} id
 */
const getUserPerformanceById = (id) =>
  new Promise((resolve) => {
    resolve({
      data: USER_PERFORMANCE.filter(
        (userPerformance) => userPerformance.userId === parseInt(id)
      ).shift(),
    })
  })

export { getUserById, getUserActivityById, getUserAverageSessionById, getUserPerformanceById }

import DataConstructor from './DataConstructor'

/**
 * Class representing a user session data
 * @extends DataConstructor
 */

class SessionsModel extends DataConstructor {
  /**
   * Transform day to letter
   * @returns {Array.<{day: String, sessionLength: Number}>} averageSessions
   */
  turnDayToLetter() {
    const day = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
    this.data.map((session, index) => {
      session.day = day[index]
      return session
    })
  }
}
export default SessionsModel

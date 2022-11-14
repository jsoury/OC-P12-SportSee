import DataConstructor from './DataConstructor'

/**
 * Class representing a user activity data
 * @extends DataConstructor
 */
class PerformanceModel extends DataConstructor {
  /**
   * Transform performance category in french
   * @returns {Array.<{kind: String, value: Number}>} performance
   */
  turnPerformanceToLetter() {
    const category = ['Intensité', 'Vitesse', 'Force', 'Endurance', 'Energie', 'Cardio']
    this.data.map((session, index) => {
      session.kind = category[index]
      return session
    })
  }
}
export default PerformanceModel

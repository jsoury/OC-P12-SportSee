import DataConstructor from './DataConstructor'

/**
 * Class representing a user activity data
 * @extends DataConstructor
 */
class ActivityModel extends DataConstructor {
  /**
   * Transform date to day
   * @returns {Array.<{day: String, kilogram: Number, calories:Number}>} sessions
   */
  transformDateToDay() {
    this.data.forEach((element) => {
      element.day = new Date(element.day).getDate()
    })
  }
}
export default ActivityModel

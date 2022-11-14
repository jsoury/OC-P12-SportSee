import DataConstructor from './DataConstructor'

/**
 * Class representing a user data
 * @extends DataConstructor
 */
class UserModel extends DataConstructor {
  /**
   * Get user name
   * @returns {String} user first name
   */
  getName() {
    return this.data.userInfos.firstName
  }

  /**
   * Get user score
   * @returns {Array.<{score:number}>} user score
   */
  getScore() {
    return this.data.score
      ? [{ score: this.data.score * 100 }]
      : [{ score: this.data.todayScore * 100 }]
  }
  /**
   * Get user data Card.
   * Transform description in french
   * @returns {Array.<{description:string, value:Number, unit:String, icon:String}>} Object data card
   */
  getDataCard() {
    const dataCard = []
    const description = {
      calorieCount: 'Calorie',
      proteinCount: 'Proteines',
      carbohydrateCount: 'Glucides',
      lipidCount: 'Lipides',
    }

    for (const [key, value] of Object.entries(this.data.keyData)) {
      const obj = {
        description: description[key],
        value: value,
        unit: key === 'calorieCount' ? 'kCal' : 'g',
        icon: `${key.slice(0, -5)}-icon`,
      }
      dataCard.push(obj)
    }
    return dataCard
  }
}

export default UserModel

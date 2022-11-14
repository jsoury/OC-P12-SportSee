import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '@/asset/style/variables'

//use data mock
import {
  getUserById,
  getUserActivityById,
  getUserAverageSessionById,
  getUserPerformanceById,
} from '../../services/user-service-mock/UserServiceMock'

// user back
// import {
//   getUserById,
//   getUserActivityById,
//   getUserAverageSessionById,
//   getUserPerformanceById,
// } from '@/services/User-service/UserService'

import Activity from '@/components/Activity'
import Sessions from '@/components/Sessions'
import Performance from '@/components/Performance'
import Score from '@/components/Score'
import Card from '@/components/Card'

import UserModel from '@/utils/models/User'
import ActivityModel from '@/utils/models/Activity'
import SessionsModel from '@/utils/models/Sessions'
import PerformanceModel from '@/utils/models/Performance'

const SpanName = styled.span`
  color: ${colors.primary};
`

const DashboardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.2fr;
  grid-template-areas: 'activity information' 'report information';
  grid-gap: 0.25rem;
`

const Information = styled.div`
  grid-area: information;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 263px;
  height: 100%;
`
const Report = styled.div`
  grid-area: report;
  display: flex;
  justify-content: space-between;
`
/**
 * Page dashboard user
 * @component
 * @returns {JSX} dashboard
 */

const Dashboard = () => {
  const { id } = useParams()
  const [user, setUser] = useState(null)
  const [dataCard, setDataCard] = useState(null)
  const [userScore, setUserScore] = useState(null)
  const [activity, setActivity] = useState(null)
  const [averageSessions, setAverageSessions] = useState(null)
  const [performance, setPerformance] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      await getDataUser(id)
      await getActivityData(id)
      await getSessionData(id)
      await getPerformanceData(id)
      await setIsLoading(false)
      //await console.log(isLoading)
    }
    fetchData()
  }, [id, isLoading])

  /**
   * @memberof Dashboard
   * @function getDataUser get user name, data card and score formatted by class model
   * @param {number} id user id in path
   */
  const getDataUser = (id) => {
    getUserById(id).then((response) => {
      const userModelFormatted = new UserModel(response.data)
      setUser(userModelFormatted.getName())
      setDataCard(userModelFormatted.getDataCard())
      setUserScore(userModelFormatted.getScore())
    })
  }

  /**
   * @memberof Dashboard
   * @function getActivityData get user activity formatted by class model
   * @param {number} id user id in path
   */
  const getActivityData = (id) => {
    getUserActivityById(id).then((response) => {
      const activityDataFormatted = new ActivityModel(response.data.sessions)
      activityDataFormatted.transformDateToDay()
      setActivity(activityDataFormatted.data)
    })
  }

  /**
   * @memberof Dashboard
   * @function getSessionData get user session formatted by class model
   * @param {number} id user id in path
   */
  const getSessionData = (id) => {
    getUserAverageSessionById(id).then((response) => {
      const sessionsDataFormatted = new SessionsModel(response.data.sessions)
      sessionsDataFormatted.turnDayToLetter()
      setAverageSessions(sessionsDataFormatted.data)
    })
  }

  /**
   * @memberof Dashboard
   * @function getPerformanceData get user performance formatted by class model
   * @param {number} id user id in path
   */
  const getPerformanceData = (id) => {
    getUserPerformanceById(id).then((response) => {
      const performanceDataFormatted = new PerformanceModel(response.data.data)
      performanceDataFormatted.turnPerformanceToLetter()
      setPerformance(performanceDataFormatted.data)
    })
  }

  return (
    <>
      {!user && !activity ? (
        <p>is loading</p>
      ) : (
        <>
          <h1>
            Bonjour <SpanName>{user}</SpanName>
          </h1>
          <DashboardWrapper>
            <Information>
              {dataCard.map((value, index) => (
                <Card
                  key={`${value.description}${index}`}
                  icon={value.icon}
                  value={value.value}
                  unit={value.unit}
                  smallText={value.description}
                ></Card>
              ))}
            </Information>
            <Activity activity={activity} />
            <Report>
              <Sessions averageSessions={averageSessions} />
              <Performance performance={performance} />
              <Score userScore={userScore} />
            </Report>
          </DashboardWrapper>
        </>
      )}
    </>
  )
}

export default Dashboard

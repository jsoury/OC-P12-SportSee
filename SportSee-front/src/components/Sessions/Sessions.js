import propTypes from 'prop-types'
import styled from 'styled-components'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

import { colors } from '@/asset/style/variables'

const SessionsWrapper = styled.div`
  position: relative;
  background: ${colors.primary};
  color: ${colors.white};
  width: 30%;
  border-radius: 5px;
`
const StyledToolTip = styled.span`
  background: ${colors.white};
  color: ${colors.black};
  padding: 10px;
  font-size: 9px;
`
const Title = styled.h3`
  margin: 29px 0 0 34px;
  font-size: 15px;
  font-weight: 500;
`

/**
 * displays a user's line chart
 * @component
 * @param {Object[]} averageSessions
 * @param {Number} averageSessions.day
 * @param {Number} averageSessions.sessionLength
 * @returns {JSX} line chart
 */
const Sessions = ({ averageSessions }) => {
  /**
   * Render CustomTooltip component
   * @memberof Sessions
   * @function CustomTooltip
   * @param {boolean} active > hover ? y/n
   * @param {array} payload > data to display
   * @returns {JSX} custom tooltip
   */
  function CustomTooltip({ active, payload }) {
    if (active && payload) {
      return <StyledToolTip>{`${payload[0].value} min`}</StyledToolTip>
    }
    return null
  }

  return !averageSessions ? (
    <p>is Loading</p>
  ) : (
    <SessionsWrapper>
      <Title>
        Durée moyenne des
        <br />
        sessions
      </Title>
      <ResponsiveContainer width="100%" height={263}>
        <LineChart
          data={averageSessions}
          margin={{
            top: 5,
            right: 10,
            left: 10,
            bottom: 5,
          }}
        >
          <XAxis
            dataKey="day"
            stroke={colors.white}
            tickLine={false}
            dy={10}
            padding={{ right: 0, left: 0 }}
          />
          <YAxis dataKey="sessionLength" hide={true} domain={[0, 'dataMax + 75']} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={colors.white}
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: 'rgba(255,255,255, 0.6)',
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </SessionsWrapper>
  )
}

Sessions.propTypes = {
  /**
   * Array average sessions user
   */
  averageSessions: propTypes.array,
}
export default Sessions

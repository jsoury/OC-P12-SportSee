import propTypes from 'prop-types'
import styled from 'styled-components'
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts'
import { colors } from '../../asset/style/variables'
import { device } from '../../asset/style/device'

const PerformanceWrapper = styled.div`
  position: relative;
  background: ${colors.backgroundBlack};
  color: ${colors.white};
  width: 30%;
  border-radius: 5px;
  @media ${device.large} {
    font-size: 0.8rem;
  }
`
/**
 * displays a user's radar chart
 * @component
 * @param {Object[]} performance
 * @param {String} performance.kind
 * @param {Number} performance.value
 * @returns {JSX} radar chart
 */
const Performance = ({ performance }) => {
  return !performance ? (
    <p>is Loading</p>
  ) : (
    <PerformanceWrapper>
      <ResponsiveContainer width={'100%'} height={'100%'}>
        <RadarChart outerRadius={'60%'} data={performance}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" domain={[0, 250]} dy={5} tickLine={false} stroke="white" />
          <Radar name="Mike" dataKey="value" fill={colors.primary} fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </PerformanceWrapper>
  )
}

Performance.propTypes = {
  /**
   * Array performance user
   */
  performance: propTypes.array,
}

export default Performance

import propTypes from 'prop-types'
import styled from 'styled-components'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

import { colors } from '@/asset/style/variables'

const BarChartWrapper = styled.div`
  font-size: 14px;
  background: ${colors.backgroundGrey};
  padding: 20px;
`
const StyledToolTip = styled.ul`
  list-style: none;
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  font-size: 8px;
  border: none;
`
const StyledLegend = styled.span`
  color: ${colors.legendGrey};
`

const StyledToolTipElement = styled.li`
  padding: 15px 10px;
`

const Title = styled.h3`
  font-size: 15px;
  padding: 1rem;
`

/**
 * displays a user's bar chart
 * @component
 * @param {Object[]} activity
 * @param {Number} activity.day
 * @param {Number} activity.kilogram
 * @param {Number} activity.calories
 * @returns {JSX} bar chart
 */
const Activity = ({ activity }) => {
  /**
   * Render Custom tooltip component
   * @memberof Activity
   * @function CustomTooltip
   * @param {boolean} active > hover ? y/n
   * @param {array} payload > data to display
   * @returns {JSX} custom tooltip
   */
  const CustomTooltip = ({ active, payload }) => {
    return active && payload ? (
      <StyledToolTip>
        <StyledToolTipElement>{`${payload[1].value} kg`}</StyledToolTipElement>
        <StyledToolTipElement>{`${payload[0].value} Kcal`}</StyledToolTipElement>
      </StyledToolTip>
    ) : null
  }

  /**
   * Render styled legend
   * @param {String} value legend value
   * @memberof Activity
   * @returns {JSX}
   */
  const renderColorfulLegendText = (value) => {
    return <StyledLegend>{value}</StyledLegend>
  }

  return !activity ? (
    <p>is Loading</p>
  ) : (
    <BarChartWrapper>
      <Title>Activité quotidienne</Title>
      <ResponsiveContainer height={320} width={'100%'}>
        <BarChart data={activity} barGap={10}>
          <CartesianGrid strokeDasharray="3 5" vertical={false} />
          <XAxis dataKey="day" stroke="#9B9EAC" tickLine={false} dy={10} />
          <YAxis
            yAxisId="poids"
            dataKey="kilogram"
            orientation="right"
            domain={['dataMin-2', 'dataMax + 1']}
            interval={1}
            axisLine={false}
            tickLine={false}
            dx={10}
            dy={+1}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            domain={['dataMin -20', 'dataMax + 20']}
            orientation="left"
            axisLine={false}
            tickLine={false}
            display="none"
            dx={-10}
            dy={+1}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType={'circle'}
            iconSize={'.5rem'}
            align={'right'}
            verticalAlign={'top'}
            height={50}
            wrapperStyle={{
              padding: '0 15px',
            }}
            formatter={renderColorfulLegendText}
          />
          <Bar
            yAxisId="calories"
            name="Calories brûlées (kCal)"
            dataKey="calories"
            fill={colors.blackGrey}
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            yAxisId="poids"
            name="Poids (kg)"
            dataKey="kilogram"
            fill={colors.red}
            barSize={7}
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </BarChartWrapper>
  )
}

Activity.propTypes = {
  /**
   * Array activity user
   */
  activity: propTypes.array,
}

export default Activity

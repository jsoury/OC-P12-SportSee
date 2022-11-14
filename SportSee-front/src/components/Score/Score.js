import propTypes from 'prop-types'
import styled from 'styled-components'
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts'
import { colors } from '../../asset/style/variables'

const ScoreWrapper = styled.div`
  position: relative;
  background: ${colors.backgroundGrey};
  width: 30%;
  border-radius: 5px;
`

const StyledLAbel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 26px;
  font-weight: 700;
  & .legend {
    font-size: 16px;
    font-weight: 500;
    color: ${colors.legendGrey};
  }
`

/**
 * displays a user's radial bar chart
 * @component
 * @param {Object[]} userScore
 * @param {Number} userScore.score
 * @returns {JSX} radial bar chart
 */
const Score = ({ userScore }) => {
  /**
   * Render Custom label component
   * @memberof Score
   * @function CustomLabel
   * @returns {JSX} custom label
   */
  const CustomLabel = () => {
    return (
      <>
        <StyledLAbel>
          {userScore[0].score}%
          <div className="legend">
            de votre <br />
            objectif
          </div>
        </StyledLAbel>
      </>
    )
  }

  return (
    <ScoreWrapper>
      <h3>Score</h3>
      <CustomLabel />
      <ResponsiveContainer width={'100%'} height={263}>
        <RadialBarChart
          data={userScore}
          innerRadius={90}
          outerRadius={90}
          barSize={10}
          transform="rotate(-90 0 0)"
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius={5} fill={colors.primary} />
        </RadialBarChart>
      </ResponsiveContainer>
    </ScoreWrapper>
  )
}

Score.propTypes = {
  /**
   * Array score user
   */
  score: propTypes.array,
}

export default Score

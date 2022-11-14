import propTypes from 'prop-types'
import styled from 'styled-components'
import { colors } from '@/asset/style/variables'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  background: ${colors.backgroundGrey};
  font-size: 20px;
  font-weight: 700;
  padding: 35px 25px;
  line-height: 24px;
  & img {
    margin-right: 20px;
  }
`
const SmallText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.legendGrey};
`

/**
 * Component for showing card key's user'.
 *
 * @component
 */
const Card = ({ icon, value, unit, smallText }) => {
  return (
    <CardWrapper>
      <img src={require(`@/asset/images/${icon}.svg`)} alt={`icône ${smallText}`} />
      <div>
        {`${value}${unit}`}
        <br />
        <SmallText>{smallText}</SmallText>
      </div>
    </CardWrapper>
  )
}

Card.propTypes = {
  /**
   * Name of icon
   */
  icon: propTypes.string.isRequired,
  /**
   * Value of key
   */
  value: propTypes.number.isRequired,
  /**
   * Unit of key
   */
  unit: propTypes.string,
  /**
   * Full name of key
   */
  smallText: propTypes.string,
}

export default Card

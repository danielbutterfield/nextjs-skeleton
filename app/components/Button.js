import PropTypes from 'prop-types'

const Button = ({ children, onClickHandler }) => {
  return (
    <button className="btn btn--primary" onClick={onClickHandler}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClickHandler: PropTypes.func.isRequired,
}

export default Button

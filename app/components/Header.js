import PropTypes from 'prop-types'

const Header = ({ children }) => <h1>{children}</h1>

Header.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Header

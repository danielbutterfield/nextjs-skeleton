import PropTypes from 'prop-types'

const ContainerFlex = ({ children }) => (
  <div className="container container--flex">{children}</div>
)

ContainerFlex.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ContainerFlex

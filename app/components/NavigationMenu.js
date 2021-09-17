import PropTypes from 'prop-types'

const NavigationMenu = ({ links }) => (
  <ul className="navigation">
    {links.map((link, index) => (
      <li key={index}>
        <a href={link.url}>{link.text}</a>
      </li>
    ))}
  </ul>
)

NavigationMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default NavigationMenu

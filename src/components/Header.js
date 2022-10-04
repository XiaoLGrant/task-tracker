import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom' //hook that can be used to hide components depending by looking at the route user is currently on
import Button from './Button'

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className="header">
        {/* <h1 style={{ color: 'gold', backgroundColor: 'grey'}}>{title}</h1> syntax for inline styling*/}
        {/* <h1 style={headingStyle}>{title}</h1>  for adding styling via a variable*/}
        <h1>{title}</h1>
        {location.pathname === '/' && <Button color={showAdd ? 'maroon' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />}
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

//CSS in JS
// const headingStyle = {
//     color: 'gold', 
//     backgroundColor: 'grey'
// }

export default Header
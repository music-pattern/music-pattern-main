import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { selectCurrentUser } from 'with-react-redux-login'

import Navigations from './Navigations'

const mapStateToProps = state =>  {
  return {
    currentUser: selectCurrentUser(state)
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(Navigations)

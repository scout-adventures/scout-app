import React from 'react'
import {connect} from 'react-redux'

import {categoriesSelector} from '../../store/categories/selectors'
import {getCategoriesThunk} from '../../store/categories/thunks'
import {
  currentUserSelector,
  isUserLoggedInSelector,
  logOut
} from '../../store/user'
import Navbar from '../../components/layout/Navbar'

//
// --- Connected Component ---
const mapStateToProps = state => ({
  categories: categoriesSelector(state),
  currentUser: currentUserSelector(state),
  isUserLoggedIn: isUserLoggedInSelector(state)
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesThunk()),
  logOut: () => dispatch(logOut())
})

//
// --- Connected Nav Bar Component ---
class ConnectedNavbar extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  handleLogOut = () => {
    console.log(this.props.logout)
    this.props.logOut()
  }

  render() {
    const {categories, currentUser, isUserLoggedIn} = this.props
    return (
      <Navbar
        currentUser={currentUser}
        isUserLoggedIn={isUserLoggedIn}
        links={categories}
        onLogOut={this.handleLogOut}
      />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedNavbar)

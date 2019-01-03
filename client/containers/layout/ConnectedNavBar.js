import React from 'react'
import {connect} from 'react-redux'

import {categoriesSelector} from '../../store/categories/selectors'
import {getCategoriesThunk} from '../../store/categories/thunks'
import Navbar from '../../components/layout/Navbar'

//
// --- Connected Component ---
const mapStateToProps = state => ({
  categories: categoriesSelector(state)
})

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(getCategoriesThunk())
})

//
// --- Connected Nav Bar Component ---
class ConnectedNavbar extends React.Component {
  componentDidMount() {
    this.props.getCategories()
  }

  render() {
    const {categories} = this.props
    return <Navbar links={categories} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedNavbar)

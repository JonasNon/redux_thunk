// fill out this container
import Import from '../components/Import'
import { connect } from 'react-redux'
import { fetchMakes, removeMake } from '../redux/actions'


const mapStateToProps = (state) => {
  return {
      user: state.user,
      cars: state.cars,
      makes: state.makes
  }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
  return {
    fetchMakes: () => dispatch(fetchMakes()),
    removeMake: (idx) => dispatch(removeMake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Import)

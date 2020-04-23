//Contenedor

import { connect } from 'react-redux'
import Prueba from '../components/Prueba'

const mapStateToProps = state =>({
    prueba_titulo: state.shopify.prueba_titulo,    
})

const mapDispatchToProps = dispatch =>({
    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Prueba)
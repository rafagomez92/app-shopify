//Contenedor

import { connect } from 'react-redux'
import Nieto from '../components/Nieto'
import { shopifystoreOperations } from '../store/shopifystore'

const mapStateToProps = state =>({
    prueba_nieto: state.shopify.prueba_nieto,
})

const mapDispatchToProps = dispatch =>({
    updatePruebaTitulo: titulo => dispatch(shopifystoreOperations.updatePruebaTitulo(titulo)),
    updatePruebaNieto: titulo => dispatch(shopifystoreOperations.updatePruebaNieto(titulo)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Nieto)
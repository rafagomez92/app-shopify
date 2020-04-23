//LLamando al componente solito
//import Nieto from './Nieto'

//Lamando al componente pero conectado
import Nieto from '../containers/Nieto'

const Hijo = () => {


    return (

    <div>
        <br />
        <br />
        <hr />
        <h4>Soy un hijo de mi madre</h4>

        <br />
        <br />
        <Nieto />
    </div>
    )
}


export default Hijo
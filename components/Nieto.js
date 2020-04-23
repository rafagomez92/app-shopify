import { render } from "react-dom"
import { Button } from '@shopify/polaris'

const Nieto = ({ 
    prueba_nieto,
    updatePruebaTitulo,
    updatePruebaNieto
 })=>{

    const handleActualiza = ()=>{
        updatePruebaTitulo('Hola soy Angel')
        updatePruebaNieto('Hola soy el nieto de Angel')
    }

    return (
        <div>
            
            <h5>{prueba_nieto}</h5>
            <Button onClick={handleActualiza}>Actualiza</Button>

        </div>
    )
}

export default Nieto
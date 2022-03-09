import {Contenedor} from '../../recursos/contenedor/Contenedor'
import {CardStock} from '../../recursos/cardStock'
import './ItemList.css'

//una vez en el itemList, recibimos el array de productos
//en un contenedor, lo mapeamos y le mandamos todo a cardStock usando el.id como key y luego con un spreed
export const ItemList = ({productos}) => {
    return (
        <Contenedor>
            
            <div className='row'>
                {productos.map((el) => <CardStock key={el.id}{...el}/>)}
            </div>
        </Contenedor>
    )
}

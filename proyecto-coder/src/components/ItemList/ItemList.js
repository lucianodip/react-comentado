import {Contenedor} from '../../recursos/contenedor/Contenedor'
import {CardStock} from '../../recursos/cardStock'
import './ItemList.css'


export const ItemList = ({productos}) => {
    return (
        <Contenedor>
            <h2>Productos</h2>
            <hr/>
            <div className='row'>
                {productos.map((el) => <CardStock key={el.id}{...el}/>)}
            </div>
        </Contenedor>
    )
}

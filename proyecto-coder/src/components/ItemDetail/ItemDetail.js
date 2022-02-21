import './ItemDetail.css'
import {ContadorUnidades} from '../contadorUnidades/contadorUnidades'
import { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'




export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    const [cantidad, setCantidad] = useState(0);

    
    //consumir contexto que viene de app ----------------------------------------------------------------

    const {cart, agregarAlCarrito, isInCart} =  useContext(CartContext)

    //------------------------------------------------------------------

    
    const handleAgregar = ()    => {   
        if (cantidad===0) return 
        
        if(!isInCart(id)){

            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            agregarAlCarrito(addItem);
        }
    }
    
    //------------------------------------------------------------------

    return (
        <div className="contenedor-ditail">
            
            <div className="foto">
            <img src={img} alt={nombre}/>

               
            </div>
            
            <div className="detalles">
            <br/>
            <br/>
            <h3>{nombre}</h3>
            <p>{desc}</p>
            <br/>
            <h5>Precio: ${precio}</h5>
            <br/>

            {  
                isInCart(id)
                ?   <Link to='/cart' className="btn btn-secondary my-3">    
                        Finalizar comprar 
                    </Link>    
                :
                <>
                    <ContadorUnidades 
                        max={stock} 
                        min={1} 
                        contador={cantidad} 
                        setContador={setCantidad}
                        handleAgregar={handleAgregar}
                    />
                    
                </>
            }
            
            </div>
            

           
           
        </div>
    )
}
import './ItemDetail.css'
import {ContadorUnidades} from '../contadorUnidades/contadorUnidades'
import { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'




export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {


    //consumir contexto que viene de app ----------------------------------------------------------------

    const {cart, agregarAlCarrito, isInCart} =  useContext(CartContext)

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
                        id={id}
                        nombre={nombre}
                        precio={precio}
                        stock={stock}
                        
                    />
                    
                </>
            }
            
            </div>
            

           
           
        </div>
    )
}
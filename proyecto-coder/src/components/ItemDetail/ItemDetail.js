import './ItemDetail.css'
import {ContadorUnidades} from '../contadorUnidades/contadorUnidades'
import { useState, useContext } from 'react'
import {CartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'



//una vez en el ItemDetail desestructuramos todo el array item que extraimos de la base 
//a todo esto en paralelo estabamos manejando un contexto global desde app.js
export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {



    //consumir contexto que viene de app ----------------------------------------------------------------
    //desestructuramos las funciones que codificamos en el contexto
    const {agregarAlCarrito, isInCart} =  useContext(CartContext)
    


    //------------------------------------------------------------------
    //declaramos la funcion onAdd que por parametros recibe la cantidad 
    //que en su interior crea una constante "itemAdd" y le mete dentro los datos que recibimos inicialmente
    //luego llama a la funcion agregarAlCarrito y le manda esa const
    const onAdd = (cantidad) => {
        
        const itemAdd = {
            id, nombre, img, desc, precio, stock, cantidad
        }
        agregarAlCarrito(itemAdd)
    }


    //en el return primeramente usamos los datos que trajimos por paramentros para armar la card
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
                //primero evaluamos isInCart que trajimos del contexto
                //basicamente evalua si el producto se encuentra ya en carro
                //si ya se encuentra en el carro? finalizar compra y va a l route del app.js y de ahi al carrito 
                //sino sigue apareciendo los botones contadores a traves el componente ContadorUnidades
                isInCart(id)
                ?   <Link to='/cart' className="btn btn-secondary my-3">    
                        Finalizar comprar 
                    </Link>    
                :
                <>
                    <ContadorUnidades 
                        max={stock} 
                        min={1} 
                        onAdd={onAdd}
                    />
                </>
                //una vez que mandamos la onAdd y la misma es ejecutada desde el contadorUnidades.js
                //vuelve a renderizarse el itemDetail con la particularidad que esta vez el isInCart esta vez
                //sera positivo y aparecera el link finalizar compra el cual tienen como to='/cart' osea que va
                //al app.js de nuevo y de ahi al carrito
            }
            
            </div>

        </div>
    )
}
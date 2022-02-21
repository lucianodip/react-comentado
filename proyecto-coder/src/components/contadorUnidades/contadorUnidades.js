import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap'
import {CartContext} from '../../context/CartContext'


export const ContadorUnidades = ({max,min=0,id, nombre, precio, stock}) => {
    
    const [cantidad, setCantidad] = useState(0);


    const {cart, agregarAlCarrito, isInCart} =  useContext(CartContext)

    const aumentar = (numero) => {
        //si el contador es menor que el max && (simplificar IF)
        cantidad < max && setCantidad(cantidad+numero);
    }
    
    const disminuir = (numero) => {
        cantidad > min && setCantidad(cantidad-numero);
        
    }

    const handleAgregar = ()    => {   
        if (cantidad===0) return 
        
        if(!isInCart(id)){

            const addItem = {
                id, nombre, precio, stock, cantidad
            }
            agregarAlCarrito(addItem);
        }
    }
    
    
    return (
        <>

        <h3>Unidades:{cantidad}</h3>
        
        <Button 
            className="btn btn-secondary"
            onClick={()=> disminuir(1)}
        >-</Button>
        &nbsp;
        <Button 
            className="btn btn-secondary"
            onClick={()=> aumentar(1)}
        >+</Button>
        
        <br/>
            <Button 
                className=" btn btn-secondary my-3"
                onClick={handleAgregar}
            
            >Agregar al carrito

            </Button>

        </>
    )
}


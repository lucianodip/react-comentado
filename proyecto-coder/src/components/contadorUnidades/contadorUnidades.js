import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


export const ContadorUnidades = ({max,min=0,contador,setContador}) => {
    
    

    const aumentar = (numero) => {
        //si el contador es menor que el max && (simplificar IF)
        contador < max && setContador(contador+numero);
    }
    
    const disminuir = (numero) => {
        contador > min && setContador(contador-numero);
        
    }
    
    return (
        <>

        <h3>Unidades:{contador}</h3>
        <Button 
            className="btn btn-secondary"
            onClick={()=> aumentar(1)}
        >+</Button>
        &nbsp;
        <Button 
            className="btn btn-secondary"
            onClick={()=> disminuir(1)}
        >-</Button>

        </>
    )
}


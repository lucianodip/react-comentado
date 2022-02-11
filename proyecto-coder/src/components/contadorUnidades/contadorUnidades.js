import React, { useState } from 'react'
import { Button } from 'react-bootstrap'


export const ContadorUnidades = () => {
    
    const [contador, setContador]= useState(1);

    const aumentar = (numero) => {
        setContador(contador+numero);
    }
    
    const disminuir = (numero) => {
        if(contador>=2){
        setContador(contador-numero);
        }
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


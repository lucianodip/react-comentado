import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

//en contador unidades basicamente renderizamos los botones que suman la cantidad 
//primeramente inicializamos el state cantidad 
export const ContadorUnidades = ({max,min=0,onAdd}) => {
    
    const [cantidad, setCantidad] = useState(min);

    //funcion que aumenta el contador
    const aumentar = (numero) => {
        //si el contador es menor que el max && (simplificar IF)
        cantidad < max && setCantidad(cantidad+numero);
    }

    //funcion que disminuye el contador
    const disminuir = (numero) => {
        cantidad > min && setCantidad(cantidad-numero);
        
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
                    onClick={() =>onAdd(cantidad)}
                >Agregar al carrito
            </Button>

        </>
    )
}

//En el boton "agregar al carrito" llamamos a la funcion onAdd declarada en el itemDetail
//a la onAdd la mandamos por props. una vez que se ejecuta vuelve al itemDeatial 
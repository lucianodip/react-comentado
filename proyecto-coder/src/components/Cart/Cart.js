import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


//y de esta manera llegamos al carrito, que primero lo que hacemos es  
//importar las funciones del context
export const Cart = () => {
    
    const{cart,totalCart,vaciarCart, eliminarItem }=useContext(CartContext)
    
    return (       
        <>
            {
                //evaluamos si el carrito esta vacio mediante la funcion cart del context
                cart.length === 0 
                ?
                //si, si cart es igual a 0 no renderiza el boton volver que nos llevara al menu
                <div className="container my-4">
                    <h4>Tu carrito esta vacio</h4>
                    <Link to="/" className="btn btn-primary">Volver</Link>

                </div>
                
                :
                //sino, el carrito tiene algo
                //dentro del cart encontramos el item. lo mapeamos y usamos los datos para armar la fila que tendra el producto
                //luego le pondremos una opcion para eliminar el producto que llamara a la funcion eliminarItem echa en el contex
                <div className="container my-4">
                    <h2>Finaliza tu compra</h2>
                    <hr/>
                        
                        {
                            cart.map((item)=>(
                            <div key={item.id}>
                            <h4>{item.nombre}</h4>
                            <p>Cantidad: {item.cantidad}</p>
                            <p>Precio:${item.cantidad*item.precio}</p>
                            <p><Button className="btn btn-danger" onClick={() => eliminarItem(item.id)}>Eliminar</Button></p>

                                </div>
                            )

                            )
                        }

                            <hr/>
                            <h2>Total: ${totalCart()}</h2>

                            <div className="my-2">
                                <button className="btn btn-secondary" onClick={vaciarCart}>Vaciar carrito</button>
                                <Button className="btn btn-success mx-2">Terminar mi compra</Button>
                            </div>
                                
                </div>
            }
        </>

                    
    )
}

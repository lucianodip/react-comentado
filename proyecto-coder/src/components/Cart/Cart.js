import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const Cart = () => {
    
    const{cart,totalCart,vaciarCart}=useContext(CartContext)
    
    return (
        <div className="container my-4">
            <h2>Finaliza tu compra</h2>
            <hr/>

            {
                cart.map((item)=>(
                    <div key={item.id}>
                        <h4>{item.nombre}</h4>
                        <p>Cantidad: {item.cantidad}</p>
                        <p>Precio:${item.cantidad*item.precio}</p>


                    </div>
                )

                )
            }

            <hr/>
            <h2>Total: ${totalCart()}</h2>

            <div className="my-2">
                <button className="btn btn-secondary" onClick={vaciarCart}>Vaciar carrito</button>

            </div>
            
        </div>
    )
}

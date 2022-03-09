import { Children, createContext, useState } from "react";
 
//creamos el contexto con el cual distribuiremos todas las funciones que creemos 
export const CartContext = createContext();

//Envolvemos todo el app.js en un provider y aca lo creamos  
export const CartProvider = ({children}) => {

    //Creamos el carrito
    const [cart, setCart] = useState([]);

    //agrega el elemento al carrito haciendo un spreed en el setcart
     const agregarAlCarrito = (item) => {
         setCart([...cart, item])
    }

    //recorre el array card comparando los id de los objetos con el id que viene por parametro
    //el metodo some retorna un booleano
    const isInCart = (id) => {
        return cart.some ((prod) => prod.id === id )
    } 

    //va contando cada vez que el carrito se actualiza 
    const cantidadCart = () => {
        return cart.reduce((acc,prod)=>acc+prod.cantidad,0);
    } 

    //va contando cantidad y lo multiplica por precio 
    const totalCart = () => {
        return cart.reduce((acc,prod)=>acc+prod.cantidad*prod.precio,0);
    } 
    
    //vacia el carrito
    const vaciarCart = () => {
        setCart([])
    } 

    const eliminarItem = (id) => {
        setCart( cart.filter((prod) => prod.id !== id) )
    }

   
    
    //desde context creado al principio usamos la funcion provider para
    //lograr distribuir todas las funciones
    return (
        <CartContext.Provider value={
            {
                cart,
                agregarAlCarrito,
                isInCart,
                cantidadCart,
                totalCart,
                vaciarCart,
                eliminarItem
            }
        }>
            {children}
        </CartContext.Provider>
    )
}

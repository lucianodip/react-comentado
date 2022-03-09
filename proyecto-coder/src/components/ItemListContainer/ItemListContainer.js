import { useState, useEffect } from 'react'
import {pedirDatos} from "../../helpers/pedirDatos"
import {ItemList} from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../firebase/config'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    const { catId } = useParams()

    console.log(catId)

    useEffect( () => {
        setLoading(true)

        //1.- armar referencia 
        const productosRef = collection(db, 'productos')
        const q = catId?  query(productosRef, where("categoria","==",catId)) :productosRef

        //2.- pedir esa ref
        //lo que le ordenamos mapear es el id y despues con un spreed tiramos todo
        //basicamente lo que queremos es que esteen modo response
        //mientras tanto a todo esto lo que el usuario esta viendo es el loading 
        //luego con el finally (ya todo esta listo para verse) ponemos en false el loading y todo se ve
        getDocs(q)
            .then((resp)=>{
                setProductos (resp.docs.map((doc) => {
                    return{
                        id:doc.id,
                        ...doc.data()
                    }
                }))
            })
            .finally(() => {
                setLoading(false)
            }) 

    }, [catId])

    //una vez todo preparado en el return pondremos un condicional que nos dice que si el loading  es positivo 
    //que muestre loading, sino mostraremos el itemList al cual le mandamos el array de productos que pedimos a la base
    return (
        <>
            {
                loading 
                    ? <h2>Loading...</h2> 
                    : <ItemList productos={productos}/>
            } 
        </>
    )
    
}

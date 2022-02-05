import React, { useState, useEffect } from 'react'
import {pedirDatos} from "../../helpers/pedirDatos"
import {ItemList} from '../ItemList/ItemList'
import './ItemListContainer.css'

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect( () => {
        setLoading(true)

    pedirDatos()
            .then((res) => {
            setProductos(res)
            })
            .catch((err) => {
                console.log(err)
            })
   .finally(() => {
               setLoading(false)
            })

    }, [])
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

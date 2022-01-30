import React from 'react'
import './ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <section className="Item-List-Container">
            <h2>{greeting}</h2>
            <hr/>
        </section>
        
    )
}

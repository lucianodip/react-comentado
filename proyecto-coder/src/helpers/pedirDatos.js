import {stock} from "../data/stock.js"

import React from 'react'

export const pedirDatos = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            resolve(stock)
        },3000)
    })
}

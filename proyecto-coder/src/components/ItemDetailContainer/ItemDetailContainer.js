import { useEffect, useState } from 'react';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { db } from '../firebase/config';
import { doc, getDoc } from '@firebase/firestore';


//una vez en el itemDetailContainer
//en lineas generales es parecido a itemlistcontainer
//tenemos inicializado un loading y un item en los states 
export const ItemDetailContainer = () => {

    const [loading, setLoading] = useState(false)
    const [item, setItem] = useState(null)


    //el itemId lo traemos por useParams desde el app.js que a la vez lo trae del cardStock
    const { itemId } = useParams()

    //console.log(itemId)
    //console.log(item)

    //en uEffect empezamos primeramente poniendo el loading en true para que aparezca el "cargando"
    useEffect(() => {
        setLoading(true)

        //hacemos la referencia de lo que vamos a pedir a la base
        //de toda la base (db) queremos la colleccion productos, donde aparesca el itemID
        const docRef = doc(db, "productos" ,itemId)

        //una vez echa la referencia hacemos el pedido 
        //en el setItem indicamos que para id le asigne el id y luego spreteamos la demas data 
        //de esta manera estamos metiendo en el item el array con todos los datos del producto elegido
        //luego en el finally ponemos en false el loading para que aparezca el producto  
        getDoc(docRef)  
            .then((doc)=>{
                setItem({id:doc.id, ...doc.data()})
            })
            .finally(()=>{
                setLoading(false)
            })

    }, [])

    //en el return.. lo mismo evaluamos siempre el loading ya que cuando este en falso 
    //aparecera el producto porque renderizamos el itemDetail enviandole el item que 
    //extraimos de la base de datos 
    return (
        <div className='container my-5'>
            {
                loading 
                ? <h2>Cargando...</h2>
                : <ItemDetail {...item}/>
            }
        </div>
)
};

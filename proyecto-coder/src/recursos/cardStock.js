import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'

//una vez los datos en el cardStock los recibimos ya desestructurados
//usamos los datos a placer en la cart, teniendo en cuenta que estas cartas
//se van a renderizar de manera dinamica segun cuantos objetos tenga el array
export const CardStock = ( {id, nombre, precio, img, desc, oferta} ) => {

    return (
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                {/* <Card.Text>
                    {desc}
                </Card.Text> */}
                { oferta &&
                    <Card.Title>¡15 OFF!</Card.Title>
                }

                <Card.Text>
                    Precio: ${oferta? precio*0.85:precio}
                </Card.Text>
                
            </Card.Body>
            
            <Link to={`/detail/${id}`}>
                    <Button className="btn btn-secondary my-2 btn-block" >Ver más</Button>
                </Link>
        </Card>
    )
}
//El el link ponemos que si se presiona en el boton "ver mas" nos dirigiremos a /detail/${id} 
//que ira cambiando obviamente si el id es distinto, el link nos devuelve a la app.js y con el 
//route nos dirige a itemDetailContainer
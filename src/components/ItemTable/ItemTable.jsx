import React from 'react'

const ItemTable = ({id, name, description, price, stock}) => {
    return (
        <tr >
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>$ {price}</td>
            <td>{stock}</td>
            <td style={{display:"flex", justifyContent:"space-around"}}>
                <i style={{cursor:"pointer"}} className="bi bi-trash"></i>
                <i style={{cursor:"pointer"}} className="bi bi-pencil-square"></i>
            </td>
        </tr>
    )
}

export default ItemTable
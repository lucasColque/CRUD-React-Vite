import React, { useState } from 'react'
import Modal from '../Modal/Modal';

const ItemTable = ({ id, name, description, price, stock, image, editItem }) => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <tr >
                <td>{id}</td>
                <td>{name}</td>
                <td>{description}</td>
                <td>$ {price}</td>
                <td>{stock}</td>
                <td style={{ display: "flex", justifyContent: "space-around" }}>
                    <i style={{ cursor: "pointer" }} className="bi bi-trash"></i>
                    <i style={{ cursor: "pointer" }} className="bi bi-pencil-square" onClick={() => setModalShow(true)}></i>
                </td>
            </tr>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                id={id}
                name={name}
                description={description}
                price={price}
                stock={stock}
                image={image}
                onSubmit={editItem}
            />
        </>

    )
}

export default ItemTable
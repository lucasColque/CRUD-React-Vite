import React from 'react'
import TableBs from 'react-bootstrap/Table';
import ItemTable from '../ItemTable/ItemTable';
import "./table.css"
const Table = ({ items, editItem }) => {

    return (
        // items.map((item) => <h2 key={item.id}>{item.name}</h2>)
        <TableBs striped bordered hover variant="dark" style={{maxWidth:"1000px", margin:"auto"}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th style={{textAlign:"center"}}>Herramientas</th>
                </tr>
            </thead>
            <tbody>
                {
                    items.map(item => <ItemTable key={item.id} {...item} 
                    // editItem={editItem}
                    />)
                }

            </tbody>
        </TableBs>

    )
}

export default Table
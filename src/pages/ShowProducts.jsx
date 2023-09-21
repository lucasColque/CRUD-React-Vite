import React, { useEffect, useState } from 'react'
import {axiosInstance} from '../services/axios.config';
import Table from '../components/Table/Table';


const ShowProducts = () => {
    const [items,setItems] = useState([]);

    useEffect(()=>{
        axiosInstance.get('/')
        .then(response =>{
            if(response.status == 200){
                setItems(response.data)
            }else {
                throw new Error(`[${response.status} error en la solicitud]`)
            }
        })
        .catch(err => console.error(err))
    },[])

    const editItem = (id, data) =>{
        console.log('Editando producto');
        axiosInstance.put(`/${id}`,data)
        .then(response => {
            if(response.status == 200){
                axiosInstance.get('/')
                .then(response => {
                    if(response.status == 200){
                        setItems(response.data)
                    }else{
                        throw new Error(`[ERROR ${response.status}] Error en la solicitud`)
                    }
                })
                .catch(err => console.log(err))
            }else{
                throw new Error(`[ERROR ${response.status}] Error en la solicitud`)
            }
        })
        .catch(err => console.log(err))
    }


    return (
        <div className='containerShowProducts'>
        <h1 style={{color:"#fff", textAlign:"center"}}>Productos</h1>
        <div className='tabla'>
        {
            items.length > 0? 
                <Table items={items} editItem={editItem}/>
            :
            <p style={{textAlign:"center", fontSize:"24px", color:"#fff"}}>No hay productos en el sistema</p>
        }
        </div>
        </div>

    )
}

export default ShowProducts
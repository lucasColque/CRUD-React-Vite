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



    return (
        <div className='containerShowProducts'>
        <h1 style={{color:"#fff", textAlign:"center"}}>Productos</h1>
        <div className='tabla'>
        {
            items.length > 0? 
                <Table items={items}/>
            :
            <p style={{textAlign:"center", fontSize:"24px", color:"#fff"}}>No hay productos en el sistema</p>
        }
        </div>
        </div>

    )
}

export default ShowProducts
import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import ModalBs from 'react-bootstrap/Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormBs from 'react-bootstrap/Form';
import * as Yup from 'yup';
import { ItemsContext, UPLOAD_ITEMS } from '../../context/itemsContext';
import { axiosInstance } from '../../services/axios.config';

const Modal = (props) => {
    const { items, dispatch } = useContext(ItemsContext);



    const { name, description, image, stock, price, onSubmit, id } = props;

    const initialValues = {
        name: name || '',
        description: description || '',
        image: image || '',
        stock: stock || '',
        price: price || ''
    };
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(5, 'Nombre demasiado corto')
            .max(20, 'Nombre demasiado largo')
            .required('El campo es obligatorio'),
        description: Yup.string()
            .min(10, 'Descripcion demasiado corta')
            .max(150, 'Descripcion demasiado larga')
            .required('El campo es obligatorio'),
        image: Yup.string()
            .required('El campo es obligatorio'),
        stock: Yup.number()
            .required('El campo es obligatorio'),
        price: Yup.number()
            .required('El campo es obligatorio')
    })
    return (
        <ModalBs
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <ModalBs.Header closeButton className='bg-dark'>
                <ModalBs.Title id="contained-modal-title-vcenter" className='text-light'>
                    Edición del producto
                </ModalBs.Title>
            </ModalBs.Header>
            <ModalBs.Body className='bg-dark'>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={async (values, { setSubmitting, resetForm }) => {
                        axiosInstance.put(`/${id}`, values)
                            .then(response => {
                                if (response.status == 200) {

                                    const itemsUpload = items.map(item => {
                                        if (item.id == response.data.id) {
                                            return response.data
                                        }
                                        return item
                                    })
                                    dispatch({ type: UPLOAD_ITEMS, payload: itemsUpload })
                                    setSubmitting(false);
                                } else throw new Error(`[ERROR ${response.status}] Error en la solicitud`)
                            })
                            .catch(err => console.log(err))
                        //await onSubmit(id,values);
                        
                        props.onHide();
                    }}
                >
                    {
                        ({ errors, isSubmitting, touched, handleChange }) => (
                            <FormBs as={Form}>
                                <FormBs.Group className="mb-3 form-floating formField">
                                    <FormBs.Control as={Field} id='name' type='text' placeholder='' name='name' className='input' onChange={handleChange} />
                                    <FormBs.Label htmlFor="name">Nombre del producto</FormBs.Label>
                                    {
                                        errors.name && touched.name && (<ErrorMessage name='name' component='div' className='error'></ErrorMessage>)
                                    }
                                </FormBs.Group>
                                <FormBs.Group className="mb-3 form-floating formField">

                                    <FormBs.Control as={Field} id='description' type='text' placeholder='' name='description' className='input' onChange={handleChange} />
                                    <FormBs.Label htmlFor="description">Descripcion del producto</FormBs.Label>
                                    {
                                        errors.description && touched.description && (<ErrorMessage name='description' component='div' className='error'></ErrorMessage>)
                                    }
                                </FormBs.Group>
                                <FormBs.Group className="mb-3 form-floating formField">
                                    <FormBs.Control as={Field} id='image' type='text' placeholder='' name='image' className='input' onChange={handleChange} />
                                    <FormBs.Label htmlFor="image">Imagen del producto</FormBs.Label>
                                    {
                                        errors.image && touched.image && (<ErrorMessage name='image' component='div' className='error'></ErrorMessage>)
                                    }
                                </FormBs.Group>
                                <FormBs.Group className="mb-3 form-floating formField">
                                    <FormBs.Control as={Field} id='stock' type='number' placeholder='' name='stock' className='input' onChange={handleChange} />
                                    <FormBs.Label htmlFor="stock">Stock del producto</FormBs.Label>
                                    {
                                        errors.stock && touched.stock && (<ErrorMessage name='stock' component='div' className='error'></ErrorMessage>)
                                    }
                                </FormBs.Group>
                                <FormBs.Group className="mb-3 form-floating formField">
                                    <FormBs.Control as={Field} id='price' type='number' placeholder='' name='price' className='input' onChange={handleChange} />
                                    <FormBs.Label htmlFor="price">Precio del producto</FormBs.Label>
                                    {
                                        errors.price && touched.price && (<ErrorMessage name='price' component='div' className='error'></ErrorMessage>)
                                    }
                                </FormBs.Group>
                                <Button
                                    type='submit'
                                    className='btn btn-dark border-light '
                                >
                                    Cargar producto
                                </Button>
                                {
                                    isSubmitting && (<p className='text-light'>Enviando nuevo producto</p>)
                                }

                            </FormBs>
                        )
                    }
                </Formik>
            </ModalBs.Body>
            <ModalBs.Footer className='bg-dark'>
                <Button onClick={props.onHide} className='btn-secondary'>Close</Button>
            </ModalBs.Footer>
        </ModalBs>
    )
}

export default Modal
import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
export default function Pizza({ pizza }) {
    const [cantidad, setcantidad] = useState(1)
    const [tamaño, settamaño] = useState('chica')
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '70px' }} className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div onClick={handleShow}>
                <h1>{pizza.nombre}</h1>
                <img src={pizza.imagen} className="img-fluid" style={{ height: '200px', width: '200px' }}/>
            </div>

            <div className='flex-container'>

                <div className='w-100 m-1'>
                    <p>Tamaños</p>
                    <select className='form-control' value={tamaño} onChange={(e) => { settamaño(e.target.value) }}>
                        {pizza.tamaños.map(tamaño => {
                            return <option value={tamaño}>{tamaño}</option>
                        })}
                    </select>
                </div>

                <div className='w-100' m-1>
                    <p>Cantidad</p>
                    <select className="form-control" value={cantidad} onChange={(e) => { setcantidad(e.target.value) }}>
                        {[...Array(10).keys()].map((x, i) => {
                            return <option value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">
                <div className='m-1 w-100'>
                    <h1 className='mt-1'>Precio: {pizza.precios[0][tamaño] * cantidad} MX/-</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className='btn'>Añadir al carrito.</button>
                </div>

            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{pizza.nombre}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img src={pizza.imagen} className='img-fluid' style={{height:'400px'}}/>
                    <p>{pizza.descripcion}</p>
                </Modal.Body>

                <Modal.Footer>
                    <button className='btn' onClick={handleClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

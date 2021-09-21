import React, { useContext, useState, useEffect } from 'react';
import { Modal,Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../../index';
import {createDevices, fetchBrand, fetchTypes } from '../../http/deviceApi';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({show,onHide}) => {

    useEffect(()=>{
        fetchTypes().then(data=> device.setTypes(data))
        fetchBrand().then(data=> device.setBrand(data))       
    },[])

    const {device} = useContext(Context)

    // valueInput 
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [file,stFile] = useState(null)
    const [info,setInfo] = useState([])
    
    

    const addInfo = () => {        
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }
    const removeInfo = (number) => {        
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key,value,number) => {                
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = (e) => {
        stFile(e.target.files[0])
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectBrand.id)
        formData.append('typeId', device.selectType.id)
        formData.append('info', JSON.stringify(info))
        createDevices(formData).then(data => onHide())
    }


    return (
            <Modal
                show={show}
                onHide={onHide}
                size="lg"            
                centered
            >
                <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить устройство
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Dropdown className='mt-2 mb-2'>
                            <Dropdown.Toggle>{device.selectType.name || 'Выберите тип'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.types.map(type=>
                                    <Dropdown.Item 
                                        key={type.id}
                                        onClick={()=>device.setSelectType(type)}
                                    >
                                        {type.name}
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown className='mt-2 mb-2'>
                            <Dropdown.Toggle>{device.selectBrand.name || 'Выберите Бренд'}</Dropdown.Toggle>
                            <Dropdown.Menu>
                                {device.brand.map(brand=>
                                    <Dropdown.Item 
                                        onClick={()=>device.setSelectBrand(brand)} 
                                        key={brand.id}
                                    >
                                        {brand.name}                                    
                                    </Dropdown.Item>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <Form.Control
                            className='mt-3' 
                            placeholder='Введите название устройства'
                            value={name}
                            onChange={e=>setName(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3' 
                            placeholder='Введите стоимость устройства'
                            type='number'
                            value={price}
                            onChange={e=>setPrice(e.target.value)}
                        />
                        <Form.Control
                            className='mt-3'                            
                            type='file'
                            onChange={selectFile}
                        />
                        <hr/>
                        <Button
                            variant='outline-dark'
                            onClick={addInfo}
                        >
                            Добавить новое свойство
                        </Button>
                        {info.map(info=>
                                <Row className='mt-4' key={info.number}>
                                    <Col md={4}>
                                        <Form.Control 
                                            placeholder="Введите название свойства"
                                            value={info.title}
                                            onChange={e=> changeInfo('title', e.target.value, info.number)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control 
                                            placeholder='Введите описание свойства'
                                            value={info.description}
                                            onChange={e=> changeInfo('description', e.target.value, info.number)}
                                        />
                                    </Col>
                                    <Col md={4}>
                                        <Button variant='outline-danger' 
                                            onClick={()=>removeInfo(info.number)}
                                        >
                                            Удалить
                                        </Button>
                                    </Col>
                                </Row>
                        )}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                    <Button variant='outline-success' onClick={addDevice}>Добавить</Button>
                </Modal.Footer>
            </Modal>
    );
})

export default CreateDevice;
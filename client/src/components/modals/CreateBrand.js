import React,{useState} from 'react';
import { Modal,Button, Form } from 'react-bootstrap';
import { createBrands } from '../../http/deviceApi';

function CreateBrand({show,onHide}) {

    const [value,setValue] = useState('')
    

    const addBrand = () => {
            createBrands({name:value}).then(data=>{
                setValue('')
            })
            onHide()
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
                    Добавить новый бренд
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Control 
                            placeholder='Введите название типа'
                            value={value}
                            onChange={e=>setValue(e.target.value)}
                        />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
                    <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
                </Modal.Footer>
            </Modal>
    );
}

export default CreateBrand;
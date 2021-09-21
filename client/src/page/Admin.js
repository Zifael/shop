import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

function Admin(props) {

    const [typeVision,setTypeVision] = useState(false)
    const [brandVision,setBrandVision] = useState(false)    
    const [deviceVision,setDeviceVision] = useState(false)

    return (
        <Container className='d-flex flex-column'>
            <Button 
                variant={'outline-dark'} className='mt-2 p-2'
                onClick={()=>setTypeVision(true)}            
            >
                Добавить тип
            </Button>
            <Button 
                variant={'outline-dark'} className='mt-2 p-2'
                onClick={()=>setBrandVision(true)}
            >
                Добавить бренд
            </Button>
            <Button 
                variant={'outline-dark'} className='mt-2 p-2'
                onClick={()=>setDeviceVision(true)}
            >
                Добавить устройство
            </Button>
            <CreateType show={typeVision} onHide={()=> setTypeVision(false)}/>
            <CreateBrand show={brandVision} onHide={()=>setBrandVision(false) }/>            
            <CreateDevice show={deviceVision} onHide={()=>setDeviceVision(false) }/>
        </Container>
    );
}

export default Admin;
import React from 'react';
import { Col,Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import star from '../Img/star.jpg'
import { DEVICE_ROUTE } from '../utils/consts';

function DeviceItem({device}) {

    const history = useHistory()  
    

    return (
        <Col md={3}  onClick={()=>history.push(DEVICE_ROUTE + '/' + device.id)}>
            <Card style={{width:150,cursor:'pointer',marginTop:20,marginLeft:5}} border='light'> 
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
                <div className='mt-1 d-flex justify-content-between align-items-center'>
                    <div className='text-black-50'>fdsfdsf</div>
                    <div className='d-flex align-items-center'> 
                        <div>{device.rating}</div>
                        <Image  width={18} height={18} src={star}/>
                    </div>                                        
                </div>
                <div>{device.name}</div>
            </Card>
        </Col>
    );
}

export default DeviceItem;
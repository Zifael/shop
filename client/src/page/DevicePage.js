import React, { useEffect, useState } from 'react';
import { Container, Col, Image, Row, Card,Button} from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import { fetchOneDevice } from '../http/deviceApi';
import star from '../Img/star.jpg'



const  DevicePage = (props) => {

    const [device, setDevice] = useState({info: []})
    const {id} = useParams()    
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))       
    },[])
    
    
    return (
        <Container className='mt-3'>
            <Row>
                <Col md={4}>
                    {device.img && <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>}
                </Col>
                <Col md={4}>
                    <Row className='d-flex flex-column align-items-center'>
                        <h2 className='d-flex justify-content-center align-items-center'>{device.name}</h2>
                        <div className='d-flex justify-content-center align-items-center'
                            style={{background: `url(${star}) no-repeat center center`, width:240, height:240,backgroundSize:'cover',fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className='d-flex flex-column align-items-center justify-content-around'
                        style={{width:300,height:300,fontSize:32,border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price}$</h3>
                        <Button variant={'outline-dark'}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className='d-flex flex-column mt-2'>
                <h1>Характеристики:</h1>
                {device.info && device.info.map((description,index)=>
                    <Row key={description.id} style={{background:index % 2 === 0 ? 'lightgray':'transparent',padding:5}}>
                        {description.title}: {description.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
}

export default DevicePage;
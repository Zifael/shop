import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Container, Row , Col} from 'react-bootstrap';
import { Context } from '../index';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import TypeBar from '../components/TypeBar';
import {fetchBrand, fetchDevice, fetchTypes } from '../http/deviceApi';
import Pages from '../components/Pages';

const Shop = observer((props) => {

    const {device} = useContext(Context)

    useEffect(()=>{
        fetchTypes().then(data=> device.setTypes(data))
        fetchBrand().then(data=> device.setBrand(data))
        fetchDevice(null,null,1,2).then(data=>{            
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
            
        })        
    },[])

    useEffect(()=>{
        fetchDevice(device.selectType.id,device.selectBrand.id,device.page,device.limit).then(data=>{            
            device.setDevice(data.rows)
            device.setTotalCount(data.count)
            
        })

    },[device.page,device.selectType,device.selectBrand])

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                        <Pages />
                    <BrandBar />
                    <DeviceList />                    
                </Col>
            </Row>
        </Container>
    );
})

export default Shop;